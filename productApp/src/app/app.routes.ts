import { Routes } from '@angular/router';
import { ProductslistComponent } from './productslist/productslist.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { NotFoundError } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
    {
        path:'',
        component: ProductslistComponent ,
        title: 'Produts List'
    },
    {
        path:'app-singleproduct/:id',
        component: SingleproductComponent ,
        title: 'Produt Single Page'
    },
    {
        path:'app-register',
        component: RegisterComponent,
        title: 'Register'
    },
    {
        path:'app-login',
        component: LoginComponent,
        title: 'Login'

    },
    {
        path:'app-cart',
        component:CartComponent,
        title: 'Cart'
    },
    {
        path:'app-counter',
        component: CounterComponent,
        title: 'Counter'
    },
    {
        path:'**',
        component: NotFoundError
    }
];
