import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
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
import { PostEditorComponent } from './post-editor/post-editor.component';
import { QuillPostEditorComponent } from './quill-post-editor/quill-post-editor.component';
import { HeaderPostEditorComponent } from './header-post-editor/header-post-editor.component';
import { FilePostEditorComponent } from './file-post-editor/file-post-editor.component';

@NgModule({
  declarations: [
    BotLayoutComponent,
    SidebarComponent,
    BotInformationComponent,
    PostEditorComponent,
    QuillPostEditorComponent,
    HeaderPostEditorComponent,
    FilePostEditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    QuillModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    QuillModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class BotLayoutModule { }
