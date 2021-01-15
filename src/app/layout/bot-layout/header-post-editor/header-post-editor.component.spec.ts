import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPostEditorComponent } from './header-post-editor.component';

describe('HeaderPostEditorComponent', () => {
  let component: HeaderPostEditorComponent;
  let fixture: ComponentFixture<HeaderPostEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPostEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPostEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
