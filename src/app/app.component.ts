import { Component } from '@angular/core';
import { MenuService } from '../app/services/menu.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resto-cafe';

  restoDetails: any;
  cartList: any;
  constructor(public menuService: MenuService,) { }

  ngOnInit(): void {
    this.restoDetails = [];
    this.cartList = [];
    this.menuList();
  }
  menuList() {
    this.menuService.getMenu().subscribe((response: any) => {
      this.restoDetails = response[0];
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
    });
  }
  addToCart(item: any) {
    this.cartList.push(item);
    console.log(this.cartList);
  }
  removeToCart(item: any) {
    const index: number = this.cartList.indexOf(item);
    if (index !== -1) {
      this.cartList.splice(index, 1);
    }
    console.log(this.cartList);
  }
  getCount(item: any): number {
    let count = 0;
    this.cartList.forEach((element: any) => {
      if (element.dish_id == item.dish_id) {
        count++;
      }
    });
    return count;
  }
}
