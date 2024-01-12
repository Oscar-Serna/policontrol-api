import { connection } from "../databaseConfig.js";

export const GetActivites = async (req, res) => {
  try {
    const tokenGroup = req.query.token;

    const [rows] = await connection.query(
      "SELECT * FROM activities WHERE tokenGroup = ?;",
      [tokenGroup]
    );

    // console.log(rows);

    res.status(500).json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const CreateActivity = async (req, res) => {
  try {
    const {
      titleActivity,
      subtitleActivity,
      descriptionActivity,
      forMembers,
      tokenGroup,
      limitDate,
    } = req.body;

    const [rows] = await connection.query(
      "INSERT INTO activites ( titleActivity, subtitleActivity, descriptionActivity, forMembers, tokenGroup, limitDate ) VALUES (?, ?, ?, ?, ?, ?);",
      [titleActivity, subtitleActivity, descriptionActivity, forMembers, tokenGroup, limitDate]
    );

    // console.log(rows);

    res.status(200).json(rows);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const DeleteActivity = async (req, res) => {
  try {
    const activityId = req.query.id;

    const [ rows ] = await connection.query(
      "DELETE FROM activities WHERE activityId = ?",
      [activityId]
    )

    // console.log(rows);

    res.status(200).json(rows);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
