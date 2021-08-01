///Find purchase in December that the total amount is lower that $100 (query with a logic operator)

const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

async function getRequiredPurchase() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const productCol = client
      .db("sephoraCol") 
      .collection("invoice"); 

    const query = {
  '$and': [
    {
      'purchase_month': 'December'
    }, {
      'total_amount': {
        '$lt': 100
      }
    }
  ]
};

    return await productCol.find(query).toArray();
  } catch (e) {
    console.log("Error", e);
  } finally {
    client.close();
  }
}



async function runIt() {
  const requiredPurchase = await getRequiredPurchase();

  console.log("The purchase : ", requiredPurchase);
}

runIt();