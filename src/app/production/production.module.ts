import { ProductionComponent } from './production.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: ProductionComponent }]
@NgModule({
  declarations: [ProductionComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
  providers: []
})
export class ProductionModule { }
