if (window.innerWidth)
winWidth = window.innerWidth;
else if ((document.body) && (document.body.clientWidth))
winWidth = document.body.clientWidth;
if (window.innerHeight)
winheight = window.innerHeight;
else if ((document.body) && (document.body.clientHeight))
winheight = document.body.clientHeight;
async function rmcapital(){
	let jumpsChemms = 0;
	for(let i=0;i<1919;i++){
		await setTimeout(async() => {
			if (jumpsChemms<=10){
				document.getElementById("img02").style.marginTop = (26+(jumpsChemms*0.1)).toString()+"%";
				jumpsChemms += 1;
			} else {
				document.getElementById("img02").style.marginTop = (26-(jumpsChemms*0.1)).toString()+"%";
				jumpsChemms += 1;
				if (jumpsChemms>=20){
					jumpsChemms = 0;
				}
			}
			document.getElementById("img01").style.marginLeft = (10+(i*0.01)).toString()+"%";
		},i);
	}
	await setTimeout(async() => {
		document.querySelector(".tapiFoucs").style.visibility = "visible";
	},1919);
	await setTimeout(async() => {
			document.getElementById("img02").style.transform = "rotateY(0deg)";
		},2419);
	for(let i=0;i<500;i++){
		await setTimeout(async() => {
			document.querySelector(".tapiFoucs").style.filter = "blur("+(20-i*0.04).toString()+"px)";
		},i+1919);
	}
	for(let i=0;i<50;i++){
		await setTimeout(async() => {
			document.getElementById("img02").style.width = (20+i*0.3).toString()+"%";
			document.getElementById("img02").style.marginLeft = (42-i*0.2).toString()+"%";
		},i*10+2419);
	}
	await setTimeout(async() => {
			document.getElementById("img02").remove();
		},2919);
	for(let i=0;i<60;i++){
		await setTimeout(async() => {
			document.getElementById("img04").style.marginTop = (1+i*0.9).toString()+"%";
		},i*10+2919);
	}
	await setTimeout(async() => {
		document.getElementById("img04").style.visibility = "visible";
	},2919);
	for(let i=0;i<500;i++){
		await setTimeout(async() => {
			document.querySelector(".tapiFoucs").style.filter = "blur("+(i*0.1).toString()+"px)";
			document.getElementById("img01").style.filter = "blur("+(i*0.1).toString()+"px)";
			document.getElementById("img03").style.filter = "blur("+(i*0.1).toString()+"px)";
		},i+3119);
	}
	await setTimeout(async() => {
		document.querySelector(".tapiFoucs").remove();
		document.getElementById("img01").remove();
		document.getElementById("img03").remove();
	},3619);
	await setTimeout(async() => {
		document.querySelector(".tapiFoucs0").style.visibility = "visible";
	},3619);
	await setTimeout(async() => {
		document.getElementById("img06").style.visibility = "visible";
	},3619);
	for(let i=0;i<500;i++){
		await setTimeout(async() => {
			document.querySelector(".tapiFoucs0").style.filter = "blur("+(20-i*0.1).toString()+"px)";
			document.getElementById("img05").style.opacity = (i*0.02).toString();
		},i+3619);
	}
	for(let i=0;i<900;i++){
		await setTimeout(async() => {
			document.getElementById("img06").style.marginLeft = (76-i*0.05).toString()+"%"
		},i+3619);
	}
	for(let i=0;i<300;i++){
			await setTimeout(async() => {
				document.getElementById("img06").style.filter = "blur("+(i*0.2).toString()+"px)";
			},i+6119);
		}
	await setTimeout(async() => {
		document.querySelector(".tapiFoucs0").remove();
	},6119);
	await setTimeout(async() => {
		document.getElementById("img06").remove();
	},6619);
	await setTimeout(async() => {
		document.getElementById("img04").remove();
	},8619);
	await setTimeout(async() => {
		document.getElementById("img05").remove();
	},10619);
	await setTimeout(async() => {
		document.getElementById("img04").style.marginTop = "30%";
	},6619);
	let junmp = 0
	let tims = 0
	for(let i=0;i<2000;i++){
		if (tims === 0){
			await setTimeout(async() => {
				if (junmp <=100){
					document.getElementById("img04").style.marginTop = (30-junmp*0.1).toString()+"%";
					junmp += 1;
				}	else{
					junmp = 0;
				}
			},i+6119);
		}
			tims += 1;
		if(tims>=5){
			tims = 0;
		}
		await setTimeout(async() => {
			document.getElementById("img04").style.marginLeft = (30-i*0.03).toString()+"%";
		},i+6119);
		}
		for(let i=0;i<1000;i++){
				await setTimeout(async() => {
						document.getElementById("img05").style.opacity = (1-i*0.001).toString();
				},i+6619);
		}
		await setTimeout(async() => {
			document.getElementById("Hao").style.visibility = "visible";
		},6619);
		for(let i=0;i<4000;i++){
				await setTimeout(async() => {
						document.getElementById("Hao").style.filter = "blur("+(80-i*0.02).toString()+"px)";
				},i+6619);
		}
		for(let i=0;i<5000;i++){
				await setTimeout(async() => {
						document.getElementById("do").style.left = (0-i*0.01).toString()+"%";
						document.getElementById("doer").style.left = (50+i*0.01).toString()+"%";
						document.getElementById("do").style.opacity = (1-i*0.0002).toString();
						document.getElementById("doer").style.opacity = (1-i*0.0002).toString();
				},i+12619);
		}
		for(let i=0;i<5000;i++){
				await setTimeout(async() => {
						document.getElementById("Hao").style.filter = "blur("+(i*0.02).toString()+"px)";
						document.getElementById("imger").style.filter = "blur("+(i*0.01).toString()+"px)";
				},i+21619);
		}
		await setTimeout(async() => {
						document.getElementById("do").remove();
						document.getElementById("doer").remove()},21619);

						await setTimeout(async() => {
										document.getElementById("Hao").remove()},26619);
										for(let i=0;i<5000;i++){
												await setTimeout(async() => {
														document.getElementById("gallsWind").style.opacity = (i*0.0002).toString();
												},i+26619);
										}
										await setTimeout(async() => {
														document.getElementById("gallsWind").style.opacity = 1.0;},31619);
}
var wc = new WebSocket("ws://"+document.domain+":1919/stock")
wc.onopen = function(){
??????wc.send("hello");
}
wc.onmessage = async(e)=>{
??????console.log(e.data)
if(e.data==="?????????,???????????????"){
	document.querySelector(".tit1").innerHTML = "?????????????????????????????????3G?????????"
}
if(e.data.split(",")[1]==="oNtrue" && document.querySelector("#waring").innerHTML !== "" && document.getElementById("chat").innerHTML !== ""){
	document.cookie = e.data.split(",")[0]+"="+e.data.split(",")[1]+';path="/"'
	document.querySelector(".tit1").innerHTML = "???????????????"
	for(let i=0;i<=1500;i++){
		await setTimeout(async() => {			
			document.querySelector(".dickinput").style.opacity = (1-i*0.001).toString()
			document.querySelector(".dickinput0").style.opacity = (1-i*0.001).toString()
			document.querySelector(".tit").style.opacity = (1-i*0.001).toString()
			document.querySelector(".?????????").value = (i*0.001).toString()
			document.querySelector(".button0").style.opacity = (1-i*0.001).toString()
			document.querySelector(".dickinput").style.filter = "blur("+(i*0.002).toString()+"px)";
			document.querySelector(".dickinput0").style.filter = "blur("+(i*0.002).toString()+"px)";
			document.querySelector(".tit").style.filter = "blur("+(i*0.002).toString()+"px)";
			document.querySelector(".button0").style.filter = "blur("+(i*0.002).toString()+"px)";
		},i);
	}
		await setTimeout(async() => {
			document.querySelector(".tit0").innerHTML = "???????????????"
		},2000);
		for(let i=0;i<=1000;i++){
			await setTimeout(async() => {			
				document.querySelector(".tit1").style.opacity = (1-i*0.001).toString()
				document.querySelector(".tit0").style.opacity = (1-i*0.001).toString()
				document.querySelector(".?????????").style.opacity = (1-i*0.001).toString()
			},3000+i);
		}
		await setTimeout(async() => {
			document.querySelector(".tit0").remove()
			document.querySelector(".?????????").remove()			
			document.querySelector(".dickinput").remove()
			document.querySelector(".dickinput0").remove()			
			document.querySelector(".tit").remove()
			document.querySelector(".button0").remove()
			document.querySelector("#waring").remove()
					document.querySelector("#waring0").style.width="20%"
		},4000);
}
}
wc.onclose = function(e){
??????//??????????????????????????????????????????????????????????????????onclose??????
??????console.log("close");
}
wc.onerror = function(e){
??????//????????????????????????????????????????????????????????????????????????onerror??????
??????console.log(e);
}
async function WC(){
if(document.querySelector(".dickinput").value.indexOf(",")!==-1&&document.querySelector(".dickinput0").value == ""){
    document.querySelector(".dickinput").value = ""
    alert("??????????????????????????????")
}
if(document.querySelector(".dickinput0").value.indexOf(",")!==-1&&document.querySelector(".dickinput0").value == ""){
    document.querySelector(".dickinput0").value = ""
    alert("??????????????????????????????")
}
if(document.querySelector(".dickinput").value !== "" && document.querySelector(".dickinput0").value !== ""){
let WC = "userName="+document.querySelector(".dickinput").value+",passWD="+document.querySelector(".dickinput0").value;
wc.send(WC)
}
}
async function anime(){
	const pandas = document.cookie.split(";");
	const atimeForUs =new Date().getTime()
	if (pandas[0].split("=")[1]==="oNtrue"){
		document.querySelector("#waring").remove()
		document.querySelector("#waring0").style.width="20%"
		document.getElementById("chat").innerHTML = ""
	}else{
		document.getElementById("chat").innerHTML = `<h1 id="tit0" class="tit0">capital?????????????????????????????????????????????</h1>
			<meter value="0.0" class="?????????"></meter>
			<h1 class="tit1">????????????:????????????</h1>`
		document.getElementById("waring").innerHTML = `
		<h1 class="tit">??????</h1>
		<input type="text" class="dickinput" placeholder="??????"/>
		<input type="text" class="dickinput0" placeholder="??????"/>
			<button id="button0" class="button0" onclick="WC()">Link start!!!????????????</button>
		</div>		`
		// await rmcapital()
		var uuz = document.querySelector(".imageMeassge2");  
					
					     uuz.ondragenter = function(e){  
					         e.preventDefault();  
					     }  
					
					     uuz.ondragover = function(e){  
					         e.preventDefault();  
					         this.innerHTML = '?????????';  
							 setTimeout(async() => {
								 document.querySelector(".imageMeassge2").innerHTML = '????????????:<br/>????????????????????????<br/>??????????????????<br/>?????????????????????????????????????????????';  
							 },10000);
					    }  
					
					     uuz.ondragleave = function(e){  
					         e.preventDefault();  
					         this.innerHTML = '????????????:<br/>????????????????????????<br/>??????????????????<br/>?????????????????????????????????????????????';  
					     }  
					
					     uuz.ondrop = function(e){  
					         e.preventDefault();  
					
					         var upfile = e.dataTransfer.files[0]; //??????????????????????????????(??????????????????)  
					         var formdata = new FormData();  
					         var xhr = new XMLHttpRequest();  
					         formdata.append('upfile', upfile); //???????????????????????????name???upfile 		 
					         xhr.open("post","http://"+document.domain+":1919/upload");
					         xhr.onreadystatechange = function(){ 
					             if(this.readyState==4){
					                 if(this.status==200){ //????????????  
					                     document.querySelector(".imageMeassge2").innerHTML = '????????????:??????';
					                 }else{  
					                     alert('????????????,??????????????????????????????');  
					                 }
					             }
					         }  
					
					         xhr.send(formdata);  
					     }  
	}
}

