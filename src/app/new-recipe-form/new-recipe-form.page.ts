import { Component, OnInit, ViewChild } from "@angular/core";
import { IonContent } from "@ionic/angular";

@Component({
  selector: "app-new-recipe-form",
  templateUrl: "./new-recipe-form.page.html",
  styleUrls: ["./new-recipe-form.page.scss"]
})
export class NewRecipeFormPage implements OnInit {
  @ViewChild("content", { static: false }) ionContent: IonContent;
  ingredients = [
    {
      name: "Chicken",
      quantity: "500g"
    }
  ];
  adding = false;
  addingMethod = false;
  newIngredient = {
    name: "",
    quantity: ""
  };
  selectedCategory = null;
  segment = "details";
  methods = [
    {
      description: "Preheat oven to 375 degrees F (190 degrees C).",
      isEditing: false
    },
    {
      description:
        "In a large bowl, cream together the margarine, vegetable oil, 1 cup white sugar and confectioners' sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Combine the flour, baking soda, cream of tartar and salt; stir into the creamed mixture. Mix in the pecans. Roll dough into 1 inch balls and roll each ball in remaining white sugar. Place the cookies 2 inches apart onto ungreased cookie sheets.",
      isEditing: false
    },
    {
      description:
        "Bake for 10 to 12 minutes in the preheated oven, or until the edges are golden. Remove from cookie sheets to cool on wire racks.",
      isEditing: false
    }
  ];
  newStep: string;
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
  constructor() {
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
    this.newIngredient = {
      name: "",
      quantity: ""
    };
    setTimeout(() => {
      this.ionContent.scrollToBottom(500);
    }, 200);
  }

  addIngredient() {
    this.ingredients.push({
      name: this.newIngredient.name,
      quantity: this.newIngredient.quantity
    });
    this.adding = false;
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
    this.newStep = "";
    setTimeout(() => {
      this.ionContent.scrollToBottom(500);
    }, 200);
  }

  addStep() {
    this.methods.push({
      description: this.newStep,
      isEditing: false
    });
    this.addingMethod = false;
  }

  editMethod(i) {
    this.methods[i].isEditing = !this.methods[i].isEditing;
  }

  removeMethod(i) {
    this.methods.splice(i, 1);
  }
}
