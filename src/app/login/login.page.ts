import { Component, OnInit } from "@angular/core";
import { createAnimation } from "@ionic/core";
import { Platform } from "@ionic/angular";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(private platform: Platform) {}

  ngOnInit() {}

  onClick() {
    const registerButton = createAnimation()
      .addElement(document.querySelector("#register-button"))
      .duration(300)
      .fromTo("opacity", "1", "0")
      .afterStyles({
        display: "none"
      });
    const registerContainer = createAnimation()
      .addElement(document.querySelector(".register-container"))
      .duration(300)
      .fromTo("top", "25vh", "24.5vh");
    const registerAnimation = createAnimation()
      .addElement(document.querySelector(".register-card"))
      .duration(300);
    const loginAnimation = createAnimation()
      .addElement(document.querySelector("#login-card"))
      .duration(300);

    registerAnimation
      .from("margin", "10px 27px 10px 27px")
      .to("margin", "0px 16px 0px 16px");

    loginAnimation.fromTo(
      "transform",
      "translate(0px,0px)",
      `translate(-${this.platform.width() + 100}px,0px)`
    );

    registerButton.play();
    registerContainer.play();
    loginAnimation.play();
    registerAnimation.play();
  }

  onClickReverse() {
    const registerContainer = createAnimation()
      .addElement(document.querySelector(".register-container"))
      .duration(300)
      .fromTo("top", "25vh", "24.5vh");
    const registerAnimation = createAnimation()
      .addElement(document.querySelector(".register-card"))
      .duration(300);
    const loginAnimation = createAnimation()
      .addElement(document.querySelector("#login-card"))
      .duration(300);

    registerAnimation
      .from("margin", "10px 27px 10px 27px")
      .to("margin", "0px 16px 0px 16px");

    loginAnimation.fromTo(
      "transform",
      "translate(0px,0px)",
      `translate(-${this.platform.width() + 100}px,0px)`
    );

    registerContainer.direction("reverse").play();
    loginAnimation.direction("reverse").play();
    registerAnimation.direction("reverse").play();
  }
}
