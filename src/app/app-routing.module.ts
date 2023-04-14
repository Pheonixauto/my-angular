import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './component/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { VegetablesComponent } from './component/vegetables/vegetables.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'vegetable', component: VegetablesComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
