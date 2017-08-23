var db = require("../models");

module.exports = function (app){

    app.get("/api/employer", function(req,res){
        var query = req.params.id;

        db.Jobseeker.findAll({
            //where and includes
            includes
        }).then(function(result){
            res.json(result);
        });
    });

};