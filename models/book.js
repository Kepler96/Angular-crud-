/**
 * Created by smartankur4u on 25/7/18.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://devn:devn@cluster0.ueo55.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true,
useFindAndModify: false});

const BookSchema = new mongoose.Schema({
  isbn: {
    type:String,
    required:true
  },
  title: {
    type:String,
    required:true
  },
  author: {
    type:String,
    required:true
  },
  description: {
    type:String,
    required:false
  },
  published_year: {
    type:String,
    required:false
  },
  publisher: {
    type:String,
    required:false
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
});


module.exports = mongoose.model('Book', BookSchema);
