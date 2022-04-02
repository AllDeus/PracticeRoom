const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');


// Gets all comments
router.get('/', withAuth, async (req, res) => {
    try {
    const commentData = await Comment.findAll({
        include: [
            {
                model: User,
                attributes: ['displayName'],
            },
        ],
    });
    // serialization so template can read it
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.render('homepage', {
        comments,
        logged_in: req.session.logged_in 
    });

} catch (err) {
    res.status(500).json(err);
}
});


// Get comment with specified ID. 
router.get('/comment/:id', async (req, res) => {
    try {
      const commentData = await Comment.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['displayName'],
          },
        ],
      });
  
      const comment = commentData.get({ plain: true });
  
      res.render('practiceRoom', {
        ...comment,
        logged_in: req.session.logged_in
      });
     } catch (err) {
      res.status(500).json(err);
    }
  });


//   Posts a comment
router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });



// Deletes a comment with specified ID.
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;


































const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
    Comment.findAll({})
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});


router.get('/', async (req, res) => {
    try {
      // Get all posts and JOIN with user data
      const postData = await Comment.findAll({
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
      res.render('homepage', { 
        posts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Posts a blogpost and assigns it to the user's id.
router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.get('/:id', (req, res) => {
    Comment.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// router.post('/', withAuth, (req, res) => {
//     if (req.session) {
//         Comment.create({
//                 comment_text: req.body.comment_text,
//                 post_id: req.body.post_id,
//                 user_id: req.session.user_id,
//             })
//             .then(dbCommentData => res.json(dbCommentData))
//             .catch(err => {
//                 console.log(err);
//                 res.status(400).json(err);
//             })
//     }
// });

// router.put('/:id', withAuth, (req, res) => {
//     Comment.update({
//         comment_text: req.body.comment_text
//     }, {
//         where: {
//             id: req.params.id
//         }
//     }).then(dbCommentData => {
//         if (!dbCommentData) {
//             res.status(404).json({ message: 'No comment found with this id' });
//             return;
//         }
//         res.json(dbCommentData);
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.delete('/:id', withAuth, (req, res) => {
//     Comment.destroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(dbCommentData => {
//         if (!dbCommentData) {
//             res.status(404).json({ message: 'No comment found with this id' });
//             return;
//         }
//         res.json(dbCommentData);
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });
// module.exports = router;