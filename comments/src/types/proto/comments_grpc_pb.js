// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var comments_pb = require('./comments_pb.js');

function serialize_commentsProto_Comments(arg) {
  if (!(arg instanceof comments_pb.Comments)) {
    throw new Error('Expected argument of type commentsProto.Comments');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_commentsProto_Comments(buffer_arg) {
  return comments_pb.Comments.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_commentsProto_GetCommentRequest(arg) {
  if (!(arg instanceof comments_pb.GetCommentRequest)) {
    throw new Error('Expected argument of type commentsProto.GetCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_commentsProto_GetCommentRequest(buffer_arg) {
  return comments_pb.GetCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var CommentsServiceService = exports.CommentsServiceService = {
  getComments: {
    path: '/commentsProto.CommentsService/GetComments',
    requestStream: false,
    responseStream: false,
    requestType: comments_pb.GetCommentRequest,
    responseType: comments_pb.Comments,
    requestSerialize: serialize_commentsProto_GetCommentRequest,
    requestDeserialize: deserialize_commentsProto_GetCommentRequest,
    responseSerialize: serialize_commentsProto_Comments,
    responseDeserialize: deserialize_commentsProto_Comments,
  },
};

exports.CommentsServiceClient = grpc.makeGenericClientConstructor(CommentsServiceService);
