import { Component, OnInit } from "@angular/core";
import { StorageService } from "../services/storage.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  constructor(private storage: StorageService, private navCtrl: NavController) {}

  ngOnInit() {}

  async logout() {
    await this.storage.clearAll();
    this.navCtrl.navigateRoot("/login");
  }
}
