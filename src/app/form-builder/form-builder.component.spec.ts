import { FormBuilderComponent } from './form-builder.component';
import { FormBuilder, Validators } from '@angular/forms';
import {TodoFormComponent} from "../04-forms/todo-form.component";

describe('FormBuilderComponent', () => {
  let component: FormBuilderComponent;

  beforeEach(() => {
    component = new TodoFormComponent( new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
