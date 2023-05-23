import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { DatailsComponent } from './datails/datails.component';

@NgModule({
  declarations: [HomeComponent, DatailsComponent],
  imports: [RoutingModule, CommonModule],
})
export class PagesModule {}
