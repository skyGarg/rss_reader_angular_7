import { Component, OnInit } from '@angular/core';
import { Rss2jsonService } from '../shared/services/rss2json.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
// export messages: Object[];
export class ChannelsComponent implements OnInit {
  private loading: boolean;
  private data = [];
  private arrray = [];
  private keys = [];
  private clicker = [];


  constructor(private http: HttpClient,
    private rss2json: Rss2jsonService) {

  }

  parseChannel(url: string) {
    return this.http.get(
      this.rss2json.getEndpoint(),
      {
        params: {
          rss_url: url,
          api_key: this.rss2json.getApiKey(),
          count: this.rss2json.getCountMessages(),
        }
      }
    );
  }

  ngOnInit() {
    this.constructChannel()
  }

  constructChannel() {
    let array_data = [
      {"name": "Sports Feed", "url": "https://indianexpress.com/section/sports/feed/"},
      {"name": "World Feed", "url": "https://indianexpress.com/section/world/feed/"},
      {"name": "Finance Feed", "url": "https://www.financialexpress.com/feed/"},
      {"name": "English News Feed", "url": "https://www.thehindu.com/news/feeder/default.rss"},
      {"name": "Hindi News Feed", "url": "http://timesofindia.indiatimes.com/rssfeeds/1221656.cms"},
    ]
    this.newConstructChannel(array_data)
  }
  newConstructChannel(array_data) {
    this.arrray = array_data;
    array_data.forEach(url => {
      this.loadChannel(url.url)
    });
  }

  loadChannel(url) {
    this.loading = true;
    this.parseChannel(url).subscribe((response: any) => {
      if (response.status === 'ok') {
        let index = 0;

        for (const item of response.items) {
          console.log(this.data);
          index = index + 1;
          this.data[index] = item;
          this.clicker[index] = false;
        }
        this.keys = Object.keys(this.data[index])

        this.keys.sort(function (a, b) {
          return a.pubDate - b.pubDate;
        });

        this.loading = false;
      }
    });

  }

}
