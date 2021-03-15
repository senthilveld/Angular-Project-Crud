import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

  userAdded = new Subject();

  createUser(obj:any){
   console.log(obj,'service');
   return this._http.post('http://localhost:3000/products',obj);
  }

  getLatestUsers(){
    return this._http.get('http://localhost:3000/products');
  }
  updateUser(obj:any){
    return this._http.put('http://localhost:3000/products/'+obj.id, obj)
  }
  deleteUser(user:any){
    return this._http.delete('http://localhost:3000/products/'+user.id)
  }

  informChild(){
    this.userAdded.next();
  }
}
