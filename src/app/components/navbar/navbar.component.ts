import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  products: {
    name: string,
    quantity: number,
    promo?: string,
    price: number
  }[] = [{
    name: "Blue Shirt",
    quantity: 100,
    promo: "Buy 3, 35% Off",
    price: 100.00
  },
  {
    name: "Black Pants",
    quantity: 100,
    price: 100.00
  },
  {
    name: "Scarf",
    quantity: 100,
    price: 100.00
  },
  {
    name: "Hat",
    quantity: 100,
    price: 100.00
  },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
