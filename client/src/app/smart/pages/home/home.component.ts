import { Component, OnInit } from '@angular/core';

import { IReport } from '@reports/models';
import { IMapOptions, IMarker } from '@shared/components';
import { BaseComponent } from '@shared/containers';
import { HTTPService } from '@shared/services';

@Component({
  selector: 'smart-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class SmartHomeComponent extends BaseComponent implements OnInit {
  public user: any;
  public map: IMapOptions;

  constructor(private http: HTTPService) {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.http.get<any>('home').subscribe(value => {
      const homes: IReport[] = value.data.homes;
      if (!homes.length) {
        return;
      }

      this.map = {
        location: {
          latitude: homes[0].location.lat,
          longitude: homes[0].location.lng,
          zoom: 15
        },
        markers: homes.map((item: any) => ({
          title: item.address,
          details: item.state.connected ? 'Connected' : 'Disconnected',
          latitude: item.location.lat,
          longitude: item.location.lng
        } as IMarker))
      } as IMapOptions;
    });
  }
}
