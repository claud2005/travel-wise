import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarviagensPage } from './criarviagens.page';

describe('CriarviagensPage', () => {
  let component: CriarviagensPage;
  let fixture: ComponentFixture<CriarviagensPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarviagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
