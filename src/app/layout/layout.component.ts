import { Component, OnInit, ViewEncapsulation,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
  @Output() sidenavToggleEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  
  public sidenavToggle() :void {
    this.sidenavToggleEvent.emit(true);
  }
}
