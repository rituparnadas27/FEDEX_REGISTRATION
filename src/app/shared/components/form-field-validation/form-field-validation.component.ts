import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as labels from '../../../../assets/json/label.json';
import {RegexPatterns} from '../../../models/generic/regex-patterns';


@Component({
  selector: 'app-form-field-validation',
  templateUrl: './form-field-validation.component.html',
  styleUrls: ['./form-field-validation.component.css']
})
export class FormFieldValidationComponent implements OnInit {
  @Input() errorMsg?: string;
  @Input() control?: FormControl;
  @Input() displayError?: boolean;
  @Input() minimumLength?: number;
  @Input() isPass?: boolean;
  @Input() form?: FormGroup;
  labels:  any  = (labels  as  any).default;
  regexPatterns = RegexPatterns;
  
  constructor(){
    // do nothing.
  }
  
  ngOnInit(): void {
    this.labels = this.labels;
     
   }

}
