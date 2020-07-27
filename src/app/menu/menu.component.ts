import {Component} from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    isMenuOpen = false;
    menuOpen = '../../assets/icons/menu-open.svg';
    menuClose = '../../assets/icons/menu-close.svg';

    constructor() {
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
