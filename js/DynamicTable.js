function updateTable(target, celsius ){
    const container = document.getElementById(target)
    const table = container.querySelector("table")
    // Retrieving the values from the input fields in the webpage
    const inputFieldElements = container.querySelectorAll("form input[type='text']")
    // Converting valid input to numerical values
    let [start, end] = [...inputFieldElements].map(element => Number(element.value))
    console.log(typeof [...inputFieldElements][1].value)

    /** Input validation     */
    if([...inputFieldElements][1].value == ""){
        end=start
    } 
    if(!Number.isInteger(start) || !Number.isInteger(end)){
        switch (true){
            case Number.isNaN(start) || Number.isNaN(end):
                alert("Please use integers.")
                inputFieldElements.forEach(element => {element.value = ""})
                break
            
            case isFloat(start) || isFloat(end):
                alert("Numbers with decimals will be rounded. Please use integers.")
                start = Math.round(start)
                end = Math.round(end)

        }

    }
    /** Alerting user if the range is too big */
    if(Math.abs(end-start) > 100){
        alert("Please enter a range with less then 100 values.")
        clearTable(table, container)
        inputFieldElements.forEach(element => {element.value = ""})
        return
    }

    clearTable(table, container)
    console.log(typeof start)
    console.log(typeof end)
    conversionTable(target, start, end, celsius)

}
function isFloat(num){
    return !Number.isNaN(num) &&!Number.isInteger(num)
}
function clearTable(table, container){
    if(table !== undefined && table !== null){
        container.removeChild(table)
    }
}

