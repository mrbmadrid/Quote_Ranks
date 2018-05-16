import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
	author = {name:""};
	success : boolean;
  constructor(private _http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.success = false;
  	this.route.params.subscribe(params=> {
  		let observable = this._http.getAuthor(params['id'])
  		observable.subscribe(data=>{
  			console.log(data)
  			this.author = data['Author'][0];
  			console.log(this.author['name'])
  		})
  	})
  }

  editAuthor(){
  	let observable = this._http.editAuthor({_id:this.author['_id'], name:this.author['name']})
  	observable.subscribe(data=>{
  		if(data['success']){
  			this.success = true;
  		}
  	})
  }

}
