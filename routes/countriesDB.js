var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    var path = "/" + req.originalUrl.split('/')[1];
	var type = req.method;
    global.db.collection(actions_json[type + path].collection).find().toArray(function (err, result) {
        if (err) {
            throw err;
        }
        // console.log(result);
        if (actions_json[type+path].return-type == null) {
            res.setHeader('content-type', 'application/json');
            res.send(result);
            
        } else {
            res.render(actions_json[type + path].view, {
                stitle: 'First Cnx Mongo',
                title: 'Liste déroulante',
                countries: result
            });
        }
    });
});

module.exports = router;