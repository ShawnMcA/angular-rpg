import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleMenuActionSelectionComponent } from './battle-menu-action-selection.component';

describe('BattleMenuActionSelectionComponent', () => {
  let component: BattleMenuActionSelectionComponent;
  let fixture: ComponentFixture<BattleMenuActionSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleMenuActionSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleMenuActionSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
