var express = require("express");
var router = express.Router();
var baseController = require("../models/players");

router.post("/add-player", async (req, res) => {
  data = req.body;
  baseController.create(data, (err, playerResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: playerResponse,
    });
  });
});

router.post("/update-player", (req, res) => {
  let data = req.body;
  baseController.findOneAndUpdate(
    { _id: req.body._id },
    data,
    (err, updatedPlayer) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: updatedPlayer,
      });
    }
  );
});

router.post("/find-player", (req, res) => {
  baseController.find({ _id: req.body._id }, (err, playerDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: playerDetails,
    });
  });
});

router.post("/delete-player", (req, res) => {
  baseController.findOneAndRemove(
    { _id: req.body._id },
    (err, deletedPlayer) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: deletedPlayer,
      });
    }
  );
});

router.get("/find-all-players", (req, res) => {
  baseController.find({}, (err, allPlayersDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPlayersDetails,
    });
  });
});

router.get("/get-player-least-balls", (req, res) => {
  baseController
    .find({})
    .sort({ Balls: 1 })
    .limit(1)
    .exec((err, allPlayersDetails) => {
      if (err) {
        return res.send({ response: err });
      }

      res.json({
        response: allPlayersDetails,
      });
    });
});
router.get("/get-player-highest-sixes", (req, res) => {
  baseController
    .find({})
    .sort({ Sixes: -1 })
    .limit(1)
    .exec((err, allPlayersDetails) => {
      if (err) {
        return res.send({ response: err });
      }

      res.json({
        response: allPlayersDetails,
      });
    });
});
router.get("/get-players-by-runs", (req, res) => {
  baseController
    .find({})
    .sort({ Runs: -1 })
    .exec((err, allPlayersDetails) => {
      if (err) {
        return res.send({ response: err });
      }

      res.json({
        response: allPlayersDetails,
      });
    });
});

router.get("/get-players-by-least-runs", (req, res) => {
  baseController
    .find({})
    .sort({ Runs: 1 })
    .limit(1)
    .exec((err, allPlayersDetails) => {
      if (err) {
        return res.send({ response: err });
      }

      res.json({
        response: allPlayersDetails,
      });
    });
});

router.get("/get-player-highest-matches", (req, res) => {
  baseController
    .find({})
    .sort({ Matches: -1 })
    .limit(1)
    .exec((err, allPlayersDetails) => {
      if (err) {
        return res.send({ response: err });
      }

      res.json({
        response: allPlayersDetails,
      });
    });
});

module.exports = router;
