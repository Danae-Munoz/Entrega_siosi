import { APP_INITIALIZER, enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

// Servicios y dependencias adicionales
import { SQLiteService } from './app/services/sqlite.service';
import { DataBaseService } from './app/services/data-base.service';
import { InitializeAppService } from './app/services/initialize.app.service';
import { AuthService } from './app/services/auth.service';
import { Storage } from '@ionic/storage-angular';
import { APIClientService } from './app/services/apiclient.service';
import { HttpClientModule } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

export function initializeFactory(init: InitializeAppService) {
  return () => init.inicializarAplicacion();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    // Usar importProvidersFrom para IonicModule y otros módulos
    importProvidersFrom(
      IonicModule.forRoot(), // Importa IonicModule con forRoot correctamente
      HttpClientModule // Importación de HttpClientModule
    ),
    // Servicios que utilizas
    SQLiteService,
    DataBaseService,
    AuthService,
    Storage,
    APIClientService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeFactory,
      deps: [InitializeAppService],
      multi: true
    }
  ]
})
  .catch((err) => console.error(err));
