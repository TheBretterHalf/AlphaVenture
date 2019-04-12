function search () {
    const tkrsymbol = document.getElementById("symbol").value
    const interval = document.getElementById("interval").value
    const outputsize = document.getElementById("outputsize").value
    
    const endpoint = 'https://www.alphavantage.co/'
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
    
    const url = corsAnywhere + endpoint + "query?" + "function=" + "TIME_SERIES_INTRADAY" + "&symbol="+ tkrsymbol + "&interval=" + interval + "&outputsize=" + outputsize + "&apikeydemo"
    
    fetch(url)
    .then(function (response){
        console.log(response)
        return response.text();
    })

}
