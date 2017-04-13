import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Output() search = new EventEmitter();
  searchForm: FormControl;

  constructor() { }

  ngOnInit() {
  }

  onSearch(searchForm: FormControl) {
    this.search.emit(searchForm.value.query);
  }

}
