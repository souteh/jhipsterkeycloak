import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterkeycloakSharedModule } from 'app/shared/shared.module';
import { TypepaiementenumComponent } from './typepaiementenum.component';
import { TypepaiementenumDetailComponent } from './typepaiementenum-detail.component';
import { TypepaiementenumUpdateComponent } from './typepaiementenum-update.component';
import { TypepaiementenumDeleteDialogComponent } from './typepaiementenum-delete-dialog.component';
import { typepaiementenumRoute } from './typepaiementenum.route';

@NgModule({
  imports: [JhipsterkeycloakSharedModule, RouterModule.forChild(typepaiementenumRoute)],
  declarations: [
    TypepaiementenumComponent,
    TypepaiementenumDetailComponent,
    TypepaiementenumUpdateComponent,
    TypepaiementenumDeleteDialogComponent,
  ],
  entryComponents: [TypepaiementenumDeleteDialogComponent],
})
export class JhipsterkeycloakTypepaiementenumModule {}
