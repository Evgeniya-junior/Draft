function showMenu(id)
{
	if (id == 1)
	{
		document.getElementById('menu_bottom').innerHTML = '<ul><li>Перейти на главную страницу</li></ul>';
	}
	if (id == 2)
	{
		document.getElementById('menu_bottom').innerHTML = 
		'<ul>'+
		'<li><a href="pod.html">Подшипники</a></li>'+
		'<li><a href="torm.html">Тормозные колодки</a></li>'+
		'<li><a href="pomp.html">Водяные помпы</a></li>'+
		'<li><a href="scep.html">Детали сцепления</a></li>'+
		'<li><a href="svechi.html">Свечи накаливания</a></li>'
		+'</ul>';
	}
	if (id == 3)
	{
		document.getElementById('menu_bottom').innerHTML = '<ul><li>Список продукции</li></ul>';
	}
	if (id == 4)
	{
	document.getElementById('menu_bottom').innerHTML = 
	'<ul><li><a href="http://www.LKS.by/" target="_blank">Официальный сайт</a></li></ul>';
	}	
}
function clearMenu()
{
	document.getElementById('menu_bottom').innerHTML = '';
}


function LoadXMLDoc(name)
{
	var XMLDoc;

	XMLDoc = document.implementation.createDocument("","",null);
	XMLDoc.async = false;
	XMLDoc.load(name);
	return(XMLDoc);
}

function LoadXMLDoc(name)
{
	var XMLDoc;

	XMLDoc = document.implementation.createDocument("","",null);
	XMLDoc.async = false;
	XMLDoc.load(name);
	return(XMLDoc);
}

function display(fname, sname)
{
	xml = LoadXMLDoc(fname);
	xsl = LoadXMLDoc(sname);
	xsltPr = new XSLTProcessor();
	xsltPr.importStylesheet(xsl);
	resultDoc = xsltPr.transformToFragment(xml, document);
	document.getElementById("albums").innerHTML = "";
	document.getElementById("albums").appendChild(resultDoc);
}

function album(id)
{
	if (id==1) { display("xml/disc.xml", "xml/disc.xsl"); }
	if (id==2) { display("xml/disc.xml", "xml/choose1.xsl"); }
	if (id==3) { display("xml/disc.xml", "xml/choose2.xsl"); }
	if (id==4) { display("xml/disc.xml", "xml/choose3.xsl"); }
	if (id==5) { display("xml/disc.xml", "xml/choose4.xsl"); }
	if (id==6) { display("xml/disc.xml", "xml/choose5.xsl"); }
}