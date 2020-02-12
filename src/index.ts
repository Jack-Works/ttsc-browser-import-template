document.getElementById('app')!.innerHTML = 'Hello world! (™)'

// @ts-ignore
// To get typing, you should install @types/lodash-es
// but lodash-es itself is not required.
import { add } from 'lodash-es'
console.log('lodash.add', add)

import path from 'path'
console.log('path', path)
