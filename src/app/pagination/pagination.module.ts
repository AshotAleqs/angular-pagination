import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { PaginationComponent } from './pagination.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ PaginationComponent],
  exports: [ PaginationComponent]
})
export class PaginationModule {
  static forRoot(): ModuleWithProviders<PaginationModule> {
    return { ngModule: PaginationModule, providers: [] };
  }
}
