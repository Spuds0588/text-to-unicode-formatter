const characterMaps = {
  bold: {
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", 
    J: "𝗝", K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", 
    S: "𝗦", T: "𝗧", U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
    a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", 
    j: "𝗷", k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", 
    s: "𝘀", t: "𝘁", u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
    0: "𝟬", 1: "𝟭", 2: "𝟮", 3: "𝟯", 4: "𝟰", 5: "𝟱", 6: "𝟲", 7: "𝟳", 8: "𝟴", 9: "𝟵",
    " ": " "
  },
  italic: {
    A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", 
    J: "𝘑", K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", 
    S: "𝘚", T: "𝘛", U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
    a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", 
    j: "𝘫", k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", 
    s: "𝘴", t: "𝘵", u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
    " ": " "
  },
  monospace: {
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸",
    J: "𝙹", K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁",
    S: "𝚂", T: "𝚃", U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒",
    j: "𝚓", k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛",
    s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    0: "𝟶", 1: "𝟷", 2: "𝟸", 3: "𝟹", 4: "𝟺", 5: "𝟻", 6: "𝟼", 7: "𝟽", 8: "𝟾", 9: "𝟿",
    " ": " "
  },
  underline: {
    A: "A̲", B: "B̲", C: "C̲", D: "D̲", E: "E̲", F: "F̲", G: "G̲", H: "H̲", I: "I̲", 
    J: "J̲", K: "K̲", L: "L̲", M: "M̲", N: "N̲", O: "O̲", P: "P̲", Q: "Q̲", R: "R̲", 
    S: "S̲", T: "T̲", U: "U̲", V: "V̲", W: "W̲", X: "X̲", Y: "Y̲", Z: "Z̲",
    a: "a̲", b: "b̲", c: "c̲", d: "d̲", e: "e̲", f: "f̲", g: "g̲", h: "h̲", i: "i̲", 
    j: "j̲", k: "k̲", l: "l̲", m: "m̲", n: "n̲", o: "o̲", p: "p̲", q: "q̲", r: "r̲", 
    s: "s̲", t: "t̲", u: "u̲", v: "v̲", w: "w̲", x: "x̲", y: "y̲", z: "z̲",
    " ": " "
  },
  strikethrough: {
    A: "𝙰̶", B: "𝙱̶", C: "𝙲̶", D: "𝙳̶", E: "𝙴̶", F: "𝙵̶", G: "𝙶̶", H: "𝙷̶", I: "𝙸̶",
    J: "𝙹̶", K: "𝙺̶", L: "𝙻̶", M: "𝙼̶", N: "𝙽̶", O: "𝙾̶", P: "𝙿̶", Q: "𝚀̶", R: "𝚁̶",
    S: "𝚂̶", T: "𝚃̶", U: "𝚄̶", V: "𝚅̶", W: "𝚆̶", X: "𝚇̶", Y: "𝚈̶", Z: "𝚉̶",
    a: "𝚊̶", b: "𝚋̶", c: "𝚌̶", d: "𝚍̶", e: "𝚎̶", f: "𝚏̶", g: "𝚐̶", h: "𝚑̶", i: "𝚒̶",
    j: "𝚓̶", k: "𝚔̶", l: "𝚕̶", m: "𝚖̶", n: "𝚗̶", o: "𝚘̶", p: "𝚙̶", q: "𝚚̶", r: "𝚛̶",
    s: "𝚜̶", t: "𝚝̶", u: "𝚞̶", v: "𝚟̶", w: "𝚠̶", x: "𝚡̶", y: "𝚢̶", z: "𝚣̶",
    " ": " "
  }
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "transform") {
    const transformedText = request.text
      .split("")
      .map(char => characterMaps[request.style][char] || char)
      .join("");
    
    document.execCommand("insertText", false, transformedText);
  } else if (request.action === "addBullets") {
    // Handle all possible line break scenarios
    const text = request.text;
    
    // First normalize all possible line endings to \n
    const normalizedText = text
      .replace(/\r\n/g, '\n')  // Windows
      .replace(/\r/g, '\n');   // Old Mac
      
    // Add bullet at the start of each line while preserving the line breaks
    const bulletedText = normalizedText
      .split('\n')
      .map(line => `${request.bullet}${line}`)
      .join('\n');
    
    document.execCommand("insertText", false, bulletedText);
  }
});