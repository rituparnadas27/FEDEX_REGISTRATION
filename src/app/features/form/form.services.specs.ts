import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {TestBed, inject} from '@angular/core/testing';
import { FormService } from './form.services';

describe('FormService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FormService],
            imports: [HttpClientTestingModule]
         
        });
    });

    it('should be created', inject([FormService], (service: FormService) => {
        expect(service).toBeTruthy();
    }));
});
