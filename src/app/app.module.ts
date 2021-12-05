import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ProductDescriptionComponent } from "./product-description/product-description.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductPageComponent } from "./product-page/product-page.component";
import { ProductTracklistingComponent } from "./product-tracklisting/product-tracklisting.component";
import { ProductService } from "./product.service";

const appRoutes: Routes = [
  { path: "products", component: ProductListComponent },
  { path: "product/:id", component: ProductPageComponent },
  { path: "", redirectTo: "products", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    ProductTracklistingComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
