import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfrDemoComponent } from './cfr-demo.component';

describe('CfrDemoComponent', () => {
    let component: CfrDemoComponent;
    let fixture: ComponentFixture<CfrDemoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CfrDemoComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CfrDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
