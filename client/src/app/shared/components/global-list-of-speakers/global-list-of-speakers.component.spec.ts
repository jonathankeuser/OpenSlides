import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2EImportsModule } from 'e2e-imports.module';
import { GlobalListOfSpeakersComponent } from './global-list-of-speakers.component';

describe('GlobalListOfSpeakersComponent', () => {
    let component: GlobalListOfSpeakersComponent;
    let fixture: ComponentFixture<GlobalListOfSpeakersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [E2EImportsModule],
            declarations: [GlobalListOfSpeakersComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GlobalListOfSpeakersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
