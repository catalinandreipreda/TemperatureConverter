let conversionTable = function (tagId, startVal, endVal=startVal, celsius=true){
    /**
     * Adds a table with the temperature conversions of the specified range,
     * to the element with tagId.
     * @param {string} tagId ID of the element where the table is added
     * @param {number} startVal first value in the range of temperatures to be converted
     * @param {number} endVal last value in the range of temperatures to be converted
     * @param {boolean} celsius true => Convert from C to F, false => Convert from F to C
     */
    let container = document.getElementById(tagId)
    let table = document.createElement("table")
    table.appendChild(document.createElement("thead"))
    if(celsius){
        table.children[0].innerHTML += "<tr><th>Celsius</th><th>Fahrenheit</th></tr>"
    }
    else {
        table.children[0].innerHTML += "<tr><th>Fahrenheit</th><th>Celsius</th></tr>"
    }
    let tbody = document.createElement("tbody")
    table.appendChild(tbody)

    // Displaying the values in ascending or descending order
    if(startVal<endVal){
        for(let i=startVal; i<=endVal;i++)
            addRow(i)
    }
    else{
        for(let i=startVal; i>=endVal; i--)
            addRow(i)
    }


    function addRow(index){
        /**
         * Appends a new row to the table
         * @type {HTMLTableRowElement}
         * @param {number} index Value to be converted
         */
        // Creating the row
        let row = document.createElement("tr")
        row.className = index%2==0 ? "even" : "odd"
        // Creating the index
        let value = document.createElement("td")
        value.appendChild(document.createTextNode(`${index}°${celsius ? "C" : "F"}`))
        // Creating the conversion (C to F conversion)
        let conversion = document.createElement("td")
        if(celsius) conversion.appendChild(document.createTextNode(`${c2f(index)}°F`) )
        else conversion.appendChild(document.createTextNode(`${f2c(index)}°C`))

        // Add index and conversion to the row
        row.append(value, conversion)
        tbody.appendChild(row)
    }
    function c2f(c){
        /**
         * Converts from Celsius to Fahrenheit
         * @param {number} c degrees in Celsius
         * @return {number} degrees in Fahrenheit
         */
        let result = c*9/5+32
        return result.toFixed(2)
    }
    function f2c(f){
        /**
         * Converts from Fahrenheit to Celsius
         * @param {number} f degrees in Fahrenheit
         * @return {number} degrees in Celsius
         */
        let result = (f-32)/1.8
        return result.toFixed(2)
    }
    container.appendChild(table)
}



