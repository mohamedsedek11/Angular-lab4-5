import { Routes } from '@angular/router';
import { HalloComponent } from './hallo/hallo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path:'',
        component: HalloComponent,
        title: 'Hallo'
    },
    {
        path: 'app-login',
        component: LoginComponent,
        title: 'login' 
    },
    {
        path: 'app-register',
        component: RegisterComponent,
        title:'Register'
    }
];
