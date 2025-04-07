import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-to-start',
  imports: [CommonModule],
  templateUrl: './time-to-start.component.html',
  styleUrl: './time-to-start.component.css',
})
export class TimeToStartComponent implements OnInit, OnDestroy {
  targetDate: string = '2025-05-06T10:00:00';
  remainingTime!: {
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
  };
  private intervalId: any;

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 10);
  }

  updateTime() {
    const now = new Date().getTime();
    const target = new Date(this.targetDate).getTime();
    const diff = target - now;

    if (diff <= 0) {
      clearInterval(this.intervalId);
      this.remainingTime = {
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      };
      return;
    }

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(
      (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const milliseconds = diff % 1000;

    this.remainingTime = {
      months,
      days,
      hours,
      minutes,
      seconds,
      milliseconds,
    };
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
