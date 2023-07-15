import { Component,OnInit } from '@angular/core';
import { ReadJsonService, Tour } from '../read-json.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  index = 0
  tours: Tour[] = []
  viewTicket = false
  quantity = 1
  constructor(private service: ReadJsonService) {}

  showTour() {
    this.service.getTour()
      .subscribe((data:Tour[]) => this.tours = data);
  }

  ngOnInit(): void {
    this.showTour();
  }
  buyTicket(i:number) {
    this.viewTicket = true
    this.index = i
  }
  getTicket() {
    window.alert("Thank you for your purchase!")
    this.viewTicket = false
    this.quantity = 1
  }
  cancelTicket() {
    this.viewTicket = false
    this.quantity = 1
  }
  increase() {
    this.quantity ++
  }
  decrease() {
    this.quantity --
    if(this.quantity < 1) {
      this.quantity = 1
      window.alert("Quantity can not be less than 1!")
    }
  }
}
