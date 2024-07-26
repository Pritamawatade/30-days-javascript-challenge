
import axios from 'axios'
import {hi, bye} from './Namedexports.mjs'
import fun from './DefaultExport.mjs'
import * as obj1 from './importEntireModule.mjs'

hi()
bye()
fun()

//Activity three
obj1.fun1()
obj1.fun2()
console.log(obj1.i);



// // Activity  Four
// import *  as _ from 'lodash';
// _.forEach([1, 2, 3], function(num) {
//     console.log(num);
//   });

// task 2 from actitvity two
axios.get('https://api.github.com/users/followers/').then(response =>{
  console.log(response.data);
})
