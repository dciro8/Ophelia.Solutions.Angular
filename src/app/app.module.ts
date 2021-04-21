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

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './components/pagination/pagination.component';
import { JwPaginationModule } from 'jw-angular-pagination';
@NgModule({
  declarations: [
    AppComponent,
    GetSaleYearComponent,
    TutorialDetailsComponent,
    GetAllProductListComponent,
    CreateProductComponent,
    HeaderComponent,
    PaginationComponent
  ],
  imports: [
    JwPaginationModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}