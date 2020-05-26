import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, NotFoundComponent, HomeComponent],
  exports: [HeaderComponent, NotFoundComponent, HomeComponent]
})
export class CoreModule { }