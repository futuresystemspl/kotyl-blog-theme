export let Tools = {

    /** ported some helper function from legacy (1.6) PrestaShop/js/tools.js for price and currency formatting */

    formatNumber : function(value, numberOfDecimal, thousenSeparator, virgule) {
        value = parseInt(value)
        value = value.toFixed(numberOfDecimal);

        let val_string = value+'';
        let tmp = val_string.split('.');
        let abs_val_string = (tmp.length === 2) ? tmp[0] : val_string;
        let deci_string = ('0.' + (tmp.length === 2 ? tmp[1] : 0)).substr(2);
        let nb = abs_val_string.length;
    
        for (let i = 1 ; i < 4; i++)
            if (value >= Math.pow(10, (3 * i)))
                abs_val_string = abs_val_string.substring(0, nb - (3 * i)) + thousenSeparator + abs_val_string.substring(nb - (3 * i));
    
        if (parseInt(numberOfDecimal) === 0)
            return abs_val_string;
        return abs_val_string + virgule + (deci_string > 0 ? deci_string : '00');
    },

    formatCurrency : function(price, currencySign) {
        price = parseFloat(price).toFixed(10);
        return (this.formatNumber(price, 2, ' ', ',') + ' ' + currencySign);
    }
    
}
