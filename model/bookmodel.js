var mongoose=require('mongoose');

const book = new mongoose.Schema({
    book_name: { type: String, required: true },
    category: { type: String, required: true },
    rentPerDay: { type: Number, required: true },
})
module.exports=mongoose.model('book',book);