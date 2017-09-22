Projekt oparty na https://blog.lukasz-galka.pl/angular-intergracja-google-maps/

Zmiany dokonane w stosunku do oryginalnego projektu:

1. Generowanie początkowego projektu za pomocą komend:
ng new google-maps-example --style=scss
cd google-maps-example
npm i -S @agm/core
npm i -D @types/googlemaps

2. Aktualizacja nazwy projektu bazowego z angular2-google-maps na @agm

3. Aktualizacja nazw komponentu z sebm-google-map na agm-map

4. Aktualizacja nazw komponentu z sebm-google-map-marker na agm-marker

5. Zmiana w pliku src/app/app.module.ts
    providers: []
    na
    providers: [GoogleMapsAPIWrapper]

6. Zmiana wpliku src/app/app.component.ts
    this._mapsWrapper.getNativeMap().then(map => this.map = map);
    na
    this._mapsWrapper.getNativeMap().then(map => {
      this.map = map;
      console.log("Dostałem obiekt mapy")
    });

7. Zmiana wpliku src/app/app.component.ts
    return document.getElementById('map-autocomplete');
    na
    return <HTMLInputElement>document.getElementById('map-autocomplete');

