import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { defaultEnvironment } from './environments/environment.default';

const firebaseProviders: EnvironmentProviders = importProvidersFrom([
  provideFirebaseApp(() => initializeApp(defaultEnvironment.firebase)),
  provideAuth(() => getAuth()),
]);

export { firebaseProviders };