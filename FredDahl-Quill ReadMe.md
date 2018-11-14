FredDahl-Quill ReadMe � Grupp Projekt 1 � Aries

Beskrivning:
Det h�r �r en ReadMe f�r branchen FredDahl-Quill som �r en del av grupp projekt 1 � Aries. Syftet med branchen �r att testa funktionalitet f�r att g�ra en Rich Text Editor 
med Quill biblioteket. Den f�rsta implementeringen (commiten) �r avsiktligt minimalistisk i funktionalitet men v�l kommenterad f�r att funktionaliteten ska vara l�tt att 
f�rst� och merga in i andra delar av projketet. 
ReadMe-filen beskriver i nul�get i �vrigt endast uppbyggnad och anv�ndning d� inga installation kr�vs eller dependencies finns som inte redan �r inkluderade.i 

I version 0.2 (den tredje GitHub commiten) s� har mer Quill-funktionalitet lagts till, kommentarer har f�rb�ttrats.

Uppbyggnad:
De lokala filerna i branchen �r index.html, style.css och javascript.js. Index.html best�r av ett html-boilerplate och h�mtar Bootstrap CSS & JS samt Quill CSS & JS biblioteken
externt via l�nkar. Den semantiska uppbyggnaden i HTML-dokumentet (index.html) �r en omslutande div med boostrap-klassen �container�. Vars inre best�r av en section som inneh�ller
tv� div:ar med Bootstrap-klasserna flex-row vilka strukturerar inneh�llet p� sidan (inneh�llet i den andra row:en placeras under den f�rsta). 
Den f�rsta row-div:en inneh�ller ett tom div-tag med ID �editor-container�, ID:et anv�nds f�r att placera resultatet av Quill-konstruktorn (som finns i javascript.js) p� sidan (det fyller div-taggen). 
I row:en under s� finns en button med Bootstrap-klassen "btn btn-primary submit" och egenskapen onclick vilken k�r saveNote() funktionen som �terfinns i javascript.js. SaveNote() funktionen
loggar inneh�llet fr�n Quill-text f�ltet till consolen.
F�r mer specifik information, se kommentarer i index.html och javascript.js.
