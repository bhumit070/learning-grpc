// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var posts_pb = require('./posts_pb.js');

function serialize_postsProto_CreatePostType(arg) {
  if (!(arg instanceof posts_pb.CreatePostType)) {
    throw new Error('Expected argument of type postsProto.CreatePostType');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postsProto_CreatePostType(buffer_arg) {
  return posts_pb.CreatePostType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_postsProto_Response(arg) {
  if (!(arg instanceof posts_pb.Response)) {
    throw new Error('Expected argument of type postsProto.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postsProto_Response(buffer_arg) {
  return posts_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostsServiceService = exports.PostsServiceService = {
  createPost: {
    path: '/postsProto.PostsService/CreatePost',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.CreatePostType,
    responseType: posts_pb.Response,
    requestSerialize: serialize_postsProto_CreatePostType,
    requestDeserialize: deserialize_postsProto_CreatePostType,
    responseSerialize: serialize_postsProto_Response,
    responseDeserialize: deserialize_postsProto_Response,
  },
};

exports.PostsServiceClient = grpc.makeGenericClientConstructor(PostsServiceService);
