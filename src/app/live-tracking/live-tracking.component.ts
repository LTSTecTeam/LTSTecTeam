import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-tracking',
  templateUrl: './live-tracking.component.html',
  styleUrls: ['./live-tracking.component.css']
})
export class LiveTrackingComponent implements OnInit {
  filterArray: string[] = ["awies","saeed","khalid","taleen"];
  constructor() { }

  ngOnInit(): void {
  }

}
