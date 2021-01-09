import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent, RegisterComponent } from './components';
import { QuillModule } from "ngx-quill";
import { DashboardLayoutModule } from './layout/dashboard-layout/dashboard-layout.module';
import { MainLayoutModule } from './layout/main-layout/main-layout.module';
import { BotLayoutModule } from './layout/bot-layout/bot-layout.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    QuillModule.forRoot(),
    DashboardLayoutModule,
    MainLayoutModule,
    BotLayoutModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
