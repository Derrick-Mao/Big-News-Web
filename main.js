const APIKEY = 'R1SFw6AGGgQo6nn11qhj2s2kgSGZMS0e';

const exLink = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=R1SFw6AGGgQo6nn11qhj2s2kgSGZMS0e'

async function getResponse(sortOption, periodOption) {
    const response = await fetch(exLink);
    const data = await response.json();
    console.log(data);

    const newsContainer = document.getElementsByClassName("news-container");

    for (let i = 0; i < 5; ++i) {
        // console.log(data.results[i]);
        var ex_div = document.createElement("img");
        ex_div.className = "ex-img";
        ex_div.src = data.results[i].media;

        
        document.newsContainer.appendChild(ex_div);
    }

async function getResponse2() {
    sortRadioButtons = document.getElementsByName("sort");
    timeRadioButtons = document.getElementsByName("time");

    let i;
    let sortValue, timeValue
    // Finding the checked radio button for sort
    for (i = 0; i < sortRadioButtons.length; i++) {
        if (sortRadioButtons[i].checked) {
            sortValue = sortRadioButtons[i].value;
            break;
        }
    }

    // Finding the checked radio button for time
    for (i = 0; i < timeRadioButtons.length; i++) {
        if (timeRadioButtons[i].checked) {
            timeValue = timeRadioButtons[i].value;
            break;
        }
    }

    let link = 'https://api.nytimes.com/svc/mostpopular/v2/'
            + sortValue 
            + '/' 
            + timeValue 
            + '.json?api-key=' 
            + APIKEY;

    const response = await fetch(link);
    const data = await response.json();
    console.log(data);

    for (let i = 0; i < 5; ++i) {
        // console.log(data.results[i]);
        var ex_div = document.createElement("img");
        ex_div.className = "ex-img";
        ex_div.src = data.results[i].media;

        
        document.newsContainer.appendChild(ex_div);
    }
}
    
    // let url = 'https://api.nytimes.com/svc/mostpopular/v2/'
    //         + sortOption 
    //         + '/' 
    //         + periodOption 
    //         + '.json?api-key=' 
    //         + APIKEY;
    
    // const response2 = await fetch(url);
    // let array = [];


    // const data2 = await response2.json();
    
}


