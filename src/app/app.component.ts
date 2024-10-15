import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dynamic-tab-structure';
  activeTabNumber: number = 0;
  usersData: any;
  activeTabName: string = 'Drafts'
  tabsArray: string[] = ['Drafts', 'Pending Authorisation', 'Rejected', 'Authorised', 'Completed'];
  searchData: any;
  searchTerm: any;
  sortDirection: boolean = true;

  ngOnInit() {
    this.getUsers();
  }

  constructor(private http: HttpClient) {

  }

  setActiveTabData(tabIndex: number) {
    this.activeTabNumber = tabIndex;
    this.activeTabName = this.tabsArray[tabIndex];
  }

  getUsers() {
    this.http.get('https://jsonplaceholder.org/users').subscribe((res) => {
      this.usersData = res;
      this.searchData = res;
    })
  }

  serchResults(e: Event) {
    this.searchData = this.usersData?.filter((res: any) => {
      console.log(this.searchData);
      return (res.firstname?.toLowerCase())?.includes(this.searchTerm?.toLowerCase()) ||
        res.lastname?.toLowerCase()?.includes(this.searchTerm?.toLowerCase());
    })

  }

  sortResults() {
    this.sortDirection = !this.sortDirection;
    this.usersData.sort((a: any, b: any) => {
      if (a.firstname?.toLowerCase() > b.lastname?.toLowerCase()) return this.sortDirection ? 1 : -1;
      if (a.firstname?.toLowerCase() < b.lastname?.toLowerCase()) return this.sortDirection ? -1 : 1;
      return 0;
    });
  }
}
