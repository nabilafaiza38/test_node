const { register, getUserById, deleteUser , updateUser, AddFavoris} = require("../Controllers/UserController")
var multer = require('multer')
var path = require('path');
var appDir = path.dirname(require.main.filename);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appDir+'/uploads')
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

const init = (router) => {
    router.route('/users').post(upload.single('photo'), register)
    router.route('/users/:id').get(getUserById)
                              .delete(deleteUser)
                              .post(updateUser)
                              
    router.route('/users/AddFavoris').post(AddFavoris)
                             
}


module.exports.init = init