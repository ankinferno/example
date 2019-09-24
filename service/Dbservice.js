var User = require('../models/User');

function AddUser(objectUser) {
    let NewUser = new User({
        username: objectUser.username,
        password: objectUser.password
    });

    return new Promise((resolve, reject) => {

        User.create(NewUser, (err, doc) => {
            if (err) {

                reject(err);
            } else {
                console.log('values SAVED are ', doc);
                resolve(doc);
            }
        });

    });



}

function FindUser() {
    return new Promise((resolve, reject) => {
        User.find({}, (err, res) => {
            if (err) {
                console.log('error while displayig all records');
                reject(err);
            } else {
                console.log('ALL users are :', res);
                resolve(res);
            }
        });
    });


}


exports.AddUser = AddUser;
exports.FindUser = FindUser;