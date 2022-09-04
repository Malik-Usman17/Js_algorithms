//First, print each vowel in 's' on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order 
//as it appeared in s. Second, print each consonant (i.e., non-vowel) in 's' on a new line in the same order as it appeared in 's'.



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