import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditorComponent } from './post-editor.component';
import { QuillModule } from "ngx-quill";

@NgModule({
  declarations: [PostEditorComponent],
  imports: [
    CommonModule,
    QuillModule
  ]
})
export class PostEditorModule { }
