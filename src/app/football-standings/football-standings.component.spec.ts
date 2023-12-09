import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballStandingsComponent } from './football-standings.component';

describe('FootballStandingsComponent', () => {
  let component: FootballStandingsComponent;
  let fixture: ComponentFixture<FootballStandingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootballStandingsComponent]
    });
    fixture = TestBed.createComponent(FootballStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
