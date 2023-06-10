import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

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

export const grpcPostsClient = new postsProto.PostsService(
    'localhost:5001',
    grpc.credentials.createInsecure(),
);

const server = new grpc.Server();

const GRPC_PORT = process.env.GRPC_PORT || 5000;
server.bindAsync(
    `localhost:${GRPC_PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
        if (err) {
            process.exit(1);
        }
        server.start();
        console.log(`gRPC server running at http://localhost:${GRPC_PORT}`);
    },
);

export function promisify(fn: Function, args: unknown) {
    return new Promise((resolve, reject) => {
        console.log('promisify', args);
        fn(args, (err: Error, data: unknown) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
