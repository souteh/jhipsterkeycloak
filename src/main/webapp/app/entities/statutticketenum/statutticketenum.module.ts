import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterkeycloakSharedModule } from 'app/shared/shared.module';
import { StatutticketenumComponent } from './statutticketenum.component';
import { StatutticketenumDetailComponent } from './statutticketenum-detail.component';
import { StatutticketenumUpdateComponent } from './statutticketenum-update.component';
import { StatutticketenumDeleteDialogComponent } from './statutticketenum-delete-dialog.component';
import { statutticketenumRoute } from './statutticketenum.route';

@NgModule({
  imports: [JhipsterkeycloakSharedModule, RouterModule.forChild(statutticketenumRoute)],
  declarations: [
    StatutticketenumComponent,
    StatutticketenumDetailComponent,
    StatutticketenumUpdateComponent,
    StatutticketenumDeleteDialogComponent,
  ],
  entryComponents: [StatutticketenumDeleteDialogComponent],
})
export class JhipsterkeycloakStatutticketenumModule {}