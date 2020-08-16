import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterkeycloakSharedModule } from 'app/shared/shared.module';
import { PdventityComponent } from './pdventity.component';
import { PdventityDetailComponent } from './pdventity-detail.component';
import { PdventityUpdateComponent } from './pdventity-update.component';
import { PdventityDeleteDialogComponent } from './pdventity-delete-dialog.component';
import { pdventityRoute } from './pdventity.route';

@NgModule({
  imports: [JhipsterkeycloakSharedModule, RouterModule.forChild(pdventityRoute)],
  declarations: [PdventityComponent, PdventityDetailComponent, PdventityUpdateComponent, PdventityDeleteDialogComponent],
  entryComponents: [PdventityDeleteDialogComponent],
})
export class JhipsterkeycloakPdventityModule {}
