import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { TrafficLigthService } from 'src/app/services/traffic-ligth.service';

@Component({
  selector: 'app-car1',
  templateUrl: './car1.component.html',
  styleUrls: ['./car1.component.scss']
})
export class Car1Component implements OnInit {
  //lightsSubscription: Subscription;

  constructor(public trafficLightService: TrafficLigthService) {
    //interval(1500).subscribe(()=> this.trafficLightService.lights.next('azul')) //Esto no se hace!!!
    
    //this.trafficLightService.lights.subscribe(console.log)
    //this.trafficLightService.lights$.subscribe(console.log);
    
    //this.trafficLightService.lights.next('azul')
  }  

  ngOnInit(): void {
  }

  // ngOnDestroy(): void {
  //   this.lightsSubscription.unsubscribe()
  // }

}