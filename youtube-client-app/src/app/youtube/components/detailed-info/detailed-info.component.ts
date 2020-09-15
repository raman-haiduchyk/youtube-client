import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { IResponseItem } from '@core/models/response-item.model';
import { ICustomItem } from '@core/models/custom-item.model';
import { IAppState } from '@redux/state/app.state';
import { getAllVideoCards } from '@redux/selectors/video-cards.selector';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss']
})
export class DetailedInfoComponent implements OnInit {

  public itemStoreSub: Subscription;
  public item: IResponseItem | ICustomItem;
  public publishedAt: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public store: Store<IAppState>,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon('like', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/like-icon.svg'));
    matIconRegistry.addSvgIcon('dislike', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/dislike-icon.svg'));
  }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemStoreSub = this.store.pipe(select(getAllVideoCards)).subscribe(
        items => {
          if (items == null || isNaN(params.id) || params.id > items.length || params.id < 1) {
            this.router.navigate(['not-found']);
          }
          this.item = items[params.id - 1];
          this.publishedAt = (new Date(this.item.snippet.publishedAt)).toDateString();
        }
      );

    });
  }

  public onClose(): void {
    this.router.navigate(['main']);
  }

}
