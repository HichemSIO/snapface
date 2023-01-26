import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.gard';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';



const routes: Routes = [
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent, canActivate:[AuthGuard]},
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: 'create', component: NewFaceSnapComponent,canActivate:[AuthGuard] },
  { path: '', component: LandingPageComponent,canActivate:[AuthGuard] }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })



export class AppRoutingModule {}