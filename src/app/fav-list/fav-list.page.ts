import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fav-list",
  templateUrl: "./fav-list.page.html",
  styleUrls: ["./fav-list.page.scss"]
})
export class FavListPage implements OnInit {
  featureds = [
    {
      name: "Lamb Stew",
      creator: "Nor Azlan",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190326-lamb-stew-325-1553801000.jpg"
    },
    {
      name: "Nasi Ayam",
      creator: "Afiq Zailani",
      image:
        "https://dailymakan.com/wp-content/uploads/2019/08/895c9dbf91933941985d76d069f9b1982912b5da.jpeg"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
