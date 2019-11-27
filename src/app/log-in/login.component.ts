import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string;
  password: string;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigateByUrl('/start');
    } else {
      alert("Invalid credentials");
    }
  }
}
