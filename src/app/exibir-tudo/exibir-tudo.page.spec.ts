import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExibirTudoPage } from './exibir-tudo.page';

describe('ExibirTudoPage', () => {
  let component: ExibirTudoPage;
  let fixture: ComponentFixture<ExibirTudoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirTudoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
