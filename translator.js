let select = document.querySelectorAll("select");
let btn = document.querySelector("#btn");
let fromtext = document.querySelector("#from");
let totext = document.querySelector("#to");
let icons = document.querySelectorAll("img");


select.forEach((el)=>{

    
      for(const count in countries){
     
    //    let optionval = document.createElement("option");
    //    optionval.value = countries[count];
    //       optionval.innerText = countries[count];
    //    el.append(optionval);
    //    console.log(optionval);
   
    //  if(optionval.value == "Hindi" && id == "s1"){
    //      optionval.selected = "selected";
    //  }

    //  else if(optionval.value == "English" && id =="s2"){
    //      optionval.selected = "selected"
    //  }
    
    //  }
     let selected;
     let option = `<option value = "${count}" ${selected}> ${countries[count]}</option>`;
     el.insertAdjacentHTML("beforeend",option);
   
     if(count == "en-GB" && el.name == "s1"){
        option.selected = "selected";
     }
    else if(count == "hi-IN" && el.name== "s2"){
        option.selected = "selected";
    }
    
   

}
})

btn.addEventListener("click",()=>{
  let text = fromtext.value ;
  let translatefrom = select[0].value;
  let translateto = select[1].value;
  let url = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${translatefrom}|${translateto}`;
  fetch(url).then(res=>res.json()).then(data=>{
    totext.value = data.responseData.translatedText;
  })
});

icons.forEach((icon)=>{
icon.addEventListener("click",({target})=>{
  if(icon.classList.contains("copy")){
    if(target.id == "from1"){
      navigator.clipboard.writeText(fromtext.value);
    }
    else{
      navigator.clipboard.writeText(totext.value);
    }
  }
  else{
         let utterance;
      if(target.id == "from1"){
            //  speak(fromtext.value);
            utterance = new SpeechSynthesisUtterance(fromtext.value);
            utterance.lang = select[0].value;
            speechSynthesis.speak(utterance);
      }
      else{
        // speak(totext.value);
        utterance = new SpeechSynthesisUtterance(totext.value);
        utterance.lang = select[1].value;
       speechSynthesis.speak(utterance);
      }

     
  }
})
})
 
// function speak(text){
//   let speakcomp = new SpeechSynthesisUtterance(text);
//   speakcomp.rate = 1;
//   speakcomp.pitch = 1;
//   speakcomp.volume = 1;
//   speakcomp.lang = "hi-IN"
//   window.speechSynthesis.speak(speakcomp)

// }