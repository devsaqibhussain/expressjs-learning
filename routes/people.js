const router = require("express").Router();

const {
  getPeople,
  postPeople,
  peoplePostman,
  putPeople,
  deletePeople,
} = require("../controllers/people");

router.route("/").get(getPeople).post(postPeople);

router.route("/postman").post(peoplePostman);

router.route("/:id").put(putPeople).delete(deletePeople);

module.exports = router;
