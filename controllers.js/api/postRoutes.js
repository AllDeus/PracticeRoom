const router = require('express').Router();
const { Post, User } = require('../../models/index');

// create post route
router.post('/', async (req, res)=> {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    }catch(err){
        res.status(400).json(err);
    }
});

// GET route to update post
router.get('/update/:id', async(req, res)=> {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['name', 'id'],
            }
        ],
        });
        const post = postData.get({plain: true});
        res.render('update', {
            ...post,
            logged_in: req.session.logged_in
        });
    }catch(err){
        res.status(500).json(err)
    }
})

// update post PUT route
router.put('/:id', async (req, res) => {
    try {
        const updatePost = await Post.update({
            ...req.body,
            user_id: req.session.user_id,
        }, {
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(updatePost);
    }catch(err){
        res.status(400).json(err)
    }
});

// delete post by id
router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if(!postData){
            res.status(404).json({msg: 'No post found with this id'});
            return;
        }
        res.status(200).json(postData);
    }catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;