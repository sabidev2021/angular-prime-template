import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/lang/lang.service';

@Component({
  selector: 'app-sample-one-list',
  templateUrl: './sample-one-list.component.html',
  styleUrls: ['./sample-one-list.component.scss']
})
export class SampleOneListComponent implements OnInit {

  constructor(private langService: LangService) { }

  ngOnInit(): void {
    this.langService.setLanguage()
  }

}
