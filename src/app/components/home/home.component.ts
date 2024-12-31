import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit , OnInit{
  ngAfterViewInit() {
    this.setActiveVideo();
  }

  ngOnInit(): void {
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
          }, 40000); // 40 seconds (in milliseconds)
        } else {
          videoElement.pause();
        }
      });
    });

    // Initial video state (start playing on first load)
    videos.forEach((video: Element) => {
      const videoElement = video as HTMLVideoElement; // Cast to HTMLVideoElement
      if (videoElement.closest('.carousel-item')?.classList.contains('active')) {
        videoElement.play();
        // Stop the video after 40 seconds
        setTimeout(() => {
          videoElement.pause();
        }, 40000); // 40 seconds (in milliseconds)
      } else {
        videoElement.pause();
      }
    });
  }
}
