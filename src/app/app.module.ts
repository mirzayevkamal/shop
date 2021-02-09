import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DragScrollModule } from 'ngx-drag-scroll';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ShopComponent } from './shop/shop.component';
import { ShopSingleComponent } from './shop-single/shop-single.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import { DealComponent } from './deal/deal.component';
import { HomeShopComponent } from './home-shop/home-shop.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgxPaginationModule} from 'ngx-pagination';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SlideshowComponent,
    ShopComponent,
    ShopSingleComponent,
    CartComponent,
    CheckoutComponent,
    ProductComponent,
    HomeComponent,
    MainNavComponent,
    DealComponent,
    HomeShopComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatCardModule,
    MatTooltipModule,
    DragScrollModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    SharedModule,
    MatTableModule,
    MatDividerModule,
    MatTabsModule,
    CommonModule,
    MatFormFieldModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
