import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import {RestService} from "../../../rest.service";

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './societe-cliente.component.html',
  styleUrls: ['./societe-cliente.component.scss'],
})
export class SocieteClienteComponent {

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
      nom_societe: {
        title: 'Nom Societe',
        type: 'string',
      },
      adresse_societe: {
        title: 'Adresse Societe',
        type: 'string',
      },
      tel_societe: {
        title: 'Téléphone Societe',
        type: 'number',
      },
      fax_societe: {
        title: 'Fax Societe',
        type: 'number',
      },
      email_societe: {
        title: 'Email Societe',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  projets: any = [] ;
  constructor(private service: SmartTableData ,  public rest:RestService) {

    this.rest.getSocieteClientes().subscribe((data:any) =>{

      data.content.forEach((key: any , val: any)=>{
        this.projets.push({
          "nom_societe" : data["content"][val].nomSociete ,
          "adresse_societe" : data["content"][val].adresseSociete ,
          "tel_societe" : data["content"][val].telSociete ,
          "fax_societe" : data["content"][val].faxSociete ,
          "email_societe" : data["content"][val].emailSociete
        });
      })
      //console.log(this.projets);
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
