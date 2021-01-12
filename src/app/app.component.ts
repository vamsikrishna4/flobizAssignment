import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { DataTransferService } from "./data-transfer.service";
import { MatDialogRef, MatDialog } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = "billing";
  isDisabled: boolean = true;
  subscription: Subscription;
  constructor(
    private dataTransferService: DataTransferService,

    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.subscription = this.dataTransferService.getFlag().subscribe((flag) => {
      this.isDisabled = flag;
    });
  }

  onSave() {
    const dialogRef = this.dialog.open(SuccessDialog);
    dialogRef.afterClosed().subscribe((result) => {
      // if (result) this.billingParty = result.data;
    });
  }
}

@Component({
  selector: "success-dialog",
  templateUrl: "success-dialog.html",
})
export class SuccessDialog {
  constructor(public dialogRef: MatDialogRef<SuccessDialog>) {}
}
