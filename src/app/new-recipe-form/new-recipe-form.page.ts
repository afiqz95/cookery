import { Component, OnInit, ViewChild } from "@angular/core";
import { IonContent } from "@ionic/angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RecipeIngredient } from "../interface/recipe-ingredient";
import { RecipeStep } from "../interface/recipe-step";
import { RecipeService } from "../api/recipe.service";

@Component({
  selector: "app-new-recipe-form",
  templateUrl: "./new-recipe-form.page.html",
  styleUrls: ["./new-recipe-form.page.scss"]
})
export class NewRecipeFormPage implements OnInit {
  @ViewChild("content", { static: false }) ionContent: IonContent;

  segment = "details";
  adding = false;
  addingMethod = false;

  ingredients: Array<RecipeIngredient> = [];
  methods: Array<any> = [];

  categories = [
    {
      name: "Soups"
    },
    {
      name: "Salads"
    },
    {
      name: "Sides"
    },
    {
      name: "Pizza"
    },
    {
      name: "Rice"
    },
    {
      name: "Noodles"
    },
    {
      name: "Pasta"
    },
    {
      name: "Pies"
    },
    {
      name: "Burgers"
    },
    {
      name: "Steaks"
    },
    {
      name: "Baking"
    },
    {
      name: "Appetizers"
    },
    {
      name: "Beverages"
    },
    {
      name: "Desserts"
    }
  ];

  detailForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    categoryId: new FormControl("", [Validators.required]),
    difficulty: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    time: new FormControl("", [Validators.required]),
    timeUnit: new FormControl("", [Validators.required])
  });

  newIngredientForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    quantity: new FormControl("", [Validators.required])
  });

  newStepForm: FormGroup = new FormGroup({
    description: new FormControl("", [Validators.required])
  });

  constructor(private recipeService: RecipeService) {
    this.categories.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }

  ngOnInit() {}

  removeIngredient(i) {
    this.ingredients.splice(i, 1);
  }

  openNewIngredient() {
    this.adding = true;

    setTimeout(() => {
      this.ionContent.scrollToBottom(500);
    }, 200);
  }

  addIngredient() {
    this.validateAllControl(this.newIngredientForm);
    if (!this.newIngredientForm.valid) return;
    this.ingredients.push({
      name: this.newIngredientForm.value.name,
      quantity: this.newIngredientForm.value.quantity
    });
    this.adding = false;
    this.newIngredientForm.reset({
      name: "",
      quantity: ""
    });
  }

  increaseIndex(i) {
    var temp = this.methods[i + 1];
    this.methods[i + 1] = this.methods[i];
    this.methods[i] = temp;
  }

  decreaseIndex(i) {
    var temp = this.methods[i - 1];
    this.methods[i - 1] = this.methods[i];
    this.methods[i] = temp;
  }

  addingStep() {
    this.addingMethod = true;
    setTimeout(() => {
      this.ionContent.scrollToBottom(500);
    }, 200);
  }

  addStep() {
    this.validateAllControl(this.newStepForm);
    if (!this.newStepForm.valid) return;
    this.methods.push({
      description: this.newStepForm.value.description,
      isEditing: false
    });
    this.newStepForm.reset({
      description: ""
    });
    this.addingMethod = false;
  }

  editMethod(i) {
    this.methods[i].isEditing = !this.methods[i].isEditing;
  }

  removeMethod(i) {
    this.methods.splice(i, 1);
  }

  private validateAllControl(form: FormGroup) {
    for (const control in form.controls) {
      if (form.controls.hasOwnProperty(control)) {
        const element = form.controls[control];
        element.markAsTouched();
      }
    }
  }

  async submit() {
    this.validateAllControl(this.detailForm);
    if (!this.detailForm.valid) {
      return;
    }

    const recipePosted = await this.recipeService.insertRecipeDetail({
      name: this.detailForm.value.name,
      categoryId: this.detailForm.value.categoryId,
      difficulty: this.detailForm.value.difficulty,
      description: this.detailForm.value.description,
      time: this.detailForm.value.time,
      timeUnit: this.detailForm.value.timeUnit
    });
    console.log(recipePosted);
  }
}
