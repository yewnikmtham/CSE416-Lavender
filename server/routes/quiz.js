const express = require("express");
const router = express.Router();
const { Quizzes } = require ("../models");


router.post("/", (req, res) =>{
    res.send("Hello quizzes");
});

route.delete('/', (req, res) => {
    res.send('Deletes Quiz');
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
