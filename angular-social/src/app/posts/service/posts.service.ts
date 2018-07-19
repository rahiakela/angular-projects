import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    @Optional()
    @Inject(APP_BASE_HREF)
    private origin: string,
    private http: HttpClient
  ) {}

  getPosts() {
    const url = `${environment.apiUrl}/posts/timeline?filter[where][type]=text`;

    return this.http.get(url);
  }

  getProfile(profileId) {
    const url = `${environment.apiUrl}/profiles/${profileId}?filter[include]=posts`;

    return this.http.get(url);
  }
}
