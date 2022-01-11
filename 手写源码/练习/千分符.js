const tousand = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
    console.log($1);

    return $1 + ','
  })
}
console.log(tousand(123));
