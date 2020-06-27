import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReportedComponent } from './components/reported/reported.component';
import { IncidencesComponent } from './components/incidences/incidences.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AdviceComponent } from './components/advice/advice.component';
import { AdminsComponent } from './components/admins/admins.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';


const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'home', component: HomeComponent },
  {path: 'reported', component: ReportedComponent},
  {path: 'incidences', component : IncidencesComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'advice', component: AdviceComponent},
  {path: 'admins', component: AdminsComponent},
  {path: 'aboutus', component: AboutusComponent},
  {
    path: '', component: LoginComponent

  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
