import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UtilityService {

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = ''

    if (error.error instanceof ErrorEvent) {
      // client Error
      errorMessage = `Error :${error.error.message}`
    } else {
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
    }

    return throwError(() => new Error(errorMessage))
  }

}
