import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-img',
  templateUrl: './hero-img.component.html',
  styleUrls: ['./hero-img.component.scss']
})
export class HeroImgComponent implements OnInit {
  showBtn = false;
  heroVisible: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onVisibilityChange(e) {
    if(e === 'HIDDEN') {
      this.heroVisible = false;
    }
    else{
      this.heroVisible = true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    var btn = document.getElementById('stickBtn');
    this.showBtn = false;
    setTimeout(() => {
      if(this.heroVisible === false){
        this.showBtn = true;
        btn.classList.toggle('active')
      }
    }, 500);
  }

}
