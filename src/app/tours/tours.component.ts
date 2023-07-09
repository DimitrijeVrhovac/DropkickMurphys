import { Component,OnInit } from '@angular/core';
import { ReadJsonService, Tour } from '../read-json.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  tours: Tour[] = []

  constructor(private service: ReadJsonService) {}

  showTour() {
    this.service.getTour()
      .subscribe((data:Tour[]) => this.tours = data);
  }

  ngOnInit(): void {
    this.showTour();
  }
}
