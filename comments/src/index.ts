import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import './grpc';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

type Comment = Record<string, Array<string>>;

let postComments: Comment = {};

export function newPostAdded(postId: string) {
    postComments[postId] = [];
}

export function getComments(postId: string) {
    return postComments[postId] || [];
}

const PORT = process.env.PORT || 3001;

app.get('/comments', (req, res) => {
    return res.status(200).json({
        data: postComments,
        total: Object.keys(postComments).length,
    });
});

app.post('/comments', (req, res) => {
    const { postId, comment } = req.body;
    if (!postId || !comment) {
        return res.status(400).json({
            message: 'Please provide a valid postId and comment',
        });
    }
    if (!postComments[postId]) {
        return res.status(404).json({
            error: 'Post not found',
        });
    }
    postComments[postId].push(comment);
    return res.status(201).json({
        message: 'Comment added successfully!',
        success: true,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
