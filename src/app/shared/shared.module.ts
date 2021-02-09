import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DragScrollModule } from 'ngx-drag-scroll';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { BrandsComponent } from './brands/brands.component';
import { FilterComponent } from './filter/filter.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    ButtonComponent,
    BrandsComponent,
    FilterComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    DragScrollModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatExpansionModule,
    ReactiveFormsModule,
  ],
  exports: [
    BreadcrumbComponent,
    ButtonComponent,
    BrandsComponent,
    FilterComponent,
    InputComponent,
    MatExpansionModule,
  ],
})
export class SharedModule {}
