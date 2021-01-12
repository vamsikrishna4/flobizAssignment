import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-create-item",
  templateUrl: "./create-item.component.html",
  styleUrls: ["./create-item.component.scss"],
})
export class CreateItemComponent implements OnInit {
  addItemForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateItemComponent>
  ) {}

  ngOnInit() {
    this.addItemForm = this.fb.group({
      name: ["", Validators.required],
      quantity: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      rate: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }
  get form() {
    return this.addItemForm.controls;
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSave() {
    this.submitted = true;

    this.dialogRef.close({ data: this.addItemForm.value });
  }
}
