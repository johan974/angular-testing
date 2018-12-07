import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService( null); // we fake the http
    component = new TodosComponent( service);
  });

  it('fill component via the gettodos', () => {
    const todos = [ 1, 2, 3];
    spyOn( service, 'getTodos').and.callFake( () => {
      return Observable.from( [  todos ]); // 1 can also be object { id: 1, value: xxxx }
    });

    component.ngOnInit();

    expect( component.todos.length).toBe( 3);
    expect( component.todos).toBe( todos);
  });

  it('expect a call to the add method save the changes', () => {
    const spy = spyOn( service, 'add').and.callFake( t => {
      return Observable.empty();
    });

    component.add();

    expect( spy).toHaveBeenCalled();
  });

  // Manier 1
  it('expect add to return id from server', () => {
    const todo = { id: 1};
    const spy = spyOn( service, 'add').and.callFake( t => {
      return Observable.from( [ todo ]);
    });

    component.add();

    expect( component.todos.indexOf( todo)).toBeGreaterThan( -1);
  });

  // Manier 2
  it('expect add to return id from server2', () => {
    const todo = { id: 1};
    const spy = spyOn( service, 'add').and.returnValue( Observable.from( [ todo ]));

    component.add();

    expect( component.todos.indexOf( todo)).toBeGreaterThan( -1);
  });

  it('expect error message text to be put in the message property', () => {
    const errorMessage = 'error message tester1';
    const spy = spyOn( service, 'add').and.returnValue( Observable.throw( errorMessage));

    component.add();

    expect( component.message).toBe( errorMessage);
  });
});
