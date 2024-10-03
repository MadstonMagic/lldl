$(document).ready( function() {
	
	
	
	// Disclaimer: Help from ChatGPT
	// Creation of the array
	var chooser = randomNoRepeats([
		// array with 150 strings
		'Liever een lange wandeling in de natuur of losgaan op een feestje',
		'Ben ik knapper dan je ex',
		'Een partner die niet kan communiceren of slecht is in bed?',
		'Huisje Boompje Beestje of vrij in de wereld?',
		'Intelligentie of uiterlijk?',
		'Geef je date een compliment over iets dat hij/zij niet verwacht',
		'Kijk elkaar voor 1 minuut diep in de ogen aan. Hoe voelt dit?',
		'Is roken een afknapper om een date af te wijzen?',
		'Wat heb ik, wat je ex(en) niet hadden?',
		'Zou je jouw date nu een kus willen geven?',
		'Welk lichaamsdeel vind je het mooiste aan jezelf?',
		'Welk lichaamsdeel, van wat je nu ziet, vind je het mooiste aan je date?',
		'Liever knuffelend in slaap vallen of voor het slapen gaan nog seks?',
		'Liever wat spek aan het bot of een magere sportschool-fanaat?',
		'Geef jouw bedkunsten een cijfer.',
		'Ben jij van het onderzoeken/experimenteren tussen de lakens?',
		'Welke fetish wil jij graag met je partner uitproberen?',
		'Heb je de behoefte om je date te bespringen?',
		'Graag een dagje weg of bankhangen?',
		'Liever met de auto op vakantie of het vliegtuig?',
		'Hecht je veel waarde aan monogamie?',
		'Heb je ooit een spicy foto gestuurd én ontvangen?',
		'Wat vind je belangrijker? Een goed gebit, een verzorgde huid of een goede lichaamsgeur?',
		'Is zoenen met een ander tijdens je relatie vreemdgaan?',
		'Samen sexuele video\'s kijken, kan dat?',
		'Is zelfgenot tijdens je relatie een vorm van vreemdgaan?',
		'Liever je partner die oud kaal wordt of op jonge leeftijd grijs?',
		'Liever iemand die gelovig is of iemand die zich met complottheori&#235;n bezighoudt?',
		'Stel je blijft slapen op de eerste date, moet de man dan op de bank?',
		'Seks voor de lust of de liefde?',
		'Hoe ziet jouw ideale bedpartner er uit?',
		'Wat zou je tussen de lakens nog willen proberen?',
		'Hoe ziet jouw ideale sekspartij er uit?',
		'Liever een massage met of zonder massageolie?',
		'Val ik een binnen het type waar jij op valt?',
		'Borsten of billen en waarom?',
		'Liever iemand die er minder knap is maar vol met humor, of heel erg knap maar zonder humor?',
		'Zijn opgespoten lippen, borsten of billen een afknapper?',
		'Op welk eigenschap ben je zelf erg trots?',
		'Zit je vaak op je telefoon of niet?',
		'Wat is je grootste droom als geld geen probleem was?',
		'Liever een boek of een film?',
		'Heb je een herinnering uit je jeugd wat je misschien zou willen veranderen als dat kon?',
		'Welke eigenschappen zoek je in een partner?',
		'Hoe ziet je ideale weekend er uit met je partner?',
		'Zou je nog op reis willen, zo ja waar naar toe?',
		'Humor is belangrijker dan een \'goed\' lichaam.',
		'Wel of geen make-up?',
		'Heb je een piercing of zou je er een willen? Zo ja, waar?',
		'Een partner met een goed inkomen of met veel liefde voor jou?',
		'Ochtend- of avondmens?',
		'Zou je voor een dag van geslacht willen wisselen?',
		'Wat zou jij aan je uiterlijk willen veranderen?',
		'Wat maakt jou uniek?',
		'Wat is jouw meest beschamende moment dat je kan bedenken?',
		'Is uiterlijk net zo belangrijk als karakter?',
		'Zou jij jezelf als "open-minded" omschrijven? Zo ja in welke zin?',
		'Puur, melk of witte chocolade?',
		'Waar kan je s\'nachts voor wakker gemaakt worden?',
		'Handboeien of geblinddoekt in de slaapkamer?',
		'Wat is jouw spirit animal?',
		'Laat zien wat er op de laatste foto staat die je hebt gemaakt.',
		'Laat zien wat je meest beluisterde liedje is.',
		'Wat is de vreemdste situatie die je tijdens een date/relatie ooit hebt meegemaakt?',
		'Wat is je grootste angst?',
		'10 minuten gratis winkelen, waar zou je dit doen?',
		'Geef elkaar een welgemeend compliment!',
		'Heb je thuis seksspeeltjes liggen of ooit gehad?',
		'Liever slim of grappig zijn?',
		'Als je op vakantie gaat, liever een hotel of (kamperen) in de natuur?',
		'Heb je liever een tatoeage of een piercing?',
		'Liever in de toekomst kunnen kijken of het verleden kunnen veranderen?',
		'Sporten of lekker eten?',
		'Stel je partner komt in een rolstoel terecht, blijf je dan bij hem/haar?',
		'Als je mijn uitstraling zou moeten omschrijven, hoe zou je dat dan omschrijven?',
		'Ben jij een knuffelbeer(tje)?',
		'Streel je date over zijn/haar gezicht, hoe voelt dit?',
		'Hoe blaas jij iemand omver met een zoen?',
		'Hoe stel jij je partner op zijn/haar gemak?',
		'Val je liever knuffelend of met een nachtkus in slaap?',
		'Hoe belangrijk vind jij seks en intimiteit in een relatie?',
		'Ben jij een dominant type of laat jij je liever iets leiden?',
		'Hoe zie jij jezelf over 10 jaar?',
		'Beoordeel de billen van je date!',
		'Vind je mij aantrekkelijk in mijn pyjama?',
		'Heb jij trekjes van jezelf waar de ander van af moet weten?',
		'Is leeftijdsverschil een probleem?',
		'Wat is je favoriete lichaamstype?',
		'Is een politieke mening belangrijk in een relatie?',
		'Nooit meer vlees of vis eten?',
		'Is orale seks belangrijk tijdens een sekspartij?',
		'Hoe lang moet het voorspel gemiddeld duren?',
		'Omschrijf je date in 3 woorden.',
		'Teken bij elkaar met een pen iets op de arm betreft jouw gevoelens over de ander.',
		'Piercings op de intieme zones, wat vind je hiervan?',
		'Een vrouw moet lange haren hebben, eens of oneens?',
		'Een vrouw met lange nepnagels is een afknapper, eens of oneens?',
		'Wat zoek je in een partner?',
		'Wanneer vind jij jezelf sexy?',
		'Wat is jouw body-count?',
		'Vind je het belangrijk dat je partner wilt reizen?',
		'Hoe vaak denk je aan seks, en heb je daar vandaag al aangedacht?',
		'Geef ik je een goed gevoel van binnen?',
		'Hoe zou je reageren als ik je nu zou zoenen?',
		'Vind jij jezelf goed in bed?',
		'Is smakken tijdens het eten een afknapper?',
		'Wat kies je, Doen of de Waarheid? <span style="font-weight:bold;">Doen</span>: Geef je date een zoen. <span style="font-weight:bold;">Waarheid</span>: Ben je ooit betrapt tijdens seks?',
		'Als je partner naakt slaapt maar jij niet, is dat een probleem?',
		'Sex op de eerste date, ja of nee?',
	]);

	function randomNoRepeats(array) {
		var copy = array.slice(0); // Make a copy of the original array

		return function() {
			if (copy.length === 0) {
				return null; // Stop once all items are picked
			}
			var index = Math.floor(Math.random() * copy.length);
			var item = copy[index];
			copy.splice(index, 1); // Remove the picked item
			return item;
		};
	}

	// Click handler for the button
	$('.question-btn-wrapper').on('click', function() {
		// Get the next random element from the chooser
		let result = chooser();

		if (result !== null) {
			// Update the HTML with the randomly chosen string
			$(".cardTextArea .cardText").html(result);
		} else {
			// When all elements have been picked, display a message
			$(".cardTextArea .cardText").html("Je hebt alle kaarten gehad! Zodra we nieuwe vragen hebben toegevoegd, vind je dat aan de linkerkant!<br>Nog een keer spelen? Ververs de pagina!");
		}
	});
});