import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-post-editor',
  templateUrl: './file-post-editor.component.html',
  styleUrls: ['./file-post-editor.component.scss']
})
export class FilePostEditorComponent implements OnInit {
  @Input() text: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
