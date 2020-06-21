import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weathertoggler:boolean=false;
  searchtext:string="search";
  toggler(){
    this.weathertoggler=true;
  }
  searchweather($event){
    this.searchtext=event.target.value;
    this.weathertoggler=false;
    
    this.httpClient.get("http://api.openweathermap.org/data/2.5/weather?q="+this.searchtext+"&APPID=5269c981512a19f891f0f5fcaaed64ba")
    .subscribe(
      (res: Response) => 
        {
          const searchResult = res.json();  
          console.log(searchResult);
          
          //console.log(this.imageSearch.owner.avatar_url);
        }
    );
    
  }
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

}