import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayFieldComponent } from '@views/play-field/play-field.component';
import { HomeComponent } from '@views/home/home.component';
import { NotfoundComponent } from '@views/notfound/notfound.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},

    {path: 'playField', component: PlayFieldComponent},
    
    { path: '404', component: NotfoundComponent },
    { path: '**', redirectTo: '/404', pathMatch: 'full' },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
