import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'vegetable',
        loadChildren: () =>
          import('../component/vegetables/vegetables.module').then(
            (m) => m.VegetablesModule
          ),
      },
      {
        path: 'home',
        loadComponent: () =>
          import('../component/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
