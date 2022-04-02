const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.send('home')
  //   // Get all posts and JOIN with user data
  //   const postData = await Post.findAll({
  //     include: [
  //       {
  //         model: User,
  //         attributes: ['displayName'],
  //       },
  //     ],
  //   });

  //   // Serialize data so the template can read it
  //   const posts = postData.map((post) => post.get({ plain: true }));

  //   // Pass serialized data and session flag into template
  //   res.render('homepage', { 
  //     posts, 
  //     logged_in: req.session.logged_in 
  //   });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('posts', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', function(req, res, next) {
  res.send('login');
});


module.exports = router;
