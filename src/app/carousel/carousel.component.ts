import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

    slides = [
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9d2MY0fadRxqgBqDGTYlQlhCBndtaoVAevw&usqp=CAU'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSA34oiyqtiA5wrqpiiQ5_mmM_hBS7Biqd0vg&usqp=CAU'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRS114Y6xOcOfbXIq73mPyyUF8NAlWlOHEfCw&usqp=CAU'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1yLFBKOxgm8Cx0wSgfefctXe7xqnFr0KMUA&usqp=CAU'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXEICsxf3c2gFTVjn3VxtWp-q8nw1fMfd2xA&usqp=CAU'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_uk9sbTaUnMX4hmJ7EBsQ5nOAzyLrBAuBw&usqp=CAU'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ14yjdiRwrd-vL0TM-x-CUifGwTgx0ctozgQ&usqp=CAU'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF2j_aV4vhK3hVk4DUki810z_SikHtngwDqQ&usqp=CAU'}
    ];

    currentSlide = 0;
    screenSlidesCount = 4;
    nextBtnDisabled = false;
    prevBtnDisabled = true;

    constructor() {
    }

    ngOnInit(): void {
        if (this.slides.length <= this.screenSlidesCount) {
            this.nextBtnDisabled = true;
        }
    }

    onPreviousClick() {
        this.nextBtnDisabled = false;
        this.currentSlide = this.currentSlide - 1;
        if (this.currentSlide === 0) {
            this.prevBtnDisabled = true;
        }
    }

    onNextClick() {
        this.prevBtnDisabled = false;
        this.currentSlide = this.currentSlide + 1;

        if (this.currentSlide === this.slides.length - this.screenSlidesCount) {
            this.nextBtnDisabled = true;
        }
    }
}
