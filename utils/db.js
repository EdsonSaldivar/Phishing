const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://edsonmujica81:ygpgmf84im9n8Rjr@cluster0.xw1ph7i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let db;

async function connectToDatabase() {
    try {
        // Connect the client to the server
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // Get the database
        db = client.db('phishing');
    } catch (e) {
        console.log(e);
    }
}

function getDb() {
    if (!db) {
        throw new Error("Database not connected!");
    }
    return db;
}

module.exports = { connectToDatabase, getDb };