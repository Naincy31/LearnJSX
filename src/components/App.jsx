import Heading from './Heading';
import Monkey from './Monkey';
import {add, subtract, multiply, divide} from './Calculator';

function App(){
    return (
        <div>
            <Monkey/>
            <Heading />
            <p>The sum of 5 and 3 is {add(5,3)}</p>
            <p>The subtraction of 5 and 3 is {subtract(5,3)}</p>
            <p>The multiplication of 5 and 3 is {multiply(5,3)}</p>
            <p>The division of 5 by 3 is {divide(5,3)}</p>
        </div>
    )
}

export default App;