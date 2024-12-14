function inBox(box: string[]): boolean {
  const gift = '*';

  if(box.at(0).includes(gift)) return false;
  if(box.at(-1).includes(gift)) return false;

  let rest = box.slice(1,-1).join('');
  let found = rest.indexOf(gift);
  if( found === -1 ) return false;

  const width = box.at(0).length;
  let mod = found % width;
  return (mod > 0 && mod < width - 1)
}
