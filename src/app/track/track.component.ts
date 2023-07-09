import { Component,OnInit } from '@angular/core';
import { ReadJsonService, Track } from '../read-json.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  tracks : Track[] = [];

  constructor(private service: ReadJsonService) {}

  showTrack() {
    this.service.getTrack()
      .subscribe((data:Track[]) => this.tracks = data);
  }
  ngOnInit(): void {
    this.showTrack();
  }
}
