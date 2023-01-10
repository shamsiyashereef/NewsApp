import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
articles:any=[];
sources :any=[];
selectNewsChannel:string="Top 10 Trending News"
  constructor(private newsapi:NewsService) { }

  ngOnInit(): void {
    this.newsapi.initArticles().subscribe(
      (data:any)=>{
        console.log(data);
        this.articles=data.articles
      }
    )
    this.newsapi.initSources().subscribe(
      (data:any)=>{
        console.log(data);
        this.sources=data.sources
      }
    )
  }
  searchSource(source:any){
  this.newsapi.getArticlesById(source.id).subscribe((data:any)=>{
  //  this.articles=data.articels;
  this.selectNewsChannel=source.name;
  })
}
}
