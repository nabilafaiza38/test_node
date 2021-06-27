const userModel = require("../Models/UserModel")

const getAllUsers = (req, res) => {
    userModel.find().then((data) => {
        res.status = 200
        res.json(data)
    }).catch((err) => {
        res.status = 201
        res.json(err)
    })
}

const getUserById = (req, res) => {
    var id = req.params.id
    UserModel.findById(id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })

}


const AddFavoris = (req, res) => {userModel.findById(req.params.id)
    .then(data => {
        data.favoriteFoods.push(req.body.idFilm)
        data.nom=req.body.nom,
        data.prenom=req.body.prenom,
        data.email=req.body.email,
        data.password=req.body.password,
        data.username=req.body.username,
        data.photo= req.file.path,
        data.date_naissance=req.body.date_naissance,
        data.tel=req.body.tel,
        data.photo=req.body.photo
        data.save()
        .then((data2) => res.json(data2)).catch(err2 => res.json(err2))
    }).catch(err => res.json(err))
}


const register = (req, res) => {
    userModel.findOne({ email: req.body.email }).then((data) => {
        console.log(req.file)
        if (data) {
            res.status = 200
            res.json({ message: "Utilisateur existe déja" })
        } else {
            userModel.findOne({ email: req.body.email }).then((data) => {
                console.log(req.file)
                if (data) {
                    res.status = 200
                    res.json({ message: "Utilisateur existe déja" })
                } else {
                                var user = new userModel({
                                    nom:req.body.nom,
                                    prenom:req.body.prenom,
                                    email:req.body.email,
                                    password:req.body.password,
                                    username:req.body.username,
                                    photo: req.file.path,
                                    date_naissance:req.body.date_naissance,
                                    tel:req.body.tel,
                                    photo:req.body.photo,
                                })
                                user.save().then((userReturned) => {
                                    res.json({ message: "User created Successfully", user: userReturned })
                                }).catch(err => res.json(err))
                            }
            }).catch((err) => {
            res.status = 201
            res.json(err)
            })

        }
    }).catch((err) => {
        res.status = 201
        res.json(err)
    })
}

const deleteUser = (req, res) => {
    var id = req.params.id
    UserModel.findByIdAndDelete(id).then(data => res.json(data)).catch(err => res.json(err))
}

const updateUser = (req, res) => {
    var id = req.params.id
    UserModel.findByIdAndUpdate(id, req.body).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
}


module.exports = { getAllUsers, register, getUserById , deleteUser, updateUser ,AddFavoris}