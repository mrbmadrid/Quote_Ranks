import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
	author = {quotes:[]};
  constructor(private route : ActivatedRoute, private _http: HttpService) { }

  ngOnInit() {
  	this.load();
  }

  load(){
  	this.route.params.subscribe(params=>{
  		let observable = this._http.getAuthor(params.id)
  		observable.subscribe(data=>{
  			this.author=data['Author'][0];
  		})
  	})
  }

  delete(id, quote){
  	let observable = this._http.deleteQuote({_id:id, quote:quote});
  	observable.subscribe(data=>{
  		console.log(data)
  		this.load()
  	})
  }

  upVote(id, quote){
  	let observable = this._http.upVote({_id:id, quote:quote});
  	observable.subscribe(data=>{
  		console.log(data)
  		this.load()
  	})
  }

  downVote(id, quote){
  	let observable = this._http.downVote({_id:id, quote:quote});
  	observable.subscribe(data=>{
  		console.log(data)
  		this.load()
  	})
  }

}
