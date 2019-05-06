import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShopSharedLibsModule, ShopSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ShopSharedLibsModule, ShopSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ShopSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShopSharedModule {
  static forRoot() {
    return {
      ngModule: ShopSharedModule
    };
  }
}
