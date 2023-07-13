import { Component, OnInit } from '@angular/core';
import { Image, ReadJsonService } from '../read-json.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  viewSlider = false;
  images: Image[] = [];
  index = 0

  constructor(private service: ReadJsonService) {}

  showImage() {
    this.service.getImage()
      .subscribe((data:Image[]) => this.images = data);
  }
  ngOnInit(): void {
    this.showImage();
  }
  showSlider(i:number) {
    this.viewSlider = true
    this.index = i
  }
  closeSlider() {
    this.viewSlider = false
  }
  leftImage() {
    this.index --
    if(this.index <= 0 ) {
      this.index = this.images.length
    }
  }
  rightImage() {
    this.index ++
    if(this.index >= this.images.length) {
      this.index = 0
    } 
  }
}