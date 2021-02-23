import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2EImportsModule } from 'e2e-imports.module';

import { GlobalListOfSpeakersRawComponent } from './global-list-of-speakers-raw.component';
import { GlobalListOfSpeakersRawModule } from '../global-list-of-speakers-raw.module';

describe('GlobalListOfSpeakersRawComponent', () => {
    let component: GlobalListOfSpeakersRawComponent;
    let fixture: ComponentFixture<GlobalListOfSpeakersRawComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [E2EImportsModule, GlobalListOfSpeakersRawModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GlobalListOfSpeakersRawComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
