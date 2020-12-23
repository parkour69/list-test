import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GridListComponent } from './components/grid-list/grid-list.component';
import {RouterModule} from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromView from './store/view.reducer';

@NgModule({
  declarations: [
    AppComponent,
    GridListComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromView.viewFeatureKey, fromView.reducer)
  ],
  providers: [
    ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
