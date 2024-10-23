import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgClass, MenubarModule, ImageModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  
  items: MenuItem[] = [];

  ngOnInit() {

    // elementos del menú  
    this.items = [
      {
        label: 'Inicio',
        icon: '',
        routerLink: '/'
      },
      {
        label: 'Tienda',
        icon: '',
        routerLink: '/shop'
      },
      {
        label: 'Sobre nosotros',
        icon: '',
        routerLink: '/about-us'
      }
    ];
}
}
