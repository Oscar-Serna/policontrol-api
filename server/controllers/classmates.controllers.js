import { connection } from "../databaseConfig.js";

export const GetClassmateRegisted = async (req, res) => {
  try {
    
    const dataQrCode = req.query.dataQrCode;

    const [rows] = await connection.query(
      "SELECT * FROM alumnos WHERE boleta = ?",
      [dataQrCode]
    )

    console.log("DataQrCode: ", dataQrCode);

    console.log(rows);

    res.status(200).json(rows);

  } catch (error) {
    console.log("ERROR EN classmates.controllers.js: ", error);
    res.status(500).json({ message : error.message });
  }
}