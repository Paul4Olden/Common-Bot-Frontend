import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { SearchbotsortComponent } from './searchbotsort/searchbotsort.component';
import { SearchbotsComponent } from './searchbots/searchbots.component';
import { BotbadgeComponent } from './botbadge/botbadge.component';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { BotbadgeLibraryComponent } from './botbadge-library/botbadge-library.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    SearchbotsComponent,
    SearchbotsortComponent,
    BotbadgeComponent,
    BotbadgeLibraryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
})
export class DashboardLayoutModule { }
