import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myimage1:string ="assets/images/image1.jpeg";
  myimage2:string ="assets/images/image2.jpeg";
  

}
