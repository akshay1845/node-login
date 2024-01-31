const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/cricket")

const PlayersSchema = new mongoose.Schema({
    name : String,
    age : Number,
    country : String,
    battingStyle  : String,
    bowlingStyle : String,
    runs : Number,
    matches : Number
})

const players = mongoose.model('players' , PlayersSchema)


app.use(express.json())

//get players Data
app.get('/listPlayers', async (req, res) => {
    let data = await players.find()
    res.send(data)
})

//insert player

app.post('/insertPlayer', async (req, res) => {
    let data = await players.insertMany(req.body)
    res.send(data)
})

//update <player></player>

app.put("/updatePlayer/:_id", async (req, res) => {
    let data = await players.updateOne(
        req.params,
        {
            $set: req.body
        }
    )

    res.send(data)
})

//DELETE PLAYER
app.delete("/deletePlayer/:_id", async (req, res) => {
    let data = await players.deleteOne(req.params)
    if(data.acknowledged) {
        if(data.deletedCount == 0){
            res.send("user not exist!")
        }else{
            res.send("Deleted Successfully!")
        }
    }else{
res.send("something went wrong!")
    }
    res.send(data)
})

//Serach players

app.get("/searchPlayer/:serachKey", async(req,res) => {
    let data = await players.find({
        $or : [
            { "name" : { $regex : req.params.serachKey}}, 
            {"battingStyle" : {$regex : req.params.serachKey}}
        ]
    })

    res.send(data)
})

