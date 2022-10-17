import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IProfile} from "../../models/profile";

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
}
