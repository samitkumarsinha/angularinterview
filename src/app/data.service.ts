import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  base_url = environment.base_url;

  constructor(private http: HttpClient) { }
  login(data):Observable<any>{
    return this.http.post( `${this.base_url}/login`, data);
  }
  logout():Observable<any>{
    const httpoptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization' : 'Bearer '+localStorage.getItem('token') })
    }
    return this.http.get(`${this.base_url}/logout`,httpoptions);
  }
  register(data):Observable<any>{
    return this.http.post(`${this.base_url}/register`,data);
  }
  userlist():Observable<any>{
    const httpoptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization' : 'Bearer '+localStorage.getItem('token') })
    }
    return this.http.get(`${this.base_url}/users`,httpoptions);
  }
  countrylist():Observable<any>{
    const httpoptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization' : 'Bearer '+localStorage.getItem('token') })
    }
    return this.http.get(`${this.base_url}/country`,httpoptions);
  }

}
