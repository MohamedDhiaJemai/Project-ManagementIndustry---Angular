import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import {RestService} from "../../../rest.service";

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './etat-avancement.component.html',
  styleUrls: ['./etat-avancement.component.scss'],
})
export class EtatAvancementComponent {

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
      nom_etat_avancement: {
        title: 'Nom D\'Etat D\'Avancement',
        type: 'string',
      },
      descri_avanacement: {
        title: 'Description Etat D\'Avancement',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  etat: any = [] ;

  constructor(private service: SmartTableData ,  public rest:RestService) {

      this.rest.getEtatAvancements().subscribe((data:any) =>{

     data.content.forEach((key: any , val: any)=>{
       //console.log("val :"+val);
       //console.log(data["content"][0].nomEtatAvancement);
        this.etat.push({"nom_etat_avancement" : data["content"][val].nomEtatAvancement , "descri_avanacement" : data["content"][val].descriAvanacement});
      });
        //console.log(this.etat);
        this.source.load(this.etat);
    });


  }



  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {

      console.log(event.data);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
