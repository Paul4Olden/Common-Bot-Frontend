import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotLayoutComponent } from './bot-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BotInformationComponent } from './bot-information/bot-information.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { QuillModule } from "ngx-quill";
import { PostEditorComponent } from './../../components/post-editor/post-editor.component';

@NgModule({
  declarations: [
    BotLayoutComponent,
    SidebarComponent,
    BotInformationComponent,
    PostEditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    QuillModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    QuillModule
  ]
})
export class BotLayoutModule { }
