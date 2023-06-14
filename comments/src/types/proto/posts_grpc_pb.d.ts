// package: postsProto
// file: posts.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as posts_pb from "./posts_pb";

interface IPostsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPost: IPostsServiceService_ICreatePost;
}

interface IPostsServiceService_ICreatePost extends grpc.MethodDefinition<posts_pb.CreatePostType, posts_pb.Response> {
    path: "/postsProto.PostsService/CreatePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.CreatePostType>;
    requestDeserialize: grpc.deserialize<posts_pb.CreatePostType>;
    responseSerialize: grpc.serialize<posts_pb.Response>;
    responseDeserialize: grpc.deserialize<posts_pb.Response>;
}

export const PostsServiceService: IPostsServiceService;

export interface IPostsServiceServer extends grpc.UntypedServiceImplementation {
    createPost: grpc.handleUnaryCall<posts_pb.CreatePostType, posts_pb.Response>;
}

export interface IPostsServiceClient {
    createPost(request: posts_pb.CreatePostType, callback: (error: grpc.ServiceError | null, response: posts_pb.Response) => void): grpc.ClientUnaryCall;
    createPost(request: posts_pb.CreatePostType, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.Response) => void): grpc.ClientUnaryCall;
    createPost(request: posts_pb.CreatePostType, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.Response) => void): grpc.ClientUnaryCall;
}

export class PostsServiceClient extends grpc.Client implements IPostsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createPost(request: posts_pb.CreatePostType, callback: (error: grpc.ServiceError | null, response: posts_pb.Response) => void): grpc.ClientUnaryCall;
    public createPost(request: posts_pb.CreatePostType, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.Response) => void): grpc.ClientUnaryCall;
    public createPost(request: posts_pb.CreatePostType, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.Response) => void): grpc.ClientUnaryCall;
}
