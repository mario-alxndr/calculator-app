export function numberWithCommas(words: string) {
  return words.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
