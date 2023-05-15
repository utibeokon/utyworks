const x = 5;
const y = 3;

const op = "";

if(op == "+"){
    console.log(`The addition of x and y is = ${x + y}`)
} else if (op == "*"){
    console.log(`The multiplication of x and y is = ${x * y}`)
}else if (op == "-"){
    console.log(`The subtraction of x and y is = ${x - y}`)
}else if (op == "/"){
    console.log(`The division of x and y is = ${x / y}`)
}else{
    console.log(`The operation does not exist`)
}


switch (op) {
    case "+":
        console.log(`The addition of x and y is = ${x + y}`)
        break;

        case "-":
            console.log(`The substraction of x and y is = ${x - y}`)
            break
            
            case "*":
                console.log(`The multiplication of x and y is = ${x - y}`)
                break

                case "/":
                    console.log(`The division of x and y is ${x - y}`)
                    break

                    default:
                        console.log(`Does not exist`)
                         break
 }




const n = 2;
const COUNT = 10;
function createTable(n, COUNT){
    for(let i = 1; i <= COUNT; i++){
        console.log(`${i} x ${n} = ${i * n}`)

    }
}
createTable(2,5)


for(let n = 1; n <= 10; n++){
    createTable(n,5)
    console.log("================")
}