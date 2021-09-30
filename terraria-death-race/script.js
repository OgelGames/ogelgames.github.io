const messages = [
  "&lt;player&gt; fell to their death.",
  "&lt;player&gt; didn't bounce.",
  "&lt;player&gt; forgot to breathe.",
  "&lt;player&gt; is sleeping with the fish.",
  "&lt;player&gt; drowned.",
  "&lt;player&gt; is shark food.",
  "&lt;player&gt; got melted.",
  "&lt;player&gt; was incinerated.",
  "&lt;player&gt; tried to swim in lava.",
  "&lt;player&gt; likes to play in magma.",
  "&lt;player&gt; couldn't put the fire out.",
  "&lt;player&gt; couldn't find the antidote.",
  "&lt;player&gt; couldn't breathe.",
  "&lt;player&gt; was slain...",
  "&lt;player&gt; was slain by &lt;enemy&gt;.",
  "&lt;player&gt; was eviscerated by &lt;enemy&gt;.",
  "&lt;player&gt; was murdered by &lt;enemy&gt;.",
  "&lt;player&gt;'s face was torn off by &lt;enemy&gt;.",
  "&lt;player&gt;'s entrails were ripped out by &lt;enemy&gt;.",
  "&lt;player&gt; was destroyed by &lt;enemy&gt;.",
  "&lt;player&gt;'s skull was crushed by &lt;enemy&gt;.",
  "&lt;player&gt; got massacred by &lt;enemy&gt;.",
  "&lt;player&gt; got impaled by &lt;enemy&gt;.",
  "&lt;player&gt; was torn in half by &lt;enemy&gt;.",
  "&lt;player&gt; was decapitated by &lt;enemy&gt;.",
  "&lt;player&gt; let their arms get torn off by &lt;enemy&gt;.",
  "&lt;player&gt; watched their innards become outards by &lt;enemy&gt;.",
  "&lt;player&gt; was brutally dissected by &lt;enemy&gt;.",
  "&lt;player&gt;'s extremities were detached by &lt;enemy&gt;.",
  "&lt;player&gt;'s body was mangled by &lt;enemy&gt;.",
  "&lt;player&gt;'s vital organs were ruptured by &lt;enemy&gt;.",
  "&lt;player&gt; was turned into a pile of flesh by &lt;enemy&gt;.",
  "&lt;player&gt; was removed from &lt;world&gt; by &lt;enemy&gt;.",
  "&lt;player&gt; got snapped in half by &lt;enemy&gt;.",
  "&lt;player&gt; was cut down the middle by &lt;enemy&gt;.",
  "&lt;player&gt; was chopped up by &lt;enemy&gt;.",
  "&lt;player&gt;'s plea for death was answered by &lt;enemy&gt;.",
  "&lt;player&gt;'s meat was ripped off the bone by &lt;enemy&gt;.",
  "&lt;player&gt;'s flailing about was finally stopped by &lt;enemy&gt;.",
  "&lt;player&gt; had their head removed by &lt;enemy&gt;.",
];

function randomize() {
  var txt = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("death-text").innerHTML = txt;
}

function copy() {
  var txt = document.getElementById("death-text").innerHTML;
  txt = txt.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  navigator.clipboard.writeText(txt);
}
