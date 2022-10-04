import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photo = 'assets/gallery/1.jpg'
  photoNum = 1

  nextPhoto(a:boolean){
    if(a){
      if(this.photoNum < 17){
        this.photoNum++
      } else{
        this.photoNum = 1
      }
    } else{
      if(this.photoNum > 1){
        this.photoNum--
      } else{
        this.photoNum = 17
      }
    }
    this.photo =  'assets/gallery/' + this.photoNum + '.jpg'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
