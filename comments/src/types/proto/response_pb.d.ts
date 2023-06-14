// package: com.response
// file: response.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Response extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): Response;
    getSuccess(): boolean;
    setSuccess(value: boolean): Response;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
    export type AsObject = {
        message: string,
        success: boolean,
    }
}
