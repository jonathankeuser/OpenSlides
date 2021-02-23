import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { GlobalListOfSpeakersRawComponent } from './global-list-of-speakers-raw/global-list-of-speakers-raw.component';

const routes: Route[] = [
    {
        path: '',
        component: GlobalListOfSpeakersRawComponent,
        pathMatch: 'full'
    },
    {
        path: ':id',
        component: GlobalListOfSpeakersRawComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GlobalListOfSpeakersRawRoutingModule {}
