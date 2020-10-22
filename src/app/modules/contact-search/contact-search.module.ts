import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { ContactMainComponent } from './contact-main/contact-main.component';
import { ContactSidebarComponent } from './contact-sidebar/contact-sidebar.component';
import { LoadDialogComponent } from './load-dialog.component';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';

@NgModule({
  declarations: [
    ContactSidebarComponent,
    ContactMainComponent,
    LoadDialogComponent,
    SaveDialogComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    ContactSidebarComponent,
    ContactMainComponent
  ]
})
export class ContactSearchModule { }
