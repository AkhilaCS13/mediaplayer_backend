//import json server
const jsonserver = require("json-server")

//create server
const mediaplayerserver = jsonserver.create()

// create middleware to convert json format
const middleware = jsonserver.defaults()

// import db.json
const router = jsonserver.router("db.json")

//set port for the server
const PORT = 4000 || process.env.PORT

// create use middleware
mediaplayerserver.use(middleware)
mediaplayerserver.use(router)

//listen()
mediaplayerserver.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);   
})