import mongoose from "mongoose";


//const uri = 'mongodb+srv://user:testing1234@cluster0.8p8dbg2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const uri = 'mongodb+srv://food-ordering:food-ordering@cluster0.95blk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

export const connectDB = async () => {

    try {
        await mongoose.connect(uri)
        console.log('DB connected')
    }
    catch(error){
        console.error(error)
    }
}