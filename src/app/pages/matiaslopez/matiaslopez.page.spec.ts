import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatiaslopezPage } from './matiaslopez.page';

describe('MatiaslopezPage', () => {
  let component: MatiaslopezPage;
  let fixture: ComponentFixture<MatiaslopezPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatiaslopezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
