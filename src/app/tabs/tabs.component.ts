import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  @Input() tabsArray: string[] = [];
  @Output() acivetabIndex = new EventEmitter<number>();
  activeTab: number = 0;

  setTabActive(index: number) {
    this.activeTab = index;
    this.acivetabIndex.emit(this.activeTab);
  }

}
