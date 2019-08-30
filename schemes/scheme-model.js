const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps
  // add,
  // update,
  // remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  return db
    .select(
      "steps.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .from("schemes")
    .innerJoin("steps", "schemes.id", "steps.scheme_id")
    .where("schemes.id", id);
}
