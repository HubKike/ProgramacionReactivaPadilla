import { Component, OnInit } from '@angular/core';
import { TrafficLigthService } from 'src/app/services/traffic-ligth.service';

@Component({
  selector: 'app-car3',
  templateUrl: './car3.component.html',
  styleUrls: ['./car3.component.scss']
})
export class Car3Component implements OnInit {

  constructor(public trafficLightService: TrafficLigthService) { }

  ngOnInit(): void {
  }

}
