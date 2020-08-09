import { Component, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Subscription, fromEvent, from } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  public filterIsShown: boolean = false;
  public userName: string = 'user';

  public searchInputSub: Subscription;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private requestService: RequestService,
  ) {
    matIconRegistry.addSvgIcon('filter', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/filter_icon.svg'));
  }

  public ngAfterViewInit(): void {
    this.searchInputSub = fromEvent(document.getElementById('search-input'), 'input')
    .pipe(
      map((event: KeyboardEvent) => (event.target as HTMLInputElement).value),
      debounceTime(500),
      distinctUntilChanged())
    .subscribe(inputValue => {
      this.requestService.getResponse();
    });
  }

  public showFilter(): void {
    this.filterIsShown = !this.filterIsShown;
  }

}
