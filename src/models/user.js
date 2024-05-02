import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        // Ensures uniqueness of email
        // lowercase: true, // Converts email to lowercase before saving
        // trim: true, // Removes whitespace from the beginning and end of email
        // validate: {
        //     validator: function(value) {
        //         // Regular expression for email validation
        //         return /\S+@\S+\.\S+/.test(value);
        //     },
        //     message: props => `${props.value} is not a valid email`
        // }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        // minlength: [6, "Password must be at least 6 characters long"]
    },
    about: {
        type: String,
        trim: true // Removes whitespace from the beginning and end of about
    }
});

// Export the model
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
