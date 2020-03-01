import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { StorageEnum } from "../enums/storage-enum";
import * as STORECONST from "./STORAGECONST";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor(private storage: Storage) {}

  private async getStorage(key: string) {
    return await this.storage.get(key);
  }

  private async setStorage(key: string, item: any) {
    return await this.storage.set(key, item);
  }

  public async setToken(token: string) {
    return await this.setStorage(STORECONST.TOKEN, token);
  }

  public async getToken() {
    return await this.getStorage(STORECONST.TOKEN);
  }

  public async setUserId(userId: string) {
    return await this.setStorage(STORECONST.USERID, userId);
  }

  public async getUserId() {
    return await this.getStorage(STORECONST.USERID);
  }

  public async clearAll() {
    return await this.storage.clear();
  }
}
