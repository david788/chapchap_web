import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BackendService } from 'src/app/backend.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit, OnDestroy {
  members: any[];
  dataSource: MatTableDataSource<any>;
  myDocData;
  data;
  currentDate;
  currentDate7;
  toggleField: string;
  state: string = '';
  savedChanges = false;
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;

  profileUrl: Observable<string | null>;
  takeHostSelfie = false;
  showHostSelfie = false;
  myDocId;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //the documents to be read from firebase and be displayed on the mat table
  displayedColumns = ['contact', 'email', 'usertype'];
  // displayedColumns = ['category', 'scategory', 'name', 'price', '_id'];

  constructor(private _backendService: BackendService, private _storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.toggleField = "searchMode";
    this.dataSource = new MatTableDataSource(this.members);
    this.currentDate = new Date();
    
    this.currentDate.setDate(this.currentDate.getDate() + 1);
    this.currentDate7 = new Date();
    this.currentDate7.setDate(this.currentDate.getDate() - 7);
  }
  toggle(filter?) {
    if (!filter) { filter = "searchMode" }
    else { filter = filter; }
    this.toggleField = filter;
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  //fetch data from firebase database
  getData() {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getUsers('users')
      .subscribe(members => {
        this.members = members;
        this.dataSource = new MatTableDataSource(members);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // this.dataLoading=false;

      }, (error) => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
        () => { this.error = false; this.dataLoading = false; });
  }

  getFilterData(filters) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getFilterProducts('disasters', filters)
      .subscribe(members => {
        this.members = members;
        this.dataSource = new MatTableDataSource(members);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataLoading = false;

      }, (error) => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
        () => { this.error = false; this.dataLoading = false; });
  }
  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }

}


