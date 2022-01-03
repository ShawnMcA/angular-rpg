import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleEnemyContainerComponent } from './battle-enemy-container.component';

describe('BattleEnemyContainerComponent', () => {
  let component: BattleEnemyContainerComponent;
  let fixture: ComponentFixture<BattleEnemyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleEnemyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleEnemyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
