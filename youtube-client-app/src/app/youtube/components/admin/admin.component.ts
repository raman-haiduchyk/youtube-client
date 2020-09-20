import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { ICustomItem } from '@core/models/custom-item.model';
import { SetCustomVideoCards } from '@redux/actions/custom-video-cards.action';
import { IAppState } from '@redux/state/app.state';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public cardForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, public store: Store<IAppState>) {
    this.cardForm = fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imageLink: ['', [Validators.required]],
      videoLink: ['', [Validators.required]],
    });
  }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    let payload: ICustomItem = {
      snippet : {
        title : this.cardForm.controls.title.value,
        description : this.cardForm.controls.description.value,
        videoSource : this.cardForm.controls.videoLink.value,
        publishedAt : new Date().toDateString(),
        thumbnails : {
          high : {
            url : this.cardForm.controls.imageLink.value
          }
        }
      },
      statistics : {
        likeCount: '0',
        dislikeCount: '0',
        viewCount: '0',
        commentCount: '0',
        favoriteCount: '0'
      }
    };
    this.store.dispatch(new SetCustomVideoCards(payload));
    this.router.navigate(['main']);
  }

}
