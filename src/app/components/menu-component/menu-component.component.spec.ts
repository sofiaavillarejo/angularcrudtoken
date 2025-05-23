import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponentComponent } from './menu-component.component';

describe('MenuComponentComponent', () => {
  let component: MenuComponentComponent;
  let fixture: ComponentFixture<MenuComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
