const parseInput = input => {

  if (!input) {
    return [];
  }
  
  return input.split(' ');
}

module.exports = parseInput;