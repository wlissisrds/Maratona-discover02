const express = require("express");

const routes = express.Router();

const views = __dirname + "/views/"

const profile = {
    name:"Wlissis",
    avatar:"https://avatars.githubusercontent.com/u/69227825?v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

routes.get("/", (req, res) => {
    return res.render(views + "index")
});

routes.get("/job", (req, res) => {
    return res.render(views + "job")
});

routes.get("/job/edit", (req, res) => {
    return res.render(views + "job-edit")
});

routes.get("/profile", (req, res) => {
    //enviando o objeto pro arquivo profile.ejs poder usar os dados
    return res.render(views + "profile",{profile: profile})
});

module.exports = routes;