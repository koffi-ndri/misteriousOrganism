// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (number, arrayof15DNABases) => {
    return {
      specimenNum: number,
      dna: arrayof15DNABases,
      mutate(){
  
        const resultantDNABases = [];
  
        for( let i = 0 ; i < arrayof15DNABases.length ; i++ ){
          const currentBase = arrayof15DNABases[i];
          let randomBase;
          do{
            randomBase = returnRandBase();
          }while( currentBase == randomBase );
  
          resultantDNABases.push( randomBase );
        }
  
        return resultantDNABases;
      },
  
      compareDNA(pAequor){
        const specimenNum1 = specimenNum;
        const specimenNum2 = pAequor.specimenNum;
        let count = 0;
        for(let i = 0; i < arrayof15DNABases.length; i++){
          if(pAequor[dna][i] === arrayof15DNABases[i]){
            count++;
          }
        }
        const percentage = (count/arrayof15DNABases.length)*100;
        console.log(`specimen ${specimenNum1} and specimen ${specimenNum2} have ${percentage.toFixed(2)} DNA in common.`);
      },
  
      willLikelySurvive(){
        let count = 0;
        for(let i = 0; i < arrayof15DNABases.length; i++){
          if(arrayof15DNABases[i] === 'C' || arrayof15DNABases === 'G'){
            count++;
          }
        }
        const percentage = (count/arrayof15DNABases.length)*100;
        if(percentage >= 60){
          return true;
        }
        return false;
      }
    };
  };