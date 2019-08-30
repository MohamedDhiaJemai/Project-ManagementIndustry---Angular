import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint = 'http://localhost:89/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RestService {

  constructor(private http: HttpClient) {}
  private extractData(res: Response) {
    let body = res;
    console.log(body);
    return body || { };
  }


  /////////////////////////////////////////          PROJET ENTITIE       ////////////////////////////////////////////////////

  getProjets(): Observable<any> {
    return this.http.get(endpoint + 'projets').pipe(
      map(this.extractData));
  }

  // getProjet(id): Observable<any> {
  //   return this.http.get(endpoint + 'projets/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addProjet (projet): Observable<any> {
  //   console.log(projet);
  //   return this.http.post<any>(endpoint + 'projets', JSON.stringify(projet), httpOptions).pipe(
  //     tap((projet) => console.log(`added projet w/ id=${projet.id}`)),
  //     catchError(this.handleError<any>('addProjet'))
  //   );
  // }
  //
  // updateProjet (id, projet): Observable<any> {
  //   return this.http.put(endpoint + 'projets/' + id, JSON.stringify(projet), httpOptions).pipe(
  //     tap(_ => console.log(`updated projet id=${id}`)),
  //     catchError(this.handleError<any>('updateProjet'))
  //   );
  // }
  //
  // deleteProjet (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'projets/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted projet id=${id}`)),
  //     catchError(this.handleError<any>('deleteProjet'))
  //   );
  // }

  /////////////////////////////////////////           ETAPE ENTITIE       ////////////////////////////////////////////////////

  getEtapes(): Observable<any> {
    return this.http.get(endpoint + 'etapes').pipe(
      map(this.extractData));
  }

  // getEtape(id): Observable<any> {
  //   return this.http.get(endpoint + 'etapes/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addEtape (projet): Observable<any> {
  //   console.log(projet);
  //   return this.http.post<any>(endpoint + 'etapes', JSON.stringify(projet), httpOptions).pipe(
  //     tap((projet) => console.log(`added etape w/ id=${etape.id}`)),
  //     catchError(this.handleError<any>('addEtape'))
  //   );
  // }
  //
  // updateEtape (id, etape): Observable<any> {
  //   return this.http.put(endpoint + 'etapes/' + id, JSON.stringify(etape), httpOptions).pipe(
  //     tap(_ => console.log(`updated etape id=${id}`)),
  //     catchError(this.handleError<any>('updateEtape'))
  //   );
  // }
  //
  // deleteEtape (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'etapes/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted etape id=${id}`)),
  //     catchError(this.handleError<any>('deleteEtape'))
  //   );
  // }

  /////////////////////////////////////////           PHASE ENTITIE       ////////////////////////////////////////////////////

  getPhases(): Observable<any> {
    return this.http.get(endpoint + 'phases').pipe(
      map(this.extractData));
  }

  // getPhase(id): Observable<any> {
  //   return this.http.get(endpoint + 'phases/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addPhase (phase): Observable<any> {
  //   console.log(phase);
  //   return this.http.post<any>(endpoint + 'phases', JSON.stringify(phase), httpOptions).pipe(
  //     tap((phase) => console.log(`added phase w/ id=${phase.id}`)),
  //     catchError(this.handleError<any>('addPhase'))
  //   );
  // }
  //
  // updatePhase (id, phase): Observable<any> {
  //   return this.http.put(endpoint + 'phases/' + id, JSON.stringify(phase), httpOptions).pipe(
  //     tap(_ => console.log(`updated phase id=${id}`)),
  //     catchError(this.handleError<any>('updatePhase'))
  //   );
  // }
  //
  // deletePhase (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'phases/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted phase id=${id}`)),
  //     catchError(this.handleError<any>('deletePhase'))
  //   );
  // }

  /////////////////////////////////////////           SOUS-ETAPE ENTITIE       ////////////////////////////////////////////////////

  getSousEtapes(): Observable<any> {
    return this.http.get(endpoint + 'sousEtapes').pipe(
      map(this.extractData));
  }

  // getSousEtape(id): Observable<any> {
  //   return this.http.get(endpoint + 'sousEtapes/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addSousEtape (sousEtape): Observable<any> {
  //   console.log(sousEtape);
  //   return this.http.post<any>(endpoint + 'sousEtapes', JSON.stringify(sousEtape), httpOptions).pipe(
  //     tap((sousEtape) => console.log(`added sousEtape w/ id=${sousEtape.id}`)),
  //     catchError(this.handleError<any>('addSousEtape'))
  //   );
  // }
  //
  // updateSousEtape (id, sousEtape): Observable<any> {
  //   return this.http.put(endpoint + 'sousEtapes/' + id, JSON.stringify(sousEtape), httpOptions).pipe(
  //     tap(_ => console.log(`updated sousEtape id=${id}`)),
  //     catchError(this.handleError<any>('updateSousEtape'))
  //   );
  // }
  //
  // deleteSousEtape (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'sousEtapes/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted sousEtape id=${id}`)),
  //     catchError(this.handleError<any>('deleteSousEtape'))
  //   );
  // }

  /////////////////////////////////////////       DOCUMENTATION ENTITIE       ////////////////////////////////////////////////////

  getDocumentations(): Observable<any> {
    return this.http.get(endpoint + 'documentations').pipe(
      map(this.extractData));
  }

  // getDocumentation(id): Observable<any> {
  //   return this.http.get(endpoint + 'documentations/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addDocumentation (documentation): Observable<any> {
  //   console.log(documentation);
  //   return this.http.post<any>(endpoint + 'documentations', JSON.stringify(documentation), httpOptions).pipe(
  //     tap((documentation) => console.log(`added documentation w/ id=${documentation.id}`)),
  //     catchError(this.handleError<any>('addDocumentation'))
  //   );
  // }
  //
  // updateDocumentation (id, documentation): Observable<any> {
  //   return this.http.put(endpoint + 'documentations/' + id, JSON.stringify(documentation), httpOptions).pipe(
  //     tap(_ => console.log(`updated documentation id=${id}`)),
  //     catchError(this.handleError<any>('updateDocumentation'))
  //   );
  // }
  //
  // deleteDocumentation (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'documentations/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted documentation id=${id}`)),
  //     catchError(this.handleError<any>('deleteDocumentation'))
  //   );
  // }

  /////////////////////////////////////////     ETAT DAVANCEMENT ENTITIE    ////////////////////////////////////////////////////

  getEtatAvancements(): Observable<any> {
    return this.http.get(endpoint + 'etatAvancements').pipe(
      map(this.extractData));
  }

  // getEtatAvancement(id): Observable<any> {
  //   return this.http.get(endpoint + 'etatAvancements/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addEtatAvancement (etatAvancements): Observable<any> {
  //   console.log(etatAvancements);
  //   return this.http.post<any>(endpoint + 'etatAvancements', JSON.stringify(etatAvancements), httpOptions).pipe(
  //     tap((etatAvancements) => console.log(`added etatAvancements w/ id=${etatAvancements.id}`)),
  //     catchError(this.handleError<any>('addEtatAvancement'))
  //   );
  // }
  //
  // updateEtatAvancement (id, etatAvancements): Observable<any> {
  //   return this.http.put(endpoint + 'etatAvancements/' + id, JSON.stringify(etatAvancements), httpOptions).pipe(
  //     tap(_ => console.log(`updated etatAvancements id=${id}`)),
  //     catchError(this.handleError<any>('updateEtatAvancement'))
  //   );
  // }
  //

  deleteEtatAvancement(id:Number): Observable<any> {
    console.log('Lien A SUPPRIMER : ' + endpoint + 'etatAvancements/' + id);
    return this.http.delete(endpoint + 'etatAvancements/' + id).subscribe((ok)=>{console.log(ok)});
  }

// ///////////////////////////////////////////////     LOGISTIQUE ENTITIE    ////////////////////////////////////////////////////

  // getLogistiques(): Observable<any> {
  //   return this.http.get(endpoint + 'logistiques').pipe(
  //     map(this.extractData));
  // }
  //
  // getLogistique(id): Observable<any> {
  //   return this.http.get(endpoint + 'logistiques/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addLogistique (logistiques): Observable<any> {
  //   console.log(logistiques);
  //   return this.http.post<any>(endpoint + 'logistiques', JSON.stringify(logistique), httpOptions).pipe(
  //     tap((logistique) => console.log(`added logistique w/ id=${logistique.id}`)),
  //     catchError(this.handleError<any>('addProjet'))
  //   );
  // }
  //
  // updateProjet (id, projet): Observable<any> {
  //   return this.http.put(endpoint + 'logistiques/' + id, JSON.stringify(projet), httpOptions).pipe(
  //     tap(_ => console.log(`updated projet id=${id}`)),
  //     catchError(this.handleError<any>('updateProjet'))
  //   );
  // }
  //
  // deleteProjet (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'logistiques/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted projet id=${id}`)),
  //     catchError(this.handleError<any>('deleteProjet'))
  //   );
  // }
  //
  //
  // // PIECE ENTITIE //
  // getProjets(): Observable<any> {
  //   return this.http.get(endpoint + 'projets').pipe(
  //     map(this.extractData));
  // }
  //
  // getProjet(id): Observable<any> {
  //   return this.http.get(endpoint + 'projets/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addProjet (projet): Observable<any> {
  //   console.log(projet);
  //   return this.http.post<any>(endpoint + 'projets', JSON.stringify(projet), httpOptions).pipe(
  //     tap((projet) => console.log(`added projet w/ id=${projet.id}`)),
  //     catchError(this.handleError<any>('addProjet'))
  //   );
  // }
  //
  // updateProjet (id, projet): Observable<any> {
  //   return this.http.put(endpoint + 'projets/' + id, JSON.stringify(projet), httpOptions).pipe(
  //     tap(_ => console.log(`updated projet id=${id}`)),
  //     catchError(this.handleError<any>('updateProjet'))
  //   );
  // }
  //
  // deleteProjet (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'projets/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted projet id=${id}`)),
  //     catchError(this.handleError<any>('deleteProjet'))
  //   );
  // }
  //
  //
  // // APPEL DOFFRE ENTITIE //
  // getProjets(): Observable<any> {
  //   return this.http.get(endpoint + 'projets').pipe(
  //     map(this.extractData));
  // }
  //
  // getProjet(id): Observable<any> {
  //   return this.http.get(endpoint + 'projets/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addProjet (projet): Observable<any> {
  //   console.log(projet);
  //   return this.http.post<any>(endpoint + 'projets', JSON.stringify(projet), httpOptions).pipe(
  //     tap((projet) => console.log(`added projet w/ id=${projet.id}`)),
  //     catchError(this.handleError<any>('addProjet'))
  //   );
  // }
  //
  // updateProjet (id, projet): Observable<any> {
  //   return this.http.put(endpoint + 'projets/' + id, JSON.stringify(projet), httpOptions).pipe(
  //     tap(_ => console.log(`updated projet id=${id}`)),
  //     catchError(this.handleError<any>('updateProjet'))
  //   );
  // }
  //
  // deleteProjet (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'projets/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted projet id=${id}`)),
  //     catchError(this.handleError<any>('deleteProjet'))
  //   );
  // }
  //
  //
  // // COMISSION ENTITIE //
  // getProjets(): Observable<any> {
  //   return this.http.get(endpoint + 'projets').pipe(
  //     map(this.extractData));
  // }
  //
  // getProjet(id): Observable<any> {
  //   return this.http.get(endpoint + 'projets/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addProjet (projet): Observable<any> {
  //   console.log(projet);
  //   return this.http.post<any>(endpoint + 'projets', JSON.stringify(projet), httpOptions).pipe(
  //     tap((projet) => console.log(`added projet w/ id=${projet.id}`)),
  //     catchError(this.handleError<any>('addProjet'))
  //   );
  // }
  //
  // updateProjet (id, projet): Observable<any> {
  //   return this.http.put(endpoint + 'projets/' + id, JSON.stringify(projet), httpOptions).pipe(
  //     tap(_ => console.log(`updated projet id=${id}`)),
  //     catchError(this.handleError<any>('updateProjet'))
  //   );
  // }
  //
  // deleteProjet (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'projets/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted projet id=${id}`)),
  //     catchError(this.handleError<any>('deleteProjet'))
  //   );
  // }
  //
  //
  // // CONTRAT ENTITIE //
  // getProjets(): Observable<any> {
  //   return this.http.get(endpoint + 'projets').pipe(
  //     map(this.extractData));
  // }
  //
  // getProjet(id): Observable<any> {
  //   return this.http.get(endpoint + 'projets/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addProjet (projet): Observable<any> {
  //   console.log(projet);
  //   return this.http.post<any>(endpoint + 'projets', JSON.stringify(projet), httpOptions).pipe(
  //     tap((projet) => console.log(`added projet w/ id=${projet.id}`)),
  //     catchError(this.handleError<any>('addProjet'))
  //   );
  // }
  //
  // updateProjet (id, projet): Observable<any> {
  //   return this.http.put(endpoint + 'projets/' + id, JSON.stringify(projet), httpOptions).pipe(
  //     tap(_ => console.log(`updated projet id=${id}`)),
  //     catchError(this.handleError<any>('updateProjet'))
  //   );
  // }
  //
  // deleteProjet (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'projets/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted projet id=${id}`)),
  //     catchError(this.handleError<any>('deleteProjet'))
  //   );
  // }
  //
  //
  // // PAIEMENT SOCIETE ENTITIE //
  getSocieteClientes(): Observable<any> {
    return this.http.get(endpoint + 'societeClientes').pipe(
      map(this.extractData));
  }
  //
  // getProjet(id): Observable<any> {
  //   return this.http.get(endpoint + 'projets/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addProjet (projet): Observable<any> {
  //   console.log(projet);
  //   return this.http.post<any>(endpoint + 'projets', JSON.stringify(projet), httpOptions).pipe(
  //     tap((projet) => console.log(`added projet w/ id=${projet.id}`)),
  //     catchError(this.handleError<any>('addProjet'))
  //   );
  // }
  //
  // updateProjet (id, projet): Observable<any> {
  //   return this.http.put(endpoint + 'projets/' + id, JSON.stringify(projet), httpOptions).pipe(
  //     tap(_ => console.log(`updated projet id=${id}`)),
  //     catchError(this.handleError<any>('updateProjet'))
  //   );
  // }
  //
  // deleteProjet (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'projets/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted projet id=${id}`)),
  //     catchError(this.handleError<any>('deleteProjet'))
  //   );
  // }
  //
  //
  // // RAPPORT COMMISSION ENTITIE //
  // getProjets(): Observable<any> {
  //   return this.http.get(endpoint + 'projets').pipe(
  //     map(this.extractData));
  // }
  //
  // getProjet(id): Observable<any> {
  //   return this.http.get(endpoint + 'projets/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addProjet (projet): Observable<any> {
  //   console.log(projet);
  //   return this.http.post<any>(endpoint + 'projets', JSON.stringify(projet), httpOptions).pipe(
  //     tap((projet) => console.log(`added projet w/ id=${projet.id}`)),
  //     catchError(this.handleError<any>('addProjet'))
  //   );
  // }
  //
  // updateProjet (id, projet): Observable<any> {
  //   return this.http.put(endpoint + 'projets/' + id, JSON.stringify(projet), httpOptions).pipe(
  //     tap(_ => console.log(`updated projet id=${id}`)),
  //     catchError(this.handleError<any>('updateProjet'))
  //   );
  // }
  //
  // deleteProjet (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'projets/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted projet id=${id}`)),
  //     catchError(this.handleError<any>('deleteProjet'))
  //   );
  // }
  //
  //
  // // SOCIETE CLIENTE ENTITIE //
  // getProjets(): Observable<any> {
  //   return this.http.get(endpoint + 'projets').pipe(
  //     map(this.extractData));
  // }
  //
  // getProjet(id): Observable<any> {
  //   return this.http.get(endpoint + 'projets/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addProjet (projet): Observable<any> {
  //   console.log(projet);
  //   return this.http.post<any>(endpoint + 'projets', JSON.stringify(projet), httpOptions).pipe(
  //     tap((projet) => console.log(`added projet w/ id=${projet.id}`)),
  //     catchError(this.handleError<any>('addProjet'))
  //   );
  // }
  //
  // updateProjet (id, projet): Observable<any> {
  //   return this.http.put(endpoint + 'projets/' + id, JSON.stringify(projet), httpOptions).pipe(
  //     tap(_ => console.log(`updated projet id=${id}`)),
  //     catchError(this.handleError<any>('updateProjet'))
  //   );
  // }
  //
  // deleteProjet (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'projets/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted projet id=${id}`)),
  //     catchError(this.handleError<any>('deleteProjet'))
  //   );
  // }
  //
  //
  // // CHEF EQUIPE ENTITIE //
  // getProjets(): Observable<any> {
  //   return this.http.get(endpoint + 'projets').pipe(
  //     map(this.extractData));
  // }
  //
  // getProjet(id): Observable<any> {
  //   return this.http.get(endpoint + 'projets/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addProjet (projet): Observable<any> {
  //   console.log(projet);
  //   return this.http.post<any>(endpoint + 'projets', JSON.stringify(projet), httpOptions).pipe(
  //     tap((projet) => console.log(`added projet w/ id=${projet.id}`)),
  //     catchError(this.handleError<any>('addProjet'))
  //   );
  // }
  //
  // updateProjet (id, projet): Observable<any> {
  //   return this.http.put(endpoint + 'projets/' + id, JSON.stringify(projet), httpOptions).pipe(
  //     tap(_ => console.log(`updated projet id=${id}`)),
  //     catchError(this.handleError<any>('updateProjet'))
  //   );
  // }
  //
  // deleteProjet (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'projets/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted projet id=${id}`)),
  //     catchError(this.handleError<any>('deleteProjet'))
  //   );
  // }
  //
  //
  // // OUVRIER ENTITIE //
  // getProjets(): Observable<any> {
  //   return this.http.get(endpoint + 'projets').pipe(
  //     map(this.extractData));
  // }
  //
  // getProjet(id): Observable<any> {
  //   return this.http.get(endpoint + 'projets/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addProjet (projet): Observable<any> {
  //   console.log(projet);
  //   return this.http.post<any>(endpoint + 'projets', JSON.stringify(projet), httpOptions).pipe(
  //     tap((projet) => console.log(`added projet w/ id=${projet.id}`)),
  //     catchError(this.handleError<any>('addProjet'))
  //   );
  // }
  //
  // updateProjet (id, projet): Observable<any> {
  //   return this.http.put(endpoint + 'projets/' + id, JSON.stringify(projet), httpOptions).pipe(
  //     tap(_ => console.log(`updated projet id=${id}`)),
  //     catchError(this.handleError<any>('updateProjet'))
  //   );
  // }
  //
  // deleteProjet (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'projets/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted projet id=${id}`)),
  //     catchError(this.handleError<any>('deleteProjet'))
  //   );
  // }
  //
  //
  // // PROJECT MANAGER ENTITIE //
  // getProjets(): Observable<any> {
  //   return this.http.get(endpoint + 'projets').pipe(
  //     map(this.extractData));
  // }
  //
  // getProjet(id): Observable<any> {
  //   return this.http.get(endpoint + 'projets/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addProjet (projet): Observable<any> {
  //   console.log(projet);
  //   return this.http.post<any>(endpoint + 'projets', JSON.stringify(projet), httpOptions).pipe(
  //     tap((projet) => console.log(`added projet w/ id=${projet.id}`)),
  //     catchError(this.handleError<any>('addProjet'))
  //   );
  // }
  //
  // updateProjet (id, projet): Observable<any> {
  //   return this.http.put(endpoint + 'projets/' + id, JSON.stringify(projet), httpOptions).pipe(
  //     tap(_ => console.log(`updated projet id=${id}`)),
  //     catchError(this.handleError<any>('updateProjet'))
  //   );
  // }
  //
  // deleteProjet (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'projets/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted projet id=${id}`)),
  //     catchError(this.handleError<any>('deleteProjet'))
  //   );
  // }
  //
  //
  // // STAFF ENTITIE //
  // getProjets(): Observable<any> {
  //   return this.http.get(endpoint + 'projets').pipe(
  //     map(this.extractData));
  // }
  //
  // getProjet(id): Observable<any> {
  //   return this.http.get(endpoint + 'projets/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addProjet (projet): Observable<any> {
  //   console.log(projet);
  //   return this.http.post<any>(endpoint + 'projets', JSON.stringify(projet), httpOptions).pipe(
  //     tap((projet) => console.log(`added projet w/ id=${projet.id}`)),
  //     catchError(this.handleError<any>('addProjet'))
  //   );
  // }
  //
  // updateProjet (id, projet): Observable<any> {
  //   return this.http.put(endpoint + 'projets/' + id, JSON.stringify(projet), httpOptions).pipe(
  //     tap(_ => console.log(`updated projet id=${id}`)),
  //     catchError(this.handleError<any>('updateProjet'))
  //   );
  // }
  //
  // deleteProjet (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'projets/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted projet id=${id}`)),
  //     catchError(this.handleError<any>('deleteProjet'))
  //   );
  // }









  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
