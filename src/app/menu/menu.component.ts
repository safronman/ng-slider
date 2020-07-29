import {Component, HostBinding} from '@angular/core';

type MobMenuItemType = {
    title: string
    icon: string
};

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    isMenuOpen = false;
    menuOpen = '../../assets/icons/menu-open.svg';
    menuClose = '../../assets/icons/menu-close.svg';

    mobItems: MobMenuItemType[] = [
        {title: 'Главная', icon: 'home-icon.svg'},
        {title: 'Биты', icon: 'beats-icon.svg'},
        {title: 'Лицензии и цены', icon: 'license-price-icon.svg'},
        {title: 'Товары', icon: 'goods-icon.svg'},
        {title: 'Услуги', icon: 'services-icon.svg'},
        {title: 'Контакты', icon: 'contacts-icon.svg'}
    ];

    constructor() {
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
