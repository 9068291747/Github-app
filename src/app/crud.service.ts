import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { onedata} from'./one11';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private http:HttpClient) { } // inject httpclient 
   bn:any; // for storing username 
     
   url:string=`https://api.github.com/users/${this.bn}/repos`; 
   nb:string = JSON.stringify(this.bn); // for converting in string

   // for capture username  
   insertData(res){
   return this.bn= res;
  }
  

  // for get data from github api
  getdata():Observable<onedata[]>{
   return this.http.get<onedata[]>(`https://api.github.com/users/${this.nb}/repos`)
  }
}
