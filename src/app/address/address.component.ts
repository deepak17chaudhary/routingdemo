import { Component, OnInit } from '@angular/core';
import { MyserviceService} from '../myservice.service';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [MyserviceService]
})
export class AddressComponent implements OnInit {
  text: String;

  constructor(private _myservice: MyserviceService) { }

  ngOnInit() {
    this.text = this._myservice.display();

  }
  
}
