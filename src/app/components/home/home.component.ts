import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('backgroundVideo') backgroundVideo: ElementRef<HTMLVideoElement> | undefined;

  ngOnInit(): void {
    if (this.backgroundVideo) {
      const video = this.backgroundVideo.nativeElement;
      // Ensure the video is muted and autoplay
      video.muted = true; // Explicitly mute the video
      video.autoplay = true; // Explicitly enable autoplay
      video.loop = true; // Enable loop for the video
      video.play().catch((err) => {
        console.error('Autoplay failed:', err);
      });
    }
  }
}
