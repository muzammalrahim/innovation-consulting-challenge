import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-img',
  templateUrl: './hero-img.component.html',
  styleUrls: ['./hero-img.component.css']
})
export class HeroImgComponent implements OnInit {
  showbtn = false;
  heroVisible: boolean;
  timeout: number;
  constructor() { }

  ngOnInit(): void {
  }

  onVisibilityChange(e) {
    if(e === 'HIDDEN') {
      // this.showbtn = true;
      this.heroVisible = false;
    }
    else{
      // this.showbtn = false;
      this.heroVisible = true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    var btn = document.getElementById('stickBtn');
    this.showbtn = false;
    clearTimeout(this.timeout);
    setTimeout(() => {
      if(this.heroVisible === false){
        this.showbtn = true;
        btn.classList.toggle('active')
      }
    }, 1000);
  }

}
