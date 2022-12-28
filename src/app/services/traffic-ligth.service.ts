import { Injectable } from '@angular/core';
import { Subject, interval, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficLigthService {

  //private lights = new Subject<string>();
  private lights = new BehaviorSubject<string>('verde');
  
  public lights$ = this.lights.asObservable() //Convierte mi subject en un onservable
  private lastValue: string = 'verde';

  constructor() {
    // this.lights.next('verde')
    this.lights.subscribe((valor) => (this.lastValue = valor))
    interval(1000).subscribe(() => this.lastValue === 'verde' ? this.lights.next('rojo') : this.lights.next('verde'))    
  }
}