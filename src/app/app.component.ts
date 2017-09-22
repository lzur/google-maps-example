import { Component, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  lat: number = 53.4285438;
  lng: number = 14.5528116;
  zoom: number = 12;
  map: any;

  constructor(private _loader: MapsAPILoader,
    private zone: NgZone,
    private _mapsWrapper: GoogleMapsAPIWrapper) {}

  ngOnInit(): void {
    this._loader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.getMapElement(), {});
      google.maps.event.addListener(autocomplete, 'place_changed', () => {                
          this.zone.run(() => {
              let place = autocomplete.getPlace();                    
              this.lat = place.geometry.location.lat();
              this.lng = place.geometry.location.lng();
          });
      });
    });
    this._mapsWrapper.getNativeMap().then(map => {
      this.map = map;
      console.log("Dostałem obiekt mapy")
    });
  } 

  private getMapElement(): HTMLInputElement {
    return <HTMLInputElement>document.getElementById('map-autocomplete');
  }

  zoomChange(zoom: number) {
    console.log(zoom);
  }

  centerChange(center: any) {
    console.log(center.lat);
    console.log(center.lng);
  }
}
