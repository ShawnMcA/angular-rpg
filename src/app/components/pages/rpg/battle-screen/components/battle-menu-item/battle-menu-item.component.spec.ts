import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleMenuItemComponent } from './battle-menu-item.component';

describe('BattleMenuItemComponent', () => {
  let component: BattleMenuItemComponent;
  let fixture: ComponentFixture<BattleMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
