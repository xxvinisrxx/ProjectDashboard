import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value: any = '';
  constructor() { }

  ngOnInit(): void {

  }
   buttonClick() {
    const data = {test: 'e'};
    if(data.test === 'e')  {

      console.log('é e')
    }else {
      console.log('não é e')
    }

   }
}
