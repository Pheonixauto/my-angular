import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () =>
      import('./component/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'vegetable',
    loadChildren: () =>
      import('./component/vegetables/vegetables-routing.module').then(
        (m) => m.VegetablesRoutingModule
      ),
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
