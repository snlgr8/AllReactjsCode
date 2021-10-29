import { AuthGuard } from './../guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MainPage,
    children: [{
      path: 'customer',
      loadChildren: () => import('../customer/customer.module').then(m => m.CustomerPageModule),
      canLoad: [AuthGuard]
    },
    {
      path: 'items',
      loadChildren: () => import('../items/items.module').then(m => m.ItemsPageModule),
      canLoad: [AuthGuard]
    },
    {
      path: 'orders',
      loadChildren: () => import('../orders/orders.module').then(m => m.OrdersPageModule),
      canLoad: [AuthGuard]
    },
    {
      path: '',
      redirectTo: '/main/tabs/items',
      pathMatch: 'full'
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
