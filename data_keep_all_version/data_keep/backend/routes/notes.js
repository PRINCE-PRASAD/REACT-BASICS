const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

// ROUTS 1: create END POINT FOR Fetchall notes: post "/api/notes/fetchallnotes" Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Error Ocurred");
  }
});
// -------------------------------------------------------------------------------
// ROUTS 2: endpoint for adding a note "/api/notes/addnotes" Login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a vaild Title").isLength({ min: 3 }),
    body("description", "Discription must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      //if there are errors, retun bad request and error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });

      const savedNote = await note.save();

      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Error Ocurred");
    }
  }
);
// ----------------------------------------------------------------------------------
// route 3 Update a excesting note using "localhost:5000/api/notes/updatenote/:id". Login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    //create a newNote object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // find a note to be upadted and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Error Ocurred");
  }
});
// ----------------------------------------------------------------------------------
// route 4 Delete a excesting note using "localhost:5000/api/notes/deletenote/id: ". Login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    // find a note to be delete and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    // allow deleletion if user owns this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Sucess: "Note has been deleted sucessfully", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Error Ocurred");
  }
});
module.exports = router;
