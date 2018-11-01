const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
var type = require('./Category.js');
var Total = 0;
var TotalSalesTax = 0;
var Datawithstring = [];
rl.on('line', line => {
    if (line.length == 0) {
        for (var j = 0; j < Datawithstring.length; j++)
            console.log(Datawithstring[j]);
        console.log("Sales Taxes: " + TotalSalesTax);
        console.log("Total: " + Total);
        rl.close();
    } else {
        var Data = line;
        Data = Data.trim();
        Data = Data.split(' ');
        var Price = parseFloat(Data[Data.length - 1]);
        Data.pop();
        Data.pop();
        var Tax = 0;
        if (Data.indexOf("imported") != -1)
            Tax += (0.05 * Price);
        if (type(Data) == undefined) {
            Tax += (0.1 * Price);
            TotalSalesTax += (0.1 * Price);
        }
        Total += (Price + Tax);
        var prepare = Data.join(' ');
        prepare += ': ';
        prepare += Price + Tax;
        Datawithstring.push(prepare);

    }
});