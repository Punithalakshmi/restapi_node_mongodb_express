# Creating REST APIs using MongoDB, Node.js,Express.js With JWT Token .

# Step 1

Once download the code, run this command in root folder

**npm install**

# Step 2
In Windows, check if MongoDB is installed on your system. If not, please install MongoDB and MongoDB Compass. Once MongoDB is installed, create a database. After creating the database, check if the MongoDB connection is working properly. If the connection is successful, copy the connection string and update the connection string in the root folder's .env file DATABASE_URL variable.

## Next you have to create collection within your mongodb database

### Collection name should be **users** => fields (name,email,password,avatar,role)

![image](https://github.com/Punithalakshmi/restapi_node_mongodb_express/assets/6658115/1cc5c931-554a-4945-b685-615b7d379800)

![image](https://github.com/Punithalakshmi/restapi_node_mongodb_express/assets/6658115/0e12e67e-917b-4584-a983-15ae042e4cf3)

**.env file**

![image](https://github.com/Punithalakshmi/restapi_node_mongodb_express/assets/6658115/bc16cd7e-3a44-4737-a865-5be57c768aa6)

# Step 3
Open the terminal in Visual Studio Code and run the following command:

**npm start**

## In Browser
Run the following url
**http://localhost:3000/**

## Next you have to check the api's postman
1. http://localhost:3000/api/login
2. http://localhost:3000/api/logout
3. http://localhost:3000/api/register 

