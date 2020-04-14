import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CarbonModule } from './carbon.module';

import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";
import { ErrorInterceptor } from "./core/interceptors";

import { AppComponent } from "./app.component";
import { ModalComponent } from "./modal/modal.component";
import { TableComponent } from "./table/table.component";
import { SideNavigationComponent } from "./side-navigation/side-navigation.component";
import { ComboboxComponent } from "./combobox/combobox.component";
import { ProgressIndicatorComponent } from "./progress-indicator/progress-indicator.component";
import { TileComponent } from "./tile/tile.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarbonModule,
    CoreModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, ModalComponent, TableComponent, ComboboxComponent, ProgressIndicatorComponent, SideNavigationComponent, TileComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
