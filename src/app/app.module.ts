import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatLegacyDialogModule as MatDialogModule, MAT_LEGACY_DIALOG_DEFAULT_OPTIONS as MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/legacy-dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoMaterialModule } from './material-module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { CreateWebComponent } from './create-web/create-web.component';
import { TestComponent } from './test/test.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { QuillModule } from 'ngx-quill'
import { FlexLayoutModule } from '@angular/flex-layout';
import { WebFooterComponent } from './create-web/components/web-footer/web-footer.component';
import { WebNavComponent } from './create-web/components/web-nav/web-nav.component';
import { WebSectionComponent } from './create-web/components/web-section/web-section.component';
import { EditFooterComponent } from './create-web/edit/edit-footer/edit-footer.component';
import { EditNavComponent } from './create-web/edit/edit-nav/edit-nav.component';
import { EditSectionComponent } from './create-web/edit/edit-section/edit-section.component';
import { NewComponentComponent } from './create-web/add/new-component/new-component.component';
import { NewSectionContentComponent } from './create-web/add/new-section-content/new-section-content.component';
import { WebTextComponent } from './create-web/components/web-section/web-text/web-text.component';
import { BackgroundModuleComponent } from './create-web/edit/modules/background-module/background-module.component';
import { ButtonModuleComponent } from './create-web/edit/modules/button-module/button-module.component';
import { ColorModuleComponent } from './create-web/edit/modules/color-module/color-module.component';
import { HeaderModuleComponent } from './create-web/edit/modules/header-module/header-module.component';
import { LayoutModuleComponent } from './create-web/edit/modules/layout-module/layout-module.component';
import { LogoModuleComponent } from './create-web/edit/modules/logo-module/logo-module.component';
import { SizeModuleComponent } from './create-web/edit/modules/size-module/size-module.component';
import { AlignmentModuleComponent } from './create-web/edit/modules/alignment-module/alignment-module.component';
import { EditComponent } from './create-web/edit/edit.component';
import { EditDirective } from './create-web/edit/edit.directive';
import { ColumnsModuleComponent } from './create-web/edit/modules/columns-module/columns-module.component';
import { FONT_NAMES } from './create-web/components/constants';
import { WebImageComponent } from './create-web/components/web-section/web-image/web-image.component';
import { WebDividerComponent } from './create-web/components/web-section/web-divider/web-divider.component';
import { WebImageDialogComponent } from './create-web/components/web-section/web-image/web-image-dialog/web-image-dialog.component';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { ImageCropperModule } from 'ngx-image-cropper';
import { WebGridComponent } from './create-web/components/web-grid/web-grid.component';
import { WebCardComponent } from './create-web/components/web-grid/web-card/web-card.component';
import { SortablejsModule } from 'ngx-sortablejs';
import { EditGridComponent } from './create-web/edit/edit-grid/edit-grid.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { WebCalendarComponent } from './create-web/components/web-calendar/web-calendar.component';
import { ResizableModule } from 'angular-resizable-element';
import { AngularSplitModule } from 'angular-split';
import { DividerSizeModuleComponent } from './create-web/edit/modules/divider-size-module/divider-size-module.component';
import { DividerColorModuleComponent } from './create-web/edit/modules/divider-color-module/divider-color-module.component';
import { DividerStyleModuleComponent } from './create-web/edit/modules/divider-style-module/divider-style-module.component';
import { CalendarStyleModuleComponent } from './create-web/edit/modules/calendar-style-module/calendar-style-module.component';
import { CalendarColorModuleComponent } from './create-web/edit/modules/calendar-color-module/calendar-color-module.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    CreateWebComponent,
    TestComponent,
    NavigationBarComponent,
    WebFooterComponent,
    WebNavComponent,
    WebSectionComponent,
    EditFooterComponent,
    EditNavComponent,
    EditSectionComponent,
    NewComponentComponent,
    NewSectionContentComponent,
    WebTextComponent,
    BackgroundModuleComponent,
    ButtonModuleComponent,
    ColorModuleComponent,
    HeaderModuleComponent,
    LayoutModuleComponent,
    LogoModuleComponent,
    SizeModuleComponent,
    AlignmentModuleComponent,
    EditComponent,
    EditDirective,
    ColumnsModuleComponent,
    WebImageComponent,
    WebDividerComponent,
    WebImageDialogComponent,
    DragAndDropDirective,
    WebGridComponent,
    WebCardComponent,
    EditGridComponent,
    WebCalendarComponent,
    DividerSizeModuleComponent,
    DividerColorModuleComponent,
    DividerStyleModuleComponent,
    CalendarStyleModuleComponent,
    CalendarColorModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    DemoMaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    QuillModule.forRoot({
      suppressGlobalRegisterWarning: true,
      // customOptions: [{
      //   import: 'formats/font',
      //   whitelist: FONT_NAMES,
      // }],
      // customModules: [{
      //   implementation: Counter,
      //   path: 'modules/counter'
      // }],
      formats: [
        'background',
        'bold',
        'color',
        'font',
        'code',
        'italic',
        'link',
        'size',
        'strike',
        'script',
        'underline',
        'blockquote',
        'header',
        'indent',
        'list',
        'align',
        'direction',
        'code-block',
        'font-size-button',
        'letter-spacing'
        // 'formula'
        // 'image'
        // 'video'
      ]
  
    }),
    FlexLayoutModule,
    ImageCropperModule,
    // SortablejsModule.forRoot({ animation: 30 })
    SortablejsModule.forRoot({}),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    // ResizableModule
    AngularSplitModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
