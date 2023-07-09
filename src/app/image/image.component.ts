import { Component, OnInit } from '@angular/core';
import { Image, ReadJsonService } from '../read-json.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  
  images: Image[] = [];

  constructor(private service: ReadJsonService) {}

  showImage() {
    this.service.getImage()
      .subscribe((data:Image[]) => this.images = data);
  }
  ngOnInit(): void {
    this.showImage();
  }
}
