import { Component, OnInit } from '@angular/core';
import { Quill } from 'quill';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {

  modules = {}

  constructor() {
    this.modules = {
      "emoji-shortname": true,
      "emoji-textarea": true,
      "emoji-toolbar": true,
      toolbar: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ align: [] }],

        ["clean"], // remove formatting button

        ["link", "image", "video"], // link and image, video
        ["emoji"]
      ]
    };
  }

  ngOnInit() {
  }

}
