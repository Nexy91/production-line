import { ProductionComponent } from './production.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: ProductionComponent }]
@NgModule({
  declarations: [ProductionComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ],
  exports: [RouterModule],
  providers: []
})
export class ProductionModule { }
