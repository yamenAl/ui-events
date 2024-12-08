
# User Interface Events

Een oefening in ui-events waarin je experimenteert met muis, keyboard, touch én apparaat interactie en de afhandeling daarvan door middel van JavaScript.

## Context

Deze deeltaak hoort bij Sprint 5 - Fix the Flow. Dit is een deeltaak die je individueel uitvoert, en waarop je feedback krijgt van docenten en mentoren.

In het college S05W2-01-User-Interface-Events wordt deze opdracht uitgelegd.

Deze deeltaak hoort bij de leertaak: [Fix the flow - Interactive website](https://github.com/fdnd-task/fix-the-flow-interactive-website)


## Doel van deze opdracht

Op websites zijn veel verschillende vormen van interactie met gebruikers mogelijk. Deze worden *User Interface Events* (UI Events) genoemd. Als frontender wordt je geacht deze _events_ te beheersen. In onderstaande afbeelding zie je 20 verschillende links, aan tenminste 10 daarvan ga jij een gebruikersinteractie toevoegen.

![](screenshot.png)

In deze opdracht experimenteer je met verschillende UI events en gaandeweg leer je de mogelijkheden van de browser beter kennen.


## Aanpak

Fork allereerst deze repository naar jouw eigen GitHub account, en Clone deze naar je eigen computer. Zet Issues aan, publiceer de repository alvast op GitHub Pages, en zorg dat je een live link bij About hebt staan.

De eerste interactie (met een _click_ event) hebben we al voor je voorgedaan: als je op het 12e linkje (“Interaction”) klikt, springt deze omhoog. Je gaat nu voor de overige links ook interacties bedenken en maken.

Omdat deze deeltaak uit maximaal 19 kleinere taken (er zijn namelijk nog 19 elementen!) bestaat, doorloop je voor elke nieuwe interactie die je gaat maken de development lifecycle. Je weet ondertussen dat je dit bij elke opdracht, issue of taak meerdere malen doet. We hebben de stappen hieronder uitgeschreven.


### Analyseren

Je onderzoekt kort welke interactie je nu gaat maken, en denkt alvast na over hoe je dat zou kunnen doen. Bijvoorbeeld “Laat een link bibberen met CSS”.

Gebruik de bronnen hieronder om een nieuw _UI Event_ te kiezen, die je interessant lijkt, en bepaal welke van de links je die interactie laat _triggeren_. Bijvoorbeeld “Laat de eerste link bibberen als ik erop dubbelklik”.

Maak een nieuw issue aan op jouw ui-events repository, en geef deze de titel van je UI event, het linkje dat deze triggert, en de interactie (bijvoorbeeld “Dubbelklik event op 1e link laat deze bibberen”). Link naar specifieke bronnen die je denkt nodig te hebben.

#### Bronnen

- [7 secrets for enhancing UX with micro-interactions @ dreamerux.com](https://www.dreamerux.com/articles/35y5fyrr4pifhbondc7r636nkvyoqg)
- [Mouse Events in Javascript @ Kirupa](https://www.kirupa.com/html5/mouse_events_in_javascript.htm)
- [Working with the Keyboard @ Kirupa](https://www.kirupa.com/html5/keyboard_events_in_javascript.htm)
- [Introduction to events @ MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [UI Events @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events)
- [DeviceMotionEvent @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)


### Ontwerpen

Onderzoek hoe je de interactie zou kunnen maken met CSS en JavaScript. Als je helemaal zonder ideeën zit, kunnen onderstaande bronnen helpen.

Maak eerst een snelle schets van de interactie en feedback/feedforward die je de gebruiker wilt geven.

Maak een breakdownschets om te onderzoeken welke JS en CSS je nodig hebt.

Voeg je schetsen toe als comment op je issue, beschrijf de interactie die je wilt maken, en link naar bronnen die je gebruikt hebt of gaat gebruiken.

#### Bronnen

- [Interactions: thinking & sketching them. @ UX-Planet](https://uxplanet.org/interactions-thinking-sketching-them-f3d4c1d11149)
- [How to Apply Disney’s 12 Principles of Animation to UI Design @ interaction-design.org](https://www.interaction-design.org/literature/article/ui-animation-how-to-apply-disney-s-12-principles-of-animation-to-ui-design)


### Bouwen

Implementeer de interactie door `/assets/script/main.js` en `/assets/style/style.css` aan te vullen met jouw code. Denk telkens na over nieuwe namen voor CSS classes en variabelen in JS, zodat je eerder gemaakte code niet breekt!

#### In HTML & CSS

Voeg tijdelijk een nieuwe class, die de interactie goed beschrijft (bijvoorbeeld `class="bibberen"`), toe aan een HTML element;

Schrijf in CSS de regels om de interactie werkend te maken.

Haal de tijdelijke class weer weg uit de HTML.

#### In JavaScript

Bedenk een naam die nog niet in gebruik is en _declareer_ die met `let` (bijvoorbeeld `let bibberLink`).

Selecteer het juiste element uit de DOM met behulp van `document.querySelector()` en bewaar die in de variabele die je net gemaakt hebt.

Gebruik `addEventListener()` om een event aan een element te koppelen, en gebruik hiervoor het event dat je hebt uitgezocht (bijvoorbeeld `dblclick`).

Gebruik `classList.toggle()` om een andere class aan een element toe te voegen in de _callback functie_ (bijvoorbeeld `bibberLink.classList.toggle('bibberen')`.

ProTip: Gebruik bij elke stap `console.log()` om te controleren of alles werkt zoals je verwacht dat het werkt.

#### Bronnen

- [Keyframe animaties @ MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
- [Animations @ web.dev](https://web.dev/learn/css/animations)
- Video: [… if you only know one thing about JavaScript … @ CSS-Tricks](https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/)
- Guide: [Mouse Events in Javascript @ Kirupa](https://www.kirupa.com/html5/mouse_events_in_javascript.htm)
- Guide: [Working with the Keyboard @ Kirupa](https://www.kirupa.com/html5/keyboard_events_in_javascript.htm)
- Guide: [Introduction to events @ MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- Reference: [querySelector @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- Reference: [classList @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) 
- Reference: [UI Events @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events)
- Reference: [DeviceMotionEvent @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)


### Integreren

Commit jouw code met de interactie die je zojuist geïmplementeerd hebt, en noem in je commit message je interactie en het issue nummer waar je aan werkt (bijvoorbeeld “Bibberen als ik dubbelklik (#1)”.

Push daarna je code naar GitHub.


### Testen

Test in een browser of de versie die je net online gezet hebt ook via GitHub Pages werkt.

Open jouw repository via de directe link en check of alles werkt.

Laat jouw interactie ook testen door een klasgenoot.

Schrijf als reactie op je issue heel kort op wat je opviel bij het testen.

Sluit daarna het issue, en ga door met de volgende interactie (door opnieuw te Analyseren).


## Definition of done

Deze opdracht is done als:

- [ ] Je hebt minstens tien interactie experimenten in code geïmplementeerd;
- [ ] Alle schetsen voor interacties zijn opgenomen in je issues;
- [ ] Bij elke schets staat een korte beschrijving van de interactie;
- [ ] Bij elke schets staat een korte uitleg hoe je code werkt;
- [ ] Je werk is te bekijken via GitHub Pages;

(Extra credits!)

- [ ] Je hebt interactie experimenten voor alle twintig elementen geïmplementeerd;
- [ ] Je hebt ingewikkelde device-orientation events geïmplementeerd;

(Eeuwige roem!!)

- [ ] Je hebt een shake interactie geïmplementeerd waarmee alle elementen in het scherm naar beneden vallen;
- [ ] De shake interactie werkt in zowel landscape als portrait oriëntatie.

