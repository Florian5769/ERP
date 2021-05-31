/*
 * File: article.component.ts                                                  *
 * Project: erp                                                                *
 * Created Date: Su May yyyy                                                   *
 * Author: Franck Ehui                                                         *
 * -----                                                                       *
 * Last Modified: Mon May 31 2021                                              *
 * Modified By: Franck Ehui                                                    *
 * -----                                                                       *
 * Copyright (c) 2021 BeAll                                                    *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                     *
 * ----------	---	---------------------------------------------------------    *
 */



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from "../api/models/article.model";
import { ArticleService } from "../api/providers";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
})
export class ArticleComponent implements OnInit {
  public isLoading = false;
  public article: Article;

  constructor(private route: ActivatedRoute, private Article: ArticleService) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("_id");

    this.getArticle(id);
  }

  getArticle = (id: string) => {
    this.Article.getArticleById(id)
      .toPromise()
      .then((result) => {
        this.article = result;
        console.log(result)
      });
  };

  approvedArticle = (arg: boolean) => {
    if (arg) {
      console.log("pre: ", this.article);
      this.article.status = 1;
      console.log("post: ", this.article);
      this.Article.validateArticle(this.article)
        .toPromise()
        .then((result) => {
          if (result && result.status === 200) {
            // add success SnackBar
          } else {
            // add failure SnackBar
          }
        });
    } else {
      this.article.status = -2;
      this.Article.validateArticle(this.article)
        .toPromise()
        .then((result) => {
          if (result && result.status === 200) {
            // add success SnackBar
          } else {
            // add failure SnackBar
          }
        });
    }
  };
}
