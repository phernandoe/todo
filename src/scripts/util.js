const parseInput = input => {

  if (!input) {
    return [];
  }

  const args = input.split(' ').filter(arg => arg !== '');
  if (args.length === 1) return Array.of(input);

  const command = args.shift();
  return Array.of(command, args.join(' '));
}

module.exports = parseInput;