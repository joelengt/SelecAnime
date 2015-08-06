function PersonajesAnime(n,a,e,g)
{
	var Estructurapj=
	{
		nombre:n,
		anime:a,
		edad:e,
		genero:g
	};
	return Estructurapj;
}
function Inicio()
{
	var selec=Number(prompt("Escoja Personaje"+"\n"+"miku: 1"+"\n"+"konata: 2"+"\n"+"Mashiro: 3"+"\n"+"Kanda: 4"+"\n"+"Yuko: 5"+"\n"+"Yui: 6"+"\n"));
	var imagen=document.createElement("img");
	imagen.src="unnamed.jpg";
	var n=document.getElementById("name");
	var a=document.getElementById("anime");
	var e=document.getElementById("edad");
	var g=document.getElementById("gene");
	
	var miku= PersonajesAnime("Miku","Vocaloid",17,"Mujer");
	var konata= PersonajesAnime("Konata","Lucky Star",19,"Mujer");
	var mashiro= PersonajesAnime("Mashiro","Sakurasou no pet no kanjo",17,"Mujer");
	var kanda= PersonajesAnime("Kanda","Sakurasou no pet no kanjo",17,"Varon");
	var yuko= PersonajesAnime("Yuko","Nichijoi",14,"Mujer");
	var yui= PersonajesAnime("Yui","Nichijoi",14,"Mujer");


	if(selec==1)
	{
		imagen.src="1.jpg";
		n.innerHTML+=" "+miku.nombre;
		a.innerHTML+=" "+miku.anime;
		e.innerHTML+=" "+miku.edad;
		g.innerHTML+=" "+miku.genero;
	}
	else if(selec==2)
	{
		imagen.src="2.png";
		n.innerHTML+=" "+konata.nombre;
		a.innerHTML+=" "+konata.anime;
		e.innerHTML+=" "+konata.edad;
		g.innerHTML+=" "+konata.genero;
	}
	else if(selec==3)
	{
		imagen.src="3.jpg";
		n.innerHTML+=" "+mashiro.nombre;
		a.innerHTML+=" "+mashiro.anime;
		e.innerHTML+=" "+mashiro.edad;
		g.innerHTML+=" "+mashiro.genero;
	}
	else if(selec==4)
	{
		imagen.src="4.jpg";
		n.innerHTML+=" "+kanda.nombre;
		a.innerHTML+=" "+kanda.anime;
		e.innerHTML+=" "+kanda.edad;
		g.innerHTML+=" "+kanda.genero;
	}
	else if(selec==5)
	{
		imagen.src="5.png";
		n.innerHTML+=" "+yuko.nombre;
		a.innerHTML+=" "+yuko.anime;
		e.innerHTML+=" "+yuko.edad;
		g.innerHTML+=" "+yuko.genero;
	}
	else if(selec==6)
	{
		imagen.src="6.png";
		n.innerHTML+=" "+yui.nombre;
		a.innerHTML+=" "+yui.anime;
		e.innerHTML+=" "+yui.edad;
		g.innerHTML+=" "+yui.genero;
	}
	else
	{
		imagen.src="maxresdefault.jpg";
		alert("No encontrado")
	}
	document.getElementById("imgAnime").appendChild(imagen);

}

