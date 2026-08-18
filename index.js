/* ══════════════════════════════════
   LAYOUTS
══════════════════════════════════ */
/* ══════════════════════════════════
   SVG THUMBNAIL BUILDERS (for layout picker)
══════════════════════════════════ */
function svgW(s){return `<svg viewBox="0 0 130 84" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;}
function rc(x,y,w,h){return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" rx="3" fill="rgba(255,255,255,.22)"/>`;}

// Generic helpers
function makeColThumb(n,ar=4/3){
  const W=130,H=84,P=7,G=4,pw=W-P*2,ph=Math.min((H-P*2-G*(n-1))/n, pw/ar);
  let s='';for(let i=0;i<n;i++)s+=rc(P,P+i*(ph+G),pw,ph);return svgW(s);
}
function makeGrid2x2Thumb(ar=1){
  const W=130,H=84,P=7,G=4,cw=(W-P*2-G)/2,ch=Math.min(cw/ar,(H-P*2-G)/2);
  return svgW([[0,0],[1,0],[0,1],[1,1]].map(([ci,ri])=>rc(P+ci*(cw+G),P+ri*(ch+G),cw,ch)).join(''));
}
function makeGrid3x2Thumb(){
  const W=130,H=84,P=7,G=3,cw=(W-P*2-G*2)/3,ch=(H-P*2-G)/2;
  return svgW([[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]].map(([ci,ri])=>rc(P+ci*(cw+G),P+ri*(ch+G),cw,ch)).join(''));
}
function makeGrid2x3Thumb(){
  const W=130,H=84,P=7,G=3,cw=(W-P*2-G)/2,ch=(H-P*2-G*2)/3;
  return svgW([[0,0],[1,0],[0,1],[1,1],[0,2],[1,2]].map(([ci,ri])=>rc(P+ci*(cw+G),P+ri*(ch+G),cw,ch)).join(''));
}
function makeRowThumb(n,ar=16/9){
  const W=130,H=84,P=7,G=4,pw=(W-P*2-G*(n-1))/n,ph=Math.min(pw/ar,H-P*2);
  let s='';for(let i=0;i<n;i++)s+=rc(P+i*(pw+G),P,pw,ph);return svgW(s);
}
function make1Big3Thumb(){
  const W=130,H=84,P=7,G=4,bH=(H-P*2)*.54,sH=H-P*2-bH-G,sW=(W-P*2-G*2)/3;
  return svgW(rc(P,P,W-P*2,bH)+[0,1,2].map(i=>rc(P+i*(sW+G),P+bH+G,sW,sH)).join(''));
}
function make1Big4SmallThumb(){
  const W=130,H=84,P=7,G=3,bH=(H-P*2)*.52,sH=H-P*2-bH-G,sW=(W-P*2-G*3)/4;
  return svgW(rc(P,P,W-P*2,bH)+[0,1,2,3].map(i=>rc(P+i*(sW+G),P+bH+G,sW,sH)).join(''));
}
function make2Top1BottomThumb(){
  const W=130,H=84,P=7,G=4,tw=(W-P*2-G)/2,tH=(H-P*2)*.45,bH=H-P*2-tH-G;
  return svgW(rc(P,P,tw,tH)+rc(P+tw+G,P,tw,tH)+rc(P,P+tH+G,W-P*2,bH));
}
function make1Left2RightThumb(){
  const W=130,H=84,P=7,G=4,bW=(W-P*2)*.55,sW=W-P*2-bW-G,sH=(H-P*2-G)/2;
  return svgW(rc(P,P,bW,H-P*2)+rc(P+bW+G,P,sW,sH)+rc(P+bW+G,P+sH+G,sW,sH));
}
function make2Left1RightThumb(){
  const W=130,H=84,P=7,G=4,bW=(W-P*2)*.45,sW=W-P*2-bW-G,sH=(H-P*2-G)/2;
  return svgW(rc(P,P,sW,sH)+rc(P,P+sH+G,sW,sH)+rc(P+sW+G,P,bW,H-P*2));
}
function makeDiagonalSplitThumb(){
  const W=130,H=84,P=7,G=4,hw=(W-P*2-G)/2;
  return svgW(rc(P,P,hw,H-P*2)+rc(P+hw+G,P,hw,H-P*2));
}
function make1Big2SideThumb(){
  const W=130,H=84,P=7,G=4,bW=(W-P*2)*.57,sW=W-P*2-bW-G,sH=(H-P*2-G)/2;
  return svgW(rc(P,P,bW,H-P*2)+rc(P+bW+G,P,sW,sH)+rc(P+bW+G,P+sH+G,sW,sH));
}
function makeCinemaThumb(){
  const W=130,H=84,P=7,G=4,n=3,ph=(H-P*2-G*(n-1))/n;
  return svgW([0,1,2].map(i=>rc(P,P+i*(ph+G),W-P*2,ph)).join(''));
}
function makeTrioThumb(){
  const W=130,H=84,P=7,G=4,n=3,pw=(W-P*2-G*(n-1))/n,ph=H-P*2;
  return svgW([0,1,2].map(i=>rc(P+i*(pw+G),P,pw,ph)).join(''));
}
function make4GridThumb(){
  // 4-photo horizontal row
  const W=130,H=84,P=7,G=3,pw=(W-P*2-G*3)/4,ph=H-P*2;
  return svgW([0,1,2,3].map(i=>rc(P+i*(pw+G),P,pw,ph)).join(''));
}
function make5GridThumb(){
  const W=130,H=84,P=7,G=3,cw=(W-P*2-G)/2,ch=(H-P*2-G)/2;
  const top=[[0,0],[1,0]].map(([ci,ri])=>rc(P+ci*(cw+G),P+ri*(ch+G),cw,ch));
  const bw=(W-P*2-G*2)/3, bh=ch;
  const bot=[0,1,2].map(i=>rc(P+i*(bw+G),P+ch+G,bw,bh));
  return svgW([...top,...bot].join(''));
}
function make6GridThumb(){
  const W=130,H=84,P=7,G=3,cw=(W-P*2-G*2)/3,ch=(H-P*2-G)/2;
  return svgW([[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]].map(([ci,ri])=>rc(P+ci*(cw+G),P+ri*(ch+G),cw,ch)).join(''));
}
function makePanoThumb(){
  const W=130,H=84,P=7,G=4,ph=(H-P*2-G)/2,pw=W-P*2;
  return svgW(rc(P,P,pw,ph)+rc(P,P+ph+G,pw,ph));
}
function make2Top3BottomThumb(){
  const W=130,H=84,P=7,G=3,tW=(W-P*2-G)/2,tH=(H-P*2)*.45,bH=H-P*2-tH-G,bW=(W-P*2-G*2)/3;
  return svgW([0,1].map(i=>rc(P+i*(tW+G),P,tW,tH)).join('')+[0,1,2].map(i=>rc(P+i*(bW+G),P+tH+G,bW,bH)).join(''));
}
function make1TopRow3Thumb(){
  const W=130,H=84,P=7,G=4,tH=(H-P*2)*.5,bH=H-P*2-tH-G,bW=(W-P*2-G*2)/3;
  return svgW(rc(P,P,W-P*2,tH)+[0,1,2].map(i=>rc(P+i*(bW+G),P+tH+G,bW,bH)).join(''));
}

/* ══════════════════════════════════
   LAYOUT GEOMETRY — single source of truth
   getGeometry(W) returns {H, rects, PAD, HEADER, FOOTER}
   Used by BOTH strip rendering AND preview sizing
══════════════════════════════════ */
function geomCol(W, n, ar=4/3){
  const PAD=14, HEADER=48, FOOTER=44, GAP=8;
  const pw=W-PAD*2;
  const ph=Math.round(pw/ar);
  const H=HEADER+(ph+GAP)*n-GAP+FOOTER;
  const rects=[];
  for(let i=0;i<n;i++) rects.push({x:PAD,y:HEADER+i*(ph+GAP),w:pw,h:ph});
  return {H,rects,PAD,HEADER,FOOTER};
}
function geomRow(W, n, ar=16/9){
  const PAD=14, HEADER=48, FOOTER=44, GAP=8;
  const pw=Math.floor((W-PAD*2-GAP*(n-1))/n);
  const ph=Math.round(pw/ar);
  const H=HEADER+ph+FOOTER;
  const rects=[];
  for(let i=0;i<n;i++) rects.push({x:PAD+i*(pw+GAP),y:HEADER,w:pw,h:ph});
  return {H,rects,PAD,HEADER,FOOTER};
}
function geomGrid2x2(W, ar=1){
  const PAD=14, HEADER=48, FOOTER=44, GAP=8;
  const cw=Math.floor((W-PAD*2-GAP)/2);
  const ch=Math.round(cw/ar);
  const H=HEADER+(ch+GAP)*2-GAP+FOOTER;
  const rects=[];
  [[0,0],[1,0],[0,1],[1,1]].forEach(([ci,ri])=>rects.push({x:PAD+ci*(cw+GAP),y:HEADER+ri*(ch+GAP),w:cw,h:ch}));
  return {H,rects,PAD,HEADER,FOOTER};
}
function geom1Big3(W){
  const PAD=14, HEADER=48, FOOTER=44, GAP=8;
  const pw=W-PAD*2;
  const bigH=Math.round(pw*9/16);
  const smW=Math.floor((pw-GAP*2)/3);
  const smH=Math.round(smW);
  const H=HEADER+bigH+GAP+smH+FOOTER;
  const rects=[{x:PAD,y:HEADER,w:pw,h:bigH}];
  for(let i=0;i<3;i++) rects.push({x:PAD+i*(smW+GAP),y:HEADER+bigH+GAP,w:smW,h:smH});
  return {H,rects,PAD,HEADER,FOOTER};
}
function geom1Big2Side(W){
  const PAD=14, HEADER=48, FOOTER=44, GAP=8;
  const pw=W-PAD*2;
  const bigW=Math.round(pw*0.58);
  const smW=pw-bigW-GAP;
  const totalH=Math.round(pw*9/16); // total photo area height
  const smH=Math.floor((totalH-GAP)/2);
  const bigH=totalH;
  const H=HEADER+bigH+FOOTER;
  const rects=[
    {x:PAD,y:HEADER,w:bigW,h:bigH},
    {x:PAD+bigW+GAP,y:HEADER,w:smW,h:smH},
    {x:PAD+bigW+GAP,y:HEADER+smH+GAP,w:smW,h:smH},
  ];
  return {H,rects,PAD,HEADER,FOOTER};
}
function geomCinema(W, n=3){
  const PAD=14, HEADER=48, FOOTER=44, GAP=7;
  const pw=W-PAD*2;
  const ph=Math.round(pw*9/21);
  const H=HEADER+(ph+GAP)*n-GAP+FOOTER;
  const rects=[];
  for(let i=0;i<n;i++) rects.push({x:PAD,y:HEADER+i*(ph+GAP),w:pw,h:ph});
  return {H,rects,PAD,HEADER,FOOTER};
}

// ── New geometry functions ──────────────────────────────
function geomGrid3x2(W){  // 6 photos: 3 cols × 2 rows
  const PAD=14,HEADER=48,FOOTER=44,GAP=7;
  const cw=Math.floor((W-PAD*2-GAP*2)/3), ch=Math.round(cw);
  const H=HEADER+(ch+GAP)*2-GAP+FOOTER;
  const r=[];
  [[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]].forEach(([ci,ri])=>r.push({x:PAD+ci*(cw+GAP),y:HEADER+ri*(ch+GAP),w:cw,h:ch}));
  return {H,rects:r,PAD,HEADER,FOOTER};
}
function geomGrid2x3(W){  // 6 photos: 2 cols × 3 rows
  const PAD=14,HEADER=48,FOOTER=44,GAP=7;
  const cw=Math.floor((W-PAD*2-GAP)/2), ch=Math.round(cw);
  const H=HEADER+(ch+GAP)*3-GAP+FOOTER;
  const r=[];
  [[0,0],[1,0],[0,1],[1,1],[0,2],[1,2]].forEach(([ci,ri])=>r.push({x:PAD+ci*(cw+GAP),y:HEADER+ri*(ch+GAP),w:cw,h:ch}));
  return {H,rects:r,PAD,HEADER,FOOTER};
}
function geom2Top1Bottom(W){  // 3 photos: 2 top + 1 full-width bottom
  const PAD=14,HEADER=48,FOOTER=44,GAP=8;
  const pw=W-PAD*2, tw=(pw-GAP)/2, tH=Math.round(tw*3/4), bH=Math.round(tw*3/4);
  const H=HEADER+tH+GAP+bH+FOOTER;
  return {H,rects:[{x:PAD,y:HEADER,w:tw,h:tH},{x:PAD+tw+GAP,y:HEADER,w:tw,h:tH},{x:PAD,y:HEADER+tH+GAP,w:pw,h:bH}],PAD,HEADER,FOOTER};
}
function geom1Top2Bottom(W){  // 3 photos: 1 full-width top + 2 bottom
  const PAD=14,HEADER=48,FOOTER=44,GAP=8;
  const pw=W-PAD*2, tH=Math.round(pw*9/16), bw=(pw-GAP)/2, bH=Math.round(bw*3/4);
  const H=HEADER+tH+GAP+bH+FOOTER;
  return {H,rects:[{x:PAD,y:HEADER,w:pw,h:tH},{x:PAD,y:HEADER+tH+GAP,w:bw,h:bH},{x:PAD+bw+GAP,y:HEADER+tH+GAP,w:bw,h:bH}],PAD,HEADER,FOOTER};
}
function geom1Big4Small(W){  // 5 photos: 1 big top + 4 small bottom
  const PAD=14,HEADER=48,FOOTER=44,GAP=7;
  const pw=W-PAD*2, bH=Math.round(pw*9/16), sW=Math.floor((pw-GAP*3)/4), sH=Math.round(sW*3/4);
  const H=HEADER+bH+GAP+sH+FOOTER;
  const r=[{x:PAD,y:HEADER,w:pw,h:bH}];
  for(let i=0;i<4;i++) r.push({x:PAD+i*(sW+GAP),y:HEADER+bH+GAP,w:sW,h:sH});
  return {H,rects:r,PAD,HEADER,FOOTER};
}
function geom5Grid(W){  // 5 photos: 2 top + 3 bottom
  const PAD=14,HEADER=48,FOOTER=44,GAP=7;
  const pw=W-PAD*2, tw=(pw-GAP)/2, tH=Math.round(tw*3/4), bW=Math.floor((pw-GAP*2)/3), bH=Math.round(bW*3/4);
  const H=HEADER+tH+GAP+bH+FOOTER;
  const r=[{x:PAD,y:HEADER,w:tw,h:tH},{x:PAD+tw+GAP,y:HEADER,w:tw,h:tH}];
  for(let i=0;i<3;i++) r.push({x:PAD+i*(bW+GAP),y:HEADER+tH+GAP,w:bW,h:bH});
  return {H,rects:r,PAD,HEADER,FOOTER};
}
function geom6Grid(W){  // 6 photos: 2 top + 4 bottom (or 3+3)
  const PAD=14,HEADER=48,FOOTER=44,GAP=6;
  const pw=W-PAD*2, cw=Math.floor((pw-GAP*2)/3), ch=Math.round(cw);
  const H=HEADER+(ch+GAP)*2-GAP+FOOTER;
  const r=[];
  [[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]].forEach(([ci,ri])=>r.push({x:PAD+ci*(cw+GAP),y:HEADER+ri*(ch+GAP),w:cw,h:ch}));
  return {H,rects:r,PAD,HEADER,FOOTER};
}
function geom2Top3Bottom(W){  // 5 photos: 2 big top + 3 small bottom
  const PAD=14,HEADER=48,FOOTER=44,GAP=7;
  const pw=W-PAD*2, tw=(pw-GAP)/2, tH=Math.round(tw*3/4), bW=Math.floor((pw-GAP*2)/3), bH=Math.round(bW*3/4);
  const H=HEADER+tH+GAP+bH+FOOTER;
  const r=[{x:PAD,y:HEADER,w:tw,h:tH},{x:PAD+tw+GAP,y:HEADER,w:tw,h:tH}];
  for(let i=0;i<3;i++) r.push({x:PAD+i*(bW+GAP),y:HEADER+tH+GAP,w:bW,h:bH});
  return {H,rects:r,PAD,HEADER,FOOTER};
}
function geomPano(W){  // 2 photos: 2 panoramic stacked
  const PAD=14,HEADER=48,FOOTER=44,GAP=8;
  const pw=W-PAD*2, ph=Math.round(pw*9/32);
  const H=HEADER+(ph+GAP)*2-GAP+FOOTER;
  return {H,rects:[{x:PAD,y:HEADER,w:pw,h:ph},{x:PAD,y:HEADER+ph+GAP,w:pw,h:ph}],PAD,HEADER,FOOTER};
}
function geomSplit2(W){ // 2 photos: side by side square
  const PAD=14,HEADER=48,FOOTER=44,GAP=8;
  const cw=Math.floor((W-PAD*2-GAP)/2), ch=cw;
  const H=HEADER+ch+FOOTER;
  return {H,rects:[{x:PAD,y:HEADER,w:cw,h:ch},{x:PAD+cw+GAP,y:HEADER,w:cw,h:ch}],PAD,HEADER,FOOTER};
}
// ── Landscape-specific ───────────────────────────────────
function geomLRow3(W){  // 3 landscape photos in a row
  const PAD=14,HEADER=48,FOOTER=44,GAP=8;
  const pw=Math.floor((W-PAD*2-GAP*2)/3), ph=Math.round(pw*9/16);
  const H=HEADER+ph+FOOTER;
  const r=[];for(let i=0;i<3;i++)r.push({x:PAD+i*(pw+GAP),y:HEADER,w:pw,h:ph});
  return {H,rects:r,PAD,HEADER,FOOTER};
}
function geomLGrid3x2(W){ // 6 landscape: 3 cols × 2 rows
  const PAD=14,HEADER=48,FOOTER=44,GAP=7;
  const cw=Math.floor((W-PAD*2-GAP*2)/3), ch=Math.round(cw*9/16);
  const H=HEADER+(ch+GAP)*2-GAP+FOOTER;
  const r=[];
  [[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]].forEach(([ci,ri])=>r.push({x:PAD+ci*(cw+GAP),y:HEADER+ri*(ch+GAP),w:cw,h:ch}));
  return {H,rects:r,PAD,HEADER,FOOTER};
}
function geomL1BigRow3(W){ // 4 landscape: 1 big left + 3 small stacked right
  const PAD=14,HEADER=48,FOOTER=44,GAP=8;
  const pw=W-PAD*2, bigW=Math.round(pw*0.55), smW=pw-bigW-GAP;
  const bigH=Math.round(bigW*9/16), smH=Math.floor((bigH-GAP*2)/3);
  const H=HEADER+bigH+FOOTER;
  const r=[{x:PAD,y:HEADER,w:bigW,h:bigH}];
  for(let i=0;i<3;i++) r.push({x:PAD+bigW+GAP,y:HEADER+i*(smH+GAP),w:smW,h:smH});
  return {H,rects:r,PAD,HEADER,FOOTER};
}
function geomL2x3(W){ // 6 landscape: 2 rows × 3 cols
  const PAD=14,HEADER=48,FOOTER=44,GAP=7;
  const cw=Math.floor((W-PAD*2-GAP*2)/3), ch=Math.round(cw*9/16);
  const H=HEADER+(ch+GAP)*2-GAP+FOOTER;
  const r=[];
  for(let ri=0;ri<2;ri++) for(let ci=0;ci<3;ci++) r.push({x:PAD+ci*(cw+GAP),y:HEADER+ri*(ch+GAP),w:cw,h:ch});
  return {H,rects:r,PAD,HEADER,FOOTER};
}
function geomLPano2(W){ // 2 ultra-wide panoramic stacked
  const PAD=14,HEADER=48,FOOTER=44,GAP=8;
  const pw=W-PAD*2, ph=Math.round(pw*9/32);
  const H=HEADER+(ph+GAP)*2-GAP+FOOTER;
  return {H,rects:[{x:PAD,y:HEADER,w:pw,h:ph},{x:PAD,y:HEADER+ph+GAP,w:pw,h:ph}],PAD,HEADER,FOOTER};
}
function geomL1Big2Bottom(W){ // 3 landscape: 1 big top + 2 bottom
  const PAD=14,HEADER=48,FOOTER=44,GAP=8;
  const pw=W-PAD*2, bigH=Math.round(pw*9/16*.55), bw=(pw-GAP)/2, bH=Math.round(bw*9/16);
  const H=HEADER+bigH+GAP+bH+FOOTER;
  return {H,rects:[{x:PAD,y:HEADER,w:pw,h:bigH},{x:PAD,y:HEADER+bigH+GAP,w:bw,h:bH},{x:PAD+bw+GAP,y:HEADER+bigH+GAP,w:bw,h:bH}],PAD,HEADER,FOOTER};
}

