import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
