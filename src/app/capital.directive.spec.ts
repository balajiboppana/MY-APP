// import { CapitalDirective } from './capital.directive';

// describe('CapitalDirective', () => {
//   it('should create an instance', () => {
//     const directive = new CapitalDirective(8);
//     expect(directive).toBeTruthy();
//   });
// });

// import { CapitalDirective } from './capital.directive';
// import { ElementRef } from '@angular/core';
// import { Component } from '@angular/core';
// import { TestBed, ComponentFixture } from '@angular/core/testing';

// // Create a simple component to test the directive
// @Component({
//   selector: 'app-host-component',
//   template: `<input type="text" appCapital />`,
// })
// class HostComponent {}

// describe('CapitalDirective', () => {
//   let fixture: ComponentFixture<HostComponent>;
//   let inputElement: HTMLInputElement;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [CapitalDirective, HostComponent], // Declare both the directive and a host component
//     });

//     fixture = TestBed.createComponent(HostComponent); // Create the fixture
//     inputElement = fixture.nativeElement.querySelector('input'); // Get the input element
//     fixture.detectChanges(); // Apply initial change detection
//   });

//   it('should transform text to uppercase on keyup', () => {
//     inputElement.value = 'hello';
//     inputElement.dispatchEvent(new Event('keyup')); // Trigger keyup event
//     fixture.detectChanges(); // Trigger change detection again to update the DOM
//     expect(inputElement.value).toBe('HELLO'); // Check if text is transformed to uppercase
//   });
// });
