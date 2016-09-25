/**
 * Разработать логику работы калькулятора
 * Задача при n заданых чисел и при n-1 знаков, посчитать правильный результат выполнения всех операций
 * Важно соблюдать приоритетность выполнения операций
 */
var values = [16, 2135657879, 2222, 123, 434, 123, 77];
var operators = ["+", "+", "*", "/", "-", "+"];
var result = 0;

for (var i = 0; i < operators.length; i++) 
{
    switch(operators[i])
        {
            case '*':
            {
                values[i+1]=multiplication(values[i],values[i+1]);
                values[i]=0;
                if(i>0)operators[i]=operators[i-1];
                break;  
            };
            case '/':
            {
                values[i+1]=division(values[i],values[i+1]);
                values[i]=0;
                if(i>0)operators[i]=operators[i-1];
                break;  
            };
        }   
}

for (var i = 0; i < operators.length; i++) 
{
    switch(operators[i])
        {
            case '+':
            {
                values[i+1]=addition(value[i],value[i+1]);
                values[i]=0;
                break;  
            };
            case '-':
            {
                values[i+1]=subtracting(values[i],values[i+1]);
                values[i]=0;
                break;  
            };
        }   
}

function addition(a, b)
{
    a+=b;
    return a;
}

function subtracting(a, b)
{
    a-=b;
    return a;
}

function multiplication(a, b)
{
    a*=b;
    return a;
}

function division(a, b)
{
    a/=b;
    return a;
}



result=values[values.length-1]
console.log(result);
