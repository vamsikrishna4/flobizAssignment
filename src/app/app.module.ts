import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent, SuccessDialog } from "./app.component";
import { BusinessDetailsComponent } from "./business-details/business-details.component";
import { InvoicePreviewComponent } from "./invoice-preview/invoice-preview.component";
import { CreateItemComponent } from "./create-item/create-item.component";
import { CreatePartyComponent } from "./create-party/create-party.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    BusinessDetailsComponent,
    InvoicePreviewComponent,
    CreateItemComponent,
    CreatePartyComponent,
    SuccessDialog,
  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreatePartyComponent, CreateItemComponent, SuccessDialog],
})
export class AppModule {}
