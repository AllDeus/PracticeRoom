const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      cssFile: '/css/home.css'
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

  // Get all posts and JOIN with user data
  router.get('/posts', async (req, res) => {
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['displayName'],
          },
        ],
      });

      // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));

      // Pass serialized data and session flag into template
      res.render('practiceRoom', { 
        cssFile: '/css/home.css',
        posts, 
        logged_in: req.session.logged_in

      })
    })


// Finds a blog post by its id so it can be rendered on a separate page if clicked on by user.
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['displayName'],
        },
      ],
    });

    const post = postData.get({ plain: true });

        res.render('practiceRoom', {
          ...post,
          logged_in: req.session.logged_in
        });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/auth/login', async (req, res) => {
  try {
    res.render('login', {
      cssFile: '/css/jass.css'
    })

  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/auth/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }
//   cssFile: '/css/home.css'
//   res.render('login');
// });


module.exports = router;
