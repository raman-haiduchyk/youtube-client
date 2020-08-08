import { Component, Input, OnInit } from '@angular/core';
import { IResponseItem } from '../../models/response-item.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() public responseItemData: IResponseItem;

  public borderBottomColor: string = 'brown';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon('like', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/like_icon.svg'));
    matIconRegistry.addSvgIcon('dislike', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/dislike_icon.svg'));
  }

  public ngOnInit(): void {
    let timeInterval: number = Number(new Date()) - Number(this.responseItemData.snippet.publishedAt);
    if (timeInterval < 1000 * 60 * 60 * 24 * 7) {
      this.borderBottomColor = 'blue';
    } else if (timeInterval < 1000 * 60 * 60 * 24 * 30) {
      this.borderBottomColor = 'green';
    } else if (timeInterval < 1000 * 60 * 60 * 24 * 30 * 6) {
      this.borderBottomColor = 'yellow';
    }
  }

}
