import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductRepository} from '../../model/product.repository';
// import {SharedState, MODES, SHARED_STATE} from '../shared-state-model';
import {NgForm} from '@angular/forms';
// import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  product: Product = new Product();
  originalProduct = new Product();
  lastId: number;
  editing = false;

  constructor(public repository: ProductRepository, private activeRoute: ActivatedRoute, private router: Router) {
    activeRoute.params.subscribe(params => {
      this.editing = params['mode'] === 'edit';
      const id = params['id'];
      if (id != null) {
        Object.assign(this.product, this.repository.getProduct(id) || new Product());
        Object.assign(this.originalProduct, this.product);
        console.log('Product:' + this.product.id);
      }
    });
  }
  /*
  constructor(private repository: ProductRepository, private activeRoute: ActivatedRoute, private router: Router) {
    this.editing = activeRoute.snapshot.params['mode'].path === 'edit';
    const id = activeRoute.snapshot.params['id'];
    if (id != null) {
      const name = activeRoute.snapshot.params['name'];
      const category = activeRoute.snapshot.params['category'];
      const price = activeRoute.snapshot.params['price'];

      if(name != null && category != null && price != null) {
        this.product.id = id;
        this.product.name = name;
        this.product.category = category;
        this.product.price = Number.parseFloat(price);
      } else {
        Object.assign(this.product, this.repository.getProduct(id) || new Product());
      }
      console.log('Product:' + this.repository.getProduct(id));
    }
  }*/

  /*constructor(private repository: ProductRepository, @Inject(SHARED_STATE) public stateEvents: Observable<SharedState>) {
    stateEvents
      .subscribe(update => {
        this.product = new Product();
        if (update.id !== undefined) {
          Object.assign(this.product, this.repository.getProduct(update.id));
        }
        this.editing = update.mode === MODES.EDIT;
      });
  }*/

  submitForm(form: NgForm) {
    if (form.valid) {
      this.repository.saveProduct(this.product);
      this.originalProduct = this.product;
      // this.product = new Product();
      // form.reset();
      this.router.navigateByUrl('/');
    }
  }

  //resetForm() {
    //this.product = new Product();
  //}

  ngOnInit() {
  }

}
