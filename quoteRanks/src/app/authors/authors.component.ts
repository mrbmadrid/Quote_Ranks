import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
	authors : any;
  constructor(private _http: HttpService) { }

  ngOnInit() {
  	let observable = this._http.getAuthors();
  	observable.subscribe(data=>{
  		console.log(data)
  		this.authors = data['Authors'];
  	})
  }

}
