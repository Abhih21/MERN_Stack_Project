import mongoose from "mongoose"



const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.qtnssxd.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connectiong with the database', error);

    }
}


export default Connection;