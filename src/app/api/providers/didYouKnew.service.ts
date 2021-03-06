/* tslint:disable */
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpHeaders,
} from "@angular/common/http";
import { BaseService as __BaseService } from "../base-service";
import { ApiConfiguration as __Configuration } from "../api-configuration";
import { StrictHttpResponse as __StrictHttpResponse } from "../strict-http-response";
import { Observable as __Observable } from "rxjs";
import { map as __map, filter as __filter } from "rxjs/operators";
import { CheckDidYouKnew } from "../models/check-did-you-knew.model";
import { DidYouKnewModel } from "../models/didYouKnew.model"
import { DidYouKnewsModel } from "../models/didYouKnews.model";

@Injectable({
  providedIn: "root",
})
class DidYouKnewService extends __BaseService {
  static readonly putDidYouKnew = "/didYouKnew";

  constructor(config: __Configuration, http: HttpClient) {
    super(config, http);
  }

  postNewYouKnewArticle(
    CheckDidYouKnew: CheckDidYouKnew
  ): __Observable<__StrictHttpResponse<CheckDidYouKnew>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CheckDidYouKnew;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/didYouKnew`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: "json",
      }
    );

    return this.http.request<any>(req).pipe(
      __filter((_r) => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CheckDidYouKnew>;
      })
    );
  }

  /**
   * @param CheckCredentialModel User credential to check
   * @return User authentificated token
   */
  postDidYouKnew(
    CheckDidYouKnew: CheckDidYouKnew
  ): __Observable<CheckDidYouKnew> {
    return this.postNewYouKnewArticle(CheckDidYouKnew).pipe(
      __map((_r) => _r.body as CheckDidYouKnew)
    );
  }

  /**
   * @param id ID to delete
   * @returns 1 if deleted 0 if not
   */
  deleteDidYouknewresponse(
    id: string
  ): __Observable<__StrictHttpResponse<DidYouKnewModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/didYouKnew/delete/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: "json",
      }
    );

    return this.http.request<any>(req).pipe(
      __filter((_r) => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DidYouKnewModel>;
      })
    );
  }

  /**
   * @param id article's Id to delete
   */
  deleteDidYouKnew(id: string) {
    return this.deleteDidYouknewresponse(id).pipe(
      __map((_r) => _r.body as DidYouKnewModel)
    );
  }

  /**
   * @param params The `UserService.GetUserParams` containing the following parameters:
   *
   * @return One article depends on IdArticle given in Arg
   */
  getDidYouKnewResponse(
    id: string
  ): __Observable<__StrictHttpResponse<DidYouKnewModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/didYouKnew/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: "json",
      }
    );

    return this.http.request<any>(req).pipe(
      __filter((_r) => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DidYouKnewModel>;
      })
    );
  }

  /**
   * @param params The `UserService.GetUserParams` containing the following parameters:
   * - `role`: role to retrieve
   * - `name`: Name to retrieve
   * - `lastname`: Lastname to retrieve
   * - `email`: Email to retrieve
   * @returns One article depends on IdArticle given in Arg
   */
  getDidYouKnew(id: string): __Observable<DidYouKnewModel> {
    return this.getDidYouKnewResponse(id).pipe(
      __map((_r) => _r.body as DidYouKnewModel)
    );
  }

  /**
   * @param params The `UserService.GetUserParams` containing the following parameters:
   *
   * @return All didyouknew
   */
  getDidYouKnewsResponse(): __Observable<
    __StrictHttpResponse<Array<DidYouKnewsModel>>
  > {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/didYouKnew/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: "json",
      }
    );

    return this.http.request<any>(req).pipe(
      __filter((_r) => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DidYouKnewsModel>>;
      })
    );
  }

  /**
   * @param params The `UserService.GetUserParams` containing the following parameters:
   *
   * - `role`: role to retrieve
   *
   * - `name`: Name to retrieve
   *
   * - `lastname`: Lastname to retrieve
   *
   * - `email`: Email to retrieve
   *
   * @return All users
   */
  getDidYouKnews(): __Observable<Array<DidYouKnewsModel>> {
    return this.getDidYouKnewsResponse().pipe(
      __map((_r) => _r.body as Array<DidYouKnewsModel>)
    );
  }
}

export { DidYouKnewService };
