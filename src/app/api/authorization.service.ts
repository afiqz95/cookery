import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseApiService } from "./base-api.service";
import { LoginInterface } from "../interface/login";

@Injectable({
  providedIn: "root"
})
export class AuthorizationService {
  constructor(private baseApi: BaseApiService) {}

  public async login(login: LoginInterface) {
    return await this.baseApi.post("/standard/auth/login", login, false);
  }

  public async register(login: LoginInterface) {
    return await this.baseApi.post("/standard/auth/register", login, false);
  }
}
