import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private location: Location,
    private authService: AuthService
  ) { }

  ngOnInit() {
    
  }

  goBack() {
    this.location.back();
  }
}
