const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// base de datos simulada
let usuarios = [];

// REGISTRO
app.post("/registro", (req, res) => {
  const { usuario, password } = req.body;

  if (!usuario || !password) {
    return res.status(400).json({ mensaje: "Datos incompletos" });
  }

  usuarios.push({ usuario, password });

  res.json({ mensaje: "Registro exitoso ✔" });
});

// LOGIN
app.post("/login", (req, res) => {
  const { usuario, password } = req.body;

  const user = usuarios.find(
    (u) => u.usuario === usuario && u.password === password
  );

  if (user) {
    res.json({ mensaje: "Autenticación satisfactoria ✔" });
  } else {
    res.status(401).json({ mensaje: "Error en la autenticación ❌" });
  }
});

// servidor
app.listen(3001, () => {
  console.log("API corriendo en http://localhost:3001");
});
