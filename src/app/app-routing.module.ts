import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { VideoplayerComponent } from './components/videoplayer/videoplayer.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ExamsComponent } from './components/exams/exams.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { RatingComponent } from './components/rating/rating.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
 
  {path:'videoplayer',component:VideoplayerComponent},
  {path:'home',component:HomeComponent,
  children: [
    {path: 'coursecontent',component:CourseContentComponent},
    {path: 'documents',component:DocumentsComponent},
    {path: 'exams',component:ExamsComponent},
    {path:'certificate',component:CertificateComponent},
    {path:'rating',component:RatingComponent}
    
  ]
},
  { path: '', component: HeaderComponent },


];
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
