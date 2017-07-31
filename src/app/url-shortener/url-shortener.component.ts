import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import {UrlShortenerService} from '../url-shortener.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent implements OnInit {

  private longUrl = '';
  private datePickerPlaceholder = 'Select tiny url expiry date';
  private dateModel: any;
  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    showInputField : false,
    dateFormat: 'dd.mm.yyyy',
  };

  constructor(UrlShortenerService: UrlShortenerService) { }

  ngOnInit() {
  }

  generateShortUrl(values){
    console.log(values);
    // this.UrlShortenerService(values) .subscribe((data) => {
    //
    // });
  }

}
