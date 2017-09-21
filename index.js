const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const port = 3000
const app = express();


app.use(bodyParser.json());
app.use(cors());


const mainCtrl = require('./Controllers/main_ctrl.js')
const skillsCtrl = require('./Controllers/skillsCtrl.js')

app.get('/api/name', mainCtrl.getName);
app.get('/api/location', mainCtrl.getLocation);
app.get('/api/occupations', mainCtrl.getOccupation);
app.get('/api/occupations/latest', mainCtrl.getOccupationLatest);
app.get('/api/hobbies', mainCtrl.getHobbies);
app.get('/api/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/api/family/', mainCtrl.getFamily)
app.get('/api/family/:gender', mainCtrl.getFamilyByGender);
app.get('/api/restaurants', mainCtrl.getRestaurants)
app.get('/api/restaurants/:name', mainCtrl.getRestaurantsByName);
app.put('/api/name/', mainCtrl.putName);
app.put('/api/location/', mainCtrl.putLocation);
app.post('/api/hobbies/', mainCtrl.postHobbies);
app.post('/api/occupations/', mainCtrl.postOccupations);
app.post('/api/family/', mainCtrl.postFamily);
app.post('/api/restaurants/', mainCtrl.postRestaurants);

app.get('/api/skills', skillsCtrl.getSkills),
app.post('/api/skills', skillsCtrl.postSkills),



app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})