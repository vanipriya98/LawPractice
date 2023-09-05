import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoplayerComponent } from './components/videoplayer/videoplayer.component';
import { HomeComponent } from './components/home/home.component';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ExamsComponent } from './components/exams/exams.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { RatingComponent } from './components/rating/rating.component';
import { VideoDashboardComponent } from './components/video-dashboard/video-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
   
    CourseContentComponent,
    DocumentsComponent,
    ExamsComponent,
    CertificateComponent,
    RatingComponent,
    VideoDashboardComponent,
    VideoplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
