import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import console from 'console';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

const protoOptions = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const protoFiles = ['comments.proto', 'posts.proto'].map((protoFile) => {
    return __dirname + `/proto/${protoFile}`;
});

const packageDefinitions = protoLoader.loadSync(protoFiles, protoOptions);
const { commentsProto, postsProto } = grpc.loadPackageDefinition(
    packageDefinitions,
) as any;

const commentsService = new commentsProto.CommentsService(
    'localhost:5000',
    grpc.credentials.createInsecure(),
);

const server = new grpc.Server();

type Comment = {
    postId: number;
    comments: Array<string>;
};

let postComments: Array<Comment> = [];

server.addService(postsProto.PostsService.service, {
    CreatePost: function (call: any, callback: Function) {
        console.log(call.request);
        const response = {
            message: 'Post created successfully!',
            success: true,
        };
        postComments.push({
            postId: call.request.postId,
            comments: [],
        });
        callback(null, response);
    },
});

const PORT = process.env.PORT || 3001;
const GRPC_PORT = process.env.GRPC_PORT || 5001;

app.get('/comments', (req, res) => {
    return res.status(200).json({
        data: postComments,
        total: postComments.length,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

server.bindAsync(
    `localhost:${GRPC_PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
        if (err) {
            process.exit(1);
        }
        server.start();
        console.log(`gRPC server running at http://localhost:${port}`);
    },
);
