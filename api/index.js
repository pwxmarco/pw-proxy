export default async function handler(req, res) {

const url = "https://pwthor.site/study/";

const response = await fetch(url,{
headers:{
"User-Agent":"Mozilla/5.0",
"Accept":"text/html"
}
});

let html = await response.text();

/* header hide */
html = html.replace(/<header[\s\S]*?<\/header>/gi,"");

/* nav hide */
html = html.replace(/<nav[\s\S]*?<\/nav>/gi,"");

/* overlay */
html = html.replace("<body>",
`<body style="margin-top:60px;">
<div style="
position:fixed;
top:0;
left:0;
width:100%;
height:60px;
background:white;
z-index:999999;
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
font-size:18px;">
PW BY MARCO
</div>`);

res.setHeader("Content-Type","text/html");
res.send(html);

}
