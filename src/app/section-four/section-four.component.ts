import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.css']
})
export class SectionFourComponent implements OnInit {
  showbtn = true;
  scroll = false;
  timeout: number;

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    var btn = document.getElementById('stickBtn');
    this.showbtn = false;
    clearTimeout(this.timeout);
    setTimeout(() => {
      this.showbtn = true;
      btn.classList.toggle('active')
      console.log('btn', btn.classList);
    }, 800);
  }
}
