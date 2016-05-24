import { Prani } from './prani';
import { PRANIS } from './pranis';
import { Injectable } from '@angular/core';

@Injectable()
export class PraniService {
  getPranis() {
    return Promise.resolve(PRANIS);
  }

  getPrani(id: number) {
    return Promise.resolve(PRANIS).then(
      //prani => pranis.filter(prani => prani.id === id)[0]
    );
  }
}