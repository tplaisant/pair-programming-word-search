//@SilentYell (Nik Hixson)
//@tplaisant (Tiago Plaisant)

const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
      console.log(l);
      if (l.includes(word)) {
        return true;
      }
    }
  
    for (let col = 0; col < letters[0].length; col++) {
      let newArray = [];
      for (let row = 0; row < letters.length; row++) {
        console.log(letters[row][col]);
        newArray.push(letters[row][col]);
        if (newArray.join('').includes(word)) {
          return true;
        }
      }
    }
  
    return false;
  };
  
  module.exports = wordSearch;