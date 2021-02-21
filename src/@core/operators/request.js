import { ajax } from "rxjs/ajax";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

export const request = (responseAction, service) =>
  mergeMap(action => {
    return ajax(service(action.payload)).pipe(
      map(response => {
        return responseAction.succeeded(response);
      }),
      catchError(error => {
        return of(responseAction.failed(error));
      })
    );
  });
