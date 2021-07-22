import { ajax, AjaxError, AjaxResponse } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable, of, OperatorFunction } from 'rxjs';
import { IAction, IActionsCreator } from './../actions/interfaces';
import { IService } from './../services/interfaces';

export const request = (
  responseAction: IActionsCreator<IAction, AjaxResponse, AjaxError>,
  service: IService
): OperatorFunction<IAction<AjaxResponse>, IAction<AjaxResponse | AjaxError>> =>
  mergeMap((action: IAction<AjaxResponse>): Observable<IAction<AjaxResponse | AjaxError>> => {
    return ajax(service(action.payload)).pipe(
      map((response) => {
        return responseAction.succeeded(response);
      }),
      catchError((error) => {
        return of(responseAction.failed(error));
      })
    );
  });
