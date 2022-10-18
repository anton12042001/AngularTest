import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IProfile} from "../../models/profile";
import {IColor} from "../../models/color";

@Injectable({
  providedIn:"root"
})

export class BackHttpService {
  constructor(private http:HttpClient) {
  }
  getAll(): Observable<IProfile[]> {
    return this.http.get<any>('https://reqres.in/api/users').pipe(map((res) => res.data))
  }
  getUserById(id: number): Observable<IProfile> {
    return this.http.get<any>(`https://reqres.in/api/users/${id}`).pipe(map((res) => res.data));
  }
  updateUserById(id: number, first_name: string): Observable<IProfile> {
    const body = {id: id, name:first_name}
    return this.http.put<any>(`https://reqres.in/api/users/${id}`,body);
  }
  deleteUserById(id: number): Observable<IProfile> {
    return this.http.delete<any>(`https://reqres.in/api/users/${id}`);
  }
  color(): Observable<IColor[]> {
    return this.http.get<any>('https://reqres.in/api/unknown').pipe(map((res) => res.data))
  }
}
