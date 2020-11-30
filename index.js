class news
{
    constructor(resartNew)
    {
        this.img = resartNew.img;
        this.title = resartNew.title;
        this.price = resartNew.price;
    }
    Render()
    {
        return `<div class="item-container">
        <div class="img-container">
            <img class="img" src="${this.img}" alt="bolj bn uu">
            <div class="hover-box">
                <div class="item-btn">
                    <button></button>
                    <a href="product.html"></a>
                </div>
                <h1 class="name" href="product.html">${this.title}</h1>
                <p class="price">${this.price}</p>
                <button class="main-btn">Сагсанд хийх </button>
            </div>
        </div>
        
    </div>`
    }
}
class NewsEdit {
    constructor(newData)
    {
        this.DataList = [];
        this.DataUrl = newData;
        this.hasChange = true;
    }



    download(newDataUrl)
    {
        fetch(this.DataUrl)
        .then(r=>{
            r.json().then(json =>{
                const arrJson = json;
                gebi(newDataUrl).insertAdjacentHTML("afterbegin",
                            
                arrJson.map(newNews1 => {
                         newNews1 = new news(newNews1);
                        this.DataList.push(newNews1);
                        return newNews1.Render();
                    })
                    .reduce((prevVal, curVal) => prevVal + curVal, "")
            );
            
            })
        })
        .catch(err=>console.log(err))
    }
}

const gebi = id => document.getElementById(id);
const resentNews = new NewsEdit("https://api.jsonbin.io/b/5fc4ee5a9abe4f6e7cad6bf1");
// resentNews.Upload()
resentNews.download("main");


