//API key
//8c90fcb1d0eb4ad693e6ba736892f230

window.addEventListener('load', () => {
    let mainArticleHeading = document.getElementById('mainArticle');
    let mainArticlePara = document.querySelector('.mainArticlePara');
    let mainArticleImg = document.querySelector('.mainArticleImg');

    let midMainHead = document.getElementById('midHead');
    let midPara = document.querySelector('.midPara');
    let midImg = document.querySelector('.midImg');

    let lastHead = document.getElementById('lastHead');
    let lastPara = document.querySelector('.lastPara');
    let lastImg = document.querySelector('.lastImg');

    let mainBtn = document.querySelector('.mainArtBtn');
    let midBtn = document.querySelector('.midArtBtn');
    let lastBtn = document.querySelector('.lastArtBtn');

    let item3Img = document.querySelector('.item3Img')
    let item3Head = document.getElementById('item3Head');
    let item3Para = document.querySelector('.item3Para');

    let item4Img = document.querySelector('.item4Img')
    let item4Head = document.getElementById('item4Head');
    let item4Para = document.querySelector('.item4Para');
    
    let item5Img = document.querySelector('.item5Img')
    let item5Head = document.getElementById('item5Head');
    let item5Para = document.querySelector('.item5Para');
    
    let item6Img = document.querySelector('.item6Img')
    let item6Head = document.getElementById('item6Head');
    let item6Para = document.querySelector('.item6Para');
    
    
    let url = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=8c90fcb1d0eb4ad693e6ba736892f230';
    let req = new Request(url);
    fetch(req)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            console.log(data);
            //pulling information from the dom to set the innerhtml
            mainArticleHeading.textContent = data.articles[19].title;
            mainArticlePara.textContent = data.articles[19].content;
            mainArticleImg.src = data.articles[19].urlToImage;
            //mainBtn.href = data.articles[19].url;

            midMainHead.textContent = data.articles[10].title;
            midPara.textContent = data.articles[10].content;
            midImg.src = data.articles[10].urlToImage;
            //midBtn.href = data.articles[10].url;

            lastHead.textContent = data.articles[13].title;
            lastPara.textContent = data.articles[13].content;
            lastImg.src = data.articles[13].urlToImage; 

            item3Head.textContent = data.articles[1].title;
            item3Para.textContent = data.articles[1].content;
            item3Img.src = data.articles[1].urlToImage;

            item4Head.textContent = data.articles[2].title;
            item4Para.textContent = data.articles[2].content;
            item4Img.src = data.articles[2].urlToImage;
            
            item5Head.textContent = data.articles[17].title;
            item5Para.textContent = data.articles[17].content;
            item5Img.src = data.articles[17].urlToImage;
            
            item6Head.textContent = data.articles[18].title;
            item6Para.textContent = data.articles[18].content;
            item6Img.src = data.articles[18].urlToImage;
            

            let artImgs = data.articles[1].urlToImage;

            if(artImgs === null){
                item3Img.src = "";
            }
        })
        
    }

)

