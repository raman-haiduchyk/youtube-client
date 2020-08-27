import { Component, Input, OnInit } from '@angular/core';
import { IResponseItem } from '../../../models/response-item.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {

  @Input() public responseItemData: IResponseItem;
  @Input() public itemIndex: number;

  constructor(
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon('like', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/like-icon.svg'));
    matIconRegistry.addSvgIcon('dislike', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/dislike-icon.svg'));
  }

  public showDetailedInfo(): void {
    this.router.navigate(['main', this.itemIndex]);
  }

}
