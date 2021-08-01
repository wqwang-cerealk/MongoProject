///Find how many purchase in June

const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

async function getJunePurchase() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const productCol = client
      .db("sephoraCol") 
      .collection("invoice"); 

    const query = {
  'purchase_month': 'June'
}

    return await productCol.find(query).count();
  } catch (e) {
    console.log("Error", e);
  } finally {
    client.close();
  }
}



async function runIt() {
  const requiredPurchase = await getJunePurchase();

  console.log("There are : ", requiredPurchase);
}

runIt();