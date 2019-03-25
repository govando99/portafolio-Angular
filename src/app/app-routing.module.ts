import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { About1Component } from './pages/about1/about1.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {path: 'home', component: GaleriaComponent },
  {path: 'about', component: AboutComponent },
  {path: 'item/:id', component: ItemComponent },
  {path: 'contact', component: ContactoComponent },
  {path: 'about1', component: About1Component},
  {path: 'search/:termino', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