const LAYOUTS=[
  // ── PORTRAIT ──────────────────────────────────────────────────────────────
  {id:'p4',   name:'4 Strip Klasik',    sub:'Portrait · 4 foto', orient:'portrait', n:4, vidAR:'4/3',  stripW:320, geom:W=>geomCol(W,4,4/3),      thumb:makeColThumb(4)},
  {id:'p3',   name:'3 Strip',           sub:'Portrait · 3 foto', orient:'portrait', n:3, vidAR:'4/3',  stripW:300, geom:W=>geomCol(W,3,4/3),      thumb:makeColThumb(3)},
  {id:'p2',   name:'2 Strip Besar',     sub:'Portrait · 2 foto', orient:'portrait', n:2, vidAR:'4/3',  stripW:320, geom:W=>geomCol(W,2,4/3),      thumb:makeColThumb(2)},
  {id:'p6a',  name:'6 Strip',           sub:'Portrait · 6 foto', orient:'portrait', n:6, vidAR:'4/3',  stripW:320, geom:W=>geomCol(W,6,4/3),      thumb:makeColThumb(6)},
  {id:'p2x2', name:'2×2 Kotak',         sub:'Portrait · 4 foto', orient:'portrait', n:4, vidAR:'4/3',  stripW:340, geom:W=>geomGrid2x2(W,1),      thumb:makeGrid2x2Thumb()},
  {id:'p2x3', name:'2×3 Grid',          sub:'Portrait · 6 foto', orient:'portrait', n:6, vidAR:'4/3',  stripW:340, geom:W=>geomGrid2x3(W),         thumb:makeGrid2x3Thumb()},
  {id:'p1b3', name:'1 Besar + 3 Kecil', sub:'Portrait · 4 foto', orient:'portrait', n:4, vidAR:'16/9', stripW:340, geom:W=>geom1Big3(W),            thumb:make1Big3Thumb()},
  {id:'p1b4', name:'1 Besar + 4 Kecil', sub:'Portrait · 5 foto', orient:'portrait', n:5, vidAR:'16/9', stripW:360, geom:W=>geom1Big4Small(W),       thumb:make1Big4SmallThumb()},
  {id:'p2t1b',name:'2 Atas + 1 Bawah',  sub:'Portrait · 3 foto', orient:'portrait', n:3, vidAR:'4/3',  stripW:320, geom:W=>geom2Top1Bottom(W),      thumb:make2Top1BottomThumb()},
  {id:'p1t2b',name:'1 Atas + 2 Bawah',  sub:'Portrait · 3 foto', orient:'portrait', n:3, vidAR:'16/9', stripW:320, geom:W=>geom1Top2Bottom(W),      thumb:make1TopRow3Thumb()},
  {id:'p2t3b',name:'2 Atas + 3 Bawah',  sub:'Portrait · 5 foto', orient:'portrait', n:5, vidAR:'4/3',  stripW:340, geom:W=>geom2Top3Bottom(W),      thumb:make2Top3BottomThumb()},
  {id:'p5g',  name:'5 Grid Campuran',   sub:'Portrait · 5 foto', orient:'portrait', n:5, vidAR:'4/3',  stripW:340, geom:W=>geom5Grid(W),             thumb:make5GridThumb()},
  {id:'ppano',name:'Panorama 2',         sub:'Portrait · 2 foto', orient:'portrait', n:2, vidAR:'16/9', stripW:340, geom:W=>geomPano(W),              thumb:makePanoThumb()},
  {id:'psplit',name:'Split Dua',         sub:'Portrait · 2 foto', orient:'portrait', n:2, vidAR:'4/3',  stripW:340, geom:W=>geomSplit2(W),             thumb:makeDiagonalSplitThumb()},
  {id:'p1l2r',name:'1 Kiri + 2 Kanan',  sub:'Portrait · 3 foto', orient:'portrait', n:3, vidAR:'4/3',  stripW:320, geom:W=>geom1Big2Side(W),          thumb:make1Left2RightThumb()},
  {id:'p2l1r',name:'2 Kiri + 1 Kanan',  sub:'Portrait · 3 foto', orient:'portrait', n:3, vidAR:'4/3',  stripW:320, geom:W=>{const PAD=14,HEADER=48,FOOTER=44,GAP=8,pw=W-PAD*2,bW=Math.round(pw*.42),smW=pw-bW-GAP,smH=Math.floor((Math.round(smW*4/3)-GAP)/2),bigH=Math.round(smW*4/3),H=HEADER+bigH+FOOTER;return {H,rects:[{x:PAD,y:HEADER,w:smW,h:smH},{x:PAD,y:HEADER+smH+GAP,w:smW,h:smH},{x:PAD+smW+GAP,y:HEADER,w:bW,h:bigH}],PAD,HEADER,FOOTER};}, thumb:make2Left1RightThumb()},
  // ── LANDSCAPE ─────────────────────────────────────────────────────────────
  {id:'l4',   name:'4 Horisontal',       sub:'Landscape · 4 foto', orient:'landscape', n:4, vidAR:'16/9', stripW:660, geom:W=>geomRow(W,4,16/9),      thumb:makeRowThumb(4)},
  {id:'l3',   name:'3 Horisontal',       sub:'Landscape · 3 foto', orient:'landscape', n:3, vidAR:'16/9', stripW:620, geom:W=>geomLRow3(W),             thumb:makeRowThumb(3)},
  {id:'l2x2', name:'2×2 Landscape',      sub:'Landscape · 4 foto', orient:'landscape', n:4, vidAR:'16/9', stripW:620, geom:W=>geomGrid2x2(W,16/9),     thumb:makeGrid2x2Thumb(16/9)},
  {id:'l3x2', name:'3×2 Grid',           sub:'Landscape · 6 foto', orient:'landscape', n:6, vidAR:'16/9', stripW:660, geom:W=>geomLGrid3x2(W),          thumb:makeGrid3x2Thumb()},
  {id:'l1b2', name:'1 Besar + 2 Kanan',  sub:'Landscape · 3 foto', orient:'landscape', n:3, vidAR:'16/9', stripW:600, geom:W=>geom1Big2Side(W),          thumb:make1Big2SideThumb()},
  {id:'l1b3r',name:'1 Besar + 3 Kanan',  sub:'Landscape · 4 foto', orient:'landscape', n:4, vidAR:'16/9', stripW:620, geom:W=>geomL1BigRow3(W),          thumb:make1Left2RightThumb()},
  {id:'lci',  name:'Sinematik 3',         sub:'Landscape · 3 foto', orient:'landscape', n:3, vidAR:'16/9', stripW:640, geom:W=>geomCinema(W,3),           thumb:makeCinemaThumb()},
  {id:'lci4', name:'Sinematik 4',         sub:'Landscape · 4 foto', orient:'landscape', n:4, vidAR:'16/9', stripW:640, geom:W=>geomCinema(W,4),           thumb:makeCinemaThumb()},
  {id:'l1t2b',name:'1 Atas + 2 Bawah',   sub:'Landscape · 3 foto', orient:'landscape', n:3, vidAR:'16/9', stripW:620, geom:W=>geomL1Big2Bottom(W),        thumb:make1TopRow3Thumb()},
  {id:'lpano',name:'Panorama 2',          sub:'Landscape · 2 foto', orient:'landscape', n:2, vidAR:'16/9', stripW:640, geom:W=>geomLPano2(W),              thumb:makePanoThumb()},
  {id:'l5g',  name:'5 Grid Campuran',    sub:'Landscape · 5 foto', orient:'landscape', n:5, vidAR:'16/9', stripW:640, geom:W=>geom5Grid(W),               thumb:make5GridThumb()},
  {id:'l6g',  name:'6 Grid',             sub:'Landscape · 6 foto', orient:'landscape', n:6, vidAR:'16/9', stripW:660, geom:W=>geomL2x3(W),                thumb:make6GridThumb()},
];

const FILTERS=[
  {id:'none', name:'Original',css:'none'},
  {id:'bw',   name:'B&W',    css:'grayscale(100%)'},
  {id:'sepia',name:'Sepia',  css:'sepia(85%)'},
  {id:'warm', name:'Warm',   css:'sepia(28%) saturate(140%) hue-rotate(-10deg)'},
  {id:'cool', name:'Cool',   css:'saturate(110%) hue-rotate(20deg) brightness(1.06)'},
  {id:'vivid',name:'Vivid',  css:'saturate(180%) contrast(110%)'},
  {id:'fade', name:'Fade',   css:'contrast(80%) brightness(115%) saturate(80%)'},
  {id:'drama',name:'Drama',  css:'contrast(140%) brightness(90%) saturate(80%)'},
  {id:'matte',name:'Matte',  css:'contrast(85%) saturate(70%) brightness(108%)'},
  {id:'retro',name:'Retro',  css:'sepia(50%) hue-rotate(-30deg) saturate(130%)'},
  {id:'rose', name:'Rosé',   css:'sepia(18%) saturate(150%) hue-rotate(300deg) brightness(105%)'},
  {id:'noir', name:'Noir',   css:'grayscale(100%) contrast(130%) brightness(88%)'},
  {id:'grain',name:'Grainy', css:'contrast(105%) saturate(90%)',grain:true},
  {id:'glow', name:'Glow',   css:'brightness(115%) saturate(120%) contrast(90%)'},
  {id:'lomo', name:'Lomo',   css:'contrast(150%) saturate(130%) brightness(85%)'},
];

/* ══════════════════════════════════
   THEMES
══════════════════════════════════ */
const THEMES=[
  /* ── ROMANTIC / SOFT ─────────────────────────────────── */
  {id:'romantic',  name:'💕 Romantis',    emoji:'💕', bg:'#ffb6c1',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#ff9fb0');g.addColorStop(1,'#ffc8d8');c.fillStyle=g;c.fillRect(0,0,w,h);},
   border:'#ff6b8a',text:'#8b2252',deco:(c,w,h)=>edeco(c,w,h,['💕','💖','✨','🌹','💗','🌸'])},

  {id:'pastel',    name:'🌸 Pastel',      emoji:'🌸', bg:'#fce4ec',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,w,h);g.addColorStop(0,'#fce4ec');g.addColorStop(.33,'#e8f5e9');g.addColorStop(.66,'#e3f2fd');g.addColorStop(1,'#f3e5f5');c.fillStyle=g;c.fillRect(0,0,w,h);},
   border:'#f48fb1',text:'#880e4f',deco:(c,w,h)=>edeco(c,w,h,['🌸','🌷','🦋','🌼','💐','🍡'])},

  {id:'sakura',    name:'🌺 Sakura',      emoji:'🌺', bg:'#ffd6e7',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,w,h);g.addColorStop(0,'#ffdde8');g.addColorStop(.5,'#ffc8d8');g.addColorStop(1,'#ffb3c6');c.fillStyle=g;c.fillRect(0,0,w,h);// petals
   c.font='22px serif';['🌸','🌺','🌷'].forEach((e,i)=>{c.globalAlpha=0.18;c.fillText(e,w*.15+i*w*.3,h*.25);c.fillText(e,w*.05+i*w*.33,h*.7);});c.globalAlpha=1;},
   border:'#e91e8c',text:'#6d0038',deco:(c,w,h)=>edeco(c,w,h,['🌸','🌺','🌷','🌸','🌺','🌷'])},

  {id:'kawaii',    name:'🍬 Kawaii',      emoji:'🍬', bg:'#fff0f5',
   stripBg:(c,w,h)=>{c.fillStyle='#fff0f5';c.fillRect(0,0,w,h);// polka dots
   c.fillStyle='rgba(255,182,193,0.35)';for(let x=12;x<w;x+=22)for(let y=12;y<h;y+=22){c.beginPath();c.arc(x,y,5,0,Math.PI*2);c.fill();}},
   border:'#ff80ab',text:'#c2185b',deco:(c,w,h)=>edeco(c,w,h,['🍬','🍭','🎀','🌈','⭐','🦄'])},

  {id:'cotton',    name:'🩷 Cotton Candy', emoji:'🩷', bg:'#f8c8d4',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,w,h);g.addColorStop(0,'#f8c8d4');g.addColorStop(.5,'#d4c8f8');g.addColorStop(1,'#c8e8f8');c.fillStyle=g;c.fillRect(0,0,w,h);},
   border:'#c77dff',text:'#3c096c',deco:(c,w,h)=>edeco(c,w,h,['🩷','🩵','💜','🩷','🩵','💜'])},

  /* ── NATURE ───────────────────────────────────────────── */
  {id:'sunset',    name:'🌅 Sunset',      emoji:'🌅', bg:'#ff7043',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#1a0a0a');g.addColorStop(.35,'#c62828');g.addColorStop(.6,'#ff6f00');g.addColorStop(.8,'#ffb300');g.addColorStop(1,'#fff176');c.fillStyle=g;c.fillRect(0,0,w,h);},
   border:'#e64a19',text:'#fff9c4',deco:(c,w,h)=>edeco(c,w,h,['🌅','☀️','🌊','🏄','🌴','🌻'])},

  {id:'ocean',     name:'🌊 Lautan',      emoji:'🌊', bg:'#0077b6',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#023e8a');g.addColorStop(.5,'#0077b6');g.addColorStop(1,'#00b4d8');c.fillStyle=g;c.fillRect(0,0,w,h);// wave lines
   c.strokeStyle='rgba(255,255,255,0.08)';c.lineWidth=2;for(let y=0;y<h;y+=18){c.beginPath();for(let x=0;x<w;x+=8)c.lineTo(x,y+Math.sin(x/20)*4);c.stroke();}},
   border:'#0096c7',text:'#caf0f8',deco:(c,w,h)=>edeco(c,w,h,['🌊','🐠','🦀','🐙','🐚','⚓'])},

  {id:'tropical',  name:'🌴 Tropis',      emoji:'🌴', bg:'#2d6a4f',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#1b4332');g.addColorStop(.6,'#2d6a4f');g.addColorStop(1,'#52b788');c.fillStyle=g;c.fillRect(0,0,w,h);},
   border:'#40916c',text:'#d8f3dc',deco:(c,w,h)=>edeco(c,w,h,['🌴','🌺','🦜','🍍','🌿','🐦'])},

  {id:'forest',    name:'🌲 Hutan',       emoji:'🌲', bg:'#1b4332',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#081c15');g.addColorStop(.5,'#1b4332');g.addColorStop(1,'#2d6a4f');c.fillStyle=g;c.fillRect(0,0,w,h);// dots
   c.fillStyle='rgba(180,255,180,0.06)';for(let i=0;i<40;i++){c.beginPath();c.arc(Math.random()*w,Math.random()*h,Math.random()*3+1,0,Math.PI*2);c.fill();}},
   border:'#52b788',text:'#b7e4c7',deco:(c,w,h)=>edeco(c,w,h,['🌲','🌿','🍃','🦋','🌾','🍄'])},

  {id:'autumn',    name:'🍂 Musim Gugur', emoji:'🍂', bg:'#bf5f00',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#7c3200');g.addColorStop(.4,'#bf5f00');g.addColorStop(.8,'#e65100');g.addColorStop(1,'#f57c00');c.fillStyle=g;c.fillRect(0,0,w,h);},
   border:'#e65100',text:'#fff3e0',deco:(c,w,h)=>edeco(c,w,h,['🍂','🍁','🌾','🎃','🍎','🌰'])},

  {id:'spring',    name:'🌻 Semi',        emoji:'🌻', bg:'#f9f3c8',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#fffde7');g.addColorStop(.5,'#f0f4c3');g.addColorStop(1,'#dcedc8');c.fillStyle=g;c.fillRect(0,0,w,h);},
   border:'#8bc34a',text:'#33691e',deco:(c,w,h)=>edeco(c,w,h,['🌻','🌼','🦋','🐝','🌱','☀️'])},

  /* ── DARK / MOODY ─────────────────────────────────────── */
  {id:'vintagefilm',  name:'🎞️ Vintage Film', emoji:'🎞️', bg:'#111111',
   stripBg:(c,w,h)=>{c.fillStyle='#181818';c.fillRect(0,0,w,h);c.fillStyle='#f0f0f0';const fw=Math.max(4,Math.round(w*0.014));const hw=Math.max(6,Math.round(w*0.015));const hh=Math.max(8,Math.round(w*0.025));const sp=Math.max(16,Math.round(w*0.04));for(let y=fw*2;y<h-fw*2;y+=sp){c.fillRect(fw+2,y,hw,hh);c.fillRect(w-fw-hw-2,y,hw,hh);}},
   border:'#333333',text:'#ffffff',deco:(c,w,h)=>edeco(c,w,h,['❤️','🎞️','🖤','📸','❤️','🎞️'])},

  {id:'galaxy',    name:'🌌 Galaxy',      emoji:'🌌', bg:'#1a0533',
   stripBg:(c,w,h)=>{c.fillStyle='#0d001a';c.fillRect(0,0,w,h);for(let i=0;i<160;i++){c.beginPath();c.arc(Math.random()*w,Math.random()*h,Math.random()*1.8,0,Math.PI*2);c.fillStyle=`rgba(255,255,255,${.2+Math.random()*.8})`;c.fill();}const g=c.createRadialGradient(w/2,h/2,0,w/2,h/2,h/2.5);g.addColorStop(0,'rgba(120,0,200,.3)');g.addColorStop(.5,'rgba(0,50,200,.15)');g.addColorStop(1,'transparent');c.fillStyle=g;c.fillRect(0,0,w,h);},
   border:'#9333ea',text:'#e9d5ff',deco:(c,w,h)=>edeco(c,w,h,['⭐','🌙','✨','🪐','💫','🌟'])},

  {id:'midnight',  name:'🌙 Tengah Malam',emoji:'🌙', bg:'#0d1b2a',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#000814');g.addColorStop(.5,'#001d3d');g.addColorStop(1,'#003566');c.fillStyle=g;c.fillRect(0,0,w,h);for(let i=0;i<80;i++){c.beginPath();c.arc(Math.random()*w,Math.random()*h*.6,Math.random()*.9+.3,0,Math.PI*2);c.fillStyle='rgba(255,255,255,.7)';c.fill();}},
   border:'#0077b6',text:'#caf0f8',deco:(c,w,h)=>edeco(c,w,h,['🌙','⭐','🌌','🦉','🌃','✨'])},

  {id:'neon',      name:'💚 Neon',        emoji:'💚', bg:'#001a00',
   stripBg:(c,w,h)=>{c.fillStyle='#000d00';c.fillRect(0,0,w,h);c.strokeStyle='rgba(0,255,127,.06)';c.lineWidth=1;for(let y=0;y<h;y+=8){c.beginPath();c.moveTo(0,y);c.lineTo(w,y);c.stroke();}// glow blobs
   const g=c.createRadialGradient(w*.3,h*.4,0,w*.3,h*.4,w*.4);g.addColorStop(0,'rgba(0,255,127,.12)');g.addColorStop(1,'transparent');c.fillStyle=g;c.fillRect(0,0,w,h);},
   border:'#00ff7f',text:'#00ff7f',deco:(c,w,h)=>edeco(c,w,h,['💚','⚡','🔋','💻','🌐','✨'])},

  {id:'cyberpunk',  name:'🟣 Cyberpunk',  emoji:'🟣', bg:'#0d0221',
   stripBg:(c,w,h)=>{c.fillStyle='#0d0221';c.fillRect(0,0,w,h);// grid lines
   c.strokeStyle='rgba(255,0,200,.12)';c.lineWidth=1;for(let y=0;y<h;y+=16){c.beginPath();c.moveTo(0,y);c.lineTo(w,y);c.stroke();}for(let x=0;x<w;x+=16){c.beginPath();c.moveTo(x,0);c.lineTo(x,h);c.stroke();}// glow
   const g=c.createRadialGradient(w/2,h/2,0,w/2,h/2,h/2);g.addColorStop(0,'rgba(255,0,200,.2)');g.addColorStop(.5,'rgba(0,200,255,.1)');g.addColorStop(1,'transparent');c.fillStyle=g;c.fillRect(0,0,w,h);},
   border:'#ff00c8',text:'#00e5ff',deco:(c,w,h)=>edeco(c,w,h,['🟣','⚡','🤖','💜','🔮','👾'])},

  {id:'noir',       name:'🖤 Noir',       emoji:'🖤', bg:'#111',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#000');g.addColorStop(1,'#222');c.fillStyle=g;c.fillRect(0,0,w,h);// film grain
   for(let i=0;i<2000;i++){const x=Math.random()*w,y=Math.random()*h;c.fillStyle=`rgba(255,255,255,${Math.random()*.04})`;c.fillRect(x,y,1,1);}},
   border:'#555',text:'#eee',deco:(c,w,h)=>edeco(c,w,h,['🖤','📷','🎞️','🌑','🕶️','🎭'])},

  /* ── WARM / COZY ──────────────────────────────────────── */
  {id:'vintage',    name:'📷 Vintage',    emoji:'📷', bg:'#d4b483',
   stripBg:(c,w,h)=>{c.fillStyle='#e8d5b0';c.fillRect(0,0,w,h);c.fillStyle='rgba(139,90,43,.06)';for(let y=0;y<h;y+=4)c.fillRect(0,y,w,2);const v=c.createRadialGradient(w/2,h/2,h*.3,w/2,h/2,h*.8);v.addColorStop(0,'transparent');v.addColorStop(1,'rgba(90,50,0,.22)');c.fillStyle=v;c.fillRect(0,0,w,h);},
   border:'#8b5a2b',text:'#4a2c0a',deco:(c,w,h)=>edeco(c,w,h,['📷','🎞️','🌺','🍂','📻','🎭'])},

  {id:'coffee',     name:'☕ Kopi',       emoji:'☕', bg:'#4e342e',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#3e2723');g.addColorStop(.5,'#5d4037');g.addColorStop(1,'#795548');c.fillStyle=g;c.fillRect(0,0,w,h);},
   border:'#a1887f',text:'#efebe9',deco:(c,w,h)=>edeco(c,w,h,['☕','🍵','🎵','📚','🕯️','🍰'])},

  {id:'golden',     name:'✨ Golden Hour', emoji:'✨', bg:'#f6b800',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#ff8f00');g.addColorStop(.4,'#ffb300');g.addColorStop(.8,'#ffd54f');g.addColorStop(1,'#fff9c4');c.fillStyle=g;c.fillRect(0,0,w,h);},
   border:'#e65100',text:'#3e2723',deco:(c,w,h)=>edeco(c,w,h,['✨','🌟','☀️','🌾','🍊','🦋'])},

  /* ── COOL / FRESH ─────────────────────────────────────── */
  {id:'arctic',     name:'❄️ Arktik',     emoji:'❄️', bg:'#e3f2fd',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#e8f4f8');g.addColorStop(.4,'#bbdefb');g.addColorStop(1,'#90caf9');c.fillStyle=g;c.fillRect(0,0,w,h);// snowflakes
   c.fillStyle='rgba(255,255,255,0.5)';for(let i=0;i<30;i++){c.font=`${10+Math.random()*16}px serif`;c.fillText('❄',Math.random()*w,Math.random()*h);}},
   border:'#42a5f5',text:'#0d47a1',deco:(c,w,h)=>edeco(c,w,h,['❄️','🌨️','⛄','🌊','💎','🔵'])},

  {id:'lavender',   name:'💜 Lavender',   emoji:'💜', bg:'#ede7f6',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,w,h);g.addColorStop(0,'#f3e5f5');g.addColorStop(.5,'#ede7f6');g.addColorStop(1,'#e8eaf6');c.fillStyle=g;c.fillRect(0,0,w,h);},
   border:'#9c27b0',text:'#4a148c',deco:(c,w,h)=>edeco(c,w,h,['💜','🪻','🌿','✨','🫐','🌙'])},

  {id:'mint',       name:'🫐 Mint Fresh', emoji:'🫐', bg:'#e0f2f1',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#e0f7fa');g.addColorStop(.5,'#b2ebf2');g.addColorStop(1,'#80deea');c.fillStyle=g;c.fillRect(0,0,w,h);},
   border:'#00bcd4',text:'#006064',deco:(c,w,h)=>edeco(c,w,h,['🫐','💧','🌿','🍃','🐬','❄️'])},

  /* ── FESTIVE ──────────────────────────────────────────── */
  {id:'kemerdekaan81',name:'🇮🇩 Dirgahayu 81', emoji:'🇮🇩', bg:'#d32f2f',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#d32f2f');g.addColorStop(0.5,'#e53935');g.addColorStop(0.5,'#ffffff');g.addColorStop(1,'#f5f5f5');c.fillStyle=g;c.fillRect(0,0,w,h);},
   border:'#b71c1c',text:'#b71c1c',deco:(c,w,h)=>edeco(c,w,h,['🇮🇩','🦅','🎉','🎆','🎈','✨'])},

  {id:'party',      name:'🎉 Pesta',      emoji:'🎉', bg:'#ff1744',
   stripBg:(c,w,h)=>{c.fillStyle='#12005e';c.fillRect(0,0,w,h);// confetti
   const cols=['#ff1744','#ffea00','#00e676','#2979ff','#ff6d00','#d500f9'];for(let i=0;i<120;i++){c.fillStyle=cols[i%cols.length];const x=Math.random()*w,y=Math.random()*h;c.save();c.translate(x,y);c.rotate(Math.random()*Math.PI);c.fillRect(-4,-2,8,4);c.restore();}},
   border:'#ffea00',text:'#fff',deco:(c,w,h)=>edeco(c,w,h,['🎉','🎊','🎈','✨','🥳','🎆'])},

  {id:'xmas',       name:'🎄 Natal',      emoji:'🎄', bg:'#1b5e20',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#1b5e20');g.addColorStop(.5,'#2e7d32');g.addColorStop(1,'#388e3c');c.fillStyle=g;c.fillRect(0,0,w,h);// lights
   ['#ff1744','#ffea00','#2979ff','#00e676'].forEach((col,ci)=>{for(let i=ci;i<20;i+=4){c.fillStyle=col;c.beginPath();c.arc(i*(w/19),h*.2+Math.sin(i)*h*.05,4,0,Math.PI*2);c.fill();}});},
   border:'#ff1744',text:'#fff9c4',deco:(c,w,h)=>edeco(c,w,h,['🎄','⭐','🎅','🦌','❄️','🎁'])},

  /* ── AESTHETIC / TRENDY ───────────────────────────────── */
  {id:'y2k',        name:'💿 Y2K',         emoji:'💿', bg:'#c0c0f0',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,w,h);g.addColorStop(0,'#c0d8ff');g.addColorStop(.4,'#e0c8ff');g.addColorStop(.7,'#ffc8e8');g.addColorStop(1,'#c8fff0');c.fillStyle=g;c.fillRect(0,0,w,h);
   // chrome circles
   for(let i=0;i<12;i++){const gr=c.createRadialGradient(Math.random()*w,Math.random()*h,2,Math.random()*w,Math.random()*h,20+Math.random()*30);gr.addColorStop(0,'rgba(255,255,255,.6)');gr.addColorStop(1,'rgba(180,180,255,.1)');c.fillStyle=gr;c.beginPath();c.arc(Math.random()*w,Math.random()*h,15+Math.random()*25,0,Math.PI*2);c.fill();}},
   border:'#a78bfa',text:'#1e1b4b',deco:(c,w,h)=>edeco(c,w,h,['💿','⭐','🌀','💎','🦋','✨'])},

  {id:'aesthetic',  name:'🤍 Aesthetic',   emoji:'🤍', bg:'#fafafa',
   stripBg:(c,w,h)=>{c.fillStyle='#f8f8f4';c.fillRect(0,0,w,h);
   // soft grid
   c.strokeStyle='rgba(200,200,190,.4)';c.lineWidth=.5;
   for(let x=0;x<w;x+=20){c.beginPath();c.moveTo(x,0);c.lineTo(x,h);c.stroke();}
   for(let y=0;y<h;y+=20){c.beginPath();c.moveTo(0,y);c.lineTo(w,y);c.stroke();}},
   border:'#9ca3af',text:'#374151',deco:(c,w,h)=>edeco(c,w,h,['🤍','🕊️','🌿','☁️','🫧','✨'])},

  {id:'lofi',       name:'📻 Lo-Fi',       emoji:'📻', bg:'#2d1b45',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,w,h);g.addColorStop(0,'#1a0a2e');g.addColorStop(.5,'#2d1b45');g.addColorStop(1,'#1a2a1a');c.fillStyle=g;c.fillRect(0,0,w,h);
   // noise
   for(let i=0;i<3000;i++){c.fillStyle=`rgba(255,255,255,${Math.random()*.03})`;c.fillRect(Math.random()*w,Math.random()*h,1,1);}
   // warm glow
   const gl=c.createRadialGradient(w*.3,h*.3,0,w*.3,h*.3,w*.5);gl.addColorStop(0,'rgba(255,150,50,.12)');gl.addColorStop(1,'transparent');c.fillStyle=gl;c.fillRect(0,0,w,h);},
   border:'#f59e0b',text:'#fde68a',deco:(c,w,h)=>edeco(c,w,h,['📻','🎵','🌙','☕','🌧️','🎹'])},

  {id:'dreamy',     name:'☁️ Dreamy',      emoji:'☁️', bg:'#dde8ff',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#ffeeff');g.addColorStop(.4,'#dde8ff');g.addColorStop(.8,'#d4f5ff');g.addColorStop(1,'#e8ffd4');c.fillStyle=g;c.fillRect(0,0,w,h);
   // soft clouds
   c.fillStyle='rgba(255,255,255,0.5)';for(let i=0;i<8;i++){const cx=Math.random()*w,cy=Math.random()*h*.5,r=15+Math.random()*30;c.beginPath();c.arc(cx,cy,r,0,Math.PI*2);c.arc(cx+r*.7,cy-r*.3,r*.7,0,Math.PI*2);c.arc(cx-r*.6,cy-r*.2,r*.65,0,Math.PI*2);c.fill();}},
   border:'#818cf8',text:'#312e81',deco:(c,w,h)=>edeco(c,w,h,['☁️','🌈','🦄','⭐','🌸','🪄'])},

  {id:'retro80',    name:'📺 Retro 80s',   emoji:'📺', bg:'#1a0030',
   stripBg:(c,w,h)=>{c.fillStyle='#0a001a';c.fillRect(0,0,w,h);
   // scanlines
   c.fillStyle='rgba(255,0,200,.06)';for(let y=0;y<h;y+=3)c.fillRect(0,y,w,1);
   // horizon glow
   const g=c.createLinearGradient(0,h*.5,0,h);g.addColorStop(0,'rgba(255,0,200,.25)');g.addColorStop(.5,'rgba(0,200,255,.15)');g.addColorStop(1,'transparent');c.fillStyle=g;c.fillRect(0,0,w,h);
   // grid floor
   c.strokeStyle='rgba(255,0,200,.2)';c.lineWidth=1;for(let i=1;i<8;i++){c.beginPath();c.moveTo(0,h*.5+i*(h*.07));c.lineTo(w,h*.5+i*(h*.07));c.stroke();}
   for(let i=0;i<12;i++){c.beginPath();c.moveTo(w/2,h*.5);c.lineTo(i*(w/11),h);c.stroke();}},
   border:'#ff00c8',text:'#00e5ff',deco:(c,w,h)=>edeco(c,w,h,['📺','🕹️','💜','⚡','🌃','🎮'])},

  {id:'boho',       name:'🪶 Boho',        emoji:'🪶', bg:'#d4a76a',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#c8956c');g.addColorStop(.5,'#d4a76a');g.addColorStop(1,'#e8c49a');c.fillStyle=g;c.fillRect(0,0,w,h);
   // texture lines
   c.strokeStyle='rgba(139,90,43,.12)';c.lineWidth=1;for(let y=0;y<h;y+=6){c.beginPath();c.moveTo(0,y+Math.sin(y*.1)*3);c.lineTo(w,y+Math.sin(y*.1+1)*3);c.stroke();}},
   border:'#6d4c41',text:'#3e2723',deco:(c,w,h)=>edeco(c,w,h,['🪶','🌿','🌸','🧿','☀️','🪴'])},

  /* ── GRADIENT / ABSTRACT ───────────────────────────────── */
  {id:'aurora',     name:'🌌 Aurora',      emoji:'🌌', bg:'#0d1117',
   stripBg:(c,w,h)=>{c.fillStyle='#050a0e';c.fillRect(0,0,w,h);
   const cols=[['rgba(0,255,150,.3)','rgba(0,100,255,.2)'],['rgba(100,0,255,.3)','rgba(255,0,150,.2)'],['rgba(0,200,255,.25)','rgba(0,50,100,.1)']];
   cols.forEach(([a,b],i)=>{const g=c.createLinearGradient(i*w*.4,0,(i+1)*w*.5,h*.7);g.addColorStop(0,a);g.addColorStop(1,b);c.fillStyle=g;c.fillRect(0,0,w,h);});
   // stars
   for(let i=0;i<100;i++){c.fillStyle=`rgba(255,255,255,${Math.random()*.6})`;c.beginPath();c.arc(Math.random()*w,Math.random()*h*.4,Math.random()*.8+.2,0,Math.PI*2);c.fill();}},
   border:'#34d399',text:'#ecfdf5',deco:(c,w,h)=>edeco(c,w,h,['🌌','🌊','💚','🔵','🟣','✨'])},

  {id:'vaporwave',  name:'🌆 Vaporwave',   emoji:'🌆', bg:'#2b0057',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#0d0030');g.addColorStop(.4,'#2b0057');g.addColorStop(.7,'#57003d');g.addColorStop(1,'#ff6ec7');c.fillStyle=g;c.fillRect(0,0,w,h);
   // grid
   c.strokeStyle='rgba(255,110,199,.2)';c.lineWidth=1;
   for(let y=h*.45;y<h;y+=14){c.beginPath();c.moveTo(0,y);c.lineTo(w,y);c.stroke();}
   for(let i=0;i<10;i++){c.beginPath();c.moveTo(w/2,h*.45);c.lineTo(i*(w/9),h);c.stroke();}
   // sun
   const s=c.createRadialGradient(w/2,h*.45,0,w/2,h*.45,w*.2);s.addColorStop(0,'rgba(255,180,0,.9)');s.addColorStop(.5,'rgba(255,100,100,.6)');s.addColorStop(1,'transparent');c.fillStyle=s;c.fillRect(0,0,w,h);},
   border:'#ff6ec7',text:'#fffde7',deco:(c,w,h)=>edeco(c,w,h,['🌆','🌴','💜','🌸','🎶','🌊'])},

  {id:'gradient1',  name:'🌈 Pelangi',     emoji:'🌈', bg:'#ff6b9d',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,w,h);g.addColorStop(0,'#ff6b9d');g.addColorStop(.25,'#ffa36c');g.addColorStop(.5,'#ffdd67');g.addColorStop(.75,'#4ec9b0');g.addColorStop(1,'#6b8cff');c.fillStyle=g;c.fillRect(0,0,w,h);},
   border:'#fff',text:'#1a1a2e',deco:(c,w,h)=>edeco(c,w,h,['🌈','⭐','🎨','✨','🌟','🎉'])},

  {id:'duotone',    name:'🎨 Duo-Tone',    emoji:'🎨', bg:'#1e3a5f',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,w,h);g.addColorStop(0,'#1e3a5f');g.addColorStop(.5,'#2d6a4f');g.addColorStop(1,'#1e3a5f');c.fillStyle=g;c.fillRect(0,0,w,h);
   // diagonal stripe
   c.save();c.globalAlpha=.08;c.fillStyle='#fff';for(let d=-h;d<w+h;d+=40){c.fillRect(d,0,20,h*2);}c.restore();},
   border:'#52b788',text:'#d8f3dc',deco:(c,w,h)=>edeco(c,w,h,['🎨','🌿','💠','🔵','🟢','✨'])},

  /* ── CULTURAL / SPECIAL ────────────────────────────────── */
  {id:'batik',      name:'🪷 Batik',       emoji:'🪷', bg:'#5c2d0a',
   stripBg:(c,w,h)=>{c.fillStyle='#3d1a00';c.fillRect(0,0,w,h);
   // batik-inspired pattern
   const cols=['rgba(255,150,0,.15)','rgba(255,200,50,.1)','rgba(180,80,0,.12)'];
   for(let i=0;i<50;i++){const x=Math.random()*w,y=Math.random()*h,r=8+Math.random()*18;c.strokeStyle=cols[i%3];c.lineWidth=1;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.stroke();c.beginPath();c.arc(x,y,r*.5,0,Math.PI*2);c.stroke();}},
   border:'#f59e0b',text:'#fef3c7',deco:(c,w,h)=>edeco(c,w,h,['🪷','🌺','🦚','🌼','🔶','✨'])},

  {id:'minimal',    name:'⬜ Minimal',     emoji:'⬜', bg:'#ffffff',
   stripBg:(c,w,h)=>{c.fillStyle='#fff';c.fillRect(0,0,w,h);
   // subtle corner lines
   c.strokeStyle='#e5e7eb';c.lineWidth=1;
   c.strokeRect(8,8,w-16,h-16);c.strokeRect(14,14,w-28,h-28);},
   border:'#111827',text:'#111827',deco:(c,w,h)=>edeco(c,w,h,['⬜','◽','▫️','◾','⬛','▪️'])},

  {id:'dark_floral',name:'🥀 Dark Floral', emoji:'🥀', bg:'#1a0a0a',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#0d0505');g.addColorStop(.5,'#1a0a0a');g.addColorStop(1,'#2a0f0f');c.fillStyle=g;c.fillRect(0,0,w,h);
   // subtle red glow
   const glow=c.createRadialGradient(w*.2,h*.2,0,w*.2,h*.2,w*.5);glow.addColorStop(0,'rgba(180,0,50,.15)');glow.addColorStop(1,'transparent');c.fillStyle=glow;c.fillRect(0,0,w,h);},
   border:'#be123c',text:'#fecdd3',deco:(c,w,h)=>edeco(c,w,h,['🥀','🌹','🖤','🌑','💔','🦇'])},

  {id:'watercolor',  name:'🎨 Cat Air',    emoji:'🎨', bg:'#fff8f0',
   stripBg:(c,w,h)=>{c.fillStyle='#fffdf5';c.fillRect(0,0,w,h);
   // watercolor blobs
   const blobs=[{x:.2,y:.2,r:.25,col:'rgba(255,160,100,.18)'},{x:.75,y:.15,r:.2,col:'rgba(100,180,255,.15)'},{x:.5,y:.6,r:.3,col:'rgba(180,100,255,.12)'},{x:.15,y:.7,r:.22,col:'rgba(100,220,150,.15)'},{x:.8,y:.75,r:.2,col:'rgba(255,200,80,.18)'}];
   blobs.forEach(b=>{const g=c.createRadialGradient(b.x*w,b.y*h,0,b.x*w,b.y*h,b.r*w);g.addColorStop(0,b.col);g.addColorStop(1,'transparent');c.fillStyle=g;c.fillRect(0,0,w,h);});},
   border:'#a78bfa',text:'#4c1d95',deco:(c,w,h)=>edeco(c,w,h,['🎨','🖌️','🌸','🦋','🌈','✨'])},

  {id:'latte',       name:'🥛 Latte Art',  emoji:'🥛', bg:'#e8d5c0',
   stripBg:(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#f5e6d3');g.addColorStop(.4,'#e8d5c0');g.addColorStop(1,'#d4b896');c.fillStyle=g;c.fillRect(0,0,w,h);
   // leaf pattern
   c.strokeStyle='rgba(139,90,43,.15)';c.lineWidth=1;
   for(let i=0;i<6;i++){const y=h*.3+i*h*.07;c.beginPath();c.moveTo(w*.2,y);c.bezierCurveTo(w*.4,y-12,w*.6,y-12,w*.8,y);c.stroke();}},
   border:'#92400e',text:'#1c0a00',deco:(c,w,h)=>edeco(c,w,h,['☕','🥛','🍵','🌿','🤎','✨'])},

  {id:'neon_pink',   name:'🩷 Neon Pink',  emoji:'🩷', bg:'#0a0010',
   stripBg:(c,w,h)=>{c.fillStyle='#050008';c.fillRect(0,0,w,h);
   // neon glow lines
   ctx=c;ctx.shadowBlur=20;
   ['rgba(255,0,150,','rgba(255,50,200,'].forEach((col,ci)=>{ctx.strokeStyle=col+'0.6)';ctx.lineWidth=2;ctx.shadowColor=col+'1)';
   for(let y=ci*8;y<h;y+=16){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}});
   ctx.shadowBlur=0;
   const g=ctx.createRadialGradient(w/2,h/2,0,w/2,h/2,h*.6);g.addColorStop(0,'rgba(255,0,150,.2)');g.addColorStop(1,'transparent');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);},
   border:'#ff0096',text:'#ff80c0',deco:(c,w,h)=>edeco(c,w,h,['🩷','💜','⚡','✨','🌸','💎'])},
];

function edeco(ctx,w,h,arr){const step=Math.max(30,(h-80)/Math.max(arr.length-1,1));ctx.font='13px serif';ctx.textAlign='left';arr.forEach((e,i)=>{ctx.fillText(e,5+(i%2)*4,42+i*step);ctx.fillText(e,w-20,42+i*step);});}

/* ══════════════════════════════════
   FRAME COLORS
══════════════════════════════════ */
const FRAME_COLORS=[
  {c:'#ffffff',name:'Putih'},{c:'#000000',name:'Hitam'},{c:'#f472b6',name:'Pink'},
  {c:'#f59e0b',name:'Emas'},{c:'#6366f1',name:'Ungu'},{c:'#10b981',name:'Hijau'},
  {c:'#0ea5e9',name:'Biru'},{c:'#f97316',name:'Oranye'},{c:'#ec4899',name:'Magenta'},
  {c:'#8b5cf6',name:'Violet'},{c:'#ef4444',name:'Merah'},{c:'#1f2937',name:'Abu Gelap'},
];
let selFrameColor='#ffffff';

/* ══════════════════════════════════
   STICKERS
══════════════════════════════════ */
const STICKER_CATS={
  'Cinta':    ['❤️','💕','💖','💗','💝','💓','💘','🥰','😍','💑','💏','💋','😘','🌹','💐','🌸'],
  'Wajah':    ['😊','😂','🥹','😭','😎','🤩','😏','🥳','😴','🤔','😋','🤗','😤','🥰','😇','🤣'],
  'Objek':    ['🎉','🎊','🎈','🎁','🎀','⭐','✨','💫','🔥','🌈','☀️','🌙','⚡','❄️','🍀','🌺'],
  'Makanan':  ['🍕','🍔','🍟','🍣','🍩','🍦','🎂','🍓','🍉','🍒','🥤','🧋','☕','🍵','🧁','🍰'],
  'Hewan':    ['🐱','🐶','🦊','🐻','🐼','🐨','🦁','🐯','🐮','🐷','🦋','🐝','🦄','🐙','🐠','🦜'],
  'Teks':     ['✅','❌','💯','🔴','🟡','🟢','🟣','🏆','🥇','💎','👑','🎯','🚀','💡','🔮','🎭'],
};
let activeStickerCat='Cinta';
let placedStickers=[];
let selStickerEl=null;

/* ══════════════════════════════════
   STATE
══════════════════════════════════ */
let photos=[], selLayout=LAYOUTS[0], selTheme=THEMES[0], selFilter=FILTERS[0];
let currentSlot=0, stream=null, shooting=false;
let bgOn=false, bgColor='#ffffff', bgRef=null, bgRaf=null, filterRaf=null;
let prevDebounce=null, currentOrient='portrait';
let timerSecs=3, autoSequence=false, mirrorOn=true;

/* ══════════════════════════════════
   TOAST
══════════════════════════════════ */
function toast(msg,dur=2200){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),dur);}

/* ══════════════════════════════════
   NAV
══════════════════════════════════ */
function goTo(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}
function goBack(to){
  if(to==='sgrid'){stopCamera();goTo('sgrid');}
  else if(to==='sc'){placedStickers=[];document.querySelectorAll('.placed-sticker').forEach(s=>s.remove());goTo('sc');if(!stream)initCamera();updateEditorBtnVisibility();}
  else if(to==='sw'){stopCamera();startOver();}
}
function startOver(){
  activeSessionCode='true';
  photos=[];currentSlot=0;shooting=false;sequenceRunning=false;bgOn=false;bgColor='#ffffff';bgRef=null;selFilter=FILTERS[0];mirrorOn=true;placedStickers=[];document.querySelectorAll('.placed-sticker').forEach(s=>s.remove());goTo('sw');
}

function updateEditorBtnVisibility() {
  const allFilled = photos.every(p => p);
  const gotoBtn = document.getElementById('btn-goto-editor');
  const shootBtn = document.getElementById('btn-shoot');
  const autoBtn = document.getElementById('btn-auto');
  const retakeBtn = document.getElementById('btn-retake');
  
  if (gotoBtn && shootBtn && autoBtn) {
    if (allFilled) {
      gotoBtn.style.display = 'inline-block';
      shootBtn.style.display = 'none';
      autoBtn.style.display = 'none';
      if (retakeBtn) retakeBtn.style.display = 'inline-block';
      const label = document.getElementById('slot-label');
      if (label) label.innerHTML = `Foto <b style="color:#f472b6">${photos.length}</b> / ${photos.length}`;
      const ptxt = document.getElementById('ptxt');
      if (ptxt) ptxt.textContent = '✅ Semua foto diambil! Klik tombol hijau.';
    } else {
      gotoBtn.style.display = 'none';
      shootBtn.style.display = 'inline-block';
      autoBtn.style.display = 'inline-block';
      if (retakeBtn) retakeBtn.style.display = photos.some(p => p) ? 'inline-block' : 'none';
    }
  }
}

/* ══════════════════════════════════
   GRID PICKER
══════════════════════════════════ */
function renderLayoutGrid(){
  const g=document.getElementById('layout-grid');g.innerHTML='';
  LAYOUTS.filter(l=>l.orient===currentOrient).forEach(l=>{
    const d=document.createElement('div');
    d.className='lcard'+(selLayout?.id===l.id&&selLayout?.orient===l.orient?' sel':'');
    d.onclick=()=>{selLayout=l;document.querySelectorAll('.lcard').forEach(c=>c.classList.remove('sel'));d.classList.add('sel');};
    d.innerHTML=`<div class="lcard-prev">${l.thumb}<div class="lchk">✓</div></div><div class="lcard-info"><div class="lcard-name">${l.name}</div><div class="lcard-sub">${l.sub}</div></div>`;
    g.appendChild(d);
  });
  if(!selLayout||selLayout.orient!==currentOrient){selLayout=LAYOUTS.find(l=>l.orient===currentOrient);g.querySelector('.lcard')?.classList.add('sel');}
}
function switchOrient(o){currentOrient=o;document.getElementById('otab-p').classList.toggle('on',o==='portrait');document.getElementById('otab-l').classList.toggle('on',o==='landscape');document.getElementById('lsec-lbl').textContent=o==='portrait'?'Layout Portrait':'Layout Landscape';selLayout=null;renderLayoutGrid();}
function confirmGrid(){
  if(!selLayout){alert('Pilih layout dulu ya!');return;}
  photos=Array(selLayout.n).fill(null);
  currentSlot=0;
  buildCameraUI();
  goTo('sc');
  initCamera();
  activeSessionCode = 'true';
}

/* ══════════════════════════════════
   BUILD CAMERA UI
══════════════════════════════════ */
function buildCameraUI(){
  const body = document.getElementById('cam-body');
  const isLand = selLayout.orient === 'landscape';

  // Both orientations: same 2-col grid (camera left, strip sidebar right)
  // Class just marks which orientation for vid-wrap aspect ratio CSS
  body.className = 'cam-body ' + (isLand ? 'landscape' : 'portrait');
  body.removeAttribute('style');
  // Portrait: video fills flex height; Landscape: video keeps 16/9 ratio
  const vidStyle = isLand ? '' : '';  // handled by CSS classes

  body.innerHTML =
    '<div class="cam-card">' +
      '<div class="cam-hdr">' +
        '<span class="cam-lbl"><span class="recdot"></span> Kamera <span style="color:rgba(255,255,255,.4);font-weight:400;margin-left:4px">' + selLayout.name + '</span></span>' +
        '<div style="display:flex;gap:7px;align-items:center;flex-wrap:wrap">' +
          '<span id="slot-label" style="font-size:12px;color:rgba(255,255,255,.44)">Foto <b style="color:#f472b6">1</b> / ' + selLayout.n + '</span>' +
          '<select class="timer-sel" id="timer-sel" onchange="timerSecs=+this.value;updateShootLabel()">' +
            '<option value="3">⏱ 3 dtk</option>' +
            '<option value="5">⏱ 5 dtk</option>' +
            '<option value="10">⏱ 10 dtk</option>' +
          '</select>' +
          '<button class="btnsm" id="btn-mirror" onclick="toggleMirror()">🪞 Mirror</button>' +
          '<button class="btn-upload" onclick="triggerUpload()">📂 Upload</button>' +
        '</div>' +
      '</div>' +
      '<div class="vid-wrap">' +
        '<video id="video" autoplay playsinline webkit-playsinline muted></video>' +
        '<canvas id="bgcnv"></canvas>' +
        '<canvas id="filtercnv"></canvas>' +
        '<svg class="grid-svg" id="grid-svg"></svg>' +
        '<div class="cdov" id="cdov">' +
          '<span class="cdnum" id="cdnum">3</span>' +
          '<span class="cdseq" id="cdseq">Foto 1 dari ' + selLayout.n + '</span>' +
        '</div>' +
        '<div class="flashlay" id="flash"></div>' +
      '</div>' +
      '<div class="cam-ftr">' +
        '<div class="pbar-w"><div class="pbar-f" id="pbar"></div></div>' +
        '' +
        '<div class="bg-row">' +
          '<button class="btnsm" id="btn-rmbg" onclick="toggleBg()">🪄 Hapus BG</button>' +
          '<div class="swrow" id="swrow">' +
            '<span class="swlbl">Warna BG:</span>' +
            '<div class="sw sel" style="background:#fff"    data-c="#ffffff" onclick="pickBgColor(this)"></div>' +
            '<div class="sw"     style="background:#000"    data-c="#000000" onclick="pickBgColor(this)"></div>' +
            '<div class="sw"     style="background:#ff6b8a" data-c="#ff6b8a" onclick="pickBgColor(this)"></div>' +
            '<div class="sw"     style="background:#6366f1" data-c="#6366f1" onclick="pickBgColor(this)"></div>' +
            '<div class="sw"     style="background:#f59e0b" data-c="#f59e0b" onclick="pickBgColor(this)"></div>' +
            '<div class="sw"     style="background:#10b981" data-c="#10b981" onclick="pickBgColor(this)"></div>' +
            '<div class="sw"     style="background:#0ea5e9" data-c="#0ea5e9" onclick="pickBgColor(this)"></div>' +
            '<div class="sw rainbow" onclick="triggerColorPicker()"></div>' +
            '<input type="color" id="cuspick" style="display:none" onchange="pickBgColor(null,this.value)">' +
          '</div>' +
        '</div>' +
        '<div class="cam-acts">' +
          '<button class="btn-shoot" id="btn-shoot" onclick="startSequence(false)">📷 Foto! (' + timerSecs + ' dtk)</button>' +
          '<button class="btnsm on" id="btn-auto" onclick="startSequence(true)">🚀 Auto</button>' +
          '<button class="btn-shoot" id="btn-goto-editor" style="display:none;background:#22c55e;color:#111;font-weight:bold" onclick="stopCamera();buildThemeScreen();schedulePreview();goTo(\'sth\');">Lanjut ke Editor ➡️</button>' +
          '<button class="btnsm" id="btn-retake" style="display:none" onclick="retakePhoto()">🔄 Ulang</button>' +
        '</div>' +
        '<p class="ptxt" id="ptxt">Berpose dan tekan tombol 📸</p>' +
      '</div>' +
    '</div>' +
    '<button class="floating-strip-btn" id="floating-strip-btn" onclick="toggleMobileStrip(true)">🎞️</button>' +
    '<div class="strip-panel" id="strip-panel">' +
      '<div class="strip-hd">' +
        '<span>🎞️ ' + selLayout.name + '</span>' +
        '<button class="btn-close-strip" onclick="toggleMobileStrip(false)">✕</button>' +
      '</div>' +
      '<div class="slot-wrap" id="slot-wrap"></div>' +
    '</div>';

  buildSlots();
  buildFilterChipsCam();
  drawCamGridOverlay();
  document.getElementById('upload-input').onchange = handleUpload;
}

function toggleMobileStrip(show) {
  const panel = document.getElementById('strip-panel');
  if (panel) {
    panel.classList.toggle('open', show);
  }
}

/* ══════════════════════════════════
   SLOTS
══════════════════════════════════ */
function buildSlots(){
  const wrap=document.getElementById('slot-wrap');if(!wrap)return;
  wrap.innerHTML='';wrap.style.cssText='';
  const L=selLayout,arr=L.arr,n=L.n;
  if(arr==='col'){wrap.style.cssText='display:flex;flex-direction:column;gap:5px;';for(let i=0;i<n;i++)wrap.appendChild(mkSlot(i,'4/3'));}
  else if(arr==='row'){wrap.style.cssText='display:flex;flex-direction:row;gap:5px;';for(let i=0;i<n;i++){const s=mkSlot(i,'3/4');s.style.flex='1';wrap.appendChild(s);}}
  else if(arr==='g2x2'){wrap.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:5px;';for(let i=0;i<n;i++)wrap.appendChild(mkSlot(i,'1/1'));}
  else if(arr==='1b3'){wrap.style.cssText='display:flex;flex-direction:column;gap:5px;';wrap.appendChild(mkSlot(0,'16/9'));const r=document.createElement('div');r.style.cssText='display:flex;gap:5px;';for(let i=1;i<4;i++){const s=mkSlot(i,'1/1');s.style.flex='1';r.appendChild(s);}wrap.appendChild(r);}
  else if(arr==='1b2s'){wrap.style.cssText='display:flex;flex-direction:row;gap:5px;align-items:stretch;';const b=mkSlot(0,'1/1');b.style.flex='1.4';wrap.appendChild(b);const col=document.createElement('div');col.style.cssText='display:flex;flex-direction:column;gap:5px;flex:1;';for(let i=1;i<3;i++)col.appendChild(mkSlot(i,'16/9'));wrap.appendChild(col);}
  else if(arr==='cinema'){wrap.style.cssText='display:flex;flex-direction:column;gap:5px;';for(let i=0;i<n;i++)wrap.appendChild(mkSlot(i,'21/9'));}
  else{wrap.style.cssText='display:flex;flex-direction:column;gap:5px;';for(let i=0;i<n;i++)wrap.appendChild(mkSlot(i,'4/3'));}
}
function mkSlot(i,ar){
  const d=document.createElement('div');
  d.className='slot'+(i===0?' active':'');d.id='slot-'+i;d.style.aspectRatio=ar;
  if(photos[i]){d.innerHTML=`<img src="${photos[i]}" alt="Foto ${i+1}">`;d.classList.add('filled');d.classList.remove('active');}
  else d.innerHTML=`<div class="slot-n">${i+1}</div>`;
  return d;
}

/* ══════════════════════════════════
   UPLOAD FROM GALLERY
══════════════════════════════════ */
function handleUpload(e){
  const files=[...e.target.files];
  if(!files.length) return;
  // Find empty slots starting from currentSlot
  const emptySlots=[];
  for(let i=0;i<selLayout.n;i++) if(!photos[i]) emptySlots.push(i);
  if(!emptySlots.length){ toast('Semua slot sudah terisi! Klik 🔄 Ulang dulu'); return; }
  
  if (files.length > emptySlots.length) {
    toast(`⚠️ Slot sisa ${emptySlots.length}, hanya mengambil ${emptySlots.length} foto teratas.`);
  }
  const toFill=files.slice(0,emptySlots.length);
  let loaded=0;
  toFill.forEach((file,idx)=>{
    const slotIdx=emptySlots[idx];
    const reader=new FileReader();
    reader.onload=ev=>{
      photos[slotIdx]=ev.target.result;
      fillSlot(slotIdx,ev.target.result);
      loaded++;
      if(loaded===toFill.length){
        const allFilled=photos.every(p=>p);
        if(allFilled){ setTimeout(()=>{stopCamera();buildThemeScreen();schedulePreview();goTo('sth');},400); }
        else{ currentSlot=photos.findIndex(p=>!p); setActiveSlot(currentSlot); toast(`${loaded} foto diupload ✅ Sisa ${selLayout.n-photos.filter(p=>p).length} foto lagi`); updateEditorBtnVisibility(); }
      }
    };
    reader.readAsDataURL(file);
  });
  e.target.value='';
}

/* ══════════════════════════════════
   FILTER CHIPS (camera)
══════════════════════════════════ */
function applyLiveFilter() {
  const vid = document.getElementById('video');
  const fc = document.getElementById('filtercnv');
  const bgc = document.getElementById('bgcnv');
  const filterStyle = selFilter ? selFilter.css : 'none';
  if (vid) vid.style.filter = filterStyle;
  if (fc) fc.style.filter = filterStyle;
  if (bgc) bgc.style.filter = filterStyle;
}

function buildFilterChipsCam(){
  const row=document.getElementById('filter-row-cam');if(!row)return;row.innerHTML='';
  FILTERS.forEach(f=>{
    const b=document.createElement('button');b.className='fchip'+(f.id===selFilter.id?' on':'');b.textContent=f.name;
    b.onclick=()=>{
      selFilter=f;
      document.querySelectorAll('.fchip').forEach(c=>c.classList.remove('on'));
      b.classList.add('on');
      document.querySelectorAll('.fopt').forEach((o,i)=>o.classList.toggle('sel',FILTERS[i].id===f.id));
      applyLiveFilter();
    };
    row.appendChild(b);
  });
}
function drawCamGridOverlay(){
  const svg=document.getElementById('grid-svg');if(!svg)return;
  svg.innerHTML=`<line x1="33.33%" y1="0" x2="33.33%" y2="100%" stroke="rgba(255,255,255,.45)" stroke-width="1" stroke-dasharray="4,4"/>
    <line x1="66.66%" y1="0" x2="66.66%" y2="100%" stroke="rgba(255,255,255,.45)" stroke-width="1" stroke-dasharray="4,4"/>
    <line x1="0" y1="33.33%" x2="100%" y2="33.33%" stroke="rgba(255,255,255,.45)" stroke-width="1" stroke-dasharray="4,4"/>
    <line x1="0" y1="66.66%" x2="100%" y2="66.66%" stroke="rgba(255,255,255,.45)" stroke-width="1" stroke-dasharray="4,4"/>
    <circle cx="33.33%" cy="33.33%" r="4" fill="rgba(244,114,182,.6)"/>
    <circle cx="66.66%" cy="33.33%" r="4" fill="rgba(244,114,182,.6)"/>
    <circle cx="33.33%" cy="66.66%" r="4" fill="rgba(244,114,182,.6)"/>
    <circle cx="66.66%" cy="66.66%" r="4" fill="rgba(244,114,182,.6)"/>`;
}

/* ══════════════════════════════════
   CAMERA
══════════════════════════════════ */
async function initCamera(){
  try{
    stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user',width:{ideal:1280},height:{ideal:720}},audio:false});
    const vid=document.getElementById('video');vid.srcObject=stream;
    await new Promise(r=>{vid.onloadedmetadata=r;});vid.play();startFilterLoop();
    applyLiveFilter();
    updateEditorBtnVisibility();
  }catch(e){document.getElementById('merr').classList.add('vis');}
}
function stopCamera(){
  if(stream){stream.getTracks().forEach(t=>t.stop());stream=null;}
  if(bgRaf){cancelAnimationFrame(bgRaf);bgRaf=null;}
  if(filterRaf){cancelAnimationFrame(filterRaf);filterRaf=null;}
}
function startFilterLoop(){
  const vid=document.getElementById('video');
  function loop(){
    if(!stream)return;
    const fc=document.getElementById('filtercnv');if(!fc)return;
    if(selFilter.id!=='none'&&!bgOn){
      fc.style.display='block';const W=vid.videoWidth||640,H=vid.videoHeight||480;
      fc.width=W;fc.height=H;const ctx=fc.getContext('2d',{willReadFrequently:true});
      ctx.filter=selFilter.css;ctx.save();if(mirrorOn){ctx.scale(-1,1);ctx.drawImage(vid,-W,0,W,H);}else{ctx.drawImage(vid,0,0,W,H);}ctx.restore();ctx.filter='none';
      if(selFilter.grain) applyGrain(ctx,W,H);
    }else if(!bgOn){if(fc)fc.style.display='none';}
    filterRaf=requestAnimationFrame(loop);
  }
  filterRaf=requestAnimationFrame(loop);
}
function applyGrain(ctx,W,H){
  const img=ctx.getImageData(0,0,W,H),d=img.data;
  for(let i=0;i<d.length;i+=4){const n=(Math.random()-.5)*60;d[i]=Math.min(255,Math.max(0,d[i]+n));d[i+1]=Math.min(255,Math.max(0,d[i+1]+n));d[i+2]=Math.min(255,Math.max(0,d[i+2]+n));}
  ctx.putImageData(img,0,0);
}

/* BG Remove */
function toggleBg(){bgOn=!bgOn;document.getElementById('btn-rmbg').classList.toggle('on',bgOn);document.getElementById('swrow').classList.toggle('vis',bgOn);const vid=document.getElementById('video'),cnv=document.getElementById('bgcnv'),fc=document.getElementById('filtercnv');if(bgOn){vid.style.display='none';if(fc)fc.style.display='none';cnv.style.display='block';bgRef=null;setTimeout(()=>{bgRef=sampleFrame();},800);runBgLoop();}else{vid.style.display='block';cnv.style.display='none';if(bgRaf){cancelAnimationFrame(bgRaf);bgRaf=null;}}}
function sampleFrame(){const vid=document.getElementById('video'),W=vid.videoWidth||640,H=vid.videoHeight||480;const t=document.createElement('canvas');t.width=W;t.height=H;const ctx=t.getContext('2d');ctx.save();if(mirrorOn){ctx.scale(-1,1);ctx.drawImage(vid,-W,0,W,H);}else{ctx.drawImage(vid,0,0,W,H);}ctx.restore();return ctx.getImageData(0,0,W,H);}
function h2rgb(h){return{r:parseInt(h.slice(1,3),16),g:parseInt(h.slice(3,5),16),b:parseInt(h.slice(5,7),16)};}
function runBgLoop(){const vid=document.getElementById('video');function loop(){if(!bgOn)return;const cnv=document.getElementById('bgcnv');if(!cnv)return;const W=vid.videoWidth||640,H=vid.videoHeight||480;cnv.width=W;cnv.height=H;const ctx=cnv.getContext('2d',{willReadFrequently:true});ctx.filter=selFilter.css;ctx.save();if(mirrorOn){ctx.scale(-1,1);ctx.drawImage(vid,-W,0,W,H);}else{ctx.drawImage(vid,0,0,W,H);}ctx.restore();ctx.filter='none';if(selFilter.grain)applyGrain(ctx,W,H);if(bgRef){const fr=ctx.getImageData(0,0,W,H),d=fr.data,ref=bgRef.data,bg=h2rgb(bgColor),T=55;for(let i=0;i<d.length;i+=4){const df=Math.abs(d[i]-ref[i])+Math.abs(d[i+1]-ref[i+1])+Math.abs(d[i+2]-ref[i+2]);if(df<T*3){d[i]=bg.r;d[i+1]=bg.g;d[i+2]=bg.b;d[i+3]=df<T?255:Math.round(255*(df-T)/(T*2));}}ctx.putImageData(fr,0,0);}else{ctx.fillStyle='rgba(244,114,182,.1)';ctx.fillRect(0,0,W,H);ctx.fillStyle='rgba(255,255,255,.7)';ctx.font='bold 14px sans-serif';ctx.textAlign='center';ctx.fillText('⏳ Menyiapkan...',W/2,H/2);}bgRaf=requestAnimationFrame(loop);}bgRaf=requestAnimationFrame(loop);}
function pickBgColor(el,hex){bgColor=hex||el.dataset.c;document.querySelectorAll('.sw').forEach(s=>s.classList.remove('sel'));if(el)el.classList.add('sel');else document.querySelector('.sw.rainbow').classList.add('sel');bgRef=null;setTimeout(()=>{bgRef=sampleFrame();},400);}

/* ══════════════════════════════════
   TAKE PHOTO — single & auto-sequence
══════════════════════════════════ */
let sequenceRunning=false;


function triggerUpload(){
  var el = document.getElementById('upload-input');
  if(el) el.click();
}
function triggerColorPicker(){
  var el = document.getElementById('cuspick');
  if(el) el.click();
}
function toggleMirror(){
  mirrorOn=!mirrorOn;
  const vid=document.getElementById('video');
  const fc=document.getElementById('filtercnv');
  const bgc=document.getElementById('bgcnv');
  const flip=mirrorOn?'scaleX(-1)':'scaleX(1)';
  if(vid) vid.style.transform=flip;
  const btn=document.getElementById('btn-mirror');
  if(btn) btn.classList.toggle('on',!mirrorOn);
  toast(mirrorOn?'🪞 Mirror ON':'🪞 Mirror OFF');
}
function updateShootLabel(){
  const b=document.getElementById('btn-shoot');
  if(b) b.textContent=`📷 Foto! (${timerSecs} detik)`;
}
function startSequence(auto){
  if(shooting||sequenceRunning)return;
  autoSequence=auto;
  if(auto){
    sequenceRunning=true;
    toast(`🚀 Auto ${selLayout.n}x dimulai! Berpose yuk!`,2000);
    runNextShot();
  }else{
    takePhoto();
  }
}
function runNextShot(){
  if(currentSlot>=photos.length){sequenceRunning=false;return;}
  takePhoto(()=>{
    if(autoSequence&&currentSlot<photos.length){setTimeout(runNextShot,600);}
    else sequenceRunning=false;
  });
}
function takePhoto(onDone){
  if(shooting)return;shooting=true;
  document.getElementById('btn-shoot').disabled=true;
  document.getElementById('btn-auto').disabled=true;
  const SECS=timerSecs;let tick=SECS;
  const overlay=document.getElementById('cdov'),pbar=document.getElementById('pbar');
  const seqEl=document.getElementById('cdseq');if(seqEl)seqEl.textContent=`Foto ${currentSlot+1} dari ${photos.length}`;const pt=document.getElementById('ptxt');if(pt&&autoSequence)pt.textContent=`📸 Auto mode — Foto ${currentSlot+1} dari ${photos.length}...`;
  pbar.style.cssText='width:0%;transition:none;';void pbar.offsetWidth;
  pbar.style.cssText=`width:100%;transition:width ${SECS}s linear;`;
  overlay.classList.add('vis');popNum(tick);
  const iv=setInterval(()=>{tick--;if(tick>0)popNum(tick);else{clearInterval(iv);captureFrame(onDone);overlay.classList.remove('vis');}},1000);
}
function popNum(n){
  const el=document.getElementById('cdnum');if(!el)return;
  el.textContent=n;el.classList.remove('pop');void el.offsetWidth;el.classList.add('pop');
  playBeep(n===1?880:440, n===1?0.3:0.15);
}
function playBeep(freq=440,dur=0.15){
  try{
    const ac=new (window.AudioContext||window.webkitAudioContext)();
    const osc=ac.createOscillator();
    const gain=ac.createGain();
    osc.connect(gain);gain.connect(ac.destination);
    osc.type='sine';osc.frequency.value=freq;
    gain.gain.setValueAtTime(0.18,ac.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001,ac.currentTime+dur);
    osc.start(ac.currentTime);osc.stop(ac.currentTime+dur);
    setTimeout(()=>ac.close(),dur*1000+100);
  }catch(e){}
}

function captureFrame(onDone){
  const vid=document.getElementById('video'),bgcnv=document.getElementById('bgcnv'),fc=document.getElementById('filtercnv');
  const W=vid.videoWidth||640,H=vid.videoHeight||480;
  const tmp=document.createElement('canvas');tmp.width=W;tmp.height=H;
  const ctx=tmp.getContext('2d');
  if(bgOn&&bgcnv&&bgcnv.width>0){ctx.drawImage(bgcnv,0,0,W,H);}
  else if(selFilter.id!=='none'&&fc&&fc.style.display!=='none'&&fc.width>0){ctx.drawImage(fc,0,0,W,H);}
  else{ctx.save();if(mirrorOn){ctx.scale(-1,1);ctx.drawImage(vid,-W,0,W,H);}else{ctx.drawImage(vid,0,0,W,H);}ctx.restore();if(selFilter.id!=='none'){const t2=document.createElement('canvas');t2.width=W;t2.height=H;const c2=t2.getContext('2d');c2.filter=selFilter.css;c2.drawImage(tmp,0,0);if(selFilter.grain)applyGrain(c2,W,H);ctx.clearRect(0,0,W,H);ctx.drawImage(t2,0,0);}}
  const fl=document.getElementById('flash');fl.style.cssText='opacity:.9;transition:none;';requestAnimationFrame(()=>{fl.style.cssText='opacity:0;transition:opacity .35s ease;';});playBeep(1200,0.08);
  photos[currentSlot]=tmp.toDataURL('image/jpeg',.92);
  fillSlot(currentSlot,photos[currentSlot]);
  document.getElementById('pbar').style.cssText='width:0%;transition:none;';
  if(currentSlot<photos.length-1){
    currentSlot++;setActiveSlot(currentSlot);
    document.getElementById('slot-label').innerHTML=`Foto <b style="color:#f472b6">${currentSlot+1}</b> / ${photos.length}`;
    document.getElementById('ptxt').textContent=`${photos.length-currentSlot} foto lagi! 😄`;
    document.getElementById('btn-retake').style.display='inline-block';
    shooting=false;document.getElementById('btn-shoot').disabled=false;document.getElementById('btn-auto').disabled=false;
    if(onDone)onDone();
  }else{
    document.getElementById('ptxt').textContent='✅ Semua foto diambil!';
    shooting=false;
    setTimeout(()=>{stopCamera();buildThemeScreen();schedulePreview();goTo('sth');},500);
  }
}
function fillSlot(i,url){const s=document.getElementById('slot-'+i);if(!s)return;s.innerHTML=`<img src="${url}" alt="Foto ${i+1}">`;s.classList.add('filled');s.classList.remove('active');}
function setActiveSlot(i){for(let j=0;j<photos.length;j++){const s=document.getElementById('slot-'+j);if(s&&!photos[j])s.classList.toggle('active',j===i);}}
function retakePhoto(){for(let i=photos.length-1;i>=0;i--){if(photos[i]){photos[i]=null;currentSlot=i;const s=document.getElementById('slot-'+i);s.innerHTML=`<div class="slot-n">${i+1}</div>`;s.classList.remove('filled');s.classList.add('active');break;}}document.getElementById('btn-shoot').disabled=false;document.getElementById('btn-auto').disabled=false;document.getElementById('slot-label').innerHTML=`Foto <b style="color:#f472b6">${currentSlot+1}</b> / ${photos.length}`;document.getElementById('ptxt').textContent='Berpose dan tekan tombol 📸';if(!photos.some(p=>p))document.getElementById('btn-retake').style.display='none';updateEditorBtnVisibility();}

/* ══════════════════════════════════
   THEME SCREEN BUILD
══════════════════════════════════ */
async function buildThemeScreen(){
  await loadCustomThemes();
  buildFilterGridTh();buildThemeGrid();buildFrameColors();buildStickerUI();
  placedStickers=[];
  // Observe canvas-outer size changes and re-render
  if(window._previewRO) window._previewRO.disconnect();
  const outer=document.querySelector('.canvas-outer');
  if(outer && window.ResizeObserver){
    window._previewRO=new ResizeObserver(()=>schedulePreview());
    window._previewRO.observe(outer);
  }
}
function buildFilterGridTh(){
  const g=document.getElementById('filter-grid-th');if(!g)return;g.innerHTML='';
  const thumb=photos.find(p=>p)||null;
  FILTERS.forEach(f=>{
    const d=document.createElement('div');d.className='fopt'+(f.id===selFilter.id?' sel':'');
    d.onclick=()=>{selFilter=f;document.querySelectorAll('.fopt').forEach(o=>o.classList.remove('sel'));d.classList.add('sel');schedulePreview();};
    const inner=thumb?`<img src="${thumb}" style="filter:${f.css};width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:#444;filter:${f.css}"></div>`;
    d.innerHTML=`<div class="fopt-prev">${inner}</div><div class="fopt-name">${f.name}</div><div class="fchk">✓</div>`;
    g.appendChild(d);
  });
}
function buildThemeGrid(){
  const g=document.getElementById('tgrid');if(!g)return;g.innerHTML='';
  THEMES.forEach(t=>{
    const cd=document.createElement('div');cd.className='tcard'+(selTheme?.id===t.id?' sel':'');
    cd.onclick=()=>{selTheme=t;document.querySelectorAll('.tcard').forEach(x=>x.classList.remove('sel'));cd.classList.add('sel');schedulePreview();};
    cd.innerHTML=`<div class="tprev" style="background:${t.bg}"><span>${t.emoji}</span><div class="tchk">✓</div></div><div class="tname">${t.name}</div>`;
    g.appendChild(cd);
  });
}
function buildFrameColors(){
  const row=document.getElementById('frame-color-row');if(!row)return;row.innerHTML='';
  FRAME_COLORS.forEach(fc=>{
    const d=document.createElement('div');
    d.className='fcol-swatch'+(fc.c===selFrameColor?' sel':'');
    d.style.background=fc.c;d.title=fc.name;
    d.onclick=()=>{selFrameColor=fc.c;document.querySelectorAll('.fcol-swatch').forEach(s=>s.classList.remove('sel'));d.classList.add('sel');schedulePreview();};
    row.appendChild(d);
  });
  // custom color picker
  const cus=document.createElement('div');cus.className='fcol-swatch rainbow';cus.title='Pilih warna lain';
  cus.style.background='conic-gradient(red,yellow,lime,cyan,blue,magenta,red)';
  cus.onclick=()=>{const inp=document.createElement('input');inp.type='color';inp.value=selFrameColor;inp.oninput=e=>{selFrameColor=e.target.value;schedulePreview();};inp.click();};
  row.appendChild(cus);
}
function buildStickerUI(){
  // categories
  const cats=document.getElementById('sticker-cats');cats.innerHTML='';
  Object.keys(STICKER_CATS).forEach(cat=>{
    const b=document.createElement('button');b.className='scat'+(cat===activeStickerCat?' on':'');b.textContent=cat;
    b.onclick=()=>{activeStickerCat=cat;document.querySelectorAll('.scat').forEach(s=>s.classList.remove('on'));b.classList.add('on');renderStickerGrid();};
    cats.appendChild(b);
  });
  renderStickerGrid();
}
function renderStickerGrid(){
  const g=document.getElementById('sticker-grid');g.innerHTML='';
  STICKER_CATS[activeStickerCat].forEach(emoji=>{
    const d=document.createElement('div');d.className='stk';d.textContent=emoji;
    d.onclick=()=>placeSticker(emoji);
    g.appendChild(d);
  });
}

/* ══════════════════════════════════
   STICKER PLACEMENT
══════════════════════════════════ */
function placeSticker(emoji){
  const wrap=document.getElementById('canvas-wrap');if(!wrap)return;
  const canvas=document.getElementById('prev-canvas');
  const scaleX=canvas.offsetWidth/canvas.width;
  const scaleY=canvas.offsetHeight/canvas.height;

  const d=document.createElement('div');
  d.className='placed-sticker';
  d.textContent=emoji;
  // default: center of canvas
  const cx=canvas.offsetWidth/2-20, cy=canvas.offsetHeight/2-20;
  d.style.left=cx+'px';d.style.top=cy+'px';
  d.style.fontSize='36px';

  // delete button
  const del=document.createElement('div');del.className='stk-del';del.textContent='×';
  del.onclick=e=>{e.stopPropagation();d.remove();placedStickers=placedStickers.filter(s=>s.el!==d);};
  d.appendChild(del);

  // resize handle
  const rsz=document.createElement('div');rsz.className='stk-resize';
  d.appendChild(rsz);

  // drag
  let startX,startY,origL,origT;
  d.addEventListener('pointerdown',e=>{
    if(e.target===del||e.target===rsz)return;
    selectSticker(d);
    startX=e.clientX;startY=e.clientY;
    origL=parseFloat(d.style.left)||0;origT=parseFloat(d.style.top)||0;
    d.setPointerCapture(e.pointerId);
    d.addEventListener('pointermove',onMove);
    d.addEventListener('pointerup',onUp,{once:true});
  });
  function onMove(e){d.style.left=(origL+e.clientX-startX)+'px';d.style.top=(origT+e.clientY-startY)+'px';}
  function onUp(){d.removeEventListener('pointermove',onMove);}

  // resize drag
  let rsStartX,rsStartY,rsFontOrig;
  rsz.addEventListener('pointerdown',e=>{
    e.stopPropagation();rsStartX=e.clientX;rsStartY=e.clientY;
    rsFontOrig=parseFloat(d.style.fontSize)||36;
    rsz.setPointerCapture(e.pointerId);
    rsz.addEventListener('pointermove',onRsMove);
    rsz.addEventListener('pointerup',()=>rsz.removeEventListener('pointermove',onRsMove),{once:true});
  });
  function onRsMove(e){const delta=e.clientX-rsStartX+e.clientY-rsStartY;d.style.fontSize=Math.max(16,rsFontOrig+delta*.5)+'px';}

  wrap.appendChild(d);
  // store sticker info (position relative to canvas in canvas pixels)
  const stkObj={el:d,emoji,scaleX,scaleY};
  placedStickers.push(stkObj);
  selectSticker(d);
  toast(`Stiker ${emoji} ditempel! Drag untuk pindah 🎭`);
}

function selectSticker(el){
  document.querySelectorAll('.placed-sticker').forEach(s=>s.classList.remove('selected'));
  if(el){el.classList.add('selected');selStickerEl=el;}else selStickerEl=null;
}

document.addEventListener('click',e=>{if(!e.target.closest('.placed-sticker')&&!e.target.closest('.stk'))selectSticker(null);});

function clearAllStickers(){placedStickers=[];document.querySelectorAll('.placed-sticker').forEach(s=>s.remove());toast('Semua stiker dihapus 🗑');}

/* ══════════════════════════════════
   LIVE PREVIEW
══════════════════════════════════ */

/* ── Accordion toggle ── */
function toggleAcc(id){
  const sec=document.getElementById(id);
  sec.classList.toggle('open');
}

function switchMobileTab(id) {
  document.querySelectorAll('.acc-section').forEach(sec => {
    sec.classList.remove('open');
  });
  const target = document.getElementById(id);
  if (target) target.classList.add('open');
  
  document.querySelectorAll('.m-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  const targetBtn = Array.from(document.querySelectorAll('.m-tab')).find(btn => btn.getAttribute('onclick').includes(id));
  if (targetBtn) targetBtn.classList.add('active');
}
function schedulePreview(){
  clearTimeout(prevDebounce);
  const n=document.getElementById('prev-note');if(n)n.textContent='⏳ Merender...';
  prevDebounce=setTimeout(async()=>{
    const canvas=document.getElementById('prev-canvas');if(!canvas)return;
    // Wait for layout paint so clientWidth/Height are accurate
    await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
    const outer=document.querySelector('.canvas-outer');
    if(!outer){return;}
    // Available space inside the outer container (minus padding)
    const availW=Math.max(outer.clientWidth  - 32, 200);
    const availH=Math.max(outer.clientHeight - 32, 200);
    const geom=selLayout.geom(selLayout.stripW);
    let previewH = geom.H;
    let baseExtra = Math.round(selLayout.stripW*0.06);
    previewH += baseExtra;
    
    const stripText=(document.getElementById('strip-text-input')?.value||'').trim();
    if(stripText){
      const tsz=parseInt(document.getElementById('text-size-sel')?.value||'13');
      const tpx=Math.round(tsz*(selLayout.stripW/300));
      previewH += tpx + Math.round(40*(selLayout.stripW/300));
    }
    const ratio=previewH/selLayout.stripW;
    // Fit strip inside available box, preserving aspect ratio
    let renderW=availW;
    if(renderW*ratio > availH){ renderW=Math.floor(availH/ratio); }
    renderW=Math.max(renderW, 200);
    await drawStrip(canvas, renderW);
    if(n)n.textContent='Klik stiker di grid untuk tempel · Drag untuk pindah ✨';
  },90);
}

/* ══════════════════════════════════
   STRIP RENDERER
══════════════════════════════════ */
async function drawStrip(canvas,W){
  const geom=selLayout.geom(W);
  let H=geom.H;
  const rects=geom.rects;
  
  let baseExtra = Math.round(W*0.06);
  H += baseExtra;
  
  // Calculate extra height for custom text
  const stripText=(document.getElementById('strip-text-input')?.value||'').trim();
  let tpx = 13;
  let extraH = 0;
  if(stripText){
    const tsz=parseInt(document.getElementById('text-size-sel')?.value||'13');
    tpx=Math.round(tsz*(W/300));
    extraH = tpx + Math.round(40*(W/300));
    H += extraH;
  }

  canvas.width=W; canvas.height=H;
  const ctx=canvas.getContext('2d');

  // Background
  selTheme.stripBg(ctx,W,H);

  // Frame border (user selected color)
  const fw=Math.max(4,Math.round(W*0.014));
  ctx.strokeStyle=selFrameColor;
  ctx.lineWidth=fw;
  ctx.strokeRect(fw/2,fw/2,W-fw,H-fw);

  // Thin inner accent border (theme color)
  ctx.strokeStyle=selTheme.border;
  ctx.lineWidth=1.5;
  const fi=fw+3;
  ctx.strokeRect(fi,fi,W-fi*2,H-fi*2);

  // Header title
  const fsize=Math.max(13,Math.round(W*0.046));
  ctx.fillStyle=selTheme.text;
  ctx.font=`bold ${fsize}px "Playfair Display",serif`;
  ctx.textAlign='center';
  ctx.fillText('✨ PhotoBooth ✨',W/2,geom.HEADER-8);

  // Photos
  await Promise.all(rects.map((r,i)=>new Promise(res=>{
    if(!photos[i]){
      // empty slot placeholder
      ctx.fillStyle='rgba(0,0,0,0.22)';
      ctx.beginPath();ctx.roundRect(r.x,r.y,r.w,r.h,6);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.28)';
      ctx.font=`bold ${Math.min(22,Math.round(r.h*0.25))}px sans-serif`;
      ctx.textAlign='center';
      ctx.fillText(i+1, r.x+r.w/2, r.y+r.h/2+7);
      res(); return;
    }
    const img=new Image();
    img.onload=()=>{
      // drop shadow
      ctx.save();
      ctx.shadowColor='rgba(0,0,0,0.35)';
      ctx.shadowBlur=8; ctx.shadowOffsetX=2; ctx.shadowOffsetY=3;
      ctx.fillStyle='#000';
      ctx.beginPath();ctx.roundRect(r.x,r.y,r.w,r.h,6);ctx.fill();
      ctx.restore();

      // clip + draw photo
      ctx.save();
      ctx.beginPath();ctx.roundRect(r.x,r.y,r.w,r.h,6);ctx.clip();
      if(selFilter.id!=='none'){
        const off=document.createElement('canvas');
        off.width=r.w; off.height=r.h;
        const oc=off.getContext('2d');
        // cover-fit the image into the rect
        const scale=Math.max(r.w/img.width, r.h/img.height);
        const sw=img.width*scale, sh=img.height*scale;
        const sx=(r.w-sw)/2, sy=(r.h-sh)/2;
        oc.filter=selFilter.css;
        oc.drawImage(img,sx,sy,sw,sh);
        if(selFilter.grain) applyGrain(oc,r.w,r.h);
        ctx.drawImage(off,r.x,r.y);
      } else {
        const scale=Math.max(r.w/img.width, r.h/img.height);
        const sw=img.width*scale, sh=img.height*scale;
        const sx=r.x+(r.w-sw)/2, sy=r.y+(r.h-sh)/2;
        ctx.drawImage(img,sx,sy,sw,sh);
      }
      ctx.restore();

      // photo border
      ctx.strokeStyle=selFrameColor;
      ctx.lineWidth=1.5;
      ctx.beginPath();ctx.roundRect(r.x,r.y,r.w,r.h,6);ctx.stroke();

      // slot number badge
      const bs=Math.min(16,Math.round(r.h*0.12),Math.round(r.w*0.09));
      ctx.fillStyle=selFrameColor;
      ctx.beginPath();ctx.arc(r.x+bs+2,r.y+bs+2,bs,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=(selFrameColor==='#ffffff'||selFrameColor==='#ffff00')?'#111':'#fff';
      ctx.font=`bold ${Math.round(bs*0.85)}px sans-serif`;
      ctx.textAlign='center';
      ctx.fillText(i+1, r.x+bs+2, r.y+bs+2+Math.round(bs*0.32));
      res();
    };
    img.onerror=()=>res();
    img.src=photos[i];
  })));

  // Draw custom PNG overlay if active
  if (selTheme.customImgSrc) {
    await new Promise(res => {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, W, H);
        res();
      };
      img.onerror = () => res();
      img.src = selTheme.customImgSrc;
    });
  }

  // Decorative emoji border
  selTheme.deco(ctx,W,H);

  // Placed stickers
  const wrap=document.getElementById('canvas-wrap');
  const displayCanvas=document.getElementById('prev-canvas');
  if(wrap && displayCanvas && displayCanvas.offsetWidth>0){
    const scX=W/displayCanvas.offsetWidth;
    const scY=H/displayCanvas.offsetHeight;
    document.querySelectorAll('.placed-sticker').forEach(el=>{
      const left=parseFloat(el.style.left)||0;
      const top=parseFloat(el.style.top)||0;
      const fontSize=parseFloat(el.style.fontSize)||36;
      const emoji=el.childNodes[0]?.textContent||el.textContent.replace('×','').trim();
      ctx.font=`${Math.round(fontSize*scX)}px serif`;
      ctx.textAlign='left';
      ctx.fillText(emoji, left*scX, (top+fontSize)*scY);
    });
  }

  // Custom text caption
  if(stripText){
    const tcol=document.getElementById('text-color-input')?.value||'#ffffff';
    ctx.save();
    ctx.font=`bold ${tpx}px "DM Sans",sans-serif`;
    ctx.textAlign='center';
    ctx.shadowColor='rgba(0,0,0,0.7)'; ctx.shadowBlur=5;
    ctx.fillStyle=tcol;
    ctx.fillText(stripText, W/2, geom.H - geom.FOOTER + tpx + Math.round(25*(W/300)));
    ctx.restore();
  }

  // Footer: date + theme name — respect geom.FOOTER height, never overlap
  const date=new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'});
  const FOOT = geom.FOOTER;  // e.g. 44px
  // Clamp font sizes so two lines always fit within FOOTER
  const maxLineSz = Math.floor((FOOT - 12) / 2);  // 2 lines + 12px padding
  const dateFontSz = Math.min(maxLineSz, Math.max(9,  Math.round(W*0.024)));
  const nameFontSz = Math.min(maxLineSz, Math.max(10, Math.round(W*0.028)));
  const lineGap    = nameFontSz + 4;
  const footerBot  = H - fw - 10;  // Padding from bottom border
  ctx.fillStyle = selTheme.text;
  ctx.textAlign = 'center';
  
  // Copyright
  const copyFontSz = Math.max(8, Math.round(dateFontSz * 0.9));
  ctx.font = `bold ${copyFontSz}px sans-serif`;
  ctx.fillText('© MUMI GG', W/2, footerBot);
  
  // Date
  ctx.font = `${dateFontSz}px sans-serif`;
  ctx.fillText(date, W/2, footerBot - lineGap + 2);
  
  // Theme name
  ctx.font = `bold ${nameFontSz}px sans-serif`;
  ctx.fillText(selTheme.name, W/2, footerBot - lineGap*2 + 4);
}


/* ══════════════════════════════════
   DOWNLOAD — PDF full-bleed / PNG / JPG
══════════════════════════════════ */
async function downloadAs(fmt){
  toast('⏳ Menyiapkan...',1000);
  const fc=document.createElement('canvas');
  await drawStrip(fc, selLayout.stripW);

  if(fmt==='png'){
    const a=document.createElement('a');
    a.href=fc.toDataURL('image/png');
    a.download='photobooth-'+Date.now()+'.png';
    a.click(); toast('🖼️ PNG tersimpan!'); return;
  }
  if(fmt==='jpg'){
    const a=document.createElement('a');
    a.href=fc.toDataURL('image/jpeg',.95);
    a.download='photobooth-'+Date.now()+'.jpg';
    a.click(); toast('📷 JPG tersimpan!'); return;
  }
  if(fmt==='pdf'){
    const {jsPDF}=window.jspdf;
    // Make PDF page EXACTLY the same size as the canvas (in px→mm at 96dpi)
    // 1px = 25.4/96 mm = 0.2646 mm
    const PX_TO_MM = 25.4 / 96;
    const pW = fc.width  * PX_TO_MM;
    const pH = fc.height * PX_TO_MM;
    const pdf = new jsPDF({
      orientation: pW > pH ? 'landscape' : 'portrait',
      unit: 'mm',
      format: [pW, pH]   // custom page size = exact canvas size
    });
    // Image fills the entire page — x:0, y:0, w:pW, h:pH
    pdf.addImage(fc.toDataURL('image/jpeg', .97), 'JPEG', 0, 0, pW, pH);
    pdf.save('photobooth-' + Date.now() + '.pdf');
    toast('📄 PDF tersimpan!');
  }
}

function hexToRgbArr(h){return[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)];}

async function printStrip(){
  openRoomModal('client');
  /*
  const fc=document.createElement('canvas');
  await drawStrip(fc,selLayout.stripW);
  const dataUrl=fc.toDataURL('image/png');
  const win=window.open('','_blank','width=600,height=800');
  win.document.write(`<!DOCTYPE html><html><head><title>Print PhotoBooth</title>
    <style>*{margin:0;padding:0;box-sizing:border-box;}html,body{width:100%;height:100%;}
    body{display:flex;align-items:center;justify-content:center;background:#111;}
    img{max-width:100%;max-height:100vh;display:block;}
    @media print{html,body{width:100%;height:100%;margin:0;padding:0;background:#fff!important;}
    img{width:100%;height:100%;object-fit:contain;page-break-inside:avoid;}}
    </style></head><body>
    <img src="${dataUrl}">
    </body><\/html>`);
  win.document.close();
  win.onload=()=>{ win.focus(); setTimeout(()=>win.print(),300); };
  toast('🖨️ Membuka dialog print...');
  */
}
/* ══════════════════════════════════
   SHARE
══════════════════════════════════ */
async function openShare(){
  // First render final canvas
  const fc=document.createElement('canvas');
  await drawStrip(fc,selLayout.stripW);
  const dataUrl=fc.toDataURL('image/png');

  const modal=document.getElementById('share-modal');modal.classList.add('vis');
  const shareRow=document.getElementById('share-row');shareRow.innerHTML='';

  const platforms=[
    {emoji:'📋',label:'Salin Gambar',action:async()=>{
      try{fc.toBlob(async b=>{await navigator.clipboard.write([new ClipboardItem({'image/png':b})]);toast('Gambar disalin ke clipboard! 📋');});}
      catch{toast('Gunakan tombol Download di bawah 👇');}
    }},
    {emoji:'💬',label:'WhatsApp',action:()=>{
      const txt=encodeURIComponent('Check out my photobooth strip! 📸✨');
      window.open('https://wa.me/?text='+txt,'_blank');
    }},
    {emoji:'📘',label:'Facebook',action:()=>{window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href),'_blank');}},
    {emoji:'🐦',label:'Twitter/X',action:()=>{window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent('📸 Foto booth seru! #photobooth #photostrip'),'_blank');}},
    {emoji:'📸',label:'Instagram',action:()=>{downloadAs('jpg');toast('Simpan gambar, lalu upload ke Instagram 📸');}},
    {emoji:'⬇️',label:'Download',action:()=>{downloadAs('png');modal.classList.remove('vis');}},
  ];

  platforms.unshift({emoji:'🖨️',label:'Kirim Operator',action:()=>{modal.classList.remove('vis');openRoomModal('client');}});

  platforms.forEach(p=>{
    const b=document.createElement('div');b.className='share-btn';
    b.innerHTML=`<span>${p.emoji}</span><p>${p.label}</p>`;
    b.onclick=()=>{p.action();};
    shareRow.appendChild(b);
  });

  document.getElementById('share-link-input').value=location.href;
}
function copyShareLink(){navigator.clipboard.writeText(location.href).then(()=>toast('Link disalin! 🔗')).catch(()=>toast('Salin manual dari address bar ya'));}

/* ══════════════════════════════════
   OPERATOR & SYNC (ntfy.sh)
══════════════════════════════════ */
let roomMode = '';
let opEventSource = null;
let activeSessionCode = 'true'; // Active by default on client side

// Warn user before refresh if they are on a client screen
window.addEventListener('beforeunload', (e) => {
  if (activeSessionCode) {
    e.preventDefault();
    e.returnValue = ''; // Empty string triggers Safari's default confirmation dialog
    return '';
  }
});

// Helper to generate 4-character uppercase random code
function generateReceiptCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Avoid confusing chars like O, 0, I, 1
  let res = '';
  for(let i=0; i<4; i++) res += chars.charAt(Math.floor(Math.random() * chars.length));
  return res;
}

function openRoomModal(mode) {
  if (mode === 'client') {
    const receiptCode = generateReceiptCode();
    sendToOperator(window.clientRoomCode || 'mumi81', receiptCode);
    return;
  }
  roomMode = mode;
  document.getElementById('room-input').value = '';
  document.getElementById('room-modal').classList.add('vis');
  setTimeout(()=>document.getElementById('room-input').focus(), 100);
}

async function submitRoomCode() {
  const code = document.getElementById('room-input').value.trim();
  if(!code){ toast('Kode tidak boleh kosong!'); return; }
  document.getElementById('room-modal').classList.remove('vis');
  
  if(roomMode === 'operator') {
    startOperator(code);
  } else if(roomMode === 'client_select_room') {
    window.clientRoomCode = code;
    sendToOperator(code, window.pendingReceiptCode);
  }
}

async function sendToOperator(room, receiptCode) {
  toast('⏳ Menyiapkan gambar...', 3000);
  const fc = document.createElement('canvas');
  await drawStrip(fc, selLayout.stripW);
  
  fc.toBlob(async (blob) => {
    toast('🚀 Mengirim ke operator...', 3000);
    try {
      const topic = `mumi_pb_${room.toLowerCase()}`;
      const res = await fetch(`https://ntfy.sh/${topic}`, {
        method: 'POST',
        body: blob,
        headers: { 
          'Filename': `pb_${receiptCode}_${Date.now()}.jpg`,
          'Title': `FOTO_${receiptCode}` // Send receipt code in ntfy Title header
        }
      });
      if(res.ok) {
        // Clear active session since it's safely sent
        activeSessionCode = '';
        
        // Save to local storage for recovery/restore option
        saveToHistory(receiptCode, fc.toDataURL('image/jpeg', 0.45));

        // Show the receipt code in a nice alert
        const modal = document.getElementById('room-modal');
        modal.classList.add('vis');
        document.getElementById('room-title').innerHTML = '🎉 Berhasil Dikirim!';
        document.getElementById('room-desc').innerHTML = `Tunjukkan kode unik ini ke Operator untuk dicetak:<br><br><strong style="font-size:36px;color:var(--pk);letter-spacing:4px;">${receiptCode}</strong><br><br><small style="font-size:11px;color:#ef4444;display:block;margin-top:10px;">⚠️ Penting: Foto di server operator akan dihapus otomatis setelah 24 jam!</small>`;
        // Hide input and keep only close button
        document.getElementById('room-input').style.display = 'none';
        const okBtn = modal.querySelector('button[onclick="submitRoomCode()"]');
        if (okBtn) okBtn.style.display = 'none';
        const cancelBtn = modal.querySelector('button[onclick*="room-modal"]');
        if (cancelBtn) {
          cancelBtn.textContent = 'Selesai';
          cancelBtn.onclick = () => {
            modal.classList.remove('vis');
            // reset modal for next time
            setTimeout(() => {
              document.getElementById('room-title').textContent = 'Masukkan Kode Room';
              document.getElementById('room-desc').textContent = 'Kode ini digunakan untuk menyambungkan perangkatmu dengan operator.';
              document.getElementById('room-input').style.display = 'block';
              if (okBtn) okBtn.style.display = 'block';
              cancelBtn.textContent = 'Batal';
              cancelBtn.onclick = () => modal.classList.remove('vis');
            }, 300);
          };
        }
      } else {
        toast('❌ Gagal mengirim, coba lagi.');
      }
    } catch(err) {
      console.error(err);
      toast('❌ Gagal mengirim (Network Error)');
    }
  }, 'image/jpeg', 0.95);
}

