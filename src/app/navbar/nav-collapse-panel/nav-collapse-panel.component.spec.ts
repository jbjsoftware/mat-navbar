import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCollapsePanelComponent } from './nav-collapse-panel.component';

describe('NavCollapsePanelComponent', () => {
  let component: NavCollapsePanelComponent;
  let fixture: ComponentFixture<NavCollapsePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCollapsePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCollapsePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
