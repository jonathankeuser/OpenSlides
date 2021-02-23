import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { GlobalListOfSpeakersRawRoutingModule } from './global-list-of-speakers-raw-routing.module';
import { GlobalListOfSpeakersRawComponent } from './global-list-of-speakers-raw/global-list-of-speakers-raw.component';

@NgModule({
    imports: [CommonModule, GlobalListOfSpeakersRawRoutingModule, SharedModule],
    declarations: [GlobalListOfSpeakersRawComponent]
})
export class GlobalListOfSpeakersRawModule {}