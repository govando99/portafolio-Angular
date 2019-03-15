import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


const routes: Routes = [
  {path: 'home', component: GaleriaComponent },
  {path: 'about', component: AboutComponent },
  {path: 'item', component: ItemComponent },
  {path: 'contact', component: ContactoComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
