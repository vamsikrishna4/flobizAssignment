import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { DataTransferService } from "../data-transfer.service";

@Component({
  selector: "app-business-details",
  templateUrl: "./business-details.component.html",
  styleUrls: ["./business-details.component.scss"],
})
export class BusinessDetailsComponent implements OnInit {
  detailsForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dataTransferService: DataTransferService
  ) {}

  ngOnInit() {
    this.detailsForm = this.fb.group({
      business: ["", Validators.required],
      address: [""],
    });

    this.detailsForm.valueChanges.subscribe((val) => {
      this.dataTransferService.sendMessage(this.detailsForm.value);
    });
  }
  get form() {
    return this.detailsForm.controls;
  }
}
