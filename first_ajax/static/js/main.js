document.addEventListener("DOMContentLoaded", function() {
    const homeRequest = axios.get('http://intro-ajax-api.herokuapp.com/')
    const pingRequest = axios.get('http://intro-ajax-api.herokuapp.com/ping')
    const countRequest = axios.get('http://intro-ajax-api.herokuapp.com/count', { 
        params: {Amount: 'dsad'}
    })
    
    const carRequest = axios.get('http://intro-ajax-api.herokuapp.com/a_car')

    let button = $('.ajax-btn')
    const ping = $('.ping')
    const pingSection = $('.ping-section')
    const count = $('.count')
    const countSection = $('.count-section')
    const timeSection = $('.time-section')
    const time = $('.time')
    const car = $('.car')
    const carSection = $('.car-section')
    const carList = $('#car-list')

    button.click(() => { 
    
    //  const homeRequest = axios.get('https://bitmaker-monsters-api.herokuapp.com')
        homeRequest.then(response => { 
        console.log('__ recieved response') 
        const data = JSON.stringify(response)
        $('.root').append(data) 
        console.log(data)
        
    })

    })
    ping.click(() => { 

        pingRequest.then(res => { 
            pingSection.append(res.data)
            console.log("I got the data")
        })
        .catch(error => { 
            pingSection.append('<h1> Error </h1> ')
            console.log("Error")
        })
        .then(res => { 
            pingSection.append("<br /> I don't care what you want I am showing up.")
            console.log('I am showing up anyways!')
        })

    }) 
    
    count.click(() => { 

        countRequest.then(countRes => { 
            countSection.append(countRes.data)
            console.log("I made a request to the count") 
            console.log(countRes)
        })
    }) 

    time.click(() => { 
        const country = prompt('Enter a Country')
        const timezone = prompt('Enter a Time zone')

        const timeRequest =  axios.get('http://intro-ajax-api.herokuapp.com/time', { 
            params: {country: timezone}
        })

        timeRequest.then(timeRes => { 
            timeSection.append(timeRes.data)
            console.log('I passed in a timezone')
        })
        .catch(error => { 
            timeSection.append("<h1>ERROR</h1>")
        })
    })
    
    car.click(() => {

        carRequest.then(carRes => { 
            carList.append(carRes.data)
            console.log("I passed in car data")
        })
        .catch(error => { 
            carSection.append("<h1>error</h1>")
            console.log("Error")
        })

        
    })
 
});

