import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@bangular/core/testing';
import { By }           from '@bangular/platform-browser';
import { DebugElement } from '@bangular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.textContent).toMatch(/bangular/i,
      '<h1> should say something about "Bangular"');
  });
});
