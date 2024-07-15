const User = require('../models/userModel');

exports.getUnapprovedFishermen = async (req, res) => {
    try {
        const fishermen = await User.find({ approved: false });
        res.json(fishermen);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.approveFisherman = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndUpdate(id, { approved: true });
        res.json({ msg: 'Fisherman approved' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
