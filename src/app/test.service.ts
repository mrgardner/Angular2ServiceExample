import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor() { }
  test(name) {
    return `Hello ${name}`;
  }
}
