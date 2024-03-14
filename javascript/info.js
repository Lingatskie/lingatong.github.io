const up=(Title,Paragraph,Readbtn)=>{
let div= document.createElement("div")
div.className="classUp"
div.innerHTML=`<h1>${Title}</h1>
                <p>${Paragraph}</p>
                <button>${Readbtn}</button>
                `

return div
}
export{up}