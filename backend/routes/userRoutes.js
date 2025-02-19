const express = require("express");
const router = express.Router();
const {
  authUser,
  registerUser,
  getUserProfile,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);
router.route("/register").post(registerUser);

module.exports = router;