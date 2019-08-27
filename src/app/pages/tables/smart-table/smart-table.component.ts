import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import {RestService} from "../../../rest.service";

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      idProjet: {
        title: 'ID Projet',
        type: 'number',
      }
      ,
      descriptionProjet: {
        title: 'Description Projet',
        type: 'string',
      },
      dateDebProjet: {
        title: 'Date Début',
        type: 'date',
      },
      dateFinProjet: {
        title: 'Date Fin',
        type: 'date',
      },
      coutProjet: {
        title: 'Cout',
        type: 'string',
      },
      paysProjet: {
        title: 'Pays',
        type: 'string',
      },
      villeProjet: {
        title: 'Ville',
        type: 'string',
      },
      etatAvancement: {
        title: 'Etat D\'avancement',
        type: 'string',
      },
      societeCliente: {
        title: 'Societe Cliente',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  projets: any = [] ;

  constructor(private service: SmartTableData ,  public rest:RestService) {
    const data = [{"coutProjet" : 256},{"coutProjet" : 200}];

      this.rest.getProjets().subscribe((data1:any) =>{


      for (let dataKey in data1) {
       // console.log(data1["content"][0].coutProjet);
        this.projets.push({"coutProjet" : data1["content"][0].coutProjet , "descriptionProjet" : data1["content"][0].descriptionProjet});
      }
        console.log(this.projets);
        this.source.load(this.projets);
    });


  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
