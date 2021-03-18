import {Injectable} from '@angular/core';
import { HttpService } from 'src/app/core/services/httpservice.service';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class FormService {

   constructor(private httpService: HttpService) {
       //do nothing
   }

    /**
     * 
     * @param userInputDetails 
     */
    createNewUsers(userInputDetails) {
        return  this.httpService.httpPost(environment.FEDEX_CREATE_USER_POST_API, userInputDetails);
    }

}

