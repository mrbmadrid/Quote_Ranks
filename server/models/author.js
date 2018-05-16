var mongoose = require('mongoose')

mongoose.Promise = global.Promise

var QuoteSchema = new mongoose.Schema({
	quote : {type: String, required: [true, "Anonymous users cannot rate cakes."], minlength: 3},
	votes : {type: Number, default: 0}
})

var AuthorSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 3},
	quotes: [QuoteSchema]
})


mongoose.model('Author', AuthorSchema)