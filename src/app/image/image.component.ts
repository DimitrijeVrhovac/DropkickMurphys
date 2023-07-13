import { Component, Input } from '@angular/core';
import { Image } from '../read-json.service';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent  {
    @Input() image:Image = {image:'',title:''};
}
