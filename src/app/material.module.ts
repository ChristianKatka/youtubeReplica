// Used to manage all angular material packages

import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
// Delete this card
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatSidenavModule,
        MatCardModule
    ],

    //so we can use it outside of this component
    exports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatSidenavModule,
        MatCardModule
    ]
})

export class MaterialModule { }

