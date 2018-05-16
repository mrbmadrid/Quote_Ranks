import { Component, OnInit } from '@angular/core';
import { NgForm }  from '@angular/forms';
import { HttpService } from'../http.service';


@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
	name : String;
  constructor(private _http: HttpService) { }

  ngOnInit() {
  }

  addAuthor(form: NgForm) {
  	let observable = this._http.newAuthor({name: this.name})
  	observable.subscribe(data=>{
  		console.log(data);
  		this.name="";
  	})
  }

}
