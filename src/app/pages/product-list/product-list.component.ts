import { Component, OnInit } from '@angular/core';
import { productData } from '../../utils/mockData';
import { Product } from '../../models/Product';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/view.reducer';
import * as fromSelector from '../../store/view.selectors';
import * as fromActions from '../../store/view.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  grid: false;
  selectedView: string;
  viewStyle$: Observable<string>;
  views = [
    {label: 'Grid View', value: 'grid'},
    {label: 'List View', value: 'list'}
  ];
  selectForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private store: Store<fromStore.ViewState>
  ) {
    this.viewStyle$ = this.store.select(fromSelector.viewStyle);
    this.viewStyle$.subscribe((view) => {
      this.selectedView = view;
    });
  }

  ngOnInit(): void {
    this.products = productData;
    this.selectForm = this.formBuilder.group({
      view: ['list']
    });
  }

  changeView = (event) => {
    // this.selectedView = event.target.value;
    if (event.target.value === 'grid') {
      this.store.dispatch(fromActions.changeToGridView());
    } else {
      this.store.dispatch(fromActions.changeToListView());
    }
  }

  get f(): any {
    return this.selectForm.controls;
  }

}
