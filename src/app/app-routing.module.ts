import { BotInformationComponent } from './layout/bot-layout/bot-information/bot-information.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutLayoutComponent } from './layout/about-layout/about-layout.component';
import { BotLayoutComponent } from './layout/bot-layout/bot-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PostEditorComponent } from './layout/bot-layout/post-editor/post-editor.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard', 
    component: MainLayoutComponent,
    children: [ {path: '', component: DashboardLayoutComponent} ]
  },
  { 
    path: 'login', 
    component: MainLayoutComponent,
    children: [ {path: '', component: LoginComponent} ]
  },
  { 
    path: 'register', 
    component: MainLayoutComponent,
    children: [ {path: '', component: RegisterComponent} ]
  },
  {
    path: 'bot/:botId', 
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'statistic', pathMatch: 'full' },
      { path: 'statistic',  component: BotLayoutComponent, children: [{ 
          path: '', component: BotInformationComponent
      }]
    }]
  },
  {
    path: 'bot/:botId', 
    component: MainLayoutComponent,
    children: [{ path: 'new-post', component: BotLayoutComponent, children: [{
      path: '', component: PostEditorComponent
    }]
  }]
  },
  {
    path: 'about', 
    component: MainLayoutComponent,
    children: [ {path: '', component: AboutLayoutComponent} ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
