// package: commentsProto
// file: comments.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as comments_pb from "./comments_pb";

interface ICommentsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getComments: ICommentsServiceService_IGetComments;
}

interface ICommentsServiceService_IGetComments extends grpc.MethodDefinition<comments_pb.GetCommentRequest, comments_pb.Comments> {
    path: "/commentsProto.CommentsService/GetComments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<comments_pb.GetCommentRequest>;
    requestDeserialize: grpc.deserialize<comments_pb.GetCommentRequest>;
    responseSerialize: grpc.serialize<comments_pb.Comments>;
    responseDeserialize: grpc.deserialize<comments_pb.Comments>;
}

export const CommentsServiceService: ICommentsServiceService;

export interface ICommentsServiceServer extends grpc.UntypedServiceImplementation {
    getComments: grpc.handleUnaryCall<comments_pb.GetCommentRequest, comments_pb.Comments>;
}

export interface ICommentsServiceClient {
    getComments(request: comments_pb.GetCommentRequest, callback: (error: grpc.ServiceError | null, response: comments_pb.Comments) => void): grpc.ClientUnaryCall;
    getComments(request: comments_pb.GetCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comments_pb.Comments) => void): grpc.ClientUnaryCall;
    getComments(request: comments_pb.GetCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comments_pb.Comments) => void): grpc.ClientUnaryCall;
}

export class CommentsServiceClient extends grpc.Client implements ICommentsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getComments(request: comments_pb.GetCommentRequest, callback: (error: grpc.ServiceError | null, response: comments_pb.Comments) => void): grpc.ClientUnaryCall;
    public getComments(request: comments_pb.GetCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comments_pb.Comments) => void): grpc.ClientUnaryCall;
    public getComments(request: comments_pb.GetCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comments_pb.Comments) => void): grpc.ClientUnaryCall;
}
