import { Component } from "@angular/core";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"]
})
export class TabsPage {
  constructor(private statusBar: StatusBar, private router: Router) {}

  changeStatusBar() {
    if (this.router.isActive("/tabs/tab1", false))
      this.statusBar.backgroundColorByHexString("#ffda00");
    else this.statusBar.backgroundColorByHexString("#fff");
  }

  changingTab(item) {
    if (item.tab == "home") this.statusBar.backgroundColorByHexString("#ffda00");
    else this.statusBar.backgroundColorByHexString("#fff");
  }
}
