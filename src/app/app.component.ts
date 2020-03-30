import { Component } from '@angular/core';
import { MyserviceService} from './myservice.service';   //import

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyserviceService]                    //adding provider of service
})
export class AppComponent {
 
  title = 'routingdemo';
  text: String;
  username:string = 'Deepak';
  
  
 
  constructor (private _myservice: MyserviceService) {     //injection

  }
  ngOnInit() {
    this.text = this._myservice.display();
  }
}
