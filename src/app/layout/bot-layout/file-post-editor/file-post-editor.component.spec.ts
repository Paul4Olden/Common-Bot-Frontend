import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePostEditorComponent } from './file-post-editor.component';

describe('FilePostEditorComponent', () => {
  let component: FilePostEditorComponent;
  let fixture: ComponentFixture<FilePostEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilePostEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilePostEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
