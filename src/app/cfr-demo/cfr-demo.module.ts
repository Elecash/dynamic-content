import { NgModule } from '@angular/core';
import { CfrDemoComponent } from './cfr-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewOneComponent } from './view-one/view-one.component';
import { ViewTwoComponent } from './view-two/view-two.component';
import { CommonModule } from '@angular/common';

const ENTRY_COMPONENTS = [
    CfrDemoComponent,
    ViewOneComponent,
    ViewTwoComponent
];

const routes: Routes = [
    {
        path: '',
        component: CfrDemoComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: ENTRY_COMPONENTS,
    entryComponents: ENTRY_COMPONENTS
})
export class CfrDemoModule {
}
