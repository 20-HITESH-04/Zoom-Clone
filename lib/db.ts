import { Mongoose } from "mongoose";
import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL as string;

if (!MONGODB_URL) {
    throw new Error("Mongodb url is not present");
}

interface MongooseConn {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = {
        conn: null,
        promise: null
    };
}

export const connect = async () => {
    // If the connection is already established, return it directly

    console.log("Connect");
    if (cached.conn && mongoose.connection.readyState === 1) {
        console.log("Already Connected")
        return cached.conn;
    }

    console.log("Trying to connect")

    // If there's no promise, initialize a new connection
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URL, {
            dbName: 'zoom_clone',
            bufferCommands: false,
            connectTimeoutMS: 30000
        });

        console.log("inside if")
    }

    // Await the connection promise and cache the connection
    cached.conn = await cached.promise;

    console.log("Connect ho gya kya??")

    // Check if the connection was successful
    if (mongoose.connection.readyState === 1) {
        console.log("Database connected successfully");
    } else {
        console.error("Database connection failed");
    }

    return cached.conn;
};
