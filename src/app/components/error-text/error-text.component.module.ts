import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ErrorTextComponent } from "./error-text.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [ErrorTextComponent],
  declarations: [ErrorTextComponent],
  providers: []
})
export class ErrorTextComponentModule {}
