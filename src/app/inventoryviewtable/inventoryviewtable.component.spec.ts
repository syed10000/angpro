import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryviewtableComponent } from './inventoryviewtable.component';

describe('InventoryviewtableComponent', () => {
  let component: InventoryviewtableComponent;
  let fixture: ComponentFixture<InventoryviewtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryviewtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryviewtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
