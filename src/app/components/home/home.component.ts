import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initializeCarousel();
  }

  initializeCarousel() {
    const carousel = document.querySelector('#heroCarousel') as HTMLElement;
    const videos = document.querySelectorAll('.carousel-item video');

    // Function to move to the next slide
    const moveToNextSlide = () => {
      const nextButton = document.querySelector('.carousel-control-next') as HTMLElement;
      nextButton.click();
    };

    // Add an event listener to each video for the 'ended' event
    videos.forEach((videoElement) => {
      const video = videoElement as HTMLVideoElement;

      video.addEventListener('ended', () => {
        moveToNextSlide();
      });
    });

    // Handle slide transition to play the active slide's video
    carousel.addEventListener('slid.bs.carousel', () => {
      videos.forEach((videoElement) => {
        const video = videoElement as HTMLVideoElement;
        if (video.closest('.carousel-item')?.classList.contains('active')) {
          video.play();
        } else {
          video.pause();
        }
      });
    });

    // Play the video of the initially active slide
    const activeVideo = document.querySelector('.carousel-item.active video') as HTMLVideoElement;
    if (activeVideo) {
      activeVideo.play();
    }
  }
}
