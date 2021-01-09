import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotLayoutComponent } from './bot-layout.component';

describe('BotLayoutComponent', () => {
  let component: BotLayoutComponent;
  let fixture: ComponentFixture<BotLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
