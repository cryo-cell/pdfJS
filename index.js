const pdfjs = require("pdfjs-dist/build/pdf");


const src = "./67320_0004951863.pdf";
/*function getData(url){
        let r = requests.get(url)
        return r.text
}*/
//let urls = 
//for (url in urls) urlArr.push(urls[url].href);
/*function getLinks(link){
        let data = getData(link)
        let soup = BeautifulSoup(data, "html.parser")
        let list = []
        
}*/
//scrape individual pdf urls from trulieve.com/flower
//assign urls to a list to run getItems on individually
//for the length of the list run getItems on all items
//assign values to a new list
//if value in the list item is above 7.0 display url list item at that item's index
//go to url that contains pdf url

async function getContent(src){
        const doc = await pdfjs.getDocument(src).promise
        const page = await doc.getPage(1)
        //console.log(page)
        return await page.getTextContent()
}
async function getItems(src, newVar){
        let regex = new /(\bCaryophyllene\b)/
        const content = await getContent(src)
        //console.log(content.items[2].str)
       for (i=0; i < content.items.length; i++){
                if(content.items[i].str.match(regex) !== null){
                        console.log(content.items[i].str)
                        console.log(content.items[i+1].str)
                }
        }
        /*const items = content.items.map((item)=>
        {
                
                if(item.str.match(regex) !== null){
                //console.log(item.str)
                }
                
        })
        return items*/
}

        
getItems(src)