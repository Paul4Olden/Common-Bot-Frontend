import { element } from 'protractor';
import { QuillPostEditorComponent } from './../quill-post-editor/quill-post-editor.component';
import { Component, Renderer2, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Quill } from 'quill';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'

type PostType = 'Image' | 'Video' | 'File' | 'Audio' | 'Text' | 'Header' | 'Poll' | 'Keyboard';

interface PostHeader {
  type: PostType;
  title: string;
  position: number;
}

interface PostText {
  type: PostType;
  text: string;
  position: number;
}

interface PostFile {
  type: PostType;
  file: File;
  position: number;
}

interface PostPoll {
  type: PostType;
  poll: any;
  position: number;
}

interface PostKeyboard {
  type: PostType;
  keyboard: any;
  position: number;
}

type Post = PostHeader | PostText | PostFile | PostPoll | PostKeyboard;

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {
  elements: Post[] = [{
    type: 'Header',
    title: '',
    position: 0
  }];
  currentPosition: number = 1;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  addElement(element: Post) {
    console.log(element);
    this.elements.push(element);
    this.currentPosition++;
  }
}
