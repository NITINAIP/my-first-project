import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page2-by-id',
  templateUrl: './page2-by-id.component.html',
  styleUrls: ['./page2-by-id.component.scss']
})
export class Page2ByIdComponent implements OnInit {
  public _router!:Router
  public _route$!:ActivatedRoute
  public selectedId!:number
  constructor(
  private router:Router,
  private route: ActivatedRoute
  ){
    this._route$ = route
  }
  ngOnInit(): void {
    
    this._route$.paramMap.subscribe(param => {
      this.selectedId = Number(param.get(`id`));
    })
  }

}
