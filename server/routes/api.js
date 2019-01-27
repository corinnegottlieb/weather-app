const express = require(`express`)
const router = express.Router()
const request = require(`request`)


const City = require(`../models/City`)

router.get(`/city/:cityName`, (req, res) => {
    request(`http://api.apixu.com/v1/current.json?key=769b90c075f64b02aaa113555181912&q=${req.params.cityName}`, (error, response, body) => {
        let data = JSON.parse(body)
        res.send(data)
    })
})


router.get(`/cities`, (req, res) =>{
   City.find({}).exec(function(err, cities){
       res.send(cities)
       
   }) 
  })

router.post(`/city`, function(req, res){
    let data = req.body
    let city = new City(data)
    city.save()
    res.send(city)
})

router.delete(`/city/:cityName`, function(req, res){
    let city = req.params.cityName
    City.findOneAndDelete({ name:city}).exec()
    res.send(`City deleted from DB`)
})

// router.put(`/city/:cityName`, function (req, res){
//    request(`http://api.apixu.com/v1/current.json?key=769b90c075f64b02aaa113555181912&q=${req.params.cityName}`, (error, response, body) => {
//     let data = JSON.parse(body)
//    City.find({ name:city}, function(err,city){

//    }
   
// })

module.exports = router

// API Key: 769b90c075f64b02aaa113555181912