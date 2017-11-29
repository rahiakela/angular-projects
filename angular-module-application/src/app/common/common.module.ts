import { NgModule } from '@angular/core';
import {ModelModule} from '../model/model.module';
import {DiscountService} from '../common/services/discount-service';
import {PaAddTaxPipe} from '../common/pipes/addTax-pipe';
import {PaAttrDirective} from '../common/directives/attr. directive';
import {PaCategoryFilterPipe} from '../common/pipes/category-filter-pipe';
import {PaCellColor} from '../common/directives/cell-color-directive';
import {PaCellColorSwitcher} from '../common/directives/cell-color-switcher-directive';
import {PaDiscountPipe} from '../common/pipes/discount-pipe';
import {PaDiscountAmountDirective} from '../common/directives/discount-amount-directive';
import {PaIteratorDirective} from '../common/directives/iterator.directive';
import {PaStructureDirective} from '../common/directives/structure.directive';
import {PaModel} from '../common/directives/twoway.directive';

@NgModule({
  imports: [
    ModelModule
  ],
  declarations: [
    PaAddTaxPipe,
    PaAttrDirective,
    PaCategoryFilterPipe,
    PaCellColor,
    PaCellColorSwitcher,
    PaDiscountPipe,
    PaDiscountAmountDirective,
    PaIteratorDirective,
    PaStructureDirective,
    PaModel
  ],
  exports: [
    PaAddTaxPipe,
    PaAttrDirective,
    PaCategoryFilterPipe,
    PaCellColor,
    PaCellColorSwitcher,
    PaDiscountPipe,
    PaDiscountAmountDirective,
    PaIteratorDirective,
    PaStructureDirective,
    PaModel
  ],
  providers: [DiscountService]
})
export class CommonModule { }
