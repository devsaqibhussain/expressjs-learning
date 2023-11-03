const { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const postPeople = (req, res) => {
  console.log(req);
  const { name } = req.body;
  if (!name) {
    res.status(401).send("Please add a data");
  }
  res.status(201).json({ success: true, person: name });
};

const peoplePostman = (req, res) => {
  const { name } = req.body;
  res
    .status(201)
    .json({ data: [...people, { id: people.length + 1, name: name }] });
};

const putPeople = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    res.status(404).send(`The data base doesnt have any entry with id:${id}`);
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: "true", data: newPeople });
};

const deletePeople = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    res
      .status(404)
      .send(`The data base doesnt have any entry with id:${req.params.id}`);
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  res.status(200).json({ succes: true, data: newPeople });
};


module.exports = {
    getPeople,
    postPeople,
    peoplePostman,
    putPeople,
    deletePeople,

}