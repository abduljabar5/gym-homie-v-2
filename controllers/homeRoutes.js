const router = require('express').Router();
const { User } = require('../models');
const { Exercise } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Exercise }],
          });
      
          const user = userData.get({ plain: true });
          console.log(user);
          res.render('profile', {
            ...user,
            logged_in: true
          });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/exerciseform', withAuth, async (req, res) => {
    try {
        res.render('exerciseform');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/workouts', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Exercise }],
        });
    
        const user = userData.get({ plain: true });
        console.log(user);
        res.render('workouts', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
})
router.get('/workout/:id', async (req, res) => {
    try {
      const workoutData = await Exercise.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['email'],
          },
        ],
      });
  console.log(User);
      const workout =workoutData.get({ plain: true });
  
      res.render('workoutid', {
        ...workout,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  router.get('/intenseworkout', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Exercise }],
        });
    
        const user = userData.get({ plain: true });
        console.log(user);
        res.render('intenseworkout', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
})
router.get('/sixdayplan', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Exercise }],
        });
    
        const user = userData.get({ plain: true });
        console.log(user);
        res.render('sixdayplan', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;
