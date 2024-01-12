import { connection } from "../databaseConfig.js";

export async function GetUserLogged(req, res) {
  const username = decodeURIComponent(req.query.username);
  const password = decodeURIComponent(req.query.password);

  try {


    const [ rows ] = await connection.query("SELECT tokenUser FROM users WHERE (username = ? OR contact = ?) AND password = ?", [username, username, password]);

    console.log(rows);

    res.json(rows);
  } catch (error) {
    console.log("Error en GetUserLogged - loginUser.controllers.js", error);
    return res.status(500).json({ message: error.message });
  }
}


export async function CreateNewUser(req, res) {
  const { username, typeUser, password, contact, reminderKey, tokenUser } =
  req.body;

  let user = null;

  try {
    user = await UserExists(username, contact);
  } catch (error) {
    console.log("ERROR EN USEREXISTS DENTRO DE CreateNewUser", error)
  }

  // console.log("Largo de ARR USER", user.length);

  if(user.length != 0) {
    return res.json(false);
  }

  try {
    const [rows] = await connection.query(
      "INSERT INTO users ( userId, username, typeUser, password, contact, reminderKey, tokenUser ) VALUES ( ?, ?, ?, ?, ?, ?)",
      [Math.round(Math.random() * 1000), ,username, typeUser, password, contact, reminderKey, tokenUser]
      );

      // console.log(rows);

      return res.json(rows);
  } catch (error) {
    console.log(error)
    console.log("Error en CreateNewUser - loginUser.controllers.js")
    return res.status(500).json({ message: error.message });
  }
}

async function UserExists (username, contact) {
  try {
    const [ rows ] = await connection.query("SELECT * FROM users WHERE username = ? OR contact = ?", [username, contact]);

    // console.log(rows);

    return rows;
  } catch (error) {
    console.log("Error en UserExists - loginUser.controllers.js" + error);
  }
}