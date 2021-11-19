import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarScrimComponent } from './navbar-scrim.component';

describe('NavbarScrimComponent', () => {
  let component: NavbarScrimComponent;
  let fixture: ComponentFixture<NavbarScrimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarScrimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarScrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
