import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // When the user clicks anywhere outside of the modal, close it

  constructor() { }

  ngOnInit(): void {
  }

}
