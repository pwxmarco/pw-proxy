export default async function handler(req, res) {

const url = "https://pwthor.site/study/batches";

const response = await fetch(url, {
headers:{
"User-Agent":"Mozilla/5.0"
}
});

let html = await response.text();

/* header hide */

html = html.replace(/<header[\s\S]*?<\/header>/gi,"");

/* overlay */

html = html.replace("<body",`
<body>
<div style="
position:fixed;
top:0;
left:0;
width:100%;
height:55px;
background:white;
z-index:999999;
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;">
PW BY MARCO
</div>
`);

res.setHeader("Content-Type","text/html");
res.send(html);

}
