import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddressComponent } from './address/address.component';
import { FeedbackComponent } from './feedback/feedback.component';


const routes: Routes = [
  {
    path : '', redirectTo: 'home', pathMatch: 'full'    //redirecting route
  },
  {
    path : 'home', component: HomeComponent
  },
  {
    path : 'about', component:   AboutComponent 
  },
  
  {
    path : 'contact',
    children : [                                                // children route
      {
        path : '',  component: ContactComponent
      },
      {
        path : 'address', component: AddressComponent
      },
      {
        path : 'feedback', component: FeedbackComponent 
      }
    ],
    
  },
  {
    path : '**', component: NotfoundComponent    // wildcard route
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
