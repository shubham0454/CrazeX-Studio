import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.setActiveVideo();
  }

  setActiveVideo() {
    const videos = document.querySelectorAll('.carousel-item video');
    const carousel = document.querySelector('#heroCarousel') as HTMLElement;
    

    carousel.addEventListener('slid.bs.carousel', () => {
      videos.forEach((video: Element) => {
        const videoElement = video as HTMLVideoElement; // Cast to HTMLVideoElement
        if (videoElement.closest('.carousel-item')?.classList.contains('active')) {
          videoElement.play();
          setTimeout(() => {
            videoElement.pause();
          }, 40000);
        } else {
          videoElement.pause();
        }
      });
    });


    videos.forEach((video: Element) => {
      const videoElement = video as HTMLVideoElement; // Cast to HTMLVideoElement
      if (videoElement.closest('.carousel-item')?.classList.contains('active')) {
        videoElement.play();
        setTimeout(() => {
          videoElement.pause();
        }, 40000);
      } else {
        videoElement.pause();
      }
    });
  }
}
