import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule,
  MatInputModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatProgressSpinnerModule } from '@angular/material';
import { ShowAllComponent } from './show-all.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShowAllComponent', () => {
  let component: ShowAllComponent;
  let fixture: ComponentFixture<ShowAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllComponent ],
      imports: [ MatProgressSpinnerModule, MatPaginatorModule, MatTableModule, MatSnackBarModule, RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
