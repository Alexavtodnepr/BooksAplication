import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'src/app/pages/main-page/main-page.component';
import { ChartComponent } from 'src/app/pages/chart/chart.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'chart', component: ChartComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
