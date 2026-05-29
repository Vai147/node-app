import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type : String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            minlength: 1,
            maxlength: 30,
        },
        password: {
            type : String,
            required: true,
            minlength: 6,
            maxlength: 50,
        },
        email: {
            type : String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            minlength: 5,
            maxlength: 50,
        },

        },

        {
            timnestamps: true
        }
    
)


export const User = mongoose.model("User", userSchema);