import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetilePageComponent } from './detile-page.component';

describe('DetilePageComponent', () => {
  let component: DetilePageComponent;
  let fixture: ComponentFixture<DetilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
