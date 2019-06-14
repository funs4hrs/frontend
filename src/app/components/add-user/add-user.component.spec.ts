import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from "@angular/cdk/drag-drop";
import { AddUserComponent } from './add-user.component';
import { HttpClient } from '@angular/common/http';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserComponent, CdkDropList],
      imports: [],
      providers: [{provide: HttpClient}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
