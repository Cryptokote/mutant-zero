import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FirebaseProjectsData} from '../dataFiles/data.types';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {
  constructor(private firestore: AngularFirestore) {}

  firestoreProjectsCollection = this.firestore.collection('projects');

  getProjectsData(): Observable<FirebaseProjectsData> {
    return this.firestoreProjectsCollection.get().pipe(
      map((resp) => {
        const combinedResponse = {} as FirebaseProjectsData;
        resp.forEach(doc => {
          combinedResponse[doc.id] = doc.data();
        });
        return combinedResponse;
      })
    );
  }
}
