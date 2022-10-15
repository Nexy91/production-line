import { NavigationComponent } from './components/production-navigation/production-navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
