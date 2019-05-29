export const isMobile = window.innerWidth <= 640

/**
 * Shuffle an array.
 * @param originalArray
 * @returns A new array with items in random order.
 */
export function shuffle<I>(originalArray: I[]): I[] {
  let i = originalArray.length, j, temp
  let array = [].concat(originalArray)

  if ( i == 0 ) return originalArray;

  while ( --i ) {
    j = Math.floor( Math.random() * ( i + 1 ) )
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  return array;
}
