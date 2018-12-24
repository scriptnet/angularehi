import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EhiComponent } from './pages/ehi/ehi.component';
import { ItemEhiComponent } from './pages/item-ehi/item-ehi.component';

const routes: Routes = [
  {path: 'home', component: EhiComponent},
  {path: 'item-ehi/:id', component: ItemEhiComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
