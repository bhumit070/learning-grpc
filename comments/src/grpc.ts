import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { getComments, newPostAdded } from '.';

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

const server = new grpc.Server();

server.addService(postsProto.PostsService.service, {
    CreatePost: function (call: any, callback: Function) {
        const response = {
            message: 'Post created successfully!',
            success: true,
        };
        newPostAdded(call.request.postId);
        callback(null, response);
    },
});

server.addService(commentsProto.CommentsService.service, {
    GetComments: function (call: any, callback: Function) {
        const { postId } = call.request;
        const comments = getComments(postId);
        console.log(comments);
        callback(null, { comments });
    },
});

export const commentsService = new commentsProto.CommentsService(
    'localhost:5000',
    grpc.credentials.createInsecure(),
);

const GRPC_PORT = process.env.GRPC_PORT || 5001;

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
