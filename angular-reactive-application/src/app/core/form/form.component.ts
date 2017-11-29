import {Component, DoCheck, Inject, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductRepository} from '../../model/product.repository';
import {SharedState, MODES, SHARED_STATE} from '../shared-state-model';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/skipWhile';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  product: Product = new Product();
  lastId: number;
  editing = false;

  constructor(private repository: ProductRepository, @Inject(SHARED_STATE) public stateEvents: Observable<SharedState>) {
    stateEvents
      .skipWhile(state => state.mode == MODES.EDIT)
      .distinctUntilChanged((firstState, secondState) => firstState.mode === secondState.mode && firstState.id === secondState.id)
      .subscribe(update => {
        this.product = new Product();
        if (update.id !== undefined) {
          Object.assign(this.product, this.repository.getProduct(update.id));
        }
        this.editing = update.mode === MODES.EDIT;
      });
    /*stateEvents
      .map(state => state.mode === MODES.EDIT ? state.id : -1)
      .distinctUntilChanged()
      .filter(id => id !== 3)
      .subscribe(id => {
        this.editing = id !== -1;
        this.product = new Product();
        if (id !== -1) {
          Object.assign(this.product, this.repository.getProduct(id));
        }
      });*/
    /*stateEvents
      .map(state => new SharedState(state.mode, state.id === 5 ? 1 : state.id))
      .filter(state => state.id !== 3)
      .subscribe(update => {
      this.product = new Product();
      if (update.id !== undefined) {
        Object.assign(this.product, this.repository.getProduct(update.id));
      }
      this.editing = update.mode === MODES.EDIT;
    })*/
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.repository.saveProduct(this.product);
      this.product = new Product();
      form.reset();
    }
  }

  resetForm() {
    this.product = new Product();
  }

  /*ngDoCheck() {
    if (this.lastId !== this.state.id) {
      this.product = new Product();
      if (this.state.mode === MODES.EDIT) {
        Object.assign(this.product, this.repository.getProduct(this.state.id));
      }
      this.lastId = this.state.id;
    }
  }*/

  ngOnInit() {
  }

}
