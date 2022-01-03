import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlePlayerContainerComponent } from './battle-player-container.component';

describe('BattlePlayerContainerComponent', () => {
  let component: BattlePlayerContainerComponent;
  let fixture: ComponentFixture<BattlePlayerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattlePlayerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlePlayerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
