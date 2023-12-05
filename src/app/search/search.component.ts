import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { count, debounceTime, distinct, elementAt, filter, first, last, max, min, skip, take, takeLast, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // 6. debounce time operator
  searchForm!: FormGroup;

  // 9.take last operator
  electronics = ['TV', 'Mobile', 'Fridge', 'Head Phones', 'AC'];
  value$: Observable<string> = from(this.electronics)

  //distinct operator
  icecreams = ['vennila', 'chocolate', 'mango', 'strawberry', 'vennila', 'mango', 'chocolate', 'grapes', 'mango', 'strawberry'];
  ice$: Observable<string> = from(this.icecreams)

  // 17. max  and min opeartor
  ranks = [ 63, 94, 61, 12, 67, 49, 11, 30, 18, 77, 19, 64, 34, 23, 1000];
  rank$: Observable<number> = from(this.ranks);
  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl('start search')
    })

    this.searchForm.get('name')?.valueChanges.pipe(
      //takeWhile((v) => this.checkCondition(v)),           //8. take while operator
      // take(2),                // 7. take operator
      // filter((v) => this.checkCharCount(v)),        // 13. filter operator
      debounceTime(3000)
    ).
      subscribe(data => {
        // 9.take last operator
        console.log(data);
        /*  this.value$.pipe(
               // takeLast(3)
              // first()           // 10.first operator
              // last()            // 11.last operator
            elementAt(2)           //12. elementAt operator
          ).subscribe(data1 => {
            console.log(data1)
          })  */


        // 14.distinct operator
        /*  this.ice$.pipe(
              distinct(),
              // skip(3)                         //15. skip operator
              count()                            //16. count operator
            ).subscribe(data => {
              console.log(data)
    
            })   */

        // 17. max and min operator
        this.rank$.pipe(
          filter((v) => this.minCondition(v)),
          min()
          // max()
        ).subscribe(data => {
          // console.log('max number is :' + data)
          console.log('min number is :' + data)

        })

      })




  }

  readValue() {

  }

  //8. take while operator
  checkCondition(value: any) {
    return value.length > 3 ? false : true;
  }

  // 13. filter operator
  checkCharCount(v: any) {
    return v.length < 10 ? true : false;
  }

  //18. min opeartor
  minCondition(v: any) {
    return v.length > 30 ? false : true;
  }
}
