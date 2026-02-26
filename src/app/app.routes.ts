//app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';
import { BrandComponent } from './brand/brand.component';
import { CompareComponent } from './compare/compare.component';
import { VariantComponent } from './variant/variant.component';
import { CarConfigComponent } from './models/configure/car-config/car-config.component';





export const AppRoutes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },

  { path: 'models', component: ModelsComponent, data: { animation: 'ModelsPage' } },

  { path: 'models/:model/:variant', component: VariantComponent, data: { animation: 'VariantPage' } },

  { path: 'configure/:variant', component: CarConfigComponent, data: { animation: 'ConfigPage' } },

  { path: 'compare', component: CompareComponent, data: { animation: 'ComparePage' } },

  { path: 'brand', component: BrandComponent, data: { animation: 'BrandPage' } },

  { path: '**', redirectTo: '', data: { animation: 'NotFoundPage' } }
];

