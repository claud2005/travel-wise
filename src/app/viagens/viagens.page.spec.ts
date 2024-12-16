import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViagensPage } from './viagens.page';

describe('ViagensPage', () => {
  let component: ViagensPage;
  let fixture: ComponentFixture<ViagensPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
