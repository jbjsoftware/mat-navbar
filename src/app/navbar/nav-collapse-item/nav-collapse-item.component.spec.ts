import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCollapseItemComponent } from './nav-collapse-item.component';

describe('NavCollapseItemComponent', () => {
  let component: NavCollapseItemComponent;
  let fixture: ComponentFixture<NavCollapseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCollapseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCollapseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
