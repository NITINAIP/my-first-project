import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2ByIdComponent } from './page2-by-id.component';

describe('Page2ByIdComponent', () => {
  let component: Page2ByIdComponent;
  let fixture: ComponentFixture<Page2ByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page2ByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page2ByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
