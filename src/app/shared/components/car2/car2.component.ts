import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { TrafficLigthService } from 'src/app/services/traffic-ligth.service';

@Component({
  selector: 'app-car2',
  templateUrl: './car2.component.html',
  styleUrls: ['./car2.component.scss']
})
export class Car2Component implements OnInit {

  constructor(public trafficLightService: TrafficLigthService) {
    //interval(1700).subscribe(()=> this.trafficLightService.lights.next('naranja')) //Esto no se hace!!!
  }

  ngOnInit(): void {
  }

}
