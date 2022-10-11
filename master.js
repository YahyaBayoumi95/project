// start landing-page
let nav = document.querySelector(".header")
let header = document.querySelector(".intro h1")
let description = document.querySelector(".intro .desc")
let LandingArr = [nav , header , description]
console.log("ok")
window.onload = ()=>{
    LandingArr.forEach((e)=>{
        e.classList.add("active")
    })
}

// End landing-page 
// start services
let services = document.querySelector(".services")
    let servImgs = document.querySelectorAll(".serv-imgs img")
    let servicehead = document.querySelector(".services .serv")

    window.addEventListener ("scroll", ()=>{

        if(this.scrollY >= 354){
            servImgs.forEach((img)=>{
                img.classList.add("active")
            })
            servicehead.classList.add("active")
        }else {
            false
        }
    })
// End services
// start case-studies
let contBox = document.querySelectorAll(".cont-box")
let nums = document.querySelectorAll(".cont-box .num")
let caseStudiesSection = document.querySelector(".case-studies")
let caseText = document.querySelector(".case-studies .text")
let cont = document.querySelector(".case-cont")

let started = false


window.onscroll = function(){
     if(this.scrollY >= caseStudiesSection.offsetTop - 350){
        contBox.forEach((box)=>{
            box.classList.add("active")
        })
        caseText.classList.add("active")
        cont.classList.add("active")
        if(!started){
            nums.forEach((num)=>{startCount(num)})
        }
        started = true
    }
    
}


 function startCount(el){
    let goal = el.dataset.progress;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
             clearInterval(count)
        }
    },2000 / goal);
}
// End case-studies
// <!-- start resoures -->
let resourceSection = document.querySelector(".resources")
let resourceBox = document.querySelectorAll(".resources .resource-box")
let headresource = document.querySelector(".resources .container h2")
let buttresource = document.querySelector(".resources .container .button")


window.addEventListener("scroll",()=>{
    if(this.scrollY >= resourceSection.offsetTop -300){
        resourceBox.forEach((box)=>{
            box.classList.add("active")
            })
        headresource.classList.add("active") 
        buttresource.classList.add("active")   
    }
})
// <!-- End resoures -->
// start growth
let growthSection =  document.querySelector(".growth")
let paragraphgrowth = document.querySelector(".growth p")
let stamp = document.querySelector(".growth .stamp")
window.addEventListener("scroll",()=>{
    if(window.scrollY >= 2222 ){
        paragraphgrowth.classList.add("active")
        stamp.classList.add("active")
    }
})
// End growth
// start approach
let approachSection = document.querySelector(".approach")
console.log(approachSection)
let approachBoxes = document.querySelectorAll(".approach .approach-box")
console.log(approachBoxes)
let approachButt = document.querySelector(".approach .button")
window.addEventListener("scroll",()=>{
    if(window.scrollY >= approachSection.offsetTop){
        approachBoxes.forEach((box)=>{
            box.classList.add("active")
        })
        approachButt.classList.add("active")
    }
})
// End approach
// start evaluation
let evalSection =  document.querySelector(".eval")
let paragraphEval = document.querySelector(".eval p")
let evalstamp = document.querySelector(".eval .stamp")
window.addEventListener("scroll",()=>{
    if(window.scrollY >= evalSection.offsetTop - 500 ){
        paragraphEval.classList.add("active")
        evalstamp.classList.add("active")
    }
    console.log(this.scrollY)
})

// End evaluation
// start appraisal
let appraisalSection = document.querySelector(".appraisal")
console.log(appraisalSection)
let appraisalBoxes = document.querySelectorAll(".appraisal .appraisal-box")
console.log(appraisalBoxes)
window.addEventListener("scroll",()=>{
    if(window.scrollY >= appraisalSection.offsetTop){
        appraisalBoxes.forEach((box)=>{
            box.classList.add("active")
        })
    }
})
// End appraisal
// start evaluation
let evalSectionTwo =  document.querySelector(".evalTwo")
let paragraphEvalTwo = document.querySelector(".evalTwo p")
let evalstampTwo = document.querySelector(".evalTwo .stamp")
window.addEventListener("scroll",()=>{
    if(window.scrollY >= evalSection.offsetTop ){
        paragraphEvalTwo.classList.add("active")
        evalstampTwo.classList.add("active")
    }
    console.log(this.scrollY)
})

// End evaluation
// start end
let endSection = document.querySelector(".end")
let endHeads = document.querySelectorAll(".end h2")
let endSpan = document.querySelector(".end .container span")
window.addEventListener("scroll",()=>{
    if(window.scrollY >= endSection.offsetTop - 300){
        endHeads.forEach((head)=>{
            head.classList.add("active")
        })
        endSpan.classList.add("active")
    }
})
// End end
