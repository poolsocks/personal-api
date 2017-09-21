var user = require('../user.js')



const getName = (req,res,next) => {
    res.json({Name : user.Name})
}

const getLocation = (req,res,next) => {
    res.json({Location : user.Location})
}

const getOccupation = (req,res,next) => {
    if(req.query.order) {
        if(req.query.order = "asc") {
            res.json({Occupations : user.occupations}.sort());
        }
        else if (req.query.order = "desc") {
            res.json({Occupation : user.occupations}.sort())
        }
    }
    res.json({Occupation : user.occupations})
}

const getOccupationLatest = (req,res,next) => {
    res.json({occupation : user.occupations.slice(user.occupations.length-1)})
}

const getHobbies = (req,res,next) => {
    res.json({Hobbies : user.hobbies})
}

const getHobbiesByType = (req,res,next) => {
    if(req.params.type) {
        res.json(user.hobbies.filter(hobbies => hobbies.type === req.params.type))
    } else {
        res.json(user.hobbies)
    }
}

const getFamily = (req,res,next) => {
    res.json({Family : user.family})
}

const getFamilyByGender = (req,res,next) => {
    if(req.params.gender) {
        res.json(user.family.filter(family=> family.gender === req.params.gender))
    } else {
        res.json(user.family)
    }
}

const getRestaurants = (req,res,next) => {
    if (req.query.rating) {
        res.json(user.restaurants.filter(restaurants => restaurants.rating >= req.query.rating))
    } else {
        res.json({Restaurants : user.restaurants})
    }


}

const getRestaurantsByName = (req,res,next) => {
    if (req.params.name) {
        res.json(user.restaurants.filter(restaurants => restaurants.name === req.params.name))
    } else {
        res.json(user.restaurants)
    }
}

const putName = function (req, res, next) {
    user.name = req.body.name
    res.json(user.name)
  }

const putLocation = function(req, res, next) {
    user.location = req.body.location
    res.status(200).json(user.location)
  }

const postHobbies = function(req, res, next) {
    var hobby = req.body
    user.hobbies.push(hobby)
    res.status(200).json(user.hobbies)
  }

const postOccupations = function(req, res, next) {
    var occupation = req.body
    user.occupations.push(occupation)
    res.status(200).json(user.occupations)
  }

const postFamily = function(req, res, next) {
    var member = req.body
    user.family.push(member)
    res.status(200).json(user.family)
  }

const postRestaurants = function(req, res, next) {
    var restaurant = req.body
    user.restaurants.push(restaurant)
    res.status(200).json(user.restaurants)
  }


module.exports = {
    getName,
    getLocation,
    getOccupation,
    getOccupationLatest,
    getHobbies,
    getHobbiesByType,
    getFamily,
    getFamilyByGender,
    getRestaurants,
    getRestaurantsByName,
    putName,
    putLocation,
    postHobbies,
    postOccupations,
    postFamily,
    postRestaurants
}

