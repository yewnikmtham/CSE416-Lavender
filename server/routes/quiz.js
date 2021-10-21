const express = require("express");
const router = express.Router();
const { Quizzes } = require ("../models");


router.post("/", async (req, res) =>{
    console.log('what');
    res.send("Hello quizzes");
    const quiz_fields = req.body;
    const quiz = await Quizzes.create(quiz_fields)
        .catch( err => {
            console.log('POST Quiz: ', err);
        });
    res.setStatus(201);
    res.send(quiz);
});

router.delete('/', (req, res) => {
    res.send('Deletes Quiz');
    const quiz_id = req.body.quiz_id;
});

router.get('/:quiz_id', (req, res) => {
    res.send(`Gets Quiz by Id: ${req.params.quiz_id}`);
});

router.post('/:quiz_id/results', (req, res) => {
    res.send(`Posts results of quiz by Id: ${req.params.quiz_id}`);
});

router.put('/:quiz_id/creator', (req, res) => {
    res.send(`Puts updated quiz by Id: ${req.params.quiz_id}`);
});

module.exports = router;
