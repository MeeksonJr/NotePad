import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://dmohamed1504:Jackiy11@notepad.d1nuhmu.mongodb.net/NotePad?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export const connectDB = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
};

export const getClient = () => client;
