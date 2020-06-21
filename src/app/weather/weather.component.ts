import { Component, OnInit ,OnDestroy,Input,OnChanges} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http , Response } from '@angular/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit,OnChanges {
  @Input() compno:any;
  f:any;
  weathertoggler:boolean=false;
  iconlink
  searchtext:string="search";
  weatherdata:object=
    {"coord":{"lon":"N/A","lat":"N/A"},"weather":[{"id":"N/A","main":"N/A","description":"N/A","icon":null}],"base":"N/A","main":{"temp":"N/A","feels_like":"N/A","temp_min":"N/A","temp_max":"N/A","pressure":"N/A","humidity":0},"visibility":0,"wind":{"speed":"N/A","deg":"N/A"},"clouds":{"all":"N/A"},"dt":"N/A","sys":{"type":"N/A","id":"N/A","country":"N/A","sunrise":"N/A","sunset":"N/A"},"timezone":"N/A","id":"N/A","name":"N/A","cod":225}
  ;
  toggler(){
    this.weathertoggler=true;
  }
  searchweather($event){
    this.searchtext=event.target.value;
    this.weathertoggler=false;
    //let link="http://api.openweathermap.org/data/2.5/weather?q="+this.searchtext+"&appid=5269c981512a19f891f0f5fcaaed64ba";
    this.f=setInterval(()=>{
      fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.searchtext+'&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    .then(response=>response.json())
    .then(data=>{this.weatherdata=data
    //console.log(data)
    localStorage.setItem(this.searchtext,JSON.stringify(this.weatherdata))
    })},3000)
    //this.weathertoggler=true;
   
    
  }
  constructor(private  http: Http) { 
    console.log(this.compno)
    //console.log('hdfhfd',localStorage.getItem(localStorage.key(this.compno)))
  }

  ngOnInit() {
    console.log(this.compno)
    console.log('hdfhfd',localStorage.getItem(localStorage.key(this.compno+1)))
    if(JSON.parse(localStorage.getItem(localStorage.key(this.compno+1)))){
      this.weatherdata=JSON.parse(localStorage.getItem(localStorage.key(this.compno+1)))
      this.searchtext=this.weatherdata.name;
    }
    else{
      this.weatherdata={"coord":{"lon":"N/A","lat":"N/A"},"weather":[{"id":"N/A","main":"N/A","description":"N/A","icon":null}],"base":"N/A","main":{"temp":"N/A","feels_like":"N/A","temp_min":"N/A","temp_max":"N/A","pressure":"N/A","humidity":0},"visibility":0,"wind":{"speed":"N/A","deg":"N/A"},"clouds":{"all":"N/A"},"dt":"N/A","sys":{"type":"N/A","id":"N/A","country":"N/A","sunrise":"N/A","sunset":"N/A"},"timezone":"N/A","id":"N/A","name":"N/A","cod":225};
    }
    
  }
  ngOnChanges(){
    if(this.f){
      clearInterval(this.f)
    }

  }
  ngOnDestroy(){
    
   
  }

}