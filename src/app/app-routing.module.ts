import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ErrorComponent } from './error/error.component';
import { Page2ByIdComponent } from './page2-by-id/page2-by-id.component';
const routes: Routes = [
 
  {
    path:'page1',
    component:Page1Component
  },
  {
    path:'page2',
    component:Page2Component,
    children:[
      {
        path:':id',
        component:Page2ByIdComponent,
      }
    ]
  },
  // {
  //   path:'page2/:id',
  //   component:Page2Component
  // },
  {
    path:'**',
    component:ErrorComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
