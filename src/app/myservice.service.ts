import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

 display() { 
   return 'this is example of service';
  }      //using functions of service that we will use lateron while calling service to a component
}
 