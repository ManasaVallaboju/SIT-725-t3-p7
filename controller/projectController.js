let projectModel = require("../moddels/project");


// let client = require("../dbConnect");
// let projectCollection;


// setTimeout(() => {
//     projectCollection = client.mongoClient.db().collection("projects");
// }, 2000)

// // insert project...
// const insertProjects = (project, callback) => {
//     projectCollection.insert(project, callback);
//  }

//  // get project...
// const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
// }


// createproject...
const createProjects = (req, res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    projectModel.insertProjects(newProject, (err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err })
        }
        else {
            res.json({ statusCode: 200, message: "Project Successfully added", data: result })
        }
    })
}


//retrieve project..
const retrieveProjects =  (req, res) => {
    projectModel.getProjects((err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err })
        }
        else {
            res.json({ statusCode: 200, message: "Success", data: result })
        }
    })
}

module.export = {retrieveProjects, createProjects}