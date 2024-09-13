const book = require("../model/bookmodel");

exports.insert=async (req,res)=>
    {
       try {
        var books=await book.create(req.body);
    
        res.status(200).json({
            status:"Book inserted Successfully",
            books
        })
       } catch (error) {
        res.status(404).json({
            status: error
        })
       }
    }
    exports.find=async(req,res)=>
    {
        try{
            var books= await book.find(req.body);
            res.status(200).json({
                status:"Book view Successfully",
                books
            })
           } catch (error) {
            res.status(404).json({
                status: error
            })
           }
    }
exports.getBooksByName = async (req, res) => {
  try {
    var name=req.params.book_name;
    var books=await book.find({book_name:name});
    res.status(200).json({
        status:"Book view By name",    
        books
    });
  } catch (error) {
    res.status(404).json({
        status:error 
    });
  }
};

exports.getBooksByRent = async (req, res) => {
  try {
    const { minRent, maxRent } = req.query;
    const books = await book.find({
      rentPerDay: { $gte: minRent, $lte: maxRent }
    });
    res.status(200).json({
        status:"Book view By rent",    
        books
    });
  } catch (error) {
    res.status(404).json({
        status:error 
    });
  }
};

exports.getBooksByFilters=async(req,res)=>{
      try{
          const { book_name, rentPerDay, category } = req.query;
          let queryConditions = [];
  
          if (book_name) queryConditions.push({ book_name: new RegExp(book_name, 'i') });
          if (rentPerDay) queryConditions.push({ price: rentPerDay });
          if (category) queryConditions.push({ category: new RegExp(category, 'i') });
          let data;
          if (queryConditions.length > 0) {
              data = await book.find({ $or: queryConditions });
          } else {
              data = await book.find(); // Return all users if no query is specified
          }
         
          res.status(200).json({
              status:"Book find Successfully",
              data
          })
         } catch (error) {
          res.status(404).json({
              status: error
          })
         }
  }