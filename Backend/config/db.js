import mongoose from "mongoose";

export const connectDB = async () => {
    //connecting to mongodb
    
    try {
        await mongoose.connect('mongodb+srv://siddiqueswe:14109ak47@cluster0.ruinyax.mongodb.net/food-del', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
    }
};