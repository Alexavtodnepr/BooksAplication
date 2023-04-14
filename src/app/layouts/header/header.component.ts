import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output() searchValue = new EventEmitter();
  @Output() methodBySort = new EventEmitter();
  @Output() choosedPeriod = new EventEmitter()
  chosedSortMethod: string = '';
  filterForm!: FormGroup;
  startDate!: Date;
  endDate!: Date;
  period!: string;
  chosedType!: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      startDate: [this.startDate, Validators.required],
      endDate: [this.endDate, Validators.required],
    });
  }

  public SearchValueInput(event: Event) {
    let input = event.target as HTMLInputElement;
    this.searchValue.emit(input.value)
  }

  public MethodOfSort(val: string){
    this.methodBySort.emit(val)
  }

  public chosedPeriod(chosedType: string) {
    if(!chosedType){
      this.filterForm.controls['startDate'].setValue('');
      this.filterForm.controls['endDate'].setValue('');
      this.filterForm.reset()
    }
    if(chosedType==='year'){
      const year = new Date().getFullYear();
      this.startDate = new Date('01.01.'+ year);
      this.endDate = new Date();
      this.filterForm.controls['startDate'].setValue(this.startDate);
      this.filterForm.controls['endDate'].setValue(this.endDate);
    }
    if(chosedType==='month'){
      const currentDate = moment();
      const startOfMonth = currentDate.clone().startOf('month');
      const endOfMonth = currentDate.endOf('month');
      this.startDate = new Date(startOfMonth.format('MM-DD-YYYY'));
      this.endDate = new Date(endOfMonth.format('MM-DD-YYYY'));
      this.filterForm.controls['startDate'].setValue(this.startDate)
      this.filterForm.controls['endDate'].setValue(this.endDate)
    }
  }

  public AplyPeriod() {
    if(this.startDate && this.endDate){
      this.choosedPeriod.emit({start: this.startDate, end: this.endDate })
    }
  }
}
