import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: any;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router) {
    this.error = '';
  }

  ngOnInit(): void {

  }
  submit() {
    if (
      this.form.get('username')?.value === 'teste@teste.com' &&
      this.form.get('password')?.value === '123456'
    ) {
      localStorage.setItem('setUser', JSON.stringify({ loged: true }));
      this.router.navigate(['/home']);
    } else {
      this.error = 'Email ou Senha incorreto';
    }
  }
}
