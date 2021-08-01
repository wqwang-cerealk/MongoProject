///Find purchase the top three months with most total aincome (query with aggregation)

const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

async function getTopMonths() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const invoiceCol = client
      .db("sephoraCol") 
      .collection("invoice"); 

    const query = [
  {
    '$group': {
      '_id': '$purchase_month', 
      'total_amount': {
        '$sum': '$total_amount'
      }
    }
  }, {
    '$sort': {
      'total_amount': -1
    }
  }, {
    '$limit': 3
  }, {
    '$project': {
      '_id': 1
    }
  }
]


    return await invoiceCol.aggregate(query).toArray();
  } catch (e) {
    console.log("Error", e);
  } finally {
    client.close();
  }
}



async function runIt() {
  const topMonths = await getTopMonths();

  console.log("Three months are : ", topMonths);
}

runIt();