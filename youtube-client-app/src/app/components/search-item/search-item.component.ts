import { Component, OnInit } from '@angular/core';
import { IResponseItem } from '../../models/response-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  public responseItemData: IResponseItem;

  constructor() { }

  public ngOnInit(): void {
  }

}
