import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {

  @Input() public label: string = '';
  @Input() public direction: 'right' | 'left' = 'right';
  @Output() public onClick: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  public onButtonClick(): void {
    this.onClick.emit();
  }
}
