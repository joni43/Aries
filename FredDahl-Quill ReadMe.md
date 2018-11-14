FredDahl-Quill ReadMe – Grupp Projekt 1 – Aries

Beskrivning:
Det här är en ReadMe för branchen FredDahl-Quill som är en del av grupp projekt 1 – Aries. Syftet med branchen är att testa funktionalitet för att göra en Rich Text Editor 
med Quill biblioteket. Den första implementeringen (commiten) är avsiktligt minimalistisk i funktionalitet men väl kommenterad för att funktionaliteten ska vara lätt att 
förstå och merga in i andra delar av projketet. 
ReadMe-filen beskriver i nuläget i övrigt endast uppbyggnad och användning då inga installation krävs eller dependencies finns som inte redan är inkluderade.i 

I version 0.2 (den tredje GitHub commiten) så har mer Quill-funktionalitet lagts till, kommentarer har förbättrats.

Uppbyggnad:
De lokala filerna i branchen är index.html, style.css och javascript.js. Index.html består av ett html-boilerplate och hämtar Bootstrap CSS & JS samt Quill CSS & JS biblioteken
externt via länkar. Den semantiska uppbyggnaden i HTML-dokumentet (index.html) är en omslutande div med boostrap-klassen ”container”. Vars inre består av en section som innehåller
två div:ar med Bootstrap-klasserna flex-row vilka strukturerar innehållet på sidan (innehållet i den andra row:en placeras under den första). 
Den första row-div:en innehåller ett tom div-tag med ID ”editor-container”, ID:et används för att placera resultatet av Quill-konstruktorn (som finns i javascript.js) på sidan (det fyller div-taggen). 
I row:en under så finns en button med Bootstrap-klassen "btn btn-primary submit" och egenskapen onclick vilken kör saveNote() funktionen som återfinns i javascript.js. SaveNote() funktionen
loggar innehållet från Quill-text fältet till consolen.
För mer specifik information, se kommentarer i index.html och javascript.js.
