let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();
let uuidv4 = require('uuid');
const path = require('path');
var file = require('fs');
const fileupload = require('express-fileupload');

let studentschema = require('../Models/StudentModel');
const fs = require('fs');
// create 
router.route('/CreateStudent').post((req, res, next) => {
    console.log(req.body);

    var photo_data = req.files.selectedFile;

    console.log(photo_data);
    //console.log(req.files);
    //N:/mahadev/MERN-CRUD/react-mernstack-crud/public/Img/
    photo_data.mv('react-mernstack-crud/public/Img/' + photo_data.name, function (err) {
        if (err) {
            res.status(400).json({ "status": "File not not upload" });
            return res.send();
        } else {

            //console.log("else part", req.body);
            //console.log("else part", req.files);

            const studentschema_new = new studentschema({
                name: req.body.name,
                email: req.body.email,
                rollno: req.body.rollno,
                selectedFile: photo_data.name
            });

            // studentschema.name = req.body.name;
            // studentschema.email = req.body.email;
            // studentschema.rollno = req.body.rollno;
            // studentschema.selectedFile = photo_data.name;

            studentschema_new.save()
                .then(result => {
                    console.log(result);
                    res.status(200).json({ "status": "data insert successfully" });
                }).catch(err => {
                    console.log(err);
                    res.status(400).json({ "status": "data Not insert successfully" });
                })
        }
    })

    // create  old
    // studentschema.create(req.body, (error, data) => {
    //     if (error) {
    //         return next(error)
    //     } else {
    //         console.log(data)
    //         res.json(data)
    //     }
    // })
});

/*
+---------------------+
|   read students     |
+---------------------+
*/

// old
// router.route('/').get((req, res,next) => {
//     studentschema.find((error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             //console.log(data);
//             res.json(data);
//         }
//     })
// })


//read new
// router.route('/StudentList').get((req, res) => {
//     studentschema.find()
//         .exec()
//         .then(result => {
//             console.log("data show",result);
//             //res.status(200).json({ "status": "data Fetch successfully" });
//             res.status(200).send(result);
//         }).catch(err => {
//             console.log(err);
//             res.status(500).send(err);
//             //res.status(500).json({ "status": "data Not Fetch successfully" });
//         })
// })

router.route('/StudentList').get(async (req, res) => {
    try {
        const studentschema_new = await studentschema.find()
        console.log("reds",studentschema_new);
        res.status(200).json(studentschema_new)
    } catch (err) {
        res.status(500).send(err)
    }
})



/*
+---------------------+
|  get single student |
+---------------------+
*/
// old
// router.route('/EditStudent/:id').get((req, res) => {
//     studentschema.findById(req.params.id, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             //console.log(data);
//             res.json(data);
//         }
//     })
// })
// new
router.route('/EditStudent/:id').get(async (req, res) => {
    try {
        const studentschema_new = await studentschema.findById(req.params.id)
        res.status(200).json(studentschema_new)
    } catch (err) {
        res.status(500).send(err)
    }
})


/*
+---------------------+
| update student      |
+---------------------+
*/

// old
// router.route('/UpdateStudent/:id').put((req, res, next) => {
//     studentschema.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, data) => {
//         if (error) {
//             console.log(error);
//             return next(error);
//         } else {
//             //console.log(data);
//             res.json(data);
//             console.log('Student updated successfully !')
//         }
//     })
// })

// new
router.route('/UpdateStudent/:id').put((req, res) => {

    console.log("body", req.body);
    console.log(req.files);
    // console.log(req.files.length);

    console.log("file_name", req.files);

    if (req.files != null) {
        var photo_data = req.files.selectedFile;
        console.log(photo_data);

        photo_data.mv('react-mernstack-crud/public/Img/' + photo_data.name, function (err) {
            if (err) {
                res.status(400).json({ "status": "File not not upload" });
            } else {
                studentschema.updateOne({ _id: req.params.id }, {
                    name: req.body.name,
                    email: req.body.email,
                    rollno: req.body.rollno,
                    selectedFile: photo_data.name
                }, { new: true })
                    .then((result) => {
                        console.log(result);
                        res.status(200).json({ "status": "Successfully Updated...." })
                    }).catch(err => {
                        res.status(400).json({ "status": "unSuccessfully Updated...." })
                    })
            }
        })
    }
    else {
        studentschema.updateOne({ _id: req.params.id }, {
            name: req.body.name,
            email: req.body.email,
            rollno: req.body.rollno,
        }, { new: true })
            .then((result) => {
                console.log(result);
                res.status(200).json({ "status": "Successfully Updated...." })
            }).catch(err => {
                res.status(400).json({ "status": "unSuccessfully Updated...." })
            })

    }

    if (req.files) {
        const id = req.params.id;
        const delete_img = studentschema.findById({ _id: id })
        delete_img.exec()
            .then((result) => {
                //console.log("result", result.selectedFile);
                fs.unlink("react-mernstack-crud/public/Img/" + result.selectedFile, ((err) => {
                    if (err) {
                        //res.status(500).json({ "status": "File not Deleted" })
                        console.log(err);
                    }
                    else {
                        photo_data.mv('react-mernstack-crud/public/Img/' + photo_data.name, function (err) {
                            if (err) {
                                console.log(err);
                                //res.status(500).json({ "status": "File not upload" })
                                //return res.send();
                            }
                            else {
                                studentschema.updateOne({ _id: req.params.id }, {
                                    selectedFile: photo_data.name
                                }, { new: true })
                                    .then((result) => {
                                        console.log(result)
                                        //res.status(200).json({ "status": "Successfully Updated...." })
                                    }).catch(err => {
                                        console.log(err);
                                        //res.status(500).json({ "status": "unSuccessfully Updated...." })
                                    })
                            }
                        })
                    }
                }))
                //res.status(200).json({ "status": "Successfully Deleted Image...." })
            })
            .catch(err => {
                console.log("err", err)
                // res.status(400).json({ "status": "Un-Successfully Deleted Image...." })
            })
    }




    // try{
    //     const update_student_data = await studentschema.findByIdAndUpdate(req.params.id, { $set: req.body });
    //     res.status(200).json({msg:"Successfully Updated...."})
    // } catch (err){
    //     res.status(400).send({ error: err });
    // }

})


//delete student
router.route('/DeleteStudent/:id').delete((req, res, next) => {

    const id = req.params.id;
    const delete_img = studentschema.findById({ _id: id })
    delete_img.exec()
        .then((result) => {
            //console.log("dd", result.selectedFile);
            //console.log(result);
            fs.unlink("react-mernstack-crud/public/Img/" + result.selectedFile, (err) => {
                if (err) {
                    console.log(err);
                    //res.status(400).json({ "status": "File not Deleted" });
                }
            })
        })

    studentschema.remove({ _id: id }, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("error")
        }
        else {
            res.status(200).json({ status: "Successfully Deleted Image...." })
        }
    })


    // studentschema.findOneAndRemove(req.params.id, (error, data) => {
    //     if (error) {
    //         console.log(error);
    //         res.status(500).send('Error Occured')
    //     } else {
    //         res.status(200).json({ "status": "SuccessFully Deleted..... " })
    //     }
    // })
})

module.exports = router;