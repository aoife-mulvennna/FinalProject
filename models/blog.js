const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({  // creates new instance of schema object
    title: {
        type: String,
        required: true // the title field is required for blog documents
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
},
    { timestamps: true }); // automatically generates time stamps for each item. if we update/create it will auto assign time stamps 

//create model
const Blog = mongoose.model('Blog', blogSchema) 

                                    //this model takes in as a first argument, the name of this model. 
                                    // The name of this is important because it is going to look at this name, 
                                    // it will pluralise it and look for that collection inside that database, to 
                                    // communicate with the db. Will look for 'blogs'

module.exports = Blog; 