import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from 'app/core/core-services/auth.service';
import { OperatorService, Permission } from 'app/core/core-services/operator.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { BaseViewComponentDirective } from 'app/site/base/base-view';
import { ConfigService } from 'app/core/ui-services/config.service';
import { ListOfSpeakersRepositoryService } from 'app/core/repositories/agenda/list-of-speakers-repository.service';
import { ViewListOfSpeakers } from 'app/site/agenda/models/view-list-of-speakers';
import { SpeakerState, ViewSpeaker } from 'app/site/agenda/models/view-speaker';

@Component({
    selector: 'os-global-list-of-speakers-raw',
    templateUrl: './global-list-of-speakers-raw.component.html',
    styleUrls: ['./global-list-of-speakers-raw.component.scss']
})
export class GlobalListOfSpeakersRawComponent extends BaseViewComponentDirective implements OnInit {
    public isLoading = true;
    public ListOfSpeakersId: number;
    public viewListOfSpeakers: ViewListOfSpeakers;
    public waitingSpeakers: ViewSpeaker[];

    @ViewChild('container', { static: true })
    private containerElement: ElementRef;

    public constructor(
        auth: AuthService, // Needed to trigger loading of OpenSlides. Starts the Bootup process.
        private route: ActivatedRoute,
        private operator: OperatorService,

        title: Title,
        protected translate: TranslateService, // protected required for ng-translate-extract
        snackBar: MatSnackBar,
        private config: ConfigService,
        private listOfSpeakersRepo: ListOfSpeakersRepositoryService
    ) {
        super(title, translate, snackBar);
    }

    public ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.loadListOfSpeakers(parseInt(params.id, 10) || parseInt(this.config.instant('agenda_global_list_of_speakers'), 10));
            this.isLoading = false;
        });
    }

    private loadListOfSpeakers(ListOfSpeakersId: number): void {
        this.ListOfSpeakersId = ListOfSpeakersId;

        this.subscriptions.push(
            this.listOfSpeakersRepo.getViewModelObservable(ListOfSpeakersId).subscribe(listOfSpeakers => {
                if (listOfSpeakers) {
                    this.setListOfSpeakers(listOfSpeakers);
                }
            })
        );
    }

    private setListOfSpeakers(viewListOfSpeakers: ViewListOfSpeakers): void {
        const title = this.translate.instant('List of speakers');
        super.setTitle(title);
        this.viewListOfSpeakers = viewListOfSpeakers;

        const allSpeakers = viewListOfSpeakers?.speakers.sort((a, b) => a.weight - b.weight);
        this.waitingSpeakers = allSpeakers?.filter(speaker => speaker.state === SpeakerState.WAITING);
        this.waitingSpeakers?.sort((a: ViewSpeaker, b: ViewSpeaker) => a.weight - b.weight);

        console.log('### waitingSpeakers ###');
        console.log(this.waitingSpeakers);
    }
}
