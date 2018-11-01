const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
var type = require('./Category.js');
var Total = 0;
var TotalSalesTax = 0;
var Datawithstring = [];

function preparing(data, price, tax) {
    let prepare = data.join(' ');
    prepare += ': ';
    prepare += price + tax;
    Datawithstring.push(prepare);
}

function Showdata() {
    for (var j = 0; j < Datawithstring.length; j++)
        console.log(Datawithstring[j]);
    console.log("Sales Taxes: " + TotalSalesTax);
    console.log("Total: " + Total);
}

function ImportCheack(data) {
    if (data.indexOf("imported") == -1)
        return false;
    else
        return true;

}

function ImportTax(price) {
    return price * 0.05;
}

function SalesTax(price) {
    return 0.1 * price;
}

rl.on('line', line => {
    if (line.length == 0) {
        Showdata();
        rl.close();
    } else {
        var Data = line;
        Data = Data.trim();
        Data = Data.split(' ');
        var Price = parseFloat(Data[Data.length - 1]);
        Data.pop();
        Data.pop();
        var Tax = 0;
        if (ImportCheack(Data) == true)
            Tax += ImportTax(Price);
        if (type(Data) == undefined) 
            Tax += SalesTax(Price),TotalSalesTax += SalesTax(Price);
        
       Total += (Price + Tax);
        preparing(Data, Price, Tax);
    }
});