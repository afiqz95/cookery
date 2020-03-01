import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import Axios from "axios";
import { environment } from "src/environments/environment";
import { StorageService } from "../services/storage.service";
@Injectable({
  providedIn: "root"
})
export class BaseApiService {
  constructor(private storage: StorageService) {}

  public async get(url: string, useAuth = true) {
    return (
      await Axios.get(url, {
        headers: await this.buildHeader(useAuth),
        baseURL: environment.reactive_url + "/api/cookery"
      })
    ).data;
  }

  public async post(url: string, item: any, useAuth = true) {
    return (
      await Axios.post(url, item, {
        headers: await this.buildHeader(useAuth),
        baseURL: environment.reactive_url + "/api/cookery"
      })
    ).data;
  }

  public async put(url: string, item: any, useAuth = true) {
    return (
      await Axios.put(url, item, {
        headers: await this.buildHeader(useAuth),
        baseURL: environment.reactive_url + "/api/cookery"
      })
    ).data;
  }

  public async delete(url: string, useAuth = true) {
    return (
      await Axios.delete(url, {
        headers: await this.buildHeader(useAuth),
        baseURL: environment.reactive_url + "/api/cookery"
      })
    ).data;
  }

  private async buildHeader(useAuth: boolean) {
    if (useAuth) {
      return {
        Authorization: "Bearer " + (await this.storage.getToken())
      };
    } else {
      return {};
    }
  }
}
