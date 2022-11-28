const express = require("express");

const {
  getGroups,
  getSingleGroup,
  getSingleMember,
  addGroup,
  updateGroup,
  deleteGroup,
} = require("../controllers/groups.controllers");

const router = express.Router();

router.get("/get-groups", getGroups);
router.get("/get-group/:id", getSingleGroup);
router.get("/get-groupmember/:id/:mid", getSingleMember);
router.post("/add-group", addGroup);
router.patch("/update-group/:id", updateGroup);
router.delete("/delete-group/:id", deleteGroup);

module.exports = router;
