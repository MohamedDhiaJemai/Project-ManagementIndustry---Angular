import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import {RestService} from "../../../rest.service";

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './documentation-technique.component.html',
  styleUrls: ['./documentation-technique.component.scss'],
})
export class DocumentationTechniqueComponent {

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
      nom_document: {
        title: 'Nom Document',
        type: 'string',
      },
      type_document: {
        title: 'Type Document',
        type: 'string',
      },
      desc_document: {
        title: 'Description Document',
        type: 'string',
      },
      lien_document: {
        title: ' ',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  etat: any = [] ;

  constructor(private service: SmartTableData ,  public rest:RestService) {

      this.rest.getDocumentations().subscribe((data:any) =>{
       let i=0;
      for (let dataKey in data) {
        this.etat.push({"nom_document" : data["content"][i].nomDocument ,
          "type_document" : data["content"][i].typeDocument ,
          "desc_document" : data["content"][i].descDocument ,
          "lien_document" : data["content"][i].cheminDocument});
     i++;
      }
        console.log(this.etat);
        this.source.load(this.etat);
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
