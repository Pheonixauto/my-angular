import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./vegetables.component').then((c) => c.VegetablesComponent),
  },
  {
    path: 'detail',
    loadComponent: () =>
      import('./vegetables-detail/vegetables-detail.component').then(
        (m) => m.VegetablesDetailComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VegetablesRoutingModule {}
