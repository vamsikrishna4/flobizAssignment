import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataTransferService {
  private businessDataSubject = new Subject<any>();
  private submitButtonFlag = new Subject<any>();

  sendMessage(message: string) {
    this.businessDataSubject.next(message);
  }
  sendFlag(message: boolean) {
    this.submitButtonFlag.next(message);
  }
  getMessage(): Observable<any> {
    return this.businessDataSubject.asObservable();
  }
  getFlag(): Observable<any> {
    return this.submitButtonFlag.asObservable();
  }
  constructor() {}
}
