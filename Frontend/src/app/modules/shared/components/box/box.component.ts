import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent implements OnInit, OnChanges {
  @Input() dims: { width: string; height: string } = { width: '', height: '' };
  public width = '';
  public height = '';
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.dims);
    this.height = this.dims.height;
    this.width = this.dims.width;
  }

  ngOnInit(): void {}
}
