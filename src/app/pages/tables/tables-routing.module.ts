import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';

import { SmartTableComponent } from './smart-table/smart-table.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { EtatAvancementComponent } from './etat-avancement/etat-avancement.component';
import { SocieteClienteComponent } from './societe-cliente/societe-cliente.component';
import { DocumentationTechniqueComponent } from './documentationTechnique/documentation-technique.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'smart-table',
      component: SmartTableComponent,
    },
    {
      path: 'tree-grid',
      component: TreeGridComponent,
    },
    {
      path: 'etat-avancement',
      component: EtatAvancementComponent,
    },
    {
      path: 'societe-cliente',
      component: SocieteClienteComponent,
    },
    {
      path: 'documentation-technique',
      component: SocieteClienteComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  TreeGridComponent,
  EtatAvancementComponent,
  SocieteClienteComponent,
  DocumentationTechniqueComponent,
];
