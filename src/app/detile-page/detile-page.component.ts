import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-detile-page',
  templateUrl: './detile-page.component.html',
  styleUrls: ['./detile-page.component.css']
})
export class DetilePageComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }
    users;
  ngOnInit(): void {
    this.users = this.authService.getUser();
  }

}
