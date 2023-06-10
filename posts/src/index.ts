import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import { grpcCommentsClient, grpcPostsClient, promisify } from './grpc';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

type Posts = {
    id: string;
    title: string;
    content: string;
};

let posts: Array<Posts> = [];

app.get('/posts', async (req, res) => {
    const postId = req.query.postId as string;
    if (postId) {
        const post = posts.find((post) => post.id === postId);
        if (!post) {
            return res.status(404).json({
                message: 'Post not found',
            });
        }
        const comments = await promisify(
            grpcCommentsClient.getComments.bind(grpcCommentsClient),
            {
                postId,
            },
        );
        return res.status(200).json({
            post,
            comments:
                comments &&
                !Array.isArray(comments) &&
                typeof comments === 'object' &&
                'comments' in comments
                    ? comments.comments
                    : [],
        });
    } else {
        return res.status(200).json({
            data: posts,
            total: posts.length,
        });
    }
});
app.post('/posts', async (req, res) => {
    try {
        const _id = (+new Date()).toString();
        const {
            id = _id,
            title = `title-${_id}`,
            content = `content-${_id.repeat(2)}`,
        } = req.body;

        await promisify(grpcPostsClient.createPost.bind(grpcPostsClient), {
            postId: _id,
        });
        const post = { id, title, content };
        posts.push(post);
        return res.status(201).json(post);
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ error: error?.message });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
