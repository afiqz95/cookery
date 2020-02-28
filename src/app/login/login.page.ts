import { Component, OnInit } from "@angular/core";
import { createAnimation, AnimationDirection } from "@ionic/core";
import { Platform, NavController, AlertController, ToastController } from "@ionic/angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthorizationService } from "../api/authorization.service";
import { StatusBar } from "@ionic-native/status-bar/ngx";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  formRegister = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{0,}$"),
      Validators.minLength(6)
    ])
  });

  formLogin = new FormGroup({
    email: new FormControl("", []),
    password: new FormControl("", [])
  });

  isShowRegisterPassword = false;
  isShowLoginPassword = false;

  constructor(
    private platform: Platform,
    private navCtrl: NavController,
    private authApi: AuthorizationService,
    private alertController: AlertController,
    private toastController: ToastController,
    private statusbar: StatusBar
  ) {}

  ngOnInit() {
    this.statusbar.backgroundColorByName("black");
    this.statusbar.styleBlackTranslucent();
  }

  animateToRegister(reverse = false) {
    var direction: AnimationDirection = reverse ? "reverse" : "normal";

    //create account btn
    const registerButton = createAnimation()
      .addElement(document.querySelector("#register-button"))
      .duration(300)
      .fromTo("opacity", "1", "0");

    //back to login btn
    const cancelRegisterButton = createAnimation()
      .addElement(document.querySelector("#cancel-register-button"))
      .duration(300)

      .fromTo("opacity", "0", "1");

    const registerContainer = createAnimation()
      .addElement(document.querySelector(".register-container"))
      .duration(300)
      .fromTo("top", "35vh", "34.5vh");

    const registerAnimation = createAnimation()
      .addElement(document.querySelector(".register-card"))
      .duration(300)
      .from("margin", "10px 27px 10px 27px")
      .to("margin", "0px 16px 0px 16px");

    const loginAnimation = createAnimation()
      .addElement(document.querySelector("#login-card"))
      .duration(350)
      .fromTo(
        "transform",
        "translate(0px,0px)",
        `translate(-${this.platform.width() + 100}px,0px)`
      );

    const cardFacebook = createAnimation()
      .addElement(document.querySelector(".card-facebook"))
      .duration(300)
      .fromTo("left", "0px", "-70px");

    const cardGoogle = createAnimation()
      .addElement(document.querySelector(".card-google"))
      .duration(300)
      .fromTo("right", "0px", "-110px");

    if (!reverse) {
      registerButton.afterStyles({
        display: "none"
      });
      cancelRegisterButton.beforeStyles({
        display: "block"
      });
      loginAnimation.afterStyles({
        display: "none"
      });
    } else {
      registerButton.beforeStyles({
        display: "block"
      });
      cancelRegisterButton.afterStyles({
        display: "none"
      });
      loginAnimation.beforeStyles({
        display: "block"
      });

      //reset register controls
      for (const control in this.formRegister.controls) {
        if (this.formRegister.controls.hasOwnProperty(control)) {
          const element = this.formRegister.controls[control];
          element.markAsUntouched();
        }
      }
    }

    cardFacebook.direction(direction).play();
    cardGoogle.direction(direction).play();
    registerButton.direction(direction).play();
    registerContainer.direction(direction).play();
    loginAnimation.direction(direction).play();
    cancelRegisterButton.direction(direction).play();
    registerAnimation.direction(direction).play();
  }

  async login() {
    const login = await this.authApi.login({
      email: this.formLogin.value.email,
      password: this.formLogin.value.password
    });
    if (login.canLogin) {
      this.navCtrl.navigateRoot("/");
    } else {
      const toast = await this.toastController.create({
        message: "Email or password is invalid",
        animated: true,
        color: "secondary",
        duration: 5000,
        buttons: [
          {
            side: "end",
            text: "Close",
            role: "cancel"
          }
        ]
      });
      toast.present();
    }
  }

  async register() {
    const alert = await this.alertController.create({
      message: "Your email has been registered! You may now login",
      header: "Registered",
      animated: true,
      buttons: ["Login"],
      backdropDismiss: false
    });
    await this.authApi.register({
      email: this.formRegister.value.email,
      password: this.formRegister.value.password
    });
    alert.present();
    this.formRegister.reset({
      email: { value: "" },
      password: { value: "" }
    });
    this.animateToRegister(true);
  }

  showRegisterPassword() {
    this.isShowRegisterPassword = !this.isShowRegisterPassword;
  }

  showLoginPassword() {
    this.isShowLoginPassword = !this.isShowLoginPassword;
  }
}
