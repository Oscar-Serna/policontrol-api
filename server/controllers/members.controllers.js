import { connection } from "../databaseConfig.js";

export const GetMembers = async (req, res) => {
  try {
    const groupToken = req.query.token;

    const [rows] = await connection.query(
      `SELECT nameMember, surnameMember, ageMember, assistants, isChecked, groupMember, totalActivities, dataQrCode FROM ${groupToken};`
    );

    res.json(rows);
  } catch (error) {
    console.log("Error en getMembers - members.controllers.js", error);
    res.status(500).json({ message: error.message });
  }
};

export const CreateMember = async (req, res) => {
  try {
    const { nameMember, surnameMember, ageMember, groupToken, dataQrCode } =
      req.body;

    const [[{ groupId }]] = await connection.query(
      "SELECT groupId FROM groups_table WHERE ? = groupToken;",
      [groupToken]
    );

    const [countId] = await connection.query(
      `SELECT COUNT(*) FROM ${groupToken};`
    );

    const [rows] = await connection.query(
      `INSERT INTO ${groupToken} ( memberId, nameMember, surnameMember, ageMember, assistants, ticketMember, totalActivities, groupMember, dataQrCode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [parseInt(countId[0]["COUNT(*)"]), nameMember, surnameMember, ageMember, 0, "SIN TICKET", "[]", groupId, dataQrCode]
    );

    //OBTENEMOS LA CANTIDAD DE INTEGRANTES
    const [count] = await connection.query(
      `SELECT COUNT(*) FROM ${groupToken};`
    );

    //ACTUALIZAMOS EL CAMPO EN EL REGISTRO CORRESPONDIENTE
    const [updateMembersNum] = await connection.query(
      `UPDATE groups_table SET persons = ? WHERE groupToken = ?;`,
      [count[0]["COUNT(*)"], groupToken]
    );

    console.log(updateMembersNum);

    res.json(rows);
  } catch (error) {
    console.log("Error en createMember - members.controllers.js", error);
    res.status(500).json({ message: error.message });
  }
};

export const DeleteMember = async (req, res) => {
  try {
    const groupToken = req.query.groupToken;
    const dataQrCode = req.query.dataQrCode;

    const [rows] = await connection.query(
      `DELETE FROM ${groupToken} WHERE dataQrCode = ?`,
      [dataQrCode]
    );

    //OBTENEMOS LA CANTIDAD DE INTEGRANTES
    const [count] = await connection.query(
      `SELECT COUNT(*) FROM ${groupToken};`
    );

    //ACTUALIZAMOS EL CAMPO EN EL REGISTRO CORRESPONDIENTE
    const [updateMembersNum] = await connection.query(
      `UPDATE groups_table SET persons = ? WHERE groupToken = ?;`,
      [parseInt(count[0]["COUNT(*)"]), groupToken]
    );

    console.log(updateMembersNum);

    console.log(rows);

    res.json(rows);
  } catch (error) {
    console.log("Error en deleteMember - members.controllers.js");
    req.status(500).json({ message: error.message });
  }
};
