//query to update the name of customer_id = 1 to be "Quinn" (query with updating)
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

async function updateCustomer() {
   const client = new MongoClient(uri);

  try {
    await client.connect();

    const customerCol = client
      .db("sephoraCol") //dbName
      .collection("customer"); // Collection name


    const filter = { customer_id : 1 }

    const person = { $set : { customer_name : "Quinn"}, };

    const options = {upsert : true };

    const result = await customerCol.updateOne(filter, person, options);

  } catch (e) {
    console.log("Error", e);
  } finally {
    client.close();
  }
}

async function runIt() {

    await updateCustomer();

  }

runIt();