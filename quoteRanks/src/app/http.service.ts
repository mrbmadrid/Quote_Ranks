import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
  	return this._http.get('/authors');
  }

  newAuthor(data){
  	return this._http.post('/authors', data);
  }

  editAuthor(data){
    return this._http.put('/authors/'+data._id, data);
  }

  addQuote(data){
    return this._http.put('/authors/'+data._id+'/quotes', data);
  }

  deleteQuote(data){
    return this._http.delete('/authors/'+data._id+'/quotes/'+data.quote);
  }

  upVote(data){
  	return this._http.put('/authors/'+data._id+'/quotes/'+data.quote+'/upvote', data);
  }

  downVote(data){
    return this._http.put('/authors/'+data._id+'/quotes/'+data.quote+'/downvote', data);
  }
  
  getAuthor(id){
  	return this._http.get('/authors/'+id);
  }

}
