import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserViewComponent } from './user/view/view.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user/:id',
        component: UserViewComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'edit',
        component: UserEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sign-up',
        component: LoginComponent
    },
    // { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    {
        path: '**',
        redirectTo: ''
    }
];

export const routing = RouterModule.forRoot(appRoutes);