var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    getAll: function(req, res){
        Note.find({}).sort('-date').exec(function(err, notes) {
            return res.json(notes);
        })
    },
    addNote: function(req, res){
        var note = new Note({text: req.body.text})
        note.save(function(err) {
            if (err){
                console.log("ERROR SAVING");
            }
            else {
                return res.json(note)
            }
        })
    }
}