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
	
	
	//-------------------------------------------------------------------------------------
	// Sex Position Card Expander
		
	$('.pos-img').on('click', function(){
		alert('test');
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
		'Samen een hobby delen is belangrijk voor een gezonde relatie, waar of niet waar?',
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
		'Wel of geen borsthaar?',
		'Zou jij je partner helpen epileren en puisten uitdrukken?',
		'Je partner \'moet\' goede, kusbare lippen hebben. Eens of oneens?',

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
		'Wordt jij snel geil?',
		'Heb jij een spannende plek om seks te hebben waar je wel eens over fantaseert?',
		'Vind jij praten over seks moeilijk?',
		'Vind jij praten over seks een belangrijk onderdeel?',
		
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
		'Je partner heeft veel vrienden van het andere geslacht. Wat vind je hier van?',
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
		'Heb je ooit therapie gehad?',
		'Wat zou je binnen 5 jaar willen bereiken?',
		'Zou je nog gevoelens kunnen ontwikkelen voor iemand waar je in het verleden mee gezoend hebt?',
		'Zou je kinderen willen? Zo ja, wanneer?',
		
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
		'Waar kan jij wakker van liggen?',
		'Waar haal jij veel energie uit?',
		'Hoe zou jij jezelf omschrijven?',
		'Welk onderwerp wil je liever niet in een gesprek behandelen?',
		'Waar praat jij het liefst over?',
		'Wat is jouw favoriete cadeau om te krijgen?',
		'Wat is jouw favoriete bloem?',
		'Wat is jouw favoriete gebak?',
		'Ben jij meer van het appen of het bellen? Waarom?',
		
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
		'Laat je date jouw favoriete top 3 liedjes luisteren en beoordelen. Vertel bij elk nummer waarom deze in jouw top 3 staat.',
		
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
	
	// Creation of Sex Positions array
	var cardsSexPos = randomSexPosNoRepeats([
		// array with a lot of strings
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Aries</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/02_Aries.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Capricorn</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/03_Capricorn.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Cowgirl</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Oasis</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/04_Oasis.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Backstroke</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/05_Backstroke.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Midnight</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/06_Midnight.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral, Right Angle</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Table</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">London Bridge</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/07_LondonBridge.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Face to Face</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Fallen Warrior</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/08_FallenWarrior.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Man on Top</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Shallow</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Car Mechanic</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/09_CarMechanic.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li><li class="pos-extra"><b>Accessory: </b>Bed</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Joystick</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/10_Joystick.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Shallow</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Bicycle</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/11_Bicycle.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Necktie</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/12_Necktie.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>From Behind</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Wedge</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/13_Wedge.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Couch/Sofa</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Louise</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/14_Louise.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Face to Face</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Shallow</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Taurus</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/15_Taurus.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Piledriver</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/16_Piledriver.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Man on Top</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Libido</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/17_Libido.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Beautiful View</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/18_BeautifulView.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Right Angle</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Ribbon</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/19_Ribbon.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Rodeo</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/20_Rodeo.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Face to Face</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Necklace</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/21_Necklace.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Dragon</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/22_Dragon.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Apologies</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/23_Apologies.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral/Anus Stimulation</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li><li class="pos-extra"><b>Accessory: </b>Table & Chair/Bed</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">The Hook</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/24_TheHook.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Back Alley</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/25_BackAlley.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Feeder</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/32_Feeder.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral/Anus Stimulation</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>None</li><li class="pos-extra"><b>Accessory: </b>Chair/Bed</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Knot</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/22_TEMP_Knot.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Cowgirl</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Need for Speed</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/23_TEMP_NeedForSpeed.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Chair/Couch/Sofa/Fitness Ball</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Iron</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/24_TEMP_Iron.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Shallow</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Rear Admiral</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/35_RearAdmiral.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Merger</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/26_TEMP_Merger.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Face to Face</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Chair/Couch/Sofa/Bed</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Tamer</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/27_TEMP_Tamer.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Moan</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/28_TEMP_Moan.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Blowjob</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>None</li><li class="pos-extra"><b>Accessory: </b>Chair/Couch/Sofa/Fitness Ball</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Adventurer</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/29_TEMP_Adventurer.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Man on Top</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Couch/Sofa</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Crouching Tiger</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/30_TEMP_CrouchingTiger.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Cowgirl</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Delicacy</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/31_TEMP_Delicacy.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li class="pos-extra"><b>Accessory: </b>Chair & Table</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Strum</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/32_TEMP_Strum.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Criss Cross</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Shallow</li><li class="pos-extra"><b>Accessory: </b>Chair</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Chameleon</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/33_TEMP_Chameleon.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">XXX</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/34_TEMP_XXX.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Man on Top</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li class="pos-extra"><b>Accessory: </b>Chair/Couch/Sofa/Bed</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Symphony</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/35_TEMP_Symphony.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Blowjowb</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Inquisitor</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/36_TEMP_Inquisitor.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Captain</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/37_TEMP_Captain.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Grasshopper</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/38_TEMP_Grasshopper.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">G-Force</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/39_TEMP_GForce.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Right Angle</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li class="pos-extra"><b>Accessory: </b>Chair/Couch/Sofa/Bed/Fitness Ball</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Hungry Hippo</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/40_TEMP_HungryHippo.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Missionary</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/41_TEMP_Missionary.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Spread Eagle</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/42_TEMP_SpreadEagle.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Jellyfish</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/43_TEMP_Jellyfish.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Face to Face</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Shallow</li><li><b>Lead: </b>Man & Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Juicy Ass</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/44_TEMP_JuicyAss.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Doggy</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Bed</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Catapult</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/45_TEMP_Catapult.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Bed</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Hood</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/46_TEMP_Hood.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Cave</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/47_TEMP_Cave.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Doggy</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Exciting Game</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/48_TEMP_ExcitingGame.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Doggy</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li class="pos-extra"><b>Accessory: </b>Chair</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Prone Bone</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/49_TEMP_ProneBone.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>From Behind</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Backdoor</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/50_TEMP_Backdoor.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Criss Cross</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Hot Lunch</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/51_TEMP_HotLunch.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral/Anus Stimulation</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Bow & Arrow</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/52_TEMP_BowAndArrow.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Doggy</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Nun</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/53_TEMP_Nun.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Cowgirl</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Japan</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/54_TEMP_Japan.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Criss Cross</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li class="pos-extra"><b>Accessory: </b>Chair</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Close Breathing</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/55_TEMP_CloseBreathing.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Face to Face</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li class="pos-extra"><b>Accessory: </b>Chair</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Hero</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/56_TEMP_Hero.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">She Wolf</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/57_TEMP_SheWolf.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Face to Face</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Twix</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/58_TEMP_Twix.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Face to Face</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Shallow</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Belt</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/59_TEMP_Belt.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>From Behind</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Liana</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/60_TEMP_Liana.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Face to Face</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Shallow</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Pokemon</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/61_TEMP_Pokemon.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Cowgirl</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Chair/Couch/Sofa/Fitness Ball</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Narcissus</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/62_TEMP_Narcissus.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Hummingbird</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/63_TEMP_Hummingbird.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Face to Face</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Couch/Sofa/Fitness Ball</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Lapdance</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/64_TEMP_Lapdance.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>From Behind</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Shallow</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Whisper</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/65_TEMP_Whisper.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Blowjob</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Open Book</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/66_TEMP_OpenBook.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Face to Face</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Unicorn</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/67_TEMP_Unicorn.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Tornado</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/68_TEMP_Tornado.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Criss Cross</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Keeper</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/69_TEMP_Keeper.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Right Angle</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Bed/Low Table</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Launch Pad</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/71_TEMP_LaunchPad.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Stuntman</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/70_TEMP_Stuntman.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Right Angle</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Bed/Fitness Ball</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Doggy</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/36_Doggy.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Doggy/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Cowgirl</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/29_Cowgirl.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Cowgirl</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Reverse Cowgirl</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/30_ReverseCowgirl.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Cowgirl</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Kneeling Cowgirl</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/28_KneelingCowgirl.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Cowgirl</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Kneeling Reverse Cowgirl</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/27_KneelingReverseCowgirl.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Cowgirl</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Feeding Squat</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/26_FeedingSquat.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Facesitting</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/37_Facesitting.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Reverse Facesitting</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/38_ReverseFacesitting.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Fountain</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/31_Fountain.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Pretzel</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/33_Pretzel.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Cowgirl</li><li class="pos-difficulty"><b>Difficulty: </b>Hard</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Stacking</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/34_Stacking.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle to Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Humpback</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/39_Humpback.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">21</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_21.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Anna</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_Anna.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Bed</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Anvil</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_Anvil.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal, Clitoral/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Ass In The Air</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_AssInTheAir.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal, Clitoral/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Belly To Belly</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_BellyToBelly.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Right Angle</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Shallow to Middle</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Big L</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_BigL.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Man On Top</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle to Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Bulldog</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_Bulldog.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Doggy</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Butterfly</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_Butterfly.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Cowgirl</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Cat</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_Cat.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Man on Top</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">CEO</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_CEO.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Doggy</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Coitus From The Back</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_CoitusFromTheBack.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>From Behind</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Cradle</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_Cradle.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Deep Stick</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_DeepStick.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Downward Dog</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_DownwardDog.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Doggy</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Dream</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_Dream.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>From Behind</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Chair</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Bed Edge</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_BedEdge.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Bed/Couch/Sofa</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Face Off</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_FaceOff.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Bed/Couch/Sofa</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Face to Face</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_FaceToFace.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Fantasy</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_Fantasy.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral/Anus Stimulation</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Gemeni</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_Gemeni.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Hot Seat</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_HotSeat.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Bed/Couch/Sofa/Chair</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Hucklebuck</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_Hucklebuck.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Insatiable Clitoris </li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_InsatiableClitoris.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Italian Chandelier </li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_ItalianChandelier.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Legs Up</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_LegsUp.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Magic Carpet</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_MagicCarpet.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">New Mattress</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_NewMattress.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Next to the Bed</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_NextToBed.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>From Behind</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle to Deep</li><li class="pos-extra"><b>Accessory: </b>Bed/Couch/Sofa</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Ninth Posture</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_NinthPosture.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Doggy</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Bed/Couch/Sofa</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Nirvana</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_Nirvana.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle to Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Open Winged</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_OpenWinged.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Classic Oral</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_ClassicOral.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Rainbow Arch</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_RainbowArch.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle to Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Reclining Opposites</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_RecliningOpposites.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Vaginal/Anal</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Rocket Sled</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_RocketSled.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Bed/Couch/Sofa</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Scissor</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_Scissor.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Splitting Bamboo</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_SplittingBamboo.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle to Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Spoon</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_Spoon.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>From Behind</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Middle to Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Squat Down</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_SquatDown.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Cowgirl</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Super Ball</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_SuperBall.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Cowgirl</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Table Top</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_TableTop.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Right Angle</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li class="pos-extra"><b>Accessory: </b>Table</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Teabag</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_Teabag.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Blowjob</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li><li class="pos-extra"><b>Accessory: </b>Bed/Couch/Sofa</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">The Crab</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_TheCrab.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Right Angle</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Traction Control</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_TractionControl.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Doggy</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Man</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Traction Control</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_TractionControl.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Winged Back Chair</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spos/Pos_WingedBackChair.jpg" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Deep</li><li><b>Lead: </b>Woman</li></ul></div></div>',
		
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Bedside Meal</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/40_BedsideMeal.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Leanback</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/41_Leanback.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Airplane</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/42_Airplane.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Sunkiss</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/43_Sunkiss.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li><li class="pos-extra"><b>Accessory: </b>Table/Counter</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Butt Out</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/44_ButtOut.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral, Clitoral</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>None</li><li class="pos-extra"><b>Accessory: </b>Bed/Couch/Sofa</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">High Groung</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/45_HighGround.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Fingering</li><li class="pos-difficulty"><b>Difficulty: </b>Medium</li><li class="pos-pen"><b>Penetration: </b>Finger, Middle</li><li class="pos-extra"><b>Accessory: </b>Bed/Couch/Sofa</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Lap Puppy</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/46_LapPuppy.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Fingering</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>Finger, Middle</li><li class="pos-extra"><b>Accessory: </b>Bed/Couch/Sofa</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Room Service</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/47_RoomService.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Fingering</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>Finger, Middle</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Enterance</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/48_Enterance.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Fingering</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>Finger, Middle</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">Wide Bird</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/49_WideBird.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Fingering</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>Finger, Middle</li><li class="pos-extra"><b>Accessory: </b>Bed</li></ul></div></div>',
		'<div class="pos-card"><ul class="pos-card-list"><li class="pos-title">69</li><li class="pos-image"><div class="pos-img-wrapper"><img class="pos-img" src="../images/spositions/01_69.png" alt="position"></li></ul><ul class="pos-description"><li class="pos-type"><b>Type: </b>Oral</li><li class="pos-difficulty"><b>Difficulty: </b>Easy</li><li class="pos-pen"><b>Penetration: </b>None</li></ul></div></div>'
	]);
	
	
	// error message when getting to the final question
	var errorMessage = "Je hebt alle kaarten gehad! Zodra we nieuwe vragen hebben toegevoegd, vind je dat aan de linkerkant!<br>Nog een keer spelen? Ververs de pagina!";
	
	// error message when getting to the final question
	var errorMessageSP = "Niet gevonden wat je leuk vond? Kom dan nog een keertje terug!";
	
	//-------------------------------------------------------------------------------------
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
	
	//-------------------------------------------------------------------------------------
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
	
	//-------------------------------------------------------------------------------------
	// Sex Positions Cards
	function randomSexPosNoRepeats(array) {
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

	//-------------------------------------------------------------------------------------
	// Click handler for the button - Date Cards
	$('.question-btn-wrapper').on('click', function() {
		// Get the next random element from the chooser
		let result = cardsDate();
		$('.hideCardText').css({'display':'none'});
		$(this).html('Volgende Kaart!');

		if (result !== null) {
			// Update the HTML with the randomly chosen string
			$(".cardTextArea .cardText").html(result);
		} else {
			$(".cardTextArea .cardText").html(errorMessage);
		}
	});

	//-------------------------------------------------------------------------------------
	// Click handler for the button - Partner Cards
	$('.partner-question-btn-wrapper').on('click', function() {
		// Get the next random element from the chooser
		let result = cardsPartner();
		$(this).html('Volgende Kaart!');

		if (result !== null) {
			// Update the HTML with the randomly chosen string
			$(".cardTextArea .cardText").html(result);
		} else {
			$(".cardTextArea .cardText").html(errorMessage);
		}
	});

	//-------------------------------------------------------------------------------------
	// Click handler for the button - Sex Positions Cards
	$('.sexpos-question-btn-wrapper').on('click', function() {
		// Get the next random element from the chooser
		let result = cardsSexPos();
		$(this).html('Volgende Positie!');
		/*$('.sexpos-enlarge-image').toggleClass('btn-hidden');*/

		if (result !== null) {
			// Update the HTML with the randomly chosen string
			$(".cardTextArea .cardText").html(result);
		} else {
			$(".cardTextArea .cardText").html(errorMessageSP);
		}
	});

	//-------------------------------------------------------------------------------------
	// Click handler for the 'Enlarge Image' button - Sex Positions Cards
	/*$('.sexpos-enlarge-image').on('click', function() {
		alert('what?');
		$('img.pos-img').css('tranform','scale(200%)');
	});*/
});