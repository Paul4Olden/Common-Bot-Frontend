import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MainLayoutComponent } from './main-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserpanelComponent } from './userpanel/userpanel.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    NavbarComponent,
    UserpanelComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatProgressBarModule,
  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatProgressBarModule,
  ],
})
export class MainLayoutModule {}
