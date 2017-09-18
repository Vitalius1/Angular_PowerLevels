import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  image: string;
  level: number;
  data: number;
  onSubmit(){
    this.level = this.data
    console.log(this.level);
  }
  constructor() { 
    this.image = "/assets/images/saiyan.jpg"
  }

  ngOnInit() {
  }

}
