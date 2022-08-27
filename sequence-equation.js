function permutationEquation(p) {
  let cek = new Map();
  let resultSet = new Array();

  p.map((value, index) => cek.set(value, index + 1));
  for (let i = 1; i <= p.length; i++) {
    resultSet.push(cek.get(cek.get(i)));
  }

  return resultSet;
}
