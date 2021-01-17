import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nxplayground-components',
  styleUrls: ['./components.component.scss'],
  template: '',
  encapsulation: ViewEncapsulation.None
})
export class ComponentsComponent implements OnInit {

  mainStyleContent: string = 'div {background-color: blue }';
  alternativeStyleContent: string = 'div {background-color: red }';

  @Input()
  mainStyle: boolean = true;

  public get styleContent() {
    return this.mainStyle ? this.mainStyleContent : this.alternativeStyleContent;
  }

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: any) {}

  ngOnInit() {

    const styles = this.document.createElement('STYLE') as HTMLStyleElement;
    styles.id = 'dynamic-theme-css';
    styles.innerHTML = this.styleContent;
    this.renderer.appendChild(this.document.head, styles);

    const stylesTest = this.document.getElementById('dynamic-theme-css');
  }

  ngOnChanges() {

    const styles = this.document.getElementById('dynamic-theme-css');

    if (!styles) return;

    styles.innerHTML = this.styleContent;
  }
}