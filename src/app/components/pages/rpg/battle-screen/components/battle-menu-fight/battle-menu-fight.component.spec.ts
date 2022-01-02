import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleMenuFightComponent } from './battle-menu-fight.component';

describe('BattleMenuFightComponent', () => {
  let component: BattleMenuFightComponent;
  let fixture: ComponentFixture<BattleMenuFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleMenuFightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleMenuFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
