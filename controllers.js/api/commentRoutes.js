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
  console.log(commentData);
  console.log(comment);
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
