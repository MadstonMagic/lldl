$(document).ready( function() {
	
	$(function () {
	    setInterval(function () {
		    $('.heart-1').fadeOut(350).delay(2000).fadeIn(300).fadeOut(350).delay(1254);
	        $('.heart-2').fadeOut(500).fadeIn(220).fadeOut(220).delay(1920);
	        $('.heart-3').fadeOut(250).delay(1800).fadeIn(620).fadeOut(1150).delay(800);
	        $('.heart-4').fadeOut(800).fadeIn(800).fadeOut(3100).delay(950);
	        $('.heart-5').fadeOut(475).fadeIn(360).fadeOut(350).delay(2350).delay(1000);
	        $('.heart-6').fadeOut(650).fadeIn(1100).fadeOut(480).delay(950);
	        $('.heart-7').fadeOut(300).fadeIn(750).fadeOut(200).delay(550).delay(600);
	        $('.heart-8').fadeOut(450).fadeIn(700).fadeOut(880).delay(350);
	    }, 1);
    });
	
	
	
	
	
	
	// Disclaimer: Help from ChatGPT
	// Creation of Date array
	var cardsDate = randomDateNoRepeats([
		// array with a lot of strings
		// Activities
		'Liever een lange wandeling in de natuur of losgaan op een feestje',
		'Graag een dagje weg of bankhangen?',
		'Liever met de auto op vakantie of het vliegtuig?',
		'Als je op vakantie gaat, liever een hotel of (kamperen) in de natuur?',
		'Liever een boek of een film?',
		'Zou je nog op reis willen? Zo ja waar naar toe?',
		'Vind je het belangrijk dat je partner wilt reizen?',
		'Samen een hobby delen is belangrijk voor een goede relatie, waar of niet waar?',
		'Kaas- of chocoladefondue?',
		'Liever een week samen op een onbewoond eiland of op een berg?',
		'Wat was je eerste gedachte bij onze eerste date?',
		'Hoe ziet jouw ideale vakantie er uit?',
		'Als je partner haar-/zichzelf niet lekker voelt, leg jij haar/hem dan goed in de watten?',
		'Je bent ongesteld, verwacht je van je partner dat hij je verwend? En zo ja, wanneer zou je hem dan verwennen?',
		
		// Visuals
		'Ben ik knapper dan je ex?',
		'Wat heb ik, wat je ex(en) niet had(den)?',
		'Val ik een binnen het type waar jij op valt?',
		'Als je mijn uitstraling zou moeten omschrijven, hoe zou je dat dan omschrijven?',
		'Liever wat spek aan het bot of een afgetrainde sportschool-fanaat?',
		'Borsten of billen en waarom?',
		'Zijn opgespoten lippen, borsten of billen een afknapper?',
		'Humor is belangrijker dan een \'goed\' lichaam.',
		'Wel of geen make-up?',
		'Heb je een piercing of zou je er een willen? Zo ja, waar?',
		'Heb je een tatoeage of zou je er een willen? Zo ja, waar?',
		'Stel je partner heeft tepelpiercings, is dit een afknapper?',
		'Piercings op de intieme zones, wat vind je hiervan?',
		'Is uiterlijk net zo belangrijk als karakter?',
		'Wat zou jij aan je uiterlijk willen veranderen?',
		'Vind je mij aantrekkelijk in mijn pyjama?',
		'Wat is je favoriete lichaamstype?',
		'Een vrouw moet lange haren hebben, eens of oneens?',
		'Een vrouw met lange nepnagels is een afknapper, eens of oneens?',
		'Wat vind je van een bril bij je partner?',
		'Een partner die constant op slippers of crocs loopt, is dit een afknapper?',
		'Wel of geen baard?',
		'Ben je ergens onzeker over? Zo ja, waarover?',
		'Is een \'goede\' kledingstijl belangrijk?',
		'Wat is jouw favoriete kledingstuk?',
		'Op welk onderdeel van je lichaam ben je het meest trots?',
		'Noem beiden 3 dingen die je aantrekkelijk aan elkaar vindt.',
		'Badpak of bikini?',
		'Wat vind je van een man in pak?',
		'Wat vind je van een vrouw in een mooie jurk?',

		// Bedtime
		'Een partner die niet kan communiceren of slecht is in bed?',
		'Welk lichaamsdeel vind je het mooiste aan jezelf?',
		'Welk lichaamsdeel, van wat je nu ziet, vind je het mooiste aan je date?',
		'Liever knuffelend in slaap vallen of voor het slapen gaan nog seks?',
		'Ben jij van het onderzoeken/experimenteren tussen de lakens?',
		'Heb je de behoefte om je date te bespringen?',
		'Heb je ooit een pikante foto gestuurd &#233;n ontvangen?',
		'Samen intieme video\'s kijken, kan dat?',
		'Is zelfgenot tijdens je relatie een vorm van vreemdgaan?',
		'Is seks meer voor de lust of de liefde?',
		'Hoe ziet jouw ideale bedpartner er uit?',
		'Hoe ziet jouw ideale sekspartij er uit?',
		'Handboeien of geblinddoekt in de slaapkamer?',
		'Geef jouw bedkunsten een cijfer.',
		'Heb je thuis seksspeeltjes liggen of ooit gehad?',
		'Streel je date over zijn/haar rug, hoe voelt dit?',
		'Hoe blaas jij iemand omver met een zoen?',
		'Val je liever knuffelend in slaap of met een nachtkus?',
		'Hoe belangrijk vind jij seks en intimiteit in een relatie?',
		'Liever met je vrienden of je partner over seks praten?',
		'Is orale seks belangrijk tijdens een sekspartij?',
		'Hoe lang moet het voorspel gemiddeld duren?',
		'Is een \'goed\' lichaam belangrijk voor goed genot in een seksleven?',
		'Lichamelijk contact is net zo belangrijk als goede communicatie, eens of oneens?',
		'Wat is jouw body-count?',
		'Heb je al met veel mensen gezoend?',
		'Een partner die een hoog bodycount gehalte heeft, is dit een afknapper?',
		'Zuigzoenen, ja of nee?',
		'Wel of geen haar op rond het geslachtsdeel?',
		'Wat is je favoriete manier van intimiteit?',
		'Vind je sfeer maken v&#243;&#243;r seks een belangrijk onderdeel?',
		'Speelt humor een rol in jouw seksleven?',
		'Hoe vaak wil je seks per week?',
		'Wat vind je van praten over seksuele verlangens?',
		'Heb jij een ondeugende kant in bed die je niet verwacht?',
		'Wat is een fantasie dat je nog wilt uitproberen?',
		'Seks met de lichten aan of uit?',
		'Hoe cre&#235;er jij een intieme sfeer?',
		'Wat vind jij van af en toe een mep op je billen?',
		'Ben je meer van het geven of nemen tussen de lakens?',
		'Is penetratie het belangrijkste van seks?',
		'Slikken, ja of nee?',
		'Stel je partner zou tijdens het klaarkomen squirten, wat vind je daar van?',
		'Denk en doe jij veel aan masturbatie?',
		
		//Relationship
		'Hecht je veel waarde aan monogamie?',
		'Is zoenen met een ander tijdens je relatie vreemdgaan?',
		'Liever een massage met of zonder massageolie?',
		'Hoe ziet je ideale weekend er uit met je partner?',
		'Stel je partner komt in een rolstoel terecht, hoe zou je daar mee om gaan?',
		'Hoe stel jij je partner op zijn/haar gemak?',
		'Ben jij een dominant type of laat jij je liever iets leiden?',
		'Hoe vaak denk je aan intimiteit? En heb je daar vandaag al aan gedacht?', 
		'Geef ik je een goed gevoel van binnen?',
		'Vind jij jezelf goed in bed?',
		'Ben jij wel of niet dominant in bed?',
		'Wat vind je er van als je partner veel vrienden heeft van het andere geslacht?',
		'Wil je straks zelf kinderen?',
		'Je partner snurkt, is dit een afknapper?',
		'Wat vind je belangrijk in een relatie?',
		'Stel je partner wil uit gaan met vrienden of vriendinnen, vind je dat ok&#233;?',
		'Wat vind je er van als je partner het niet erg vindt zijn/haar emoties te laten zien?',
		'Welk romantisch gebaar betekend veel voor je?',
		'Wat wil je altijd al met een partner samen doen?',
		'Hoe vier je een jubileum in je relatie?',
		'Vind je het aantrekkelijk als je partner een string draagt?',
		'Wat vind je van een open-relatie?',
		'Samen in het weekend borrelen met een borrelplank? Ja of nee?',
		'Wanneer is het een goed moment om de ouders van elkaar te ontmoeten?',
		
		
		//Future / Past
		'Huisje Boompje Beestje of vrij in de wereld?',
		'Wat is je grootste droom als geld geen probleem was?',
		'Heb je een herinnering uit je jeugd wat je misschien zou willen veranderen als dat kon?',
		'Zou je voor een dag van geslacht willen wisselen? Zo ja, wat zou je dan doen?',
		'Wat is jouw meest beschamende moment dat je kan bedenken?',
		'10 minuten gratis winkelen, waar zou je dit doen?',
		'Liever in de toekomst kunnen kijken of het verleden kunnen veranderen?',
		'Hoe zie jij jezelf over 10 jaar?',
		'Nooit meer vlees of nooit meer vis eten?',
		'Ben je wel eens gekwetst in de liefde? Zo ja, hoe ging je daar mee om?',
		'Hoe ga je om met conflicten in je relatie?',
		
		// Characteristics
		'Wat is een eigenschap dat je <span style="font-weight:bold;">niet</span> wilt zien in je partner?',
		'Intelligentie of uiterlijk?',
		'Is roken een afknapper om een eerste date af te wijzen?',
		'Wat vind je belangrijker? Een goed gebit, een verzorgde huid of een goede lichaamsgeur?',
		'Liever je partner die oud kaal wordt of op jonge leeftijd grijs?',
		'Liever iemand die gelovig is of iemand die zich met complottheori&#235;n bezighoudt?',
		'Liever iemand die er minder knap is maar vol met humor, of heel erg knap maar een saaie kwal?',
		'Op welk eigenschap ben je zelf erg trots?',
		'Wat zoek je in een partner?',
		'Welke eigenschappen zoek je in een partner?',
		'Zit je vaak op je telefoon of niet?',
		'Ochtend- of avondmens?',
		'Wat maakt jou uniek?',
		'Zou jij jezelf als "open-minded" omschrijven? Zo ja in welke zin?',
		'Puur, melk of witte chocolade?',
		'Waar kan je s\'nachts voor wakker gemaakt worden?',
		'Wat is jouw spirit animal?', 
		'Wat is de gekste gebeurtenis die je hebt meegemaakt in groepsverband?',
		'Wat is je grootste angst?',
		'Sporten of lekker eten?',
		'Liever slim of grappig zijn?',
		'Heb je liever een tatoeage of een piercing?',
		'Ben jij een knuffelbeer(tje)?',
		'Heb jij trekjes van jezelf waar de ander van af moet weten?',
		'Is leeftijdsverschil een probleem?',
		'Is een politieke mening belangrijk in een relatie?',
		'Wanneer vind jij jezelf sexy?',
		'Kan jij goed de eerste stap zetten?',
		'Wat vind je van netflix & chill?',
		'Wat vind je van samen douchen?',
		'Je date gebruikt drugs, is dit een afknapper?',
		'Liever een partner die ietwat ADHD heeft of iemand die misschien iets te rustig is?',
		'Is jouw glas halfvol of voor de helft leeg?',
		'Liever een hond of kat?',
		'Als je partner te dik begint te worden, wil je dit diegene vertellen? Zo ja, hoe dan?',
		'Liever wijn of (speciaal)bier?',
		'Is romantiek een belangrijke eigenschap in je partner?',
		'Vind je het belangrijk dat je partner alcohol drinkt?',
		'Pikant getinte grappen maken is een vorm van flirten, waar of niet waar?',
		'Ik vind het belangrijk dat een partner (goed) kan koken. Waar of niet waar?',
		'Ben jij jaloers aangelegd?',
		'Als je nog aan het daten bent, mag je dan ook met anderen afspreken?',
		'Wat is je favoriete liedje en waarom?',
		'Hoe laat jij zien dat je ge&#239;nteresseerd bent?',
		'Wat zijn voor jou de belangrijkste red-flags?',
		'Is het Friet of Patat?',
		'Een man met of zonder sierraden?',
		'Op welke haarkleur val jij het meest?',
		'Iemand die (veel) energiedranken drinkt, wat vind je daarvan?',
		'Stel je date is vegetari&#235;r, is dit in een afknapper?',
		'Hoe ga jij met stiltes om?',
		'Hoe zenuwachtig was je bij onze eerste date?',
		'Hoe laat jij aan je date merken dat je gevoelens (hebt) krijgt?',
		'Een partner die veel frisdrank drinkt is een afknapper.',
		'Wat als tijdens het daten, de ander met anderen gaat zoenen?',
		'Was jij zenuwachtig voor onze eerste date?',
		'Ben je bang voor spinnen?',
		'Ben je bang voor insecten?',
		'Ben jij populair op social media?',
		
		// Do something
		'Geef je date een compliment over iets dat hij/zij niet verwacht',
		'Geef elkaar een welgemeend compliment!',
		'Houd elkaars handen vast en kijk elkaar voor 1 minuut diep in de ogen aan. Wat voel je?',
		'Zou je jouw date nu een kus willen geven?',
		'Laat zien wat er op de laatste foto staat die je hebt gemaakt.', 
		'Beoordeel de billen van je date!',
		'Omschrijf je date in 3 woorden.',
		'Teken bij elkaar met een pen iets op de arm betreft jouw gevoelens voor de ander.',
		'Hoe zou je reageren als ik je nu zou zoenen?',
		'Geef je date een zoen en vertel wat je voelt.',
		'Waar keek je het eerste naar bij je date?',
		'Kan je date tegen kietelen? Probeer 3 plekken uit!',
		
		// Jokers
		'<span class=\"cardJoker\"><b>Joker kaart!</b> Zoen je date tussen nu en 30 minuten op een overwacht moment!</span>',
		'<span class=\"cardJoker\"><b>Joker kaart!</b> Geef je date onverwachts een compliment!</span>',
		'<span class=\"cardJoker\"><b>Joker kaart!</b> Je hoeft niks te doen, laat je date jou een zoen geven!</span>'
	]);
	
	// Creation of Partner array
	var cardsPartner = randomPartnerNoRepeats([
		// array with a lot of strings
		'Kijk elkaar voor 1 minuut diep in de ogen aan en probeer elkaar te verleiden',
		'Doen of de Waarheid? <b>Doen: </b>Streel je partner over zijn/haar been tot je bij de intieme zone komt. <b>Waarheid: </b> Hoe vaak heb je aan seks gedacht vandaag?',
		'Doen of de Waarheid? <b>Doen :</b>Geef je partner een intieme zoen. <b>Waarheid: </b>Ben je ooit betrapt tijdens seks?',
		'Welke fetish wil jij graag met mij nog uitproberen?',
		'Wat zou je tussen de lakens nog willen proberen?',
		'Probeer je partner in de stemming te krijgen, maar stop te vroeg.',
		'Beschrijf jouw geslachtsdeel',
		'Ben jij fan van beffen/gebeft worden?',
		'Ben jij fan van pijpen/gepijpt worden?',
		'Lig jij liever boven- of onderop?',
		'Wat is jouw favoriete standje?',
		'Doen of de Waarheid? <b>Doen: </b>Ga in je ondergoed naast je partner liggen. <b>Waarheid: </b>Hoe vind jij je partner op zijn/haar sexiest?',
		'Hoe ziet jouw toekomst er uit met mij?',
		'Welke fantasie&#235;n willen jullie nog ontdekken? Zeg het tegelijkertijd op 3.',
		'Hoe vind jij het fijn om intiem aangeraakt te worden?',
		'Wat zorgt ervoor dat jij altijd in de stemming komt?',
		'Welke sexuele fantasie heb jij nog niet gedeeld met mij?',
		'Wil je graag seksspeeltjes gebruiken tijdens seks met je partner, en niet alleen tijdens masturbatie?',
		'Hoe kunnen wij het hoogtepunt leuker maken voor ons beiden?',
		'Ben jij open-minded genoeg om andere dingen te proberen? (Bijvoorbeeld anaal, een trio of met speeltjes)',
		'Wat vind je van orgasme-tegenhoudende technieken?',
		'Doen of de Waarheid? <b>Doen: </b>Trek het ondergoed van elkaar uit en ga naakt verder. <b>Waarheid: </b> Wat is de meest gekke plek waar je seks hebt gehad?',
		'Wat vind je van intieme spelletjes? Bijvoorbeeld strippoker of naakt twister.',
		'Wat vind jij van van mijn geslachtsdeel? En andersom.',
		'Heb jij gevoelige tepels? Test het uit!',
		'Zoen je partner sensueel in de nek en let op zijn/haar ademhaling en/of hartslag',
		'Doe je veel aan masturbatie?',
		'Massage met of zonder happy-ending?',
		'Wat doe je als je partner vraagt om op zijn gezicht te zitten?',
		'',
	]);
	
	
	// error message when getting to the final question
	var errorMessage = "Je hebt alle kaarten gehad! Zodra we nieuwe vragen hebben toegevoegd, vind je dat aan de linkerkant!<br>Nog een keer spelen? Ververs de pagina!";
	
	// Date Cards
	function randomDateNoRepeats(array) {
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
	
	// Partner Cards
	function randomPartnerNoRepeats(array) {
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

	// Click handler for the button - Date Cards
	$('.question-btn-wrapper').on('click', function() {
		// Get the next random element from the chooser
		let result = cardsDate();
		$('.hideCardText').css({'display':'none'});

		if (result !== null) {
			// Update the HTML with the randomly chosen string
			$(".cardTextArea .cardText").html(result);
		} else {
			$(".cardTextArea .cardText").html(errorMessage);
		}
	});


	// Click handler for the button - Partner Cards
	$('.partner-question-btn-wrapper').on('click', function() {
		// Get the next random element from the chooser
		let result = cardsPartner();

		if (result !== null) {
			// Update the HTML with the randomly chosen string
			$(".cardTextArea .cardText").html(result);
		} else {
			$(".cardTextArea .cardText").html(errorMessage);
		}
	});
});