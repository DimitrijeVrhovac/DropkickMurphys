import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Image {
  title: string;
  image: string;
}
export interface Track {
  title: string;
  track: string;
  cover: string;
}
export interface Tour {
  city: string;
  state: string;
  date: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReadJsonService {

  imageUrl = '/assets/data/images.json';
  trackUrl = '/assets/data/tracks.json';
  tourUrl = '/assets/data/tours.json'
  constructor(private http: HttpClient) { }
  
  getImage(): Observable<Image[]> {
    return this.http.get<Image[]>(this.imageUrl);
  }
  getTrack(): Observable<Track[]> {
    return this.http.get<Track[]>(this.trackUrl);
  }
  getTour(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.tourUrl)
  }
}