import { Component, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Subscription, fromEvent, from } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { RequestService } from '../../services/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';

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
    private loginService: LoginService,
    private router: Router
  ) {
    matIconRegistry.addSvgIcon('filter', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/filter-icon.svg'));
    matIconRegistry.addSvgIcon('logout', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/logout-icon.svg'));
  }

  public ngAfterViewInit(): void {
    this.searchInputSub = fromEvent(document.getElementById('search-input'), 'input')
    .pipe(
      map((event: KeyboardEvent) => (event.target as HTMLInputElement).value),
      filter((value: string) => value.length > 2),
      debounceTime(500),
      distinctUntilChanged())
    .subscribe(inputValue => {
      this.requestService.getResponse();
      if (this.router.url === '/not-found') {
        this.router.navigate(['main']);
      }
    });
  }

  public showFilter(): void {
    this.filterIsShown = !this.filterIsShown;
  }

  public logOut(): void {
    this.loginService.logOut();
    this.router.navigate(['login']);
  }

}
