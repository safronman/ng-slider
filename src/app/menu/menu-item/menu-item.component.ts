import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

    constructor() {
    }

    @Input() isMob: boolean;
    @Input() title: string;
    @Input() icon: string;

    ngOnInit(): void {
    }

}
