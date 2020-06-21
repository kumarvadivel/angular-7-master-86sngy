import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http , Response } from '@angular/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weathertoggler:boolean=false;
  searchtext:string="search";
  weatherdata:any;
  toggler(){
    this.weathertoggler=true;
  }
  searchweather($event){
    this.searchtext=event.target.value;
    this.weathertoggler=false;
    let link="http://api.openweathermap.org/data/2.5/weather?q="+this.searchtext+"&appid=5269c981512a19f891f0f5fcaaed64ba";
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.searchtext+'&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    .then(response=>response.json())
    .then(data=>{this.weatherdata=data})
    //this.weathertoggler=true;
    
  }
  constructor(private  http: Http) { }

  ngOnInit() {
  }

}