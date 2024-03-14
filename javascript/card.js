const down=(Header)=>{
    let div= document.createElement("div")
    div.className="classDown"
    div.innerHTML=`<h1>${Header}</h1>
                    `
    
    return div
    }
const j =(p1)=>{
        let div= document.createElement("div")
        div.className="j"
        div.innerHTML=`<p>${p1}</p>
                        `
        
        return div
}
const k=(p2)=>{
    let div= document.createElement("div")
    div.className="k"
    div.innerHTML=`<p>${p2}</p>
                    `
    
    return div
}
const o=(p3)=>{
    let div= document.createElement("div")
    div.className="o"
    div.innerHTML=`<p>${p3}</p>
                    `
    
    return div
}
const b1=(btn1)=>{
        let div= document.createElement("div")
        div.className="bn1"
        div.innerHTML=`<button>${btn1}</button>
                        `
        
        return div
}
const b2=(btn2)=>{
    let div= document.createElement("div")
    div.className="bn2"
    div.innerHTML=`<button>${btn2}</button>
                    `
    
    return div
}
const b3=(btn3)=>{
    let div= document.createElement("div")
    div.className="bn3"
    div.innerHTML=`<button>${btn3}</button>
                    `
    
    return div
    }
export{down,j,k,o,b1,b2,b3}