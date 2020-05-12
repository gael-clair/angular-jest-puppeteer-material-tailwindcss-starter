import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Shared module for shared components, directives, pipes
 * Exports:
 * - CommonModule
 * - ReactiveFormsModule
 */
@NgModule({
  exports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
