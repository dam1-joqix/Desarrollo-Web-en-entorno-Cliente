import {Component, Input, OnInit} from '@angular/core';
import {ILuchador} from "../interfaces/iluchador";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'retrato-luchador',
  templateUrl: './retrato-luchador.component.html',
  styleUrls: ['./retrato-luchador.component.css']
})
export class RetratoLuchadorComponent implements OnInit {
  @Input () luchador:ILuchador;
  imagePath;
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(this.luchador.retrato);
  }

}
