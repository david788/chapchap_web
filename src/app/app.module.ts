import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReportedComponent } from './components/reported/reported.component';
import { HomeComponent } from './components/home/home.component';
import { IncidencesComponent } from './components/incidences/incidences.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AdviceComponent } from './components/advice/advice.component';
import { LoginComponent } from './components/login/login.component';
import { CustommaterialModule } from './custommaterial.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminsComponent } from './components/admins/admins.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FileUploadComponent } from './components/dropzone/fileupload.component';
import { DropZoneDirective } from './components/dropzone/dropzone.directive';
import { FileSizePipe } from './components/dropzone/filesize.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReportedComponent,
    HomeComponent,
    IncidencesComponent,
    ContactsComponent,
    AdviceComponent,
    LoginComponent, 
    AdminsComponent,
    SignupComponent,
    AboutusComponent,
    FileUploadComponent,
    DropZoneDirective,
    FileSizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustommaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
