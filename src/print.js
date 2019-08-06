import _ from 'lodash';

export default function printMe() {
    // console.log('I get called from print.js!');
    // console.error('I get called from print.js! test err!');
    let s = _.join(['Hello', 'webpack'], ' ');
    console.log(s);
    console.log('Updating print.js...')
}