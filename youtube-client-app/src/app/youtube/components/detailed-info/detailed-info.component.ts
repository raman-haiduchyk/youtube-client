import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../../core/services/request.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IResponseItem } from '../../../models/response-item.model';
@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss']
})
export class DetailedInfoComponent implements OnInit {

  public item: IResponseItem;
  public publishedAt: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public requestService: RequestService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon('like', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/like-icon.svg'));
    matIconRegistry.addSvgIcon('dislike', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/dislike-icon.svg'));
  }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (this.requestService.items !== null && params.id <= this.requestService.items.length) {
        this.item = this.requestService.items[params.id - 1];
        this.publishedAt = (new Date(this.item.snippet.publishedAt)).toDateString();
      } else {
        this.router.navigate(['not-found']);
      }
    });
  }

}
