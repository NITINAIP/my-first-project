import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Module1Service } from '../shared/service/module1.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component implements OnInit {
  public _router!: Router;
  public _route$!: ActivatedRoute;
  public selectedId!: number;
  public result!: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private module1Service: Module1Service
  ) {
    this._route$ = route;
  }
  ngOnInit(): void {
    this._route$.paramMap.subscribe((param) => {
      this.selectedId = Number(param.get(`id`));
    });
    this._route$.queryParams.subscribe((param) => {
      console.log(param);
    });
    this.module1Service.get().subscribe({
      next:(nexxt) => {
        console.log(nexxt)
        this.result = nexxt
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
