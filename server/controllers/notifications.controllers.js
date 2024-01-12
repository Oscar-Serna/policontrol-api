import { connection } from "../databaseConfig.js";


export const GetNotifications = async (req, res) => {
  try {

    const tokenUser = req.query.token;

    const [ rows ] = await connection.query(
      "SELECT * from notifications WHERE forUser = ?;",
      [tokenUser]
    );

    // console.log(rows);

    res.status(200).json(rows);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message : error.message });
  }
}

export const CreateNotification = async (req, res) => {
  try {

    const { title, subtitle, message, forUser, hour } = req.body;

    const [ rows ] = await connection.query(
      "INSERT INTO notifications ( title, subtitle, message, forUser, hour ) VALUES (?, ?, ?, ?, ?);",
      [title, subtitle, message, forUser, hour]
    )

    // console.log(rows);

    res.status(200).json(rows);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message : error.message });
  }
}

export const DeleteNotification = async (req, res) => {
  try {

    const notificationId = req.query.id;

    const [ rows ] = await connection.query(
      "DELETE FROM notifications WHERE notificationId = ?;",
      [notificationId]
    )

    // console.log(rows);

    res.status(200).json(rows);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message : error.message });
  }
}