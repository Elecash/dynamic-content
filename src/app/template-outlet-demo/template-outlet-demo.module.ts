import { NgModule } from '@angular/core';
import { TemplateOutletDemoComponent } from './template-outlet-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomListComponent } from './custom-list/custom-list.component';
import { CommonModule } from '@angular/common';

const ENTRY_COMPONENTS = [
    TemplateOutletDemoComponent,
    CustomListComponent
];

const routes: Routes = [
    {
        path: '',
        component: TemplateOutletDemoComponent
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
export class TemplateOutletDemoModule {
}
