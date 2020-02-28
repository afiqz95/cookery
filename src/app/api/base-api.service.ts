import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import Axios from "axios";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root"
})
export class BaseApiService {
  constructor(private http: HttpClient) {}

  public async get(url: string, useAuth = true) {
    return (
      await Axios.get(url, {
        headers: this.buildHeader(useAuth),
        baseURL: environment.reactive_url + "/api/cookery"
      })
    ).data;
  }

  public async post(url: string, item: any, useAuth = true) {
    return (
      await Axios.post(url, item, {
        headers: this.buildHeader(useAuth),
        baseURL: environment.reactive_url + "/api/cookery"
      })
    ).data;
  }

  public async put(url: string, item: any, useAuth = true) {
    return (
      await Axios.put(url, item, {
        headers: this.buildHeader(useAuth),
        baseURL: environment.reactive_url + "/api/cookery"
      })
    ).data;
  }

  public async delete(url: string, useAuth = true) {
    return (
      await Axios.delete(url, {
        headers: this.buildHeader(useAuth),
        baseURL: environment.reactive_url + "/api/cookery"
      })
    ).data;
  }

  private buildHeader(useAuth: boolean) {
    if (useAuth) {
      return {
        Authorization: "Bearer "
      };
    } else {
      return {};
    }
  }
}
