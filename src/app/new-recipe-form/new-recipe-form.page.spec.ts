import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewRecipeFormPage } from './new-recipe-form.page';

describe('NewRecipeFormPage', () => {
  let component: NewRecipeFormPage;
  let fixture: ComponentFixture<NewRecipeFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRecipeFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewRecipeFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
