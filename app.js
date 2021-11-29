const express = require("express");

const connect = require("./src/configs/db");

const app = express();

app.use(express.json());

// CRUD opeartions on cities

const cityController = require("./src/controllers/cities.controllers");

app.use("/cities",cityController);

// CRUD opeartions on Skills

const skillController = require("./src/controllers/skills.controller");

app.use("/skills",skillController);

// CRUD opeartions on Jobs

const jobController = require("./src/controllers/jobs.controller");

app.use("/jobs",jobController);

// CRUD opeartions on companies

const companyController = require("./src/controllers/companies.controller");

app.use("/companies",companyController);

//fetching all the jobs that are available as Work from home.

const wfhController = require("./src/controllers/wfh.controller");

app.use("/wfh",wfhController);

// fetching all the jobs that will accept a notice period of 2 months.

const noticeController = require("./src/controllers/notice.controller");

app.use("/notice",noticeController);

//fetching all jobs by sorting the jobs as per their rating.

const ratingController = require("./src/controllers/rating.controller");

app.use("/rating",ratingController);

// Fetching the company that has the most open jobs.

const vacancyController = require("./src/controllers/vacancies.controller");

app.use("/vacancies",vacancyController);

// Fetching all jobs in a particular city which matches a particular skill

const SkillCitycontroller = require("./src/controllers/Skill_City.controller");

app.use("/preferance",SkillCitycontroller);


app.listen("2345", async()=>{
    await connect();
    console.log("listening on 2345");
})