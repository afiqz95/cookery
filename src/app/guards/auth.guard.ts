import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { StorageService } from "../services/storage.service";
import { NavController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private storage: StorageService, private router: NavController) {}
  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = await this.storage.getToken();
    if (!token) {
      this.router.navigateRoot("/login");
    }
    return token != null ? true : false;
  }
}
