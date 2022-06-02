import { from } from 'rxjs'; 
import { map, publishReplay, refCount } from 'rxjs/operators';


// Create an obsera
const observable$ = from(['first', 'last']).pipe(
  publishReplay(1), 
  refCount()
)

console.clear(); 

// First time subscribing, we get both values
observable$.subscribe(data => console.log(data));

// Second time subscribing, we get the latest value
observable$.subscribe(data => console.log(data));
observable$.subscribe(data => console.log(data));
observable$.subscribe(data => console.log(data));

// OUTPUT
// first
// last
// last
// last
// last
