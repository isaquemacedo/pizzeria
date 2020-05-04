import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public flavour;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.flavour = this.activatedRoute.snapshot.params.flavour;
  }

}
