var mongoose=require('mongoose');
const issue_book=new mongoose.Schema({
    bookId: { type: mongoose.Schema.Types.ObjectId,ref:'book', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId,ref:'user', required: true },
    issueDate: { type: Date, required: true,default:Date.now},
    returnDate: { type: Date ,default:null},
    rentGenerated: { type: Number, default:null},
})
module.exports=mongoose.model('transaction',issue_book);