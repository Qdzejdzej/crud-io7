import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NotFoundComponent } from './not-found/not-found.component'

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
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
