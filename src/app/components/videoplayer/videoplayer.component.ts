import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements OnInit {
  @ViewChild('videoElement') videoElement: any;
  
  constructor(private cdr: ChangeDetectorRef) { }

  url: string = '';
  isPlaying: boolean = false;
  progressValue = 0;
  currentTime = 0;
  totalTime = 0;

  ngOnInit(): void {
    this.url = "/assets/video.mp4";
    
  }
 
  togglePlay() {
    const video = this.videoElement.nativeElement as HTMLVideoElement;
    if (video.paused) {
      video.play();
      this.isPlaying = true
    } else {
      video.pause();
      this.isPlaying =false;
    }
  }

  updateProgress() {
    const video = this.videoElement.nativeElement as HTMLVideoElement;
    this.progressValue = (video.currentTime / video.duration) * 100;
    this.currentTime = video.currentTime;
    this.totalTime = video.duration;

    // Trigger change detection to update the view
    this.cdr.detectChanges();
  }
  
  rewind() {
    const video = this.videoElement.nativeElement as HTMLVideoElement;
    video.currentTime -= 5;
  }

  fastForward() {
    const video = this.videoElement.nativeElement as HTMLVideoElement;
    video.currentTime += 5;
  }
 

}
