import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
const MaterialComponents =  [
  MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule { }
