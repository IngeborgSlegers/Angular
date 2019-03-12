// Angular Pipes

// A feature built into Angular that transforms data in your output.
// Uses pipe symbol |
// A pipe takes in data as input and transforms it to a desired output.
// Does not change the original input, but alters how the data is displayed.
// Use it in the template (html doc)
// Can use built-in pipes and D.I.Y. pipes
// Use parameters in pipes for specific transformation. Use multiple colons for multiple parameters
// {{ startDate | date: 'fullDate' }}
// To chain multiple pipes, simply add another pipe. Faire Attention! Order does matter.

/* Creating a custom pipe: 
    - create a new file (name of action of pipe.pipe.ts)
    - export class NAME implements PipeTransform
    - import { PipeTransform } from '@angular/core'
    - don't forget the @pipe decorator with the name of your pipe in it: @pipe({ name: 'shorten' })
    - use the transform() method with the input of value: any, and any other arguments
    - it needs to include a return
    - include the file and import in the declarations within app.module
    - OR JUST TYPE ng g p <insert name> IN THE CLI
*/

// Pipes are not limited to string interpolation. It transforms ANY output.

/* Pure vs impure pipes: Angular executes a pure pipe only when it detects a pure change to the input value.
   Angular ignores changes within (composite) objects. It won't call a pure pipe if you change an input month, add to an input array, or update an input object property.
   Impure pipes forces an update on each change
*/

// Async pipes: SO COOL! It returns a promise that is resolved and presents the data to the screen.