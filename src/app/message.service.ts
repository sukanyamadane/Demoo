import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient){}
  onClick():Observable<Object>{
    return this.http.get('./assets/data/profile.json');
  }
}
