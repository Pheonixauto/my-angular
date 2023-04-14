import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VegetablesComponent } from './vegetables.component';

const routes: Routes = [
  { path: '', component: VegetablesComponent },
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
