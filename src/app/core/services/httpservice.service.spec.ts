import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './httpservice.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService],
      imports: [HttpClientTestingModule]
  });
    service = TestBed.inject(HttpService);
  });

  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(HttpService);
  });

  afterEach(() => {
      httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check whether httpPost method posts data', () => {
    const userDetailsDummyObj = {
        'firstName': 'TestName',
        'lastName': 'testlastname',
        'emailId': 'test@gmail.com',
    };

    const successResponseDummy = null;

    service.httpPost('/testingPOST', userDetailsDummyObj).subscribe(response => {
        expect(response.length).toBe(2);
    });
    const req = httpMock.expectOne('/testingPOST');
    expect(req.request.method).toBe('POST');
    expect(req.request.url).toBe('/testingPOST');
    expect(req.request.body).toBe(userDetailsDummyObj);

    req.flush(successResponseDummy);
});

});
