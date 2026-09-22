const { Document } = require("./index");

exports.getDocsByApp = async (req, res) => {
  const docs = await Document.findAll({
    where: { ApplicationId: req.params.id } 
  });
  res.json(docs);
};

exports.create = async (req, res) => {
  res.json(await Document.create({
    title : req.body.title,
    type : req.body.type,
    url : req.body.url,
    ApplicationId: req.params.id,
  }));
};

exports.update = async (req, res) => {
  await Document.update(req.body, { where: { id: req.params.docId } });
  res.status(200).json({message : "Document updated succesfuly !"})        
};

exports.remove = async (req, res) => {
  await Document.destroy({ where: { id: req.params.docId } });
  res.status(200).json({message :"Document romoved "});
};

