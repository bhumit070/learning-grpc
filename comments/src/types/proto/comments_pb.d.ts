// package: commentsProto
// file: comments.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Comments extends jspb.Message { 
    clearCommentsList(): void;
    getCommentsList(): Array<string>;
    setCommentsList(value: Array<string>): Comments;
    addComments(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Comments.AsObject;
    static toObject(includeInstance: boolean, msg: Comments): Comments.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Comments, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Comments;
    static deserializeBinaryFromReader(message: Comments, reader: jspb.BinaryReader): Comments;
}

export namespace Comments {
    export type AsObject = {
        commentsList: Array<string>,
    }
}

export class GetCommentRequest extends jspb.Message { 
    getPostid(): string;
    setPostid(value: string): GetCommentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCommentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCommentRequest): GetCommentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCommentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCommentRequest;
    static deserializeBinaryFromReader(message: GetCommentRequest, reader: jspb.BinaryReader): GetCommentRequest;
}

export namespace GetCommentRequest {
    export type AsObject = {
        postid: string,
    }
}
