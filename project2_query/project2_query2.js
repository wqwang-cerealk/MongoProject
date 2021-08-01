//query to count the number of eye product (query with count )

const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

async function getEyeProductNum() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const invoiceCol = client
      .db("sephoraCol") 
      .collection("product"); 

    const query = {
  'product_category': 'Eye'
};

    return await invoiceCol.find(query).count();
  } catch (e) {
    console.log("Error", e);
  } finally {
    client.close();
  }
}



async function runIt() {
  const eyeProductNum = await getEyeProductNum();

  console.log("There are : ", eyeProductNum);
}

runIt();