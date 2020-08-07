import { Component, Input } from '@angular/core';
import { IResponseItem } from '../../models/response-item.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {

  @Input() public responseItemData: IResponseItem;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon('like', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/like_icon.svg'));
    matIconRegistry.addSvgIcon('dislike', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/dislike_icon.svg'));
  }

}
