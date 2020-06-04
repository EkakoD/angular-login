import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detile-page',
  templateUrl: './detile-page.component.html',
  styleUrls: ['./detile-page.component.css']
})
export class DetilePageComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private router: Router,

  ) { }
    users;
  ngOnInit(): void {
   this.users = this.authService.getUser();

}
}
