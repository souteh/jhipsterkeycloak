import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'association-12',
        loadChildren: () => import('./association-12/association-12.module').then(m => m.JhipsterkeycloakAssociation12Module),
      },
      {
        path: 'catonlinecanalenum',
        loadChildren: () => import('./catonlinecanalenum/catonlinecanalenum.module').then(m => m.JhipsterkeycloakCatonlinecanalenumModule),
      },
      {
        path: 'clientglentity',
        loadChildren: () => import('./clientglentity/clientglentity.module').then(m => m.JhipsterkeycloakClientglentityModule),
      },
      {
        path: 'formulationentity',
        loadChildren: () => import('./formulationentity/formulationentity.module').then(m => m.JhipsterkeycloakFormulationentityModule),
      },
      {
        path: 'modeoperationenum',
        loadChildren: () => import('./modeoperationenum/modeoperationenum.module').then(m => m.JhipsterkeycloakModeoperationenumModule),
      },
      {
        path: 'pdventity',
        loadChildren: () => import('./pdventity/pdventity.module').then(m => m.JhipsterkeycloakPdventityModule),
      },
      {
        path: 'statutticketenum',
        loadChildren: () => import('./statutticketenum/statutticketenum.module').then(m => m.JhipsterkeycloakStatutticketenumModule),
      },
      {
        path: 'typeannulationenum',
        loadChildren: () => import('./typeannulationenum/typeannulationenum.module').then(m => m.JhipsterkeycloakTypeannulationenumModule),
      },
      {
        path: 'typecanalenum',
        loadChildren: () => import('./typecanalenum/typecanalenum.module').then(m => m.JhipsterkeycloakTypecanalenumModule),
      },
      {
        path: 'typeoperationenum',
        loadChildren: () => import('./typeoperationenum/typeoperationenum.module').then(m => m.JhipsterkeycloakTypeoperationenumModule),
      },
      {
        path: 'typepaiementenum',
        loadChildren: () => import('./typepaiementenum/typepaiementenum.module').then(m => m.JhipsterkeycloakTypepaiementenumModule),
      },
      {
        path: 'typeterminalenum',
        loadChildren: () => import('./typeterminalenum/typeterminalenum.module').then(m => m.JhipsterkeycloakTypeterminalenumModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class JhipsterkeycloakEntityModule {}
