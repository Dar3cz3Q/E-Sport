// <![CDATA[
Array.prototype.random = function(limit)
{
	if (typeof limit == 'undefined' || limit < 0) limit = 1;
	else if (!limit) limit = this.length;
	for (var i = 0, source = this, target = new Array(), n = source.length; i < limit && n > 0; i++)
	{
		do { var index = Math.random(); } while (index == 1);
		index = Math.floor(index * n);
		target.push(source[index]);
		source[index] = source[--n];
	}
	return target;
}

document.write(new Array(

'<u><b>Tutaj kupisz grę:</u></b> <br> <a href="http://store.steampowered.com/" target="_blank" class="tilelinkhtml2"><i>Steam</i></a>',
'<u><b>Tutaj kupisz grę:</u></b> <br> <a href="https://www.origin.com/pol/pl-pl/store" target="_blank" class="tilelinkhtml2"><i>Origin</i></a>',
'<u><b>Tutaj kupisz grę:</u></b> <br> <a href="http://eu.blizzard.com/pl-pl/" target="_blank" class="tilelinkhtml2"><i>Blizzard</i></a>',
'<u><b>Tutaj kupisz grę:</u></b> <br> <a href="https://www.rockstargames.com/" target="_blank" class="tilelinkhtml2"><i>Rockstar</i></a>',
'<u><b>Tutaj kupisz grę:</u></b> <br> <a href="https://www.gog.com/" target="_blank" class="tilelinkhtml2"><i>GOG</i></a>',
'<u><b>Tutaj kupisz grę:</u></b> <br> <a href="https://muve.pl/" target="_blank" class="tilelinkhtml2"><i>Muve</i></a>',
'<u><b>Tutaj kupisz grę:</u></b> <br> <a href="https://boxoffstore.pl/pl/" target="_blank" class="tilelinkhtml2"><i>BoxOffStore</i></a>',
'<u><b>Tutaj kupisz grę:</u></b> <br> <a href="https://www.g2a.com/" target="_blank" class="tilelinkhtml2"><i>G2A.pl</i></a>',
'<u><b>Tutaj kupisz grę:</u></b> <br> <a href="https://www.ubisoft.com/pl-PL/" target="_blank" class="tilelinkhtml2"><i>Ubisoft</i></a>',

).random().join(''));
// ]]>
		