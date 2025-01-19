const Submission = require("../models/submissionModel");

const uploadUserData = async (req, res) => {
    try {
        const newSubmission = new Submission({
            name: req.body.name,
            socialMedia: req.body.socialMedia,
            images: req.files.map(file => file.filename)
        });
        await newSubmission.save();
        res.status(200).json({ message: "Uploaded Successfully" });
    } catch (error) {
        res.status(500).json({ message: "Upload Failed" });
    }
  };

const getSubmissions = async (req, res) => {
    const submissions = await Submission.find();
    res.json(submissions);
};

module.exports = { uploadUserData, getSubmissions };
