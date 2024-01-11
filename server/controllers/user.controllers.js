import { connection } from "../databaseConfig.js";
import { directoryPath } from "../serverConfig.js";

export const GetAllUser = async (req, res) => {
  try {
    const tokenUser = req.query.token;
    const [ rows ] = await connection.query("SELECT userId, username, typeUser FROM users WHERE tokenUser = ?", [tokenUser]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const GetUserImage = (req, res) => {
  try {
    const tokenUser = req.query.token;
    const imagePath = `${directoryPath}/images/${tokenUser}.jpg`;
    res.sendFile(imagePath)
  } catch (error) {
    res.status(404).json("La imagen solicitada no existe")
  }
}