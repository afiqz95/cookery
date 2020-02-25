import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavListPage } from './fav-list.page';

describe('FavListPage', () => {
  let component: FavListPage;
  let fixture: ComponentFixture<FavListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
