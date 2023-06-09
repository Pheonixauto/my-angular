import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'vegetable/detail',
    loadComponent: () =>
      import(
        './component/vegetables/vegetables-detail/vegetables-detail.component'
      ).then((m) => m.VegetablesDetailComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./share/component/page-not-found/page-not-found.component').then(
        (c) => c.PageNotFoundComponent
      ),
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
