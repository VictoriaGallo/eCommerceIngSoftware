const { Schema, model } = require("mongoose");

const tareaSchema = Schema({
  titulo: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
});

tareaSchema.method("toJSON", function () {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("tarea", tareaSchema);
