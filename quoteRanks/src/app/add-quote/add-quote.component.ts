import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
	success : boolean;
	quote : String;
  constructor(private _http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  addQuote(){
  	this.route.params.subscribe(params=>{
  		let observable = this._http.addQuote({_id:params['id'], quote:this.quote})
  		observable.subscribe(data=>{
	  		if(data['success']){
	  			this.success = true;
	  		}
	  	})
  	})
  }

}
