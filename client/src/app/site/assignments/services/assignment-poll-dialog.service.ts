import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CollectionStringMapperService } from 'app/core/core-services/collection-string-mapper.service';
import { BasePollDialogService } from 'app/core/ui-services/base-poll-dialog.service';
import { AssignmentPollDialogComponent } from 'app/site/assignments/components/assignment-poll-dialog/assignment-poll-dialog.component';
import { ViewAssignmentPoll } from '../models/view-assignment-poll';

/**
 * Subclassed to provide the right `PollService` and `DialogComponent`
 */
@Injectable({
    providedIn: 'root'
})
export class AssignmentPollDialogService extends BasePollDialogService<ViewAssignmentPoll> {
    protected dialogComponent = AssignmentPollDialogComponent;

    public constructor(dialog: MatDialog, mapper: CollectionStringMapperService) {
        super(dialog, mapper);
    }
}