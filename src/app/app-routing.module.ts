import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "./core/core.module";

import { HomeComponent } from "./core/home/home.component";
import { TableComponent } from "./table/table.component";
import { ModalComponent } from "./modal/modal.component";
import { TileComponent } from "./tile/tile.component";
import { ComboboxComponent } from "./combobox/combobox.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { SideNavigationComponent } from "./side-navigation/side-navigation.component";
import { ProgressIndicatorComponent } from "./progress-indicator/progress-indicator.component";
import { NotFoundComponent } from "./core/not-found/not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "table", component: TableComponent },
  { path: "modal", component: ModalComponent },
  { path: "combobox", component: ComboboxComponent },
  { path: "dropdown", component: DropdownComponent },
  { path: "side-navigation", component: SideNavigationComponent },
  { path: "progress-indicator", component: ProgressIndicatorComponent },
  { path: "tile", component: TileComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
