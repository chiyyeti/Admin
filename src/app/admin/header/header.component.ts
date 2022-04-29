import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hide = true
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    console.log("logout clicked");
    this.route.navigate(['login'])
    
  }

}
