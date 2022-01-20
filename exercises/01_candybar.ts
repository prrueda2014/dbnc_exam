
const printCandyBar = (num: number) => {
  const dividend: number = Math.abs(num)
  const arrDivisors: { div: number, desc: string }[] = [
    { div: 22, desc: "candyBar" },
    { div: 2, desc: "candy" },
    { div: 11, desc: "bar" },
  ]
  const result: { div: number, desc: string } | undefined = arrDivisors.find((divisor: { div: number, desc: string }) => {
    return dividend % divisor.div === 0;
  })

  return result?.desc || dividend
}
