const express = require('express');
const router = express.Router();
const Lift = require('../models/workout.js')


router.get('/', (req, res) => {
    Lift.find({}, (error, allworkouts) => {
        res.render(
            'index.ejs',
            {
                lift:allworkouts
            }
        );
    })
});
router.get('/new/edit', (req, res) => {
    Lift.findById(req.params.id, (error, foundWorkout) => {
        res.render(
            'edit.ejs',
            {
                fruit: foundWorkout
            }
        )
    })
});

router.get('/new', (req, res) => {
    res.render('new.ejs')
});
router.post('/', (req, res) => {

    Lift.create(req.body, (error, createdLift) => {
        res.redirect('/edit');
    })
});

router.get('/arms', (req, res) => {
    Lift.findById(req.params.id, (error, foundWorkout) => {
        res.render(
            'show.ejs',
            {
                lift:foundWorkout
            }
        )
    })
});
router.get('/legs', (req, res) => {
    Lift.findById(req.params.id, (error, foundWorkout) => {
        res.render(
            'show2.ejs',
            {
                lift:foundWorkout
            }
        )
    })
});
router.get('/chest', (req, res) => {
    Lift.findById(req.params.id, (error, foundWorkout) => {
        res.render(
            'show3.ejs',
            {
                lift:foundWorkout
            }
        )
    })
});
router.get('/back', (req, res) => {
    Lift.findById(req.params.id, (error, foundWorkout) => {
        res.render(
            'show4.ejs',
            {
                lift:foundWorkout
            }
        )
    })
});
router.get('/shoulders', (req, res) => {
    Lift.findById(req.params.id, (error, foundWorkout) => {
        res.render(
            'show5.ejs',
            {
                lift:foundWorkout
            }
        )
    })
});




module.exports = router;
