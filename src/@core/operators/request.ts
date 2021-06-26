import { ajax, AjaxError, AjaxResponse } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable, of, OperatorFunction } from 'rxjs';
import { IActionWithPayload, IActions } from './../actions/interfaces';
import { IService } from './../services/interfaces';

export const request = (
  responseAction: IActions<IActionWithPayload, AjaxResponse, AjaxError>,
  service: IService
): OperatorFunction<IActionWithPayload<AjaxResponse>, IActionWithPayload<AjaxResponse | AjaxError>> =>
  mergeMap((action: IActionWithPayload<AjaxResponse>): Observable<IActionWithPayload<AjaxResponse | AjaxError>> => {
    return ajax(service(action.payload)).pipe(
      map((response) => {
        return responseAction.succeeded(response);
      }),
      catchError((error) => {
        return of(responseAction.failed(error));
      })
    );
  });
