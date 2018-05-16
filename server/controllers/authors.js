var mongoose = require('mongoose')
var Author = mongoose.model('Author')

module.exports = {
	getAll : function(req, res){
		Author.find({}, function(err, Authors){
			if(err){
				console.log(err)
			}else{
				res.json({Authors: Authors})
			}
		})
	},

	getOne : function(req, res){
		Author.find({_id : req.params.id}, function(err, Author){
			if(err){
				console.log(err)
			}else{
				res.json({Author: Author})
			}
		})
	},

	add : function(req, res){
		var author = new Author({name: req.body.name})
		author.save(function(err){
			if(err){
				res.json({success : false})
			}else{
				res.json({success : true})
			}
		})
	},

	edit : function(req, res){
		Author.findOneAndUpdate({_id:req.body._id}, {$set : {name : req.body.name}}, function(err){
			if(err){
				res.json({success:false})
			}else{
				res.json({success : true})
			}
		})
	},

	upVote : function(req, res){
		Author.findOne({'_id':req.params.id}, function(err, doc){
			if(err){
				res.json({success:false})
			}else{
				for(let quote of doc.quotes){
					if(quote.quote == req.params.quote){
						quote.votes +=1;
					}
				}
				doc.save(function(err){
					if(err){
						res.json({success:false})
					}else{
						res.json({success:true})
					}
				})
			}
		})
	},

	downVote : function(req, res){
		Author.findOne({'_id':req.params.id}, function(err, doc){
			if(err){
				res.json({success:false})
			}else{
				for(let quote of doc.quotes){
					if(quote.quote == req.params.quote){
						quote.votes -=1;
					}
				}
				doc.save(function(err){
					if(err){
						res.json({success:false})
					}else{
						res.json({success:true})
					}
				})
			}
		})
	},

	addQuote : function(req, res){
		Author.findOneAndUpdate({_id : req.params.id}, {$push : {quotes : {quote: req.body.quote, votes: 0}}}, function(err){
			if(err){
				res.json({success:false})
			}else{

				res.json({success : true})
			}
		})
	},


	deleteQuote : function(req, res){
		Author.update({_id:req.params.id}, {$pull :{quotes : {quote: req.params.quote}}}, function(err){
			if(err){
				res.json({success:false})
			}else{
				res.json({success : true})
			}
		})
	}
}