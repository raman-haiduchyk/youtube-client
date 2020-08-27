import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor(private domSanitizer: DomSanitizer, private matIconRegistry: MatIconRegistry) {
    matIconRegistry.addSvgIcon('404', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/404-icon.svg'));
  }
}
