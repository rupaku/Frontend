var city = ["Patna", "Raipur", "Punjab", 123, "Guwahati"]

for (let i = 0; i < city.length; i++) {
  if (typeof city[i] !== "string") break
  console.log(city[i])
}

/* While Lopp */

let i = 0
while (i < city.length) {
  console.log(city[i])
  i++
}

/* Do while loop */
let j = 0
do {
  console.log(j)
  j++
} while (j < 10)

/*forEach */
city.forEach((c) => console.log(c))
