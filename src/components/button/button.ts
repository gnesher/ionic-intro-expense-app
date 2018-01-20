import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * Generated class for the ButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'calcButton',
  templateUrl: 'button.html'
})
export class ButtonComponent {

  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();
  @Input() value: string;

  constructor() {
  }

  emitClicked() {
    this.clicked.emit(this.value);
  }

}
