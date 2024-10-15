import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() tableData: { [key: string]: any }[] = [];
  @Input() columnData: string[] = [];
  @Input() activeTabNumber: number = 0;
  @Input() activeTabName: string = 'Drafts';
  @Input() searchData: any = '';
  Pageconfig = { itemsPerPage: 10, currentPage: 0 }

  pageChanged(event: any): void {
    this.Pageconfig.currentPage = event;
  }

}
