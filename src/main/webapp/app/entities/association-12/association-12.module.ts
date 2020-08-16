import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterkeycloakSharedModule } from 'app/shared/shared.module';
import { Association12Component } from './association-12.component';
import { Association12DetailComponent } from './association-12-detail.component';
import { Association12UpdateComponent } from './association-12-update.component';
import { Association12DeleteDialogComponent } from './association-12-delete-dialog.component';
import { association12Route } from './association-12.route';

@NgModule({
  imports: [JhipsterkeycloakSharedModule, RouterModule.forChild(association12Route)],
  declarations: [Association12Component, Association12DetailComponent, Association12UpdateComponent, Association12DeleteDialogComponent],
  entryComponents: [Association12DeleteDialogComponent],
})
export class JhipsterkeycloakAssociation12Module {}
