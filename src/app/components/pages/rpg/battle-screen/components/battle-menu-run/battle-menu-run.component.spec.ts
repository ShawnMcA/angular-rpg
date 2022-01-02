import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleMenuRunComponent } from './battle-menu-run.component';

describe('BattleMenuRunComponent', () => {
  let component: BattleMenuRunComponent;
  let fixture: ComponentFixture<BattleMenuRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleMenuRunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleMenuRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
