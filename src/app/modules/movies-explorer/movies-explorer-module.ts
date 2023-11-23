import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesExplorerComponent } from './movies-explorer.component';

const moviesExplorerRoutes: Routes = [
    {
        path: '', component: MoviesExplorerComponent
    },
]

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(moviesExplorerRoutes)],
    exports: [RouterModule]
})
export class MoviesExplorerRoutingModule { }