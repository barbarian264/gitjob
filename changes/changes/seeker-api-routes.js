var db = require("../models");

module.exports = function (app) {
    app.post("/api/new/jobseeker", function (req, res) {
        db.Jobseeker.create({
            name: req.body.name,
            email: req.body.email,
            github: req.body.github,
            linkedin: req.body.linkedin
        })
            .then(function (result) {
                //console.log(result.dataValues.id);
                var newseekerId = result.dataValues.id;

                db.Project.create({
                    url: req.body.projectURL1,
                    description: req.body.projectDescription1,
                    JobseekerId: newseekerId
                });

                db.Project.create({
                    url: req.body.projectURL2,
                    description: req.body.projectDescription2,
                    JobseekerId: newseekerId
                });


                db.Education.create({
                    highschool: req.body.highschool,
                    college: req.body.college,
                    compScience: req.body.compScience,
                    masters: req.body.masters,
                    selftaught: req.body.selftaught,
                    bootcamp: req.body.bootcamp,
                    JobseekerId: newseekerId
                });

                db.Skillset.create({
                    html: req.body.html,
                    css: req.body.css,
                    javascript: req.body.javascript,
                    c_sharp: req.body.c_sharp,
                    node: req.body.node,
                    mysql: req.body.mysql,
                    express: req.body.express,
                    react: req.body.react,
                    mongodb: req.body.mongodb,
                    python: req.body.python,
                    angular: req.body.angular,
                    ruby: req.body.ruby,
                    JobseekerId: newseekerId
                });

                switch (req.body.experience) {
                    case "novice":
                        db.Experience.create({
                            novice: 1,
                            JobseekerId: newseekerId
                        });
                        break;
                    case "junior":
                        db.Experience.create({
                            junior: 1,
                            JobseekerId: newseekerId
                        });
                        break;
                    case "midlevel":
                        db.Experience.create({
                            midLevel: 1,
                            JobseekerId: newseekerId
                        });
                        break;
                    case "senior":
                        db.Experience.create({
                            senior: 1,
                            JobseekerId: newseekerId
                        });
                        break;
                    case "allpro":
                        db.Experience.create({
                            allpro: 1,
                            JobseekerId: newseekerId
                        });
                        break;
                    default:
                        break;

                }

                res.json(result);
                console.log('create new jobseeker with id: ' + newseekerId + '!!')
            });
    });


    app.get("/api/jobseekers", function (req, res) {
        db.Jobseeker.findAll({

        }).then(function (result) {
            res.json(result);
        });
    });

    app.get("/api/new/jobseeker/:id", function (req, res) {
        if(req.params.id){

        db.Jobseeker.findOne({
            where: {
                id: req.params.id
            }
            ,
            include: [{
                model: db.Experience,
                where: {
                    JobseekerId: req.params.id
                }
            },{
                model: db.Skillset,
                where: {
                    JobseekerId: req.params.id
                }
            }, {
                model: db.Project,
                where: {
                    JobseekerId: req.params.id
                }
            }, {
                model: db.Education,
                where: {
                    JobseekerId: req.params.id
                }
            }
            ]
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    }
    });





};