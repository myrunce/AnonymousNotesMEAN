var notes = require('../controllers/notes.js');

module.exports = function(app) {
    app.get('/notes', notes.getAll);
    app.post('/notes', notes.addNote);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}