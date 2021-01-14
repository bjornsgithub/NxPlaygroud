import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from './material.module';
import { ButtonMaterialComponent } from './button-material/button-material.component';
import { ComponentsComponent } from './components.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ButtonComponent, ButtonMaterialComponent, ComponentsComponent],
  exports:[
    ComponentsComponent,
    ButtonMaterialComponent
  ]

})

export class ComponentsModule {}
