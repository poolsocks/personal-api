var skills = require('../skills.js')


const getSkills = (req,res,next) => {
    if(req.query.experience) {
        res.json(user.skills.filter(skills => skills.experience === req.params.experience))
    }
}

const postSkills = (req,res,next) => {
    var newSkill = req.body
    user.skills.push(newSkill)
    res.status(200).json(user.restaurants)
}



module.exports = {
    getSkills,
    postSkills
}