import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS} from '@angular/common/http'

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RaitingComponent } from './raiting/raiting.component';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderService } from 'app/order/order.service';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service';
import { LoginService } from 'app/security/login/login.service';
import { LoggedInGuard } from 'app/security/loggendin.guard';
import { LeaveOrderGuard } from 'app/order/leave-order.guard';

import { AuthInterceptor } from 'app/security/auth.interceptor';


@NgModule({
    declarations: [InputComponent, RadioComponent, RaitingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, SnackbarComponent,
            RaitingComponent, CommonModule, 
            FormsModule, ReactiveFormsModule]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders{
        return{
            ngModule: SharedModule,
            providers: [ ShoppingCartService, 
                         OrderService, 
                         RestaurantService, 
                         NotificationService, 
                         LoginService,
                         LoggedInGuard,
                         LeaveOrderGuard,
                         {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true} ]
        }
    }
}