# pfimi-website

Kirchenwebsite-Projekt 2025: ein Übungsprojekt vom 6. Juni 2025 (Webseite «Chile a de Jona» / Pfimi Rüti). Ich habe es gemacht, um HTML, CSS und JavaScript praktisch zu üben.

## Inhalt
Der Code liegt im Ordner `pfimi-site/`:
- **Startseite** (`pfimiruti.html`) mit drei Bereichen: Willkommen/Gottesdienst/Kalender, News, Sonntagsprogramm
- **Kontaktseite** (`contact/pfimiruti.html`) mit Leitbild, Team und Adresse

## Funktionen
- Umschaltbare Tabs in jedem Bereich (JavaScript, ein gemeinsamer Code für alle Bereiche)
- Karten mit Hover-Effekt, die ein Popup mit Details öffnen und wieder schliessen
- Navigation mit sanftem Scrollen zu den Bereichen
- Eingebettete Inhalte: YouTube-Video und Veranstaltungskalender (church.tools)

## Technik
HTML5, CSS3 und JavaScript (ohne Frameworks), Schrift «Montserrat Alternates» von Google Fonts.

## Idee
Die Seite sollte auf jedem Bildschirm gleich aussehen. Dafür habe ich alle Grössen in `vw` (Prozent der Fensterbreite) angegeben, damit alles proportional mitskaliert.

## Was ich gelernt habe
- Die Seite skaliert zwar proportional, aber die Schrift wird auf kleinen Bildschirmen zu klein.
- Elemente mit `position: absolute` hängen von der Seitenhöhe ab und verschieben sich, wenn sich die Schrift ändert.
- Ich habe das in den Karten behoben, indem ich sie relativ zu ihrem Bereich positioniere.

## Was ich verbessern würde
- Layout mit Flexbox oder Grid statt `position: absolute`
- Schriftgrössen mit `clamp()` und Media Queries für schmale Bildschirme
- Semantische HTML-Tags (`header`, `nav`, `main`) und Alternativtexte für Bilder

## Hinweis
Bilder und Videos sind nicht im Repository enthalten.
