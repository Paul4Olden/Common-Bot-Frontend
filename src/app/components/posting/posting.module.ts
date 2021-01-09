import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostingRoutingModule } from './posting-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicationSettingsPanelComponent } from './components/publication-settings-panel/publication-settings-panel.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  imports: [
    CommonModule,
    PostingRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,

  ],
  declarations: [PublicationSettingsPanelComponent],
})
export class PostingModule {}
