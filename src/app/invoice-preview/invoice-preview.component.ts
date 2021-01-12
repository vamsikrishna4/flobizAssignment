import { Component, OnInit, Inject, DoCheck } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { MatDialog, MatDialogRef, MatTableDataSource } from "@angular/material";
import { CreatePartyComponent } from "../create-party/create-party.component";
import { CreateItemComponent } from "../create-item/create-item.component";
import { DataTransferService } from "../data-transfer.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-invoice-preview",
  templateUrl: "./invoice-preview.component.html",
  styleUrls: ["./invoice-preview.component.scss"],
})
export class InvoicePreviewComponent implements OnInit, DoCheck {
  invoiceForm: FormGroup;
  displayedColumns: string[] = ["name", "quantity", "rate", "amount"];
  itemsList: Item[] = [];
  dataSource = new MatTableDataSource(this.itemsList);
  billingParty;
  businessDetails;
  totalAmount = 0;
  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private dataTransferService: DataTransferService
  ) {
    this.subscription = this.dataTransferService
      .getMessage()
      .subscribe((message) => {
        if (message) {
          this.businessDetails = message;
        }
      });
  }

  ngOnInit() {
    this.invoiceForm = this.fb.group({
      invoiceNo: [""],
      invoiceDate: [""],
    });
  }

  ngDoCheck() {
    if (
      !this.invoiceForm.invalid &&
      this.businessDetails &&
      this.billingParty &&
      this.dataSource.data.length > 0
    )
      this.dataTransferService.sendFlag(false);
    else this.dataTransferService.sendFlag(true);
  }
  addParty() {
    const dialogRef = this.dialog.open(CreatePartyComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.billingParty = result.data;
    });
  }
  addItem() {
    const dialogRef = this.dialog.open(CreateItemComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.itemsList.push(result.data);
        this.dataSource = new MatTableDataSource(this.itemsList);
        this.totalAmount =
          this.totalAmount + result.data.quantity * result.data.rate;
      }
    });
  }
  deleteRow(row) {
    const index = this.dataSource.data.indexOf(row);
    this.dataSource.data.splice(index, 1);
    this.totalAmount = this.totalAmount - row.quantity * row.rate;
    this.dataSource._updateChangeSubscription();
  }
}

export interface Item {
  name: string;
  quantity: number;
  rate: number;
}
