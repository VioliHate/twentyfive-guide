import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTablePageComponent } from './accordion-table-page.component';

describe('AccordionTablePageComponent', () => {
  let component: AccordionTablePageComponent;
  let fixture: ComponentFixture<AccordionTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionTablePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
