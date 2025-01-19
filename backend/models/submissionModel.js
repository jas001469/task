const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
    name: String,
    socialMedia: String,
    images: [String]
});

const Submission = mongoose.model("Submission", SubmissionSchema);
module.exports = Submission;