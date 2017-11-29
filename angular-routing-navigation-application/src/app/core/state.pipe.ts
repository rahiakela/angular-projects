import { Pipe, PipeTransform } from '@angular/core';
import {ProductRepository} from '../model/product.repository';
import {MODES, SharedState} from './shared-state-model';

@Pipe({
  name: 'formatState',
  pure: true
})
export class StatePipe implements PipeTransform {

  constructor(private repository: ProductRepository) {}

  transform(value: any): string {
    if (value instanceof SharedState) {
      const state = value as SharedState;
      return MODES[state.mode] + (state.id !== undefined ? ` ${this.repository.getProduct(state.id).name}` : '');
    } else {
      return '<No Data>';
    }
  }

}
