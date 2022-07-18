// Problem 1
console.log("Problem 1");

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let elm in salaries)
{
    sum += salaries[elm];
}

console.log(sum);

// Problem 2
console.log("Problem 2");

function multiplyNumeric(obj){
    for (let elm in obj)
    {
        if(isNaN(obj[elm]) == false)
            obj[elm] *= 2;
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

for (let elm in menu)
{
    console.log(menu[elm]);
}

// Problem 3
console.log("Problem 3");

function checkEmailId(str)
{
    let flagAt = false;
    let flagNextChar = false;
    let flagDot = false;
    for (let elm in str)
    {
        if(str[elm] == '@' || flagAt == true)
        {
            flagAt = true;

            if(str[elm++] != null && str[elm++] != '.')
            {
                flagNextChar = true;
            }
            else
            {
                return false;
            }

            if(flagAt && flagNextChar && str[elm] == '.' && str[elm++] != null)
            {
                return true;
            }
        }      
    }
    return false;
}

let testString = "test@gmail.com"
console.log(checkEmailId(testString));

// Problem 4
console.log("Problem 4");

function truncate(str, maxLength)
{
    const ellipsis = "..."
    if(str.length <= maxLength)
    {
        return str;
    }
    
    let slicedStr = str.slice(0,maxLength-1);
    let result = slicedStr.concat(ellipsis);
    return result;
}

let testMaxString = "What I'd like to tell on this top is:"
testMaxString = truncate(testMaxString, 20);
console.log(testMaxString);

// Problem 5
console.log("Problem 5");

let arrOperations = [
    "James",
    "Brennie"
]

arrOperations.push("Robert");

if(arrOperations.length % 2 != 0)
{
    let middle = Math.round(arrOperations.length/2);
    arrOperations[middle] = "Calvin";
}

arrOperations.shift();

arrOperations.unshift("Rose");
arrOperations.push("Robert");

for(let elm in arrOperations)
{
    console.log(arrOperations[elm]);
}