import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Subscription, fromEvent, from } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { RequestService } from '../../services/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/redux/state/app.state';
import { GetAPIVideoCards, VideoCardsActionTypes } from 'src/app/redux/actions/video-cards.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public filterIsShown: boolean = false;
  public logoutIsShown: boolean = false;
  public userName: string;

  public searchInputSub: Subscription;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private requestService: RequestService,
    private loginService: LoginService,
    private router: Router,
    private store: Store<IAppState>
  ) {
    matIconRegistry.addSvgIcon('filter', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/filter-icon.svg'));
    matIconRegistry.addSvgIcon('logout', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/logout-icon.svg'));
  }

  public ngOnInit(): void {
    this.searchInputSub = fromEvent(document.getElementById('search-input'), 'input')
    .pipe(
      debounceTime(500),
      map((event: KeyboardEvent) => (event.target as HTMLInputElement).value),
      filter((value: string) => value.length > 2),
      distinctUntilChanged())
    .subscribe(inputValue => {
      this.store.dispatch({type: VideoCardsActionTypes.getAPICards, payload: inputValue});
      if (this.router.url === '/not-found') {
        this.router.navigate(['main']);
      }
    });

    this.loginService.subject.subscribe(name => {
      if (name !== null) {
        this.userName = name;
        this.logoutIsShown = true;
        console.log(this.logoutIsShown);
      } else {
        this.userName = null;
        this.logoutIsShown = false;
        console.log(this.logoutIsShown);
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
