import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterkeycloakSharedModule } from 'app/shared/shared.module';
import { TypecanalenumComponent } from './typecanalenum.component';
import { TypecanalenumDetailComponent } from './typecanalenum-detail.component';
import { TypecanalenumUpdateComponent } from './typecanalenum-update.component';
import { TypecanalenumDeleteDialogComponent } from './typecanalenum-delete-dialog.component';
import { typecanalenumRoute } from './typecanalenum.route';

@NgModule({
  imports: [JhipsterkeycloakSharedModule, RouterModule.forChild(typecanalenumRoute)],
  declarations: [TypecanalenumComponent, TypecanalenumDetailComponent, TypecanalenumUpdateComponent, TypecanalenumDeleteDialogComponent],
  entryComponents: [TypecanalenumDeleteDialogComponent],
})
export class JhipsterkeycloakTypecanalenumModule {}
