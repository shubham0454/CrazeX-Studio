import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('videoBackground') videoBackground!: ElementRef;

  ngOnInit() {
    const videoElement = this.videoBackground.nativeElement;

    // Using Intersection Observer to lazy load the video when it comes into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoElement.play(); // Play the video when the element comes into view
        } else {
          videoElement.pause(); // Pause the video when it goes out of view
        }
      });
    });

    observer.observe(videoElement);
  }
}
