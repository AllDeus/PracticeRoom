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

//     res.render('practiceRoom', {
//       ...post,
//       logged_in: req.session.logged_in
//     });
// Did this res.json for testing, but when its done we want to get rid of it and catch the above.
res.json(post);
   } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', function(req, res, next) {
  res.send('login');
});


module.exports = router;
