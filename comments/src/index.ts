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

const PORT = process.env.PORT || 3001;

app.get('/comments', (req, res) => {
    return res.status(200).json({
        data: postComments,
        total: Object.keys(postComments).length,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
