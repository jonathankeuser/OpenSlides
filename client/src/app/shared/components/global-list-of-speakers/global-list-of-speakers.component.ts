import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

import { TranslateService } from '@ngx-translate/core';

import { ListOfSpeakersRepositoryService } from 'app/core/repositories/agenda/list-of-speakers-repository.service';
import { ListOfSpeakersContentComponent } from 'app/shared/components/list-of-speakers-content/list-of-speakers-content.component';
import { BaseViewComponentDirective } from 'app/site/base/base-view';
import { ViewListOfSpeakers } from 'app/site/agenda/models/view-list-of-speakers';
import { ConfigService } from 'app/core/ui-services/config.service';

/**
 * The list of speakers for agenda items.
 */
@Component({
    selector: 'os-global-list-of-speakers',
    templateUrl: './global-list-of-speakers.component.html',
    styleUrls: ['./global-list-of-speakers.component.scss']
})
export class GlobalListOfSpeakersComponent extends BaseViewComponentDirective implements OnInit {
    @ViewChild('content')
    private listOfSpeakersContentComponent: ListOfSpeakersContentComponent;

    /**
     * Holds the view item to the given topic
     */
    public viewListOfSpeakers: ViewListOfSpeakers;

    public manualSortMode = false;

    /**
     * filled by child component
     */
    public isListOfSpeakersEmpty: boolean;

    /**
     * filled by child component
     */
    public canReaddLastSpeaker: boolean;

    /**
     * Constructor for speaker list component. Generates the forms.
     *
     * @param title
     * @param translate
     * @param snackBar
     * @param DS the DataStore
     * @param listOfSpeakersRepo Repository for list of speakers
     * @param operator the current operator
     * @param promptService
     * @param currentListOfSpeakersService
     * @param durationService helper for speech duration display
     */
    public constructor(
        title: Title,
        protected translate: TranslateService, // protected required for ng-translate-extract
        snackBar: MatSnackBar,
        private listOfSpeakersRepo: ListOfSpeakersRepositoryService,
        private config: ConfigService
    ) {
        super(title, translate, snackBar);
    }

    public ngOnInit(): void {
        const id: number = this.config.instant('agenda_global_list_of_speakers');
        this.setListOfSpeakersById(id);
    }

    /**
     * Sets the current list of speakers id to show
     *
     * @param id the list of speakers id
     */
    private setListOfSpeakersById(id: number): void {
        this.subscriptions.push(
            this.listOfSpeakersRepo.getViewModelObservable(id).subscribe(listOfSpeakers => {
                if (listOfSpeakers) {
                    this.setListOfSpeakers(listOfSpeakers);
                }
            })
        );
    }

    private setListOfSpeakers(listOfSpeakers: ViewListOfSpeakers): void {
        const title = this.translate.instant('List of speakers');
        super.setTitle(title);
        this.viewListOfSpeakers = listOfSpeakers;
    }
}
