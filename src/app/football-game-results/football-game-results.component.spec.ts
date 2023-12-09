import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballGameResultsComponent } from './football-game-results.component';

describe('FootballGameResultsComponent', () => {
  let component: FootballGameResultsComponent;
  let fixture: ComponentFixture<FootballGameResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootballGameResultsComponent]
    });
    fixture = TestBed.createComponent(FootballGameResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
