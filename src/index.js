import _ from "lodash"
// import { NAME,Nijou } from './utilities'
import Tiger from './utilities'

function component() {
    const element = document.createElement('div');
    const array = ['Hello', 'webpack','!!!!!!!!!!!!!']
    element.innerHTML = _.join(array, ' ')
    return element;
}


console.log(Tiger.say());

document.body.appendChild(component());