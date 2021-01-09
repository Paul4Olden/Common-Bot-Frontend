import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotbadgeLibraryComponent } from './botbadge-library.component';

describe('BotbadgeLibraryComponent', () => {
  let component: BotbadgeLibraryComponent;
  let fixture: ComponentFixture<BotbadgeLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotbadgeLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotbadgeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
