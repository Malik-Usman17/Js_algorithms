function vowelsAndConsonants(s) {
    var vowels = ''
    var consonant = ''
    
      for(let x=0; x < s.length; x++){
        if(s[x] == 'a' || s[x] == 'e' || s[x] == 'i' || s[x] == 'o' || s[x] == 'u'){
         vowels = vowels + s[x]
        }
        else{
        consonant = consonant + s[x]
        }
      }
    
    for(let a in vowels){
      console.log(vowels[a])
    }
    
    for(let a in consonant){
      console.log(consonant[a])
    }
  }
  
  
  
  vowelsAndConsonants('javascriptloops')