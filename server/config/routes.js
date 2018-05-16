require('./mongoose')
var Author = require('../controllers/authors')

module.exports = function(app){

	app.get('/authors', function(req, res){
		Author.getAll(req, res)
	})

	app.get('/authors/:id', function(req, res){
		Author.getOne(req, res)
	})

	app.post('/authors', function(req, res){
		Author.add(req, res)
	})

	app.put('/authors/:id', function(req, res){
		Author.edit(req, res)
	})

	app.put('/authors/:id/quotes', function(req, res){
		Author.addQuote(req, res)
	})

	app.put('/authors/:id/quotes/:quote/upvote', function(req, res){
		Author.upVote(req, res)
	})

	app.put('/authors/:id/quotes/:quote/downvote', function(req, res){
		Author.downVote(req, res)
	})

	app.delete('/authors/:id/quotes/:quote', function(req, res){
		Author.deleteQuote(req, res)
	})

}