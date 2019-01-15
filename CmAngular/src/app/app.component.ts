import { Component } from '@angular/core';
import { AuthService } from './components/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CmAngular';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    if (!authService.isAuthenticated()) 
      router.navigate(['/signin'])
  }
}
