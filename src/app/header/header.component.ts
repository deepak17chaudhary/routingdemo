import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  arr1 = [1,2,1,2,3,3,4,6,7];
  arr2 = [1,2,3,4,6,8,9];

  constructor() { 

   
    
  
  }

  ngOnInit() {
    this.printUniqData();
  }

  printUniqData() {
    const newArr = [];
    for(let i = 0; i < this.arr1.length; i++) {
      if (newArr.indexOf(this.arr1[i]) === -1) {
        newArr.push(this.arr1[i]); // newArr = [1,2,,3,4,6,7]
      }
    }
    for(let i = 0; i < this.arr2.length; i++) {
      if (newArr.indexOf(this.arr2[i]) === -1) {
        newArr.push(this.arr2[i]); // [1,2,3,4,6,7].indexOf(8) // -1
      }
    }
    console.log('newArr', newArr);

  }


}
