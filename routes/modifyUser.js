var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
/* SET user from _id with new data for an update into mongoDB . */
router.route('/:_id').get(function (req, res) {
    var path = "/" + req.originalUrl.split('/')[1];
    var type = req.method;
    global.db.collection(actions_json[type + path].collection).update({
            _id: new ObjectID(req.params._id)
        }, {
            $set: req.query
        },
        function (err, result) {
            if (err) {
                throw err;
            }
            // console.log('modifyUser: ', result);
            global.db.collection(actions_json[type + path].collection).find({
                _id: new ObjectID(req.params._id)
            }).toArray(function (err, result) {
                if (err) {
                    throw err;
                }
                console.log('users: ', result);

                if (actions_json[type+path].return-type == null) {
                    res.setHeader('content-type', 'application/json');
                    res.send(result);
                    
                } else {
                    res.render('modifyUser', {
                    title: 'User modified without error',
                    user: result[0]
                    });
                }
                // res.render('modifyUser', {
                //     title: 'User modified without error',
                //     user: result[0]
                // });
            }); // fin du find() après update
        } // fin callback de l'update
    ); // fin de l'update()
}); // fin de la gestionde la route
module.exports = router;