import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss']
})
export class DetailedInfoComponent implements OnInit {

  public itemIndex: number;

  constructor(private route: ActivatedRoute, private router: Router, private requestService: RequestService) { }

  public ngOnInit(): void {

    this.route.params.subscribe(params => {

      if (this.requestService.items !== null && params.id <= this.requestService.items.length) {
        this.itemIndex = params.id;
      } else {
        this.router.navigate(['not-found']);
      }

    });

  }

}
