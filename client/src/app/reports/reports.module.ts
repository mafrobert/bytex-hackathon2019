import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';

import { NewReportsComponent, ReportListComponent } from '@reports/pages';
import { ReportsComponent } from '@reports/reports.component';
import { ReportsRoutingModule } from '@reports/reports.routing';
import { reportsEffects, reportsReducer } from '@reports/store';

@NgModule({
  declarations: [
    NewReportsComponent,
    ReportListComponent,
    ReportsComponent
  ],
    imports: [
      CommonModule,
      EffectsModule.forFeature(reportsEffects),
      ReportsRoutingModule,
      SharedModule,
      StoreModule.forFeature('reports', reportsReducer)
    ]
})
export class ReportsModule { }
