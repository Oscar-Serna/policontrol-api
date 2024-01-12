import { connection } from "../databaseConfig.js";

export const GetUserGroups = async (req, res) => {
  try {
    const tokenUser = req.query.token;
    const [rows] = await connection.query(
      "SELECT nameGroup, nameSection, nameExtraSection, groupToken, persons, groupId FROM groups_table JOIN users ON users.tokenUser = ? AND userId = createdBy;",
      [tokenUser]
    );

    console.log(rows);

    res.status(200).json(rows);
  } catch (error) {
    console.log("Error en getUserGroups - groups_table.controllers.js:", error);
    res.status(500).json({ message: error.message });
  }
};

export const CreateGroup = async (req, res) => {
  try {
    const { nameGroup, nameSection, nameExtraSection, userId, groupToken } =
      req.body;

    const [rows] = await connection.query(
      "INSERT INTO groups_table (nameGroup, nameSection, nameExtraSection, createdBy, groupToken) VALUES (?, ?, ?, ?, ?)",
      [nameGroup, nameSection, nameExtraSection, userId, groupToken]
    );

    const createTableQuery = `CREATE TABLE ${groupToken} (
      memberId INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
      nameMember TEXT NOT NULL,
      surnameMember TEXT NOT NULL,
      ageMember INTEGER NOT NULL,
      ticketMember TEXT NOT NULL DEFAULT "SIN TICKET",
      groupMember INTEGER NOT NULL,
      assistants INTEGER NOT NULL DEFAULT 0,
      isChecked BOOLEAN NOT NULL DEFAULT 0,
      totalActivities TEXT NOT NULL DEFAULT "[]",
      dataQrCode TEXT
    );`;

    await connection.query(createTableQuery);

    res.status(200).json(rows);
  } catch (error) {
    console.error("Error en createGroup en groups_table.controllers.js", error);
    res.status(500).json({ message: error.message });
  }
};

export const DeleteGroup = async (req, res) => {
  try {
    const groupToken = req.query.token;

    const [rows] = await connection.query(
      "DELETE FROM groups_table WHERE groupToken = ?",
      [groupToken]
    );

    await connection.query(`DROP TABLE ${groupToken};`);

    res.status(200).json(rows);
  } catch (error) {
    console.log("Error en deleteGroup - groups_table.controllers.js:", error);
    res.status(500).json({ message: error.message });
  }
};
