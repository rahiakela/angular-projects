import {Component, Inject, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductRepository} from '../../model/product.repository';
import {SharedState, MODES, SHARED_STATE} from '../shared-state-model';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  product: Product = new Product();
  lastId: number;
  editing = false;

  constructor(private repository: ProductRepository, @Inject(SHARED_STATE) public stateEvents: Observable<SharedState>) {
    stateEvents
      .subscribe(update => {
        this.product = new Product();
        if (update.id !== undefined) {
          Object.assign(this.product, this.repository.getProduct(update.id));
        }
        this.editing = update.mode === MODES.EDIT;
      });
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

  ngOnInit() {
  }

}
