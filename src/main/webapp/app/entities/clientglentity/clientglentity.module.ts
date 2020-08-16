import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterkeycloakSharedModule } from 'app/shared/shared.module';
import { ClientglentityComponent } from './clientglentity.component';
import { ClientglentityDetailComponent } from './clientglentity-detail.component';
import { ClientglentityUpdateComponent } from './clientglentity-update.component';
import { ClientglentityDeleteDialogComponent } from './clientglentity-delete-dialog.component';
import { clientglentityRoute } from './clientglentity.route';

@NgModule({
  imports: [JhipsterkeycloakSharedModule, RouterModule.forChild(clientglentityRoute)],
  declarations: [
    ClientglentityComponent,
    ClientglentityDetailComponent,
    ClientglentityUpdateComponent,
    ClientglentityDeleteDialogComponent,
  ],
  entryComponents: [ClientglentityDeleteDialogComponent],
})
export class JhipsterkeycloakClientglentityModule {}
