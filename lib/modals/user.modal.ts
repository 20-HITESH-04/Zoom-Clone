import { model, models,Schema } from 'mongoose' ;

const UserSchema = new Schema({
    clerkId:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    username:{
        type: String,
        unique: true,
    },
    password:{
        type: String,
        unique: true,
        required: true,
    }
}) ;

const User = models?.User || model("User",UserSchema) ;

export default User ;