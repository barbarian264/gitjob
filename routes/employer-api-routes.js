var db = require("../models");

module.exports = function (app){

	app.post("/api/employerdata", function (req, res) {
      var exp = [];

         if(req.body.experience == "novice") {

         	exp[0] = 1;
         }

         else {
         	exp[0] = 0;
         }
         
         if(req.body.experience == "junior") {

         	exp[1] = 1;
         }
         else {
         	exp[1] = 0;
         }

         if(req.body.experience == "midLevel") {

         	exp[2] = 1;
         }
         else {
         	exp[2] = 0;
         }

         if(req.body.experience == "senior") {

         	exp[3] = 1;
         }
         else {
         	exp[3] = 0;
         }

         if(req.body.experience == "allpro") {

         	exp[4] = 1;
         }
         else {
         	exp[4] = 0;
         }

      

        db.Jobseeker.findAll({
            include: [{
                model: db.Skillset,
                where: {
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
                }
            },
            {
                model: db.Experience,
                where: {
                    novice: exp[0],
                    junior: exp[1],
                    midLevel: exp[2],
                    senior: exp[3],
                    allpro: exp[4],
                }
            },
            {
                model: db.Education,
                where: {
                    highschool: req.body.highschool,
                    college: req.body.college,
                    compScience: req.body.compScience,
                    masters: req.body.masters,
                    selftaught: req.body.selftaught,
                    bootcamp: req.body.bootcamp,
                }
            }
            ]
        })

      .then(function (results) {
             
            res.json(results);

       });

   });

};