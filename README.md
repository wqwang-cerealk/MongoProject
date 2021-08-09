# MongoProject

This is project 2. Problem Documentaion includes the question this database used to solve and some basic business rules. UML and Data Logic file are the conceptual model of this databse. There are 5 collections and all original data is in the data file. The required query is in the proejct2_query file. Project2_JSON_example includes the JSON example of from each collections. And the rest of this repository is the coding part.

You can insert, edit or delete stores in the application. Also, for each store, you can add and remove product that the store sells.

To import data, you can use command below:
To import store collection: mongoimport -h localhost:27017 -d sephoraCol -c store --jsonArray --file store.json 
To import product collection: mongoimport -h localhost:27017 -d sephoraCol -c product --jsonArray --file MakeUp_product.json
To import brand collection: mongoimport -h localhost:27017 -d sephoraCol -c brand --jsonArray --file Brand.json 
To import customer collection: mongoimport -h localhost:27017 -d sephoraCol -c customer --jsonArray --file customer.json
To import invoice collection: mongoimport -h localhost:27017 -d sephoraCol -c invoice --jsonArray --file Invoice(1).json

Then, you can initialize npm and use npm start to run the program. 
