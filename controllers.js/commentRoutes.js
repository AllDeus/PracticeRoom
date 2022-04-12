const router = require('express').Router();
const { Post, Comment, User } = require('../models/index');

// get comment by id
router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['displayname'],
                }
            ]
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
})
// create new comment, must be logged in 
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.user.user_id,
            post_id: req.body.postId,
        });
        res.status(200).json(newComment)
    } catch (err) {
        res.status(400).json(err);
    }
})
// delete comment by id
router.delete('/:id', async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!commentData) {
            res.status(400).json({ msg: 'No comment with this id' });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
