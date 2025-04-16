import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadComponent: () => import('shopping/ProductsComponent').then(m => m.ProductsComponent)},
    {path:'payment', loadComponent: () => import('payment/PaymentComponent').then(m => m.PaymentComponent)}
];
