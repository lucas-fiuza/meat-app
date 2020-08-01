import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {map} from 'rxjs/operators';
import { MEAT_API } from "app/app.api";


@Injectable()
export class OrderService{

    constructor(private cartService: ShoppingCartService,
                private http: HttpClient){}

    cartItems(): CartItem[]{
        return this.cartService.items;
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item);
    }

    remove(item: CartItem){
        this.cartService.removeItem(item);
    }

    clear(){
        this.cartService.clear();
    }

    itemsValue(): number{
        return this.cartService.total();
    }

    checkOrder(order: Order): Observable<string>{

        return this.http
                .post<Order>(`${MEAT_API}/orders`,order)
                .pipe(
                    map(order => order.id)
                )
    }

}