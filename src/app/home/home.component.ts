import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('introVideo') video!: ElementRef<HTMLVideoElement>;
  showVideo = false;
  posterShown = true;

  constructor(private router: Router) {}

ngAfterViewInit() {
    const videoEl = this.video.nativeElement;

    // Ensure video is muted & plays inline for autoplay
    videoEl.muted = true;
    videoEl.playsInline = true;

    // Step 1: Show poster for 4 seconds
    setTimeout(() => {
      this.showVideo = true;  // Hide poster, show video

      // Step 2: Try autoplay
      const playVideo = () => {
        videoEl.currentTime = 0;
        const playPromise = videoEl.play();

        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn('Autoplay blocked, waiting for user interaction', err);
            // fallback: wait for click anywhere
            document.body.addEventListener('click', () => videoEl.play(), { once: true });
          });
        }
      };

      if (videoEl.readyState >= 2) {
        playVideo();
      } else {
        videoEl.addEventListener('canplay', playVideo, { once: true });
      }
    }, 4000);

    // ===== FADE-UP SCROLL ANIMATION =====
    const fadeElements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.15 });

    fadeElements.forEach(el => observer.observe(el));
}

  goCarrera() {
    this.router.navigateByUrl('/models/p911/carrera').catch(err => console.error(err));
  }

  goMacan() {
    this.router.navigateByUrl('/models/macan/macan').catch(err => console.error(err));
  }

  goGt3rs() {
    this.router.navigateByUrl('/models/p911/gt3rs').catch(err => console.error(err));
  }

  goModels() {
    this.router.navigate(['/models']);
  }

playVideo(event: any) {
  const video: HTMLVideoElement = event.currentTarget.querySelector('.hv-video');
  if (!video) return;

  video.muted = true; // ensure muted for autoplay
  video.playsInline = true;

  const play = () => {
    video.currentTime = 0;
    const promise = video.play();
    if (promise !== undefined) {
      promise.catch(err => {
        console.warn('Hover video autoplay blocked, waiting for user interaction', err);
        // fallback: click anywhere on body
        document.body.addEventListener('click', () => video.play(), { once: true });
      });
    }
  };

  // If video ready, play immediately
  if (video.readyState >= 2) {
    play();
  } else {
    // Otherwise wait until loaded
    video.addEventListener('loadeddata', play, { once: true });
  }
}

stopVideo(event: any) {
  const video: HTMLVideoElement = event.currentTarget.querySelector('.hv-video');
  if (!video) return;

  video.pause();
  video.currentTime = 0;
}


  goToModel(model: string) {
    this.router.navigate(['/models'], { queryParams: { model } });
  }
}
