import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})
export class BindingDemoComponent implements OnInit {
  Id:number=10;
  username:string='kiran';
  cityname:string='mumbai';
  display():void{
    console.log("Hi ur Data Is Saved")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
