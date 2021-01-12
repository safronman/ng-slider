import {Component, OnInit} from '@angular/core';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
    selector: 'app-swiper',
    templateUrl: './swiper.component.html',
    styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    onSwiper(swiper) {
        console.log(swiper);
    }

    onSlideChange() {
        console.log('slide change');
    }
}
