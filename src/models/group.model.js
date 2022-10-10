const mongoose = require("mongoose");

const Id = mongoose.Schema.Types.ObjectId;

const GroupSchema = new mongoose.Schema({
  groupName: { type: String /*, required: true */ },
  groupMembers: [{ type: Id, ref: "User" }],
});

const Group = new mongoose.model("Group", GroupSchema);

module.exports = Group;
