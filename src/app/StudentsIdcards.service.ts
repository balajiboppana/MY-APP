import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsIdcardsService {
  baseUrl:string='https://6128991386a213001729f9df.mockapi.io/test/v1/student';
  constructor(private _httpClient:HttpClient) { }
  getStudentsIdcards():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }
  getStudentsIdcard(id:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+'/'+id);
  }
  updateIdcard(id:string,data:any):Observable<any>{
    return this._httpClient.put(this.baseUrl+'/'+id,data);
  }
  getFilteredStudentsIdcards(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+'?filter='+term);
  }
  getSortedStudentsIdcards(column:string,order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+'?sortBy='+column+"&order="+order);
  }
  deleteStudentIdcards(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+'/'+id);
  }
  getPagedStudentsIdcards(limit:number,page:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+'?limit='+limit+"&page="+page);
  }
  createStudentsIdcards(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,data);
  }
}
