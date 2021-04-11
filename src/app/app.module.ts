import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetSaleYearComponent } from './components/Billing/GetSaleYear.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';

import {GetAllProductListComponent} from './components/ProdcutAll-list/ProdcutAll-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    GetSaleYearComponent,
    TutorialDetailsComponent,
    GetAllProductListComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
