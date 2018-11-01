module.exports = function (item) {
    var category = {};
    category["book"] = "nonpayble";
    category["chocolate"] = "nonpayble";
    category["chocolates"] = "nonpayble";
    category["pills"] = "nonpayble";
    category["chocolates"] = "nonpayble";
    for (var i = 0; i < item.length; i++)
        if (category[item[i]] != undefined)
            return category[item[i]];
    return undefined;
};