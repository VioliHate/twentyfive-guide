import {Injectable} from '@angular/core';
import {User} from "../models/example-model";
import {HttpClient} from "@angular/common/http";
import {SortDirection, SortEvent} from "twentyfive-accordion-table";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User[] = [];

  dataUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) {
  }

  public getData(page: number, size: number) {
    return this.http.get(`${this.dataUrl}`, {params: {'_page': page, '_limit': size}});
  }


  public getUserDetails(userId: any) {
    return this.http.get(`${this.dataUrl}`, {params: {'id': userId.id}});
  }


  getDataPaged(data: any[], page: number, pageSize: number): any[] {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }

  sortDataByColumn(page: number, pageSize: number, sortEvent: SortEvent) {
    let sort: any [] = [];
    switch (sortEvent.sortDirection) {
      case SortDirection.ASCENDING:
        sort = this.user.slice().sort((a: any, b: any) => this.compareType(a, b, sortEvent.sortColumn));
        break;
      case SortDirection.DESCENDING:
        sort = this.user.slice().sort((a: any, b: any) => this.compareType(b, a, sortEvent.sortColumn));
        break;
      case SortDirection.NONE:
        sort = this.user;
        break;
    }
    return this.getDataPaged(sort, page, pageSize);
  }


  private compareType(a: any, b: any, column: string) {
    if (typeof a[column] === "number" && typeof b[column] === "number") {
      return a[column] - b[column];
    } else if (typeof a[column] === "string" && typeof b[column] === "string") {
      return a[column].localeCompare(b[column]);
    } else if (a[column] instanceof Date && b[column] instanceof Date) {
      return a[column].getTime() - b[column].getTime();
    } else {
      return 0;
    }
  }
}