let receivedPhotos = []; // Store recently received photos in memory

function startOperator(code) {
  goTo('s-operator');
  document.getElementById('op-room-lbl').textContent = code;
  document.getElementById('op-search-input').value = '';
  const gallery = document.getElementById('op-queue-gallery');
  if (gallery) {
    gallery.innerHTML = '<p id="op-queue-empty" style="color:#aaa;font-size:14px;grid-column:1/-1;text-align:center;margin-top:20px;">Belum ada foto masuk dari warga.</p>';
  }
  document.getElementById('op-status').style.background = '#eab308';
  receivedPhotos = [];
  pollNtfyCache(code);
  broadcastFrames();
  
  // Generate QR Code link so users scanning this will auto-connect to the correct room channel
  const link = window.location.origin + window.location.pathname + '?room=' + encodeURIComponent(code);
  document.getElementById('op-qr-img').src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(link);

  if(opEventSource) { opEventSource.close(); }
  
  const topic = `mumi_pb_${code.toLowerCase()}`;
  opEventSource = new EventSource(`https://ntfy.sh/${topic}/sse`);
  
  opEventSource.onopen = () => {
    document.getElementById('op-status').style.background = '#22c55e';
    toast('✅ Terhubung sebagai Operator');
  };
  
  opEventSource.onerror = () => {
    document.getElementById('op-status').style.background = '#ef4444';
  };
  
  opEventSource.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if(data.event === 'message' && data.attachment) {
      // Try to extract receipt code from filename or title
      let rCode = 'FOTO';
      if (data.title && data.title.startsWith('FOTO_')) {
        rCode = data.title.replace('FOTO_', '').toUpperCase();
      } else if (data.attachment.name && data.attachment.name.startsWith('pb_')) {
        rCode = (data.attachment.name.split('_')[1] || 'FOTO').toUpperCase();
      }
      
      // Save to in-memory list (newest first)
      receivedPhotos.unshift({ url: data.attachment.url, code: rCode });
      toast(`📥 Foto baru masuk!`);
      renderOpQueue();
    }
  };
}

async function pollNtfyCache(code) {
  try {
    const topic = `mumi_pb_${code.toLowerCase()}`;
    const res = await fetch(`https://ntfy.sh/${topic}/json?poll=1`);
    if (res.ok) {
      const text = await res.text();
      const lines = text.trim().split('\n').filter(Boolean);
      lines.forEach(line => {
        try {
          const data = JSON.parse(line);
          if (data.event === 'message' && data.attachment) {
            let rCode = 'FOTO';
            if (data.title && data.title.startsWith('FOTO_')) {
              rCode = data.title.replace('FOTO_', '').toUpperCase();
            } else if (data.attachment.name && data.attachment.name.startsWith('pb_')) {
              rCode = (data.attachment.name.split('_')[1] || 'FOTO').toUpperCase();
            }
            if (!receivedPhotos.some(p => p.url === data.attachment.url)) {
              receivedPhotos.unshift({ url: data.attachment.url, code: rCode });
            }
          }
        } catch(e) {}
      });
      renderOpQueue();
    }
  } catch(e) {
    console.error('Failed to poll ntfy cache:', e);
  }
}

function zoomPreviewCanvas() {
  const canvas = document.getElementById('prev-canvas');
  if (canvas) {
    openFullscreenPreview(canvas.toDataURL('image/jpeg', 0.95));
  }
}

function renderOpQueue() {
  const gallery = document.getElementById('op-queue-gallery');
  if (!gallery) return;
  gallery.innerHTML = '';
  
  if (receivedPhotos.length === 0) {
    gallery.innerHTML = '<p id="op-queue-empty" style="color:#aaa;font-size:14px;grid-column:1/-1;text-align:center;margin-top:20px;">Belum ada foto masuk dari warga.</p>';
    return;
  }
  
  receivedPhotos.forEach(photo => {
    const card = document.createElement('div');
    card.className = 'op-card';
    card.style.cssText = 'background:rgba(255,255,255,0.05);border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.1);display:flex;flex-direction:column;width:130px;cursor:pointer;position:relative;transition:0.2s;';
    card.onclick = () => validateAndPrint(photo.url, photo.code);
    card.innerHTML = `
      <div style="background:#111;height:180px;display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative;">
        <img src="${photo.url}" data-code="${photo.code}" style="max-width:100%;max-height:100%;object-fit:contain;" crossorigin="anonymous">
      </div>
      <div class="op-status-label" style="padding:8px;font-size:10px;text-align:center;font-weight:bold;color:var(--pk);background:rgba(244,114,182,0.1);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;">
        🖨️ Klik untuk Cetak
      </div>
    `;
    gallery.appendChild(card);
  });
}

function validateAndPrint(url, code) {
  const input = prompt("Masukkan PIN/Kode Warga untuk mencetak foto ini:");
  if (input === null) return;
  if (input.trim().toUpperCase() === code.toUpperCase()) {
    toast("✅ Kode Cocok! Membuka dialog print...");
    const label = Array.from(document.querySelectorAll('.op-card')).find(card => {
      return card.querySelector('img')?.getAttribute('data-code') === code;
    })?.querySelector('.op-status-label');
    
    if (label) {
      label.textContent = "🔓 Terverifikasi";
      label.style.background = "rgba(34,197,94,0.1)";
      label.style.color = "#22c55e";
    }
    printOperatorImage(url);
  } else {
    toast("❌ Kode PIN salah!");
  }
}

function searchUserPhoto() {
  const query = document.getElementById('op-search-input').value.trim().toUpperCase();
  if (!query) {
    toast('Ketik kode pencarian dulu cuy!');
    return;
  }
  
  const match = receivedPhotos.find(p => p.code === query);
  
  if (match) {
    toast('✅ Kode cocok! Membuka cetak...');
    const label = Array.from(document.querySelectorAll('.op-card')).find(card => {
      return card.querySelector('img')?.getAttribute('data-code') === query;
    })?.querySelector('.op-status-label');
    
    if (label) {
      label.textContent = "🔓 Terverifikasi";
      label.style.background = "rgba(34,197,94,0.1)";
      label.style.color = "#22c55e";
    }
    printOperatorImage(match.url);
  } else {
    toast('❌ Kode struk tidak ditemukan!');
  }
}

function exitOperatorMode() {
  if(opEventSource) {
    opEventSource.close();
    opEventSource = null;
  }
  goTo('sw');
}

function printOperatorImage(url) {
  const win=window.open('','_blank','width=600,height=800');
  win.document.write(`<!DOCTYPE html><html><head><title>Print PhotoBooth</title>
    <style>*{margin:0;padding:0;box-sizing:border-box;}html,body{width:100%;height:100%;}
    body{display:flex;align-items:center;justify-content:center;background:#111;}
    img{max-width:100%;max-height:100vh;display:block;}
    @media print{html,body{width:100%;height:100%;margin:0;padding:0;background:#fff!important;}
    img{width:100%;height:100%;object-fit:contain;page-break-inside:avoid;}}
    </style></head><body>
    <img src="${url}" crossorigin="anonymous">
    </body></html>`);
  win.document.close();
  win.onload=()=>{ win.focus(); setTimeout(()=>win.print(), 500); };
}
// Operator Custom Frame management functions
function switchOpView(viewName) {
  document.getElementById('op-tab-print').classList.toggle('active', viewName === 'print');
  document.getElementById('op-tab-frames').classList.toggle('active', viewName === 'frames');
  document.getElementById('op-view-print').style.display = viewName === 'print' ? 'block' : 'none';
  document.getElementById('op-view-frames').style.display = viewName === 'frames' ? 'block' : 'none';
  if (viewName === 'frames') {
    renderOpFrames();
  }
}

function handleFrameUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    const dataUrl = event.target.result;
    const id = 'custom_' + Date.now();
    const name = file.name.replace(/\.[^/.]+$/, "");
    const frames = JSON.parse(localStorage.getItem('mumi_custom_frames') || '[]');
    frames.push({ id, name, dataUrl, is_active: true, is_pin: false });
    localStorage.setItem('mumi_custom_frames', JSON.stringify(frames));
    renderOpFrames();
    broadcastFrames();
    toast('✅ Bingkai berhasil diupload!');
  };
  reader.readAsDataURL(file);
  e.target.value = '';
}

function renderOpFrames() {
  const grid = document.getElementById('op-frames-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const frames = JSON.parse(localStorage.getItem('mumi_custom_frames') || '[]');
  
  if (frames.length === 0) {
    grid.innerHTML = '<p style="color:#aaa;font-size:14px;grid-column:1/-1;margin-top:20px;">Belum ada bingkai kustom dari panitia.</p>';
    return;
  }
  
  frames.forEach(frame => {
    const card = document.createElement('div');
    card.className = 'op-card';
    card.style.cssText = 'background:rgba(255,255,255,0.05);border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.1);display:flex;flex-direction:column;width:130px;';
    card.innerHTML = `
      <div style="position:relative;background:#111;height:180px;display:flex;align-items:center;justify-content:center;overflow:hidden;">
        <img src="${frame.dataUrl}" style="max-width:100%;max-height:100%;object-fit:contain;">
        <div style="position:absolute;top:5px;right:5px;background:rgba(0,0,0,0.6);border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;color:${frame.is_pin ? '#eab308' : '#aaa'};cursor:pointer;font-size:16px;" onclick="toggleFramePin('${frame.id}')">
          ${frame.is_pin ? '★' : '☆'}
        </div>
      </div>
      <div style="padding:8px;font-size:11px;text-align:center;font-weight:bold;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;color:#fff;">
        ${frame.name}
      </div>
      <div style="display:flex;border-top:1px solid rgba(255,255,255,0.1);padding:6px;gap:6px;justify-content:center;align-items:center;background:rgba(0,0,0,0.2);">
        <label style="font-size:10px;color:#aaa;display:flex;align-items:center;gap:4px;cursor:pointer;">
          <input type="checkbox" ${frame.is_active ? 'checked' : ''} onchange="toggleFrameActive('${frame.id}')"> Gunakan
        </label>
      </div>
    `;
    grid.appendChild(card);
  });
}

function toggleFrameActive(id) {
  const frames = JSON.parse(localStorage.getItem('mumi_custom_frames') || '[]');
  const frame = frames.find(f => f.id === id);
  if (frame) {
    frame.is_active = !frame.is_active;
    if (!frame.is_active) frame.is_pin = false;
    localStorage.setItem('mumi_custom_frames', JSON.stringify(frames));
    renderOpFrames();
    broadcastFrames();
  }
}

function toggleFramePin(id) {
  const frames = JSON.parse(localStorage.getItem('mumi_custom_frames') || '[]');
  frames.forEach(f => {
    if (f.id === id) {
      f.is_pin = !f.is_pin;
      if (f.is_pin) f.is_active = true;
    } else {
      f.is_pin = false;
    }
  });
  localStorage.setItem('mumi_custom_frames', JSON.stringify(frames));
  renderOpFrames();
  broadcastFrames();
}

async function broadcastFrames() {
  const code = document.getElementById('op-room-lbl').textContent;
  if (!code || code === '-') return;
  const frames = JSON.parse(localStorage.getItem('mumi_custom_frames') || '[]');
  try {
    const topic = `mumi_pb_${code.toLowerCase()}_config`;
    await fetch(`https://ntfy.sh/${topic}`, {
      method: 'POST',
      body: JSON.stringify(frames),
      headers: { 'Title': 'CONFIG_THEMES' }
    });
  } catch(e) {
    console.error('Gagal broadcast config:', e);
  }
}

// Client Custom Themes fetch functions
async function loadCustomThemes() {
  const room = window.clientRoomCode || 'mumi81';
  try {
    const res = await fetch(`https://ntfy.sh/mumi_pb_${room.toLowerCase()}_config/json?poll=1`);
    if (res.ok) {
      const text = await res.text();
      const lines = text.trim().split('\n').filter(Boolean);
      if (lines.length > 0) {
        const lastMsg = JSON.parse(lines[lines.length - 1]);
        if (lastMsg.message) {
          const config = JSON.parse(lastMsg.message);
          applyCustomThemes(config);
        }
      }
    }
  } catch (err) {
    console.error('Gagal memuat tema kustom:', err);
  }
}

function applyCustomThemes(config) {
  THEMES = THEMES.filter(t => !t.isCustom);
  config.forEach(theme => {
    if (theme.is_active) {
      const customTheme = {
        id: theme.id,
        name: theme.name,
        emoji: '🖼️',
        bg: '#ffffff',
        customImgSrc: theme.dataUrl,
        stripBg: (c, w, h) => {
          c.fillStyle = '#ffffff';
          c.fillRect(0, 0, w, h);
        },
        border: 'transparent',
        text: '#000000',
        deco: (c, w, h) => {},
        isCustom: true
      };
      THEMES.push(customTheme);
      if (theme.is_pin) {
        selTheme = customTheme;
      }
    }
  });
  const grid = document.getElementById('tgrid');
  if (grid) buildThemeGrid();
}

function toggleMoreOptionsModal(show) {
  const modal = document.getElementById('more-options-modal');
  if (modal) {
    if (show) modal.classList.add('vis');
    else modal.classList.remove('vis');
  }
}

function updateLastReceiptBox() {
  const box = document.getElementById('last-receipt-box');
  if (!box) return;
  let history = [];
  try {
    history = JSON.parse(localStorage.getItem('mumi_history') || '[]');
  } catch(e) {}
  
  if (history.length > 0) {
    box.style.display = 'inline-flex';
  } else {
    box.style.display = 'none';
  }
}

function saveToHistory(code, dataUrl) {
  let history = [];
  try {
    history = JSON.parse(localStorage.getItem('mumi_history') || '[]');
  } catch(e) {}
  // Keep only the last 10 photos to stay within LocalStorage limits
  history.unshift({ code, img: dataUrl, time: Date.now() });
  if (history.length > 10) history = history.slice(0, 10);
  localStorage.setItem('mumi_history', JSON.stringify(history));
  updateLastReceiptBox();
}

function openHistoryModal() {
  const modal = document.getElementById('history-modal');
  if (!modal) return;
  modal.classList.add('vis');
  
  const list = document.getElementById('history-list');
  if (!list) return;
  list.innerHTML = '';
  
  let history = [];
  try {
    history = JSON.parse(localStorage.getItem('mumi_history') || '[]');
  } catch(e) {}
  
  if (history.length === 0) {
    list.innerHTML = '<p style="color:#aaa;font-size:14px;text-align:center;margin-top:20px;">Belum ada riwayat cetak.</p>';
    return;
  }
  
  history.forEach(item => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;background:rgba(255,255,255,0.05);padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,0.1);gap:12px;';
    row.innerHTML = `
      <div style="width:60px;height:70px;background:#111;border-radius:6px;overflow:hidden;cursor:pointer;position:relative;flex-shrink:0;" onclick="openFullscreenPreview('${item.img}')">
        <img src="${item.img}" style="width:100%;height:100%;object-fit:cover;">
        <div style="position:absolute;inset:0;background:rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;">🔍</div>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;gap:4px;">
        <span style="font-size:10px;color:#aaa;">KODE CETAK STRUK</span>
        <strong style="font-size:20px;color:var(--pk);letter-spacing:1px;">${item.code}</strong>
      </div>
      <button onclick="openFullscreenPreview('${item.img}')" style="padding:8px 12px;font-size:12px;background:rgba(255,255,255,0.1);color:#fff;border-radius:6px;border:none;cursor:pointer;">🔍 Pratinjau</button>
    `;
    list.appendChild(row);
  });
}

function closeHistoryModal() {
  const modal = document.getElementById('history-modal');
  if (modal) modal.classList.remove('vis');
}

function openFullscreenPreview(src) {
  const modal = document.getElementById('fullscreen-modal');
  const img = document.getElementById('fullscreen-img');
  if (modal && img) {
    img.src = src;
    modal.classList.add('vis');
  }
}

function closeFullscreenModal() {
  const modal = document.getElementById('fullscreen-modal');
  if (modal) modal.classList.remove('vis');
}

/* INIT */
document.addEventListener('DOMContentLoaded', function(){
  renderLayoutGrid();
  updateLastReceiptBox();

  // Auto-read room code, default to 'mumi81' for instant sync
  const params = new URLSearchParams(window.location.search);
  window.clientRoomCode = params.get('room') || 'mumi81';
  
  if (params.get('room')) {
    toast(`🔌 Terhubung otomatis ke Operator Room: ${window.clientRoomCode}`, 4000);
  }

  // Detect operator mode URL parameters and start automatically on room
  if (params.get('mode') === 'operator' || params.has('op')) {
    const opRoom = params.get('room') || 'mumi81';
    startOperator(opRoom);
  }
});