import{up} from "./info.js"
import{jonaxx,jam,black,sic} from "./img.js"
import{down,j,k,o,b1,b2,b3} from "./card.js"
const one={
    Title: "Voice over",
    Paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum dolore<br> explicabo modi tempora beatae<br>  aut qui necessitatibus facere expedita magnam perferendis<br>  laboriosam dolor doloremque unde repudiandae <br> temporibus molestias, sequi ex!",
    image: "voice.jpg",
    Readbtn: "Read more",
}
const two={
    Header: "OTHER PROJECT",
    pic1: "elec.jpg",
    pic2: "web.jpg",
    pic3:"art.jpg",
    p1:"Lorem ipsum dolor, sit amet<br> consectetur<br> adipisicing elit.<br>   , sequi ex!",
    p2:"Lorem ipsum dolor, sit amet <br>consectetur<br> adipisicing elit. <br> essitati!",
    p3:"Lorem ipsum dolor, sit amet<br> consectetur<br> adipisicing elit. <br> mae  sequi ex!",
    btn1:"Electronic",
    btn2:"Web design",
    btn3:"Vector art",
}
const {Title,Paragraph,Readbtn,image}=one
const {Header,p1,p2,p3,btn1,btn2,btn3,pic1,pic2,pic3}=two
let sectionOne=document.getElementById("sectionOne")
let sectionTwo=document.getElementById("sectionTwo")
sectionOne.append(up(Title,Paragraph,Readbtn))
sectionOne.append(jonaxx(image))
sectionTwo.append(down(Header))
sectionTwo.append(jam(pic1))
sectionTwo.append(black(pic2))
sectionTwo.append(sic(pic3))
sectionTwo.append(j(p1))
sectionTwo.append(k(p2))
sectionTwo.append(o(p3))
sectionTwo.append(b1(btn1))
sectionTwo.append(b2(btn2))
sectionTwo.append(b3(btn3))

