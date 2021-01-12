import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-create-party",
  templateUrl: "./create-party.component.html",
  styleUrls: ["./create-party.component.scss"],
})
export class CreatePartyComponent implements OnInit {
  addPartyForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreatePartyComponent>
  ) {}

  ngOnInit() {
    this.addPartyForm = this.fb.group({
      partyName: ["", [Validators.required]],
      mblNumber: ["", [Validators.pattern("^[0-9]*$")]],
      address: [""],
    });
  }

  get form() {
    return this.addPartyForm.controls;
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSave() {
    this.submitted = true;
    this.dialogRef.close({ data: this.addPartyForm.value });
  }
}
