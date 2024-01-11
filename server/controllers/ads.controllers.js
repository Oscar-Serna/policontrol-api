import { connection } from "../databaseConfig.js";

export const GetAds = async (req, res) => {
  try {
    const tokenGroup = req.query.token;

    const [rows] = await connection.query(
      "SELECT titleAd, descriptionAd FROM adsGroup WHERE tokenGroup = ?;",
      [tokenGroup]
    );

    console.log(rows);

    res.status(200).json(rows);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};

export const CreateAd = async (req, res) => {
  try {
    const { titleAd, descriptionAd } = req.body;

    const [rows] = await connection.query(
      "INSERT INTO adsGroup (titleAd, descriptionAd) VALUES(? ,?);",
      [titleAd, descriptionAd]
    );

    console.log(rows);

    res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const DeleteAd = async (req, res) => {
  try {
    const tokenGroup = req.query.token;

    const [rows] = await connection.query(
      "DELETE FROM adsGroup WHERE tokenGroup = ?",
      [tokenGroup]
    );

    console.log(rows);

    res.status(200).json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
