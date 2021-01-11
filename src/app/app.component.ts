import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('box', [
            /* Состаяния */
            state('start', style({background: 'blue'})),
            state('end', style({
                background: 'red',
                width: '150px'
            })),
            state('special', style({
                background: 'green',
                borderRadius: '10px'
            })),
            transition('start => end', animate(1000)),
            transition('end => start', animate('800ms ease-in-out')),
            transition('special <=> *', [
                /* 1 step */
                /*Начигаем анимацию вот с этого стиля */
                style({
                    background: 'purple',
                    width: '200px',
                    height: '200px'
                }),
                /* указываем длительность анимации */
                /* style - это промежуточный результат (в принципе которого может не быть) */
                animate('1s', style({
                    background: 'black'
                })),
                animate('750ms')
            ]),
            // void => *
            transition(':enter', [
                style({opacity: '0'}),
                animate(1000)
            ]),
            // * => void
            transition(':leave', [
                style({opacity: '1', background: 'orange'}),
                animate(1000)
            ])
        ])
    ]
})
export class AppComponent {
    title = 'slider';
    boxState = 'start';
    visibleMode = true;

    boxAnimateHandler() {
        this.boxState = this.boxState === 'start' ? 'end' : 'start';
    }

    boxAnimateSpecialHandler() {
        this.boxState = 'special';
    }

    toggleVisible() {
        this.visibleMode = !this.visibleMode;
    }
}
