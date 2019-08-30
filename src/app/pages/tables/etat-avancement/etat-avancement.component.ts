import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import {RestService} from '../../../rest.service';

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
      confirmAdd: true,
      createConfirm: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmAdd: true,
      createConfirm: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      link: {
        title: 'ID',
        type: 'string',
      },
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

  constructor(private service: SmartTableData ,  public rest: RestService) {


      this.rest.getEtatAvancements().subscribe((data: any) => {
        data.content.forEach((key: any , val: any) => {
       // console.log("val :"+val);
        // console.log(data["content"][val].links[val].href);
        this.etat.push({'link' : data['content'][val].links[val].href.slice(-1) ,
          'nom_etat_avancement' : data['content'][val].nomEtatAvancement ,
          'descri_avanacement' : data['content'][val].descriAvanacement});
      });
        // console.log(this.etat);
        this.source.load(this.etat);
    });


  }

  // Event De Window.confirm


  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete Etat Avancement Number :' + event.data.link + ' ?')) {
      //
      console.log(event.data.link);
     this.rest.deleteEtatAvancement(event.data.link);
      //
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event1): void {
    if (window.confirm('Are you sure you want to Edit This Line')) {
      event1.confirm.resolve();
    } else {
      event1.confirm.reject();
    }
  }




  }

