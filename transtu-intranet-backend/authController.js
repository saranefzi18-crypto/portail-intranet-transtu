const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("./index");

exports.login = async (req, res) => {
  const user = await User.findOne({ where: { username: req.body.username } });
  if (!user) return res.status(401).json({ message: "login invalide" });

  const ok = bcrypt.compareSync(req.body.password, user.password);
  if (!ok) return res.status(401).json({ message: "mot de passe invalide" });

  const token = jwt.sign(
  { 
    id: user.id,
    role: user.role
  },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
  );
  res.json({ token });
}

exports.create = async (req, res) => {
  const hashPassword = bcrypt.hashSync(req.body.password, 10);

  const user = await User.create({
    username: req.body.username,
    password: hashPassword,
    role: req.body.role
  });
  res.status(201).json({message: "Utilisateur créé avec succès", userId: user.id});
}
