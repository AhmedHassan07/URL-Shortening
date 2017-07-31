import {Component, OnInit} from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import {UrlShortenerService} from '../url-shortener.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent implements OnInit {

  private longUrl = '';
  private dpPlaceholder = 'Expiry';
  private dateModel: any;
  private genertedUrl = '';
  private isGenerated = false;
  private formError = false;
  private formErrorMsg = '';

  constructor(private urlShortenerService: UrlShortenerService) {
  }

  ngOnInit() {
  }

  generateShortUrl(values) {

    this.formError = false;
    const shortnerObj = {
      url: values.url,
      expiresAt: values.mydate ? values.mydate.formatted : new Date(+new Date() + 7 * 24 * 60 * 60 * 1000)
    };
    if (new Date(shortnerObj.expiresAt) <= new Date()){
      this.formErrorMsg = 'Please provide expiration time greater than today.';
      this.formError = true;
      return;
    }

    this.urlShortenerService.shortenUrl(shortnerObj).subscribe((data) => {

      if (data.status === 'Success') {
        this.genertedUrl = data.data;
        this.isGenerated = true;
        this.dateModel = null;
        this.longUrl = '';
      }
    });
  }

}
