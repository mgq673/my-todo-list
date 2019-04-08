import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const  CustomHttpOptions = () => {
 return { headers: new HttpHeaders(environment.httpsHeaders)};
};




