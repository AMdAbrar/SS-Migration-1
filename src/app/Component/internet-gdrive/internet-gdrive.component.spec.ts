import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetGdriveComponent } from './internet-gdrive.component';

describe('InternetGdriveComponent', () => {
  let component: InternetGdriveComponent;
  let fixture: ComponentFixture<InternetGdriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternetGdriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternetGdriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
