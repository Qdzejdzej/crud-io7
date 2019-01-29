import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },{
    path: 'showAll',
    component: ShowAllComponent
  },{
    path: 'product/add',
    component: AddProductComponent
  },{
    path: 'product/edit/:id',
    component: EditProductComponent
  },{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
