// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './authentication/authguard/authguard-guard';
import { MainLayout } from './layout/main-layout/main-layout';
import { Login } from './authentication/login/login';
export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
        canActivate: [authGuard],
        loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];