import { Mongoose } from "mongoose";
import mongoose from "mongoose";
import { cache } from "react";

const MONGODB_URL = process.env.MONGODB_URL as string;

if (!MONGODB_URL) {
    throw new Error("Mongodb url is not present")
}

interface MongooseConn {
    conn: Mongoose | null ,
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose ;

if(!cached) {
    cached = (global as any).mongoose = {
        conn: null ,
        promise: null
    }
}

export const connect = async () => {
    if(!cached.conn) return cached.conn ;

    cached.promise = cached.promise ||
    mongoose.connect(MONGODB_URL,{
        dbName: 'zoom_clone',
        bufferCommands: false,
        connectTimeoutMS: 30000
    })

    cached.conn = await cached.promise ;

    return cached.conn ;
}