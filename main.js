// need to add in .env for gitignore
const APIKEY = 'R1SFw6AGGgQo6nn11qhj2s2kgSGZMS0e';

// onClick from filter inputs
async function getResponse() {
    // get radio inputs from HTML
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

    // The link string for fetch
    let link = 'https://api.nytimes.com/svc/mostpopular/v2/'
            + sortValue 
            + '/' 
            + timeValue 
            + '.json?api-key=' 
            + APIKEY;

    // fetch
    const response = await fetch(link);
        const data = await response.json();
        console.log(data);

    // get news list div from HTML
    const newsList = document.getElementById('news-list');

    // clear news list div
    newsList.innerHTML = '';

    // append 5 articles to news list div
    for (let i = 0; i < 5; ++i) {
        const news = data.results[i];

        try {
            const newsElement = createNewsElement(news);
            newsElement.className = "news-element";
            newsList.appendChild(newsElement);
        } catch (error) {
            console.error('error display', error);
        }
    }
}
    
// create HTML element for an article
function createNewsElement(article) {
    const articleElement = document.createElement('div');
    articleElement.classList.add('article');

    const titleElement = document.createElement('h2');
    titleElement.textContent = article.title;

    const dateElement = document.createElement('p');
    dateElement.textContent = article.published_date;

    const imageElement = document.createElement('img');
    imageElement.src = article.media[0]["media-metadata"][0].url;

    const abstractElement = document.createElement('p');
    abstractElement.textContent = article.abstract;

    articleElement.appendChild(titleElement);
    articleElement.appendChild(dateElement);
    articleElement.appendChild(imageElement);
    articleElement.appendChild(abstractElement);

    return articleElement;
}