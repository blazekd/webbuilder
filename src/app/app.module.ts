import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoMaterialModule } from './material-module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CreateWebComponent } from './create-web/create-web.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { QuillModule } from 'ngx-quill'
import { FlexLayoutModule } from '@angular/flex-layout';
import { WebSectionComponent } from './create-web/components/web-section/web-section.component';
import { WebTextComponent } from './create-web/components/web-section/web-text/web-text.component';
import { BackgroundModuleComponent } from './popup-dialog/modules/background-module/background-module.component';
import { ColorModuleComponent } from './popup-dialog/modules/color-module/color-module.component';
import { SizeModuleComponent } from './popup-dialog/modules/size-module/size-module.component';
import { ColumnsModuleComponent } from './popup-dialog/modules/columns-module/columns-module.component';
import { WebImageComponent } from './create-web/components/web-section/web-image/web-image.component';
import { WebDividerComponent } from './create-web/components/web-section/web-divider/web-divider.component';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { ImageCropperModule } from 'ngx-image-cropper';
import { WebGridComponent } from './create-web/components/web-grid/web-grid.component';
import { WebCardComponent } from './create-web/components/web-grid/web-card/web-card.component';
import { SortablejsModule } from 'ngx-sortablejs';
import { ResizableModule } from 'angular-resizable-element';
import { AngularSplitModule } from 'angular-split';
import { DividerSizeModuleComponent } from './popup-dialog/modules/divider-size-module/divider-size-module.component';
import { DividerColorModuleComponent } from './popup-dialog/modules/divider-color-module/divider-color-module.component';
import { ListModuleComponent } from './popup-dialog/modules/list-module/list-module.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import { ImageModuleComponent } from './popup-dialog/modules/image-module/image-module.component';
import { ImageUploadModuleComponent } from './popup-dialog/modules/image-upload-module/image-upload-module.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateWebComponent,
    NavigationBarComponent,
    WebSectionComponent,
    WebTextComponent,
    BackgroundModuleComponent,
    ColorModuleComponent,
    SizeModuleComponent,
    ColumnsModuleComponent,
    WebImageComponent,
    WebDividerComponent,
    DragAndDropDirective,
    WebGridComponent,
    WebCardComponent,
    DividerSizeModuleComponent,
    DividerColorModuleComponent,
    ListModuleComponent,
    PopupDialogComponent,
    ImageModuleComponent,
    ImageUploadModuleComponent,
  ],
  imports: [
    BrowserModule,
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
    AngularSplitModule,
    ResizableModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
