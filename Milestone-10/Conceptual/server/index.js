const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
// app.use(express.json());

// 20rq5EZVX4EZqWQX



const uri =
  "mongodb+srv://suronjit:<db_password>@cluster0.gotmti8.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("this is this");
});
app.get("/hello", (req, res) => {
  res.send("this is hello");
});

app.listen(port, () => {
  console.log(`App listen on ${port}`);
});

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("response here sent!");
// });

// app.get("/hello", (req, res) => {
//   res.send("hello is here");
// });

// app.listen(port, () => {
//   console.log(`example app listen ${port}`);
// });
