const { Application} = require("./index");
const { Op } = require("sequelize");

exports.getAllAct =async (req, res) => {
  res.json(await Application.findAll({ where: { status: "ACTIVE" } }));
};

exports.getAll =async (req, res) => {
  res.json(await Application.findAll({ where: { status: {[Op.in]: ["ACTIVE", "INACTIVE"]} } }));
};

exports.getOne = async (req, res) => {
  res.json(await Application.findByPk(req.params.id));
};

exports.create = async (req, res) => {
  res.json(await Application.create(req.body));
};

exports.update = async (req, res) => {
  await Application.update(req.body, { where: { id: req.params.id } });
  res.status(200).json({ message: "Application updated successfully" });
};

exports.changeStatus = async (req, res) => {
  await Application.update(
    { status: req.body.status },
    { where: { id: req.params.id } }
  );
  res.status(200).json({ message : " Statut changed "});
};
