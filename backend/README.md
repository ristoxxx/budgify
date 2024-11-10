# budgify-backend-app

## Deployment

### Environment variables
URL_DB = mongodb+srv://user:password@cluster0.5dltx.mongodb.net/authDB?retryWrites=true&w=majority&appName=Cluster0

### Server Domains
- *NodeJS Backend* : budgify-backend-app.vercel.app
- *MongoDB* : mongodb+srv://chamibot:password@cluster0.5dltx.mongodb.net/authDB?retryWrites=true&w=majority&appName=Cluster0

### Build
npm install

### Run 
node ./index.js


## Endpoints

### Register

- Method : POST
- URL : https://budgify-backend-app.vercel.app/register
- Body : raw/json

#### Body Example:
{
    "email":"anemail@proton.me",
    "password":"budgify2"
}

#### Result :
{
    "message": "User Created Successfully",
    "result": {
        "email": "anemail@proton.me",
        "password": "$2b$10$9Lz3bHM1Z9qqXeoIREUnOe6HcKV8RYueOkm4KFu1Pm8RUefd2sMI.",
        "_id": "673090429fe33381235e7010",
        "__v": 0
    }
}

### User GET

- Method : GET
- URL : https://budgify-backend-app.vercel.app/user/_id

#### Query Example:
https://budgify-backend-app.vercel.app/user/673090429fe33381235e7010

#### Result :
{
    "message": "User found Successfully",
    "result": {
        "email": "chamibot3@proton.me"
    }
}

### Login

- Method : POST
- URL : https://budgify-backend-app.vercel.app/login
- Body : raw/json

#### Body Example:
{
    "email":"anemail@proton.me",
    "password":"budgify2"
}


### Projects

- Method : POST
- URL : https://budgify-backend-app.vercel.app/project
- Body : raw/json

#### Body Example:
{
    "name":"OurEuropeTrip",
    "description":"3 weeks trip in 8 cities of europe for 5 people with max budget of 300€ per person and minimum 2 day stay per city",
    "type":1,
    "owner":"userID",
    "budget":1500,
    "timelimit":21
}


### Scenarios

- Method : POST
- URL : https://budgify-backend-app.vercel.app/scenario
- Body : raw/json

#### Body Example:
{
    "name":"Eli's proposal",
    "description":"I think a low budget and closer to nature experience is beter for me",
    "owner":"userID",
    "budget":250
}


### SubProjects

- Method : POST
- URL : https://budgify-backend-app.vercel.app/subproject
- Body : raw/json

#### Body Example:
{
    "name":"HikingInCheckRepublik",
    "description":"Lets explore nature in Check Republic from 18/03 to 21/03 with an estimated budget of 50€ per person",
    "owner":"projectID",
    "budget":250,
    "timelimit":3
}


### Comments

- Method : POST
- URL : https://budgify-backend-app.vercel.app/comment
- Body : raw/json

#### Body Example:
{
    "text":"This is too tiring, I want more confort. We can get something better closer to the city town",
    "owner":"subprojectID"
}
