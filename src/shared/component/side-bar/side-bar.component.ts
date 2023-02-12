import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  constructor(  private router: Router,) { }

  ngOnInit(): void {
  }

  logOut(): void {
      this.router.navigate(['/login']);
  }
  redirect(value: string) {
    this.router.navigate([value]);
  }
}
