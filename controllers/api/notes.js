const Note = require('../../models/note');

module.exports = {
    index,
    create,
};

async function index(req, res) {
    const notes = await Note.find({}).sort('createdAt');
    res.json(notes);
}

async function create(req, res) {
    try {
        await Note.create(req.body);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}