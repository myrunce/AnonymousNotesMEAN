var mongoose = require('mongoose');
var NoteSchema = new mongoose.Schema({
    text: {type: String, required: true, minlength: 3},
    date: {type: Date, default: Date.now}
})
var Note = mongoose.model('Note', NoteSchema);