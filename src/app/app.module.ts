import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarouselComponent} from './carousel/carousel.component';
import {MenuComponent} from './menu/menu.component';
import {SwiperModule} from 'swiper/angular';
import { SwiperComponent } from './swiper/swiper.component';

@NgModule({
    declarations: [
        AppComponent,
        CarouselComponent,
        MenuComponent,
        SwiperComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SwiperModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
