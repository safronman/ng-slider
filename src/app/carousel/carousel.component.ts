import { Component, HostListener, OnInit } from '@angular/core';
import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css'],
    animations: [
        trigger('carousel', [
            state('start', style({border: '2px solid red'})),
            state('next', style({border: '2px solid green'})),
            state('prev', style({border: '2px solid purple'})),
            // void => *
            transition(':enter', [
                style({
                    opacity: '0',
                    transform: 'scale(0.1)'
                }),
                animate(500)
            ]),
            // * => void
            // transition(':leave', [
            //     style({
            //         opacity: '0',
            //         // transform: 'scale(0.9)'
            //     }),
            //     animate(0)
            // ]),
            transition('start => next', [
                style({
                    // opacity: '0',
                    transform: 'translateX(100%)'
                }),
                animate(500)
            ]),
            transition('start => prev', [
                style({
                    transform: 'translateX(-100%)'
                }),
                animate(500)
            ])

        ])
    ]
})
export class CarouselComponent implements OnInit {

    visibleState = 'start';

    slides = [
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9d2MY0fadRxqgBqDGTYlQlhCBndtaoVAevw&usqp=CAU'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSA34oiyqtiA5wrqpiiQ5_mmM_hBS7Biqd0vg&usqp=CAU'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRS114Y6xOcOfbXIq73mPyyUF8NAlWlOHEfCw&usqp=CAU'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1yLFBKOxgm8Cx0wSgfefctXe7xqnFr0KMUA&usqp=CAU'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXEICsxf3c2gFTVjn3VxtWp-q8nw1fMfd2xA&usqp=CAU'},
        // {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_uk9sbTaUnMX4hmJ7EBsQ5nOAzyLrBAuBw&usqp=CAU'},
        // {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ14yjdiRwrd-vL0TM-x-CUifGwTgx0ctozgQ&usqp=CAU'},
        // {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF2j_aV4vhK3hVk4DUki810z_SikHtngwDqQ&usqp=CAU'}
    ];

    currentSlide = 0;
    slidesToShow = 4;
    nextBtnDisabled = false;
    prevBtnDisabled = true;
    screenWidth: number;

    constructor() {
        this.onResize();
    }

    ngOnInit() {
    }

    @HostListener('window:resize', ['$event'])
    onResize(event?): void {
        this.screenWidth = window.innerWidth;
        this.currentSlide = 0;
        this.nextBtnDisabled = false;
        this.prevBtnDisabled = true;
    }

    onPreviousClick(): void {
        this.visibleState = 'prev';
        this.nextBtnDisabled = false;
        this.currentSlide = this.currentSlide - 1;
        if (this.currentSlide === 0) {
            this.prevBtnDisabled = true;
        } else {
            setTimeout(() => {
                this.visibleState = 'start';
            }, 500);
        }
    }

    onNextClick(): void {
        this.visibleState = 'next';
        this.prevBtnDisabled = false;
        this.currentSlide = this.currentSlide + 1;

        if (this.currentSlide === this.slides.length - this.slidesToShow) {
            this.nextBtnDisabled = true;
        } else {
            setTimeout(() => {
                this.visibleState = 'start';
            }, 500);
        }
    }

    switchNextPoint(slideIndex: number): void {
        this.currentSlide = slideIndex;
    }

    animationStart(event: AnimationEvent) {
        console.log('animationStart: ', event);
    }

    animationEnd(event: AnimationEvent) {
        console.log('animationEnd: ', event);
    }
}
