import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditProductComponent } from './edit-product.component';
import { FormProductComponent } from '../form-product/form-product.component'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductComponent, FormProductComponent ],
      imports: [ RouterModule, RouterModule.forRoot([]), BrowserAnimationsModule, HttpClientTestingModule, MatInputModule, MatListModule, MatSnackBarModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
