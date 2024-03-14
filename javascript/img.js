const jonaxx=(image)=>{
    let div=document.createElement("div")
    div.className="jona"
    div.innerHTML=`<img src="./image/${image}" alt="Jonaxx">`
    return div
}
const jam=(pic1)=>{
    let div=document.createElement("div")
    div.className="jamille"
    div.innerHTML=`<img src="./image/${pic1}" alt="Jamille Fumah">`
    return div
}
const black=(pic2)=>{
    let div=document.createElement("div")
    div.className="knight"
    div.innerHTML=`<img src="./image/${pic2}" alt="Knight in Black">`
    return div
}
const sic=(pic3)=>{
    let div=document.createElement("div")
    div.className="owwsic"
    div.innerHTML=`<img src="./image/${pic3}" alt="Owwsic">`
    return div
}

export{jonaxx,jam,black,sic}