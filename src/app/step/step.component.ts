import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  data = [
    {
      img: 'assets/step/telephone.png',
      h3: 'Zamówienie',
      p: 'Pomożemy w wyborzei zamówieniu'
    },
    {
      img: 'assets/step/customer-support.png',
      h3: 'Instalacja',
      p: 'Nic nie jest od ciebie wymagane'
    },
    {
      img: 'assets/step/brickwall.png',
      h3: 'Naprawa',
      p: 'Naprawa na wezwanie'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
