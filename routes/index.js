const express = require("express");
const router = express.Router();
const passport = require("passport");
const auth = require("../config/config");
const { check, validationResult } = require("express-validator");

/* GET Google Authentication API. */
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
  //“profile” & “email” in scope array to get user’s profile and email address.
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  function(req, res) {
    console.log(req.user );
    var token = req.user.token; //via serialize/deserialize user
    res.redirect("http://localhost:3000/home?token=" + token);
  }
);

router.get("/auth/logout", function(req, res) {
  req.logout();
  res.redirect("/home");
});

module.exports = router;
