import { Component, Renderer2, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Quill } from 'quill';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'

@Component({
  selector: 'app-quill-post-editor',
  templateUrl: './quill-post-editor.component.html',
  styleUrls: ['./quill-post-editor.component.scss']
})
export class QuillPostEditorComponent implements OnInit {
  blurred = false;
  focused = false;
  currentSymbols: number = 0;
  @ViewChild('toolbar') toolbar: ElementRef;
  @ViewChild('editor') editor: ElementRef;
  listenerFn: () => void;

  created(event: Quill) {
  }

  changedEditor(event: any) {
    this.currentSymbols = event.text.length;
  }

  focus($event) {
    this.focused = true
    this.blurred = false
  }

  blur($event) {
    this.focused = false
    this.blurred = true
  }

  constructor(private renderer: Renderer2) {
  
  }

  ngOnInit() {
    this.listenerFn = this.renderer.listen('window', 'mousedown',(e:Event)=>{
      if (!this.editor.nativeElement.contains(e.target) && !this.toolbar.nativeElement.contains(e.target)) {
        this.blur(e.target)
      }
    });
  }

  ngOnDestroy(): void {
    this.listenerFn();
  }
}
