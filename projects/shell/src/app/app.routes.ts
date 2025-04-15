import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: () => import('shopping/ProductsModule').then(m => m.ProductsModule)},
    // {path: 'payment', loadChildren: () => import('payment/PaymentModule').then(m => m.PaymentModule)},
    {path:'payment', loadComponent: () => import('payment/PaymentComponent').then(m => m.PaymentComponent)}
];
