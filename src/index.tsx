import {} from 'url'
document.getElementById('app')!.innerHTML = 'Hello world! Try to import some node_modules!'
console.log((x: string) => import(x))
