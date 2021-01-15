import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillPostEditorComponent } from './quill-post-editor.component';

describe('QuillPostEditorComponent', () => {
  let component: QuillPostEditorComponent;
  let fixture: ComponentFixture<QuillPostEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuillPostEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuillPostEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
