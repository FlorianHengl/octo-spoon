// ================================================================
// MISSIONS DATA - Zentrale Verwaltung aller Missionen
// ================================================================

const MISSIONS_DATA = {
  "missions": {
    "0": {
      "storageKey": "Mission_0_Training",
      "title": "Training",
      "timers": {
        "totalTime": 600,
        "critical": 60
      },
      "penalties": {
        "hint": 30,
        "wrongCode": 5
      },
      "validation": {
        "forbiddenChars": "[^0-9a-zA-Z]",
        "transform": "uppercase"
      },
      "codes": {
        "1": "21490",
        "2": "12148",
        "3": "01912"
      },
      "numberToWord": {
        "1": "EINS",
        "2": "ZWEI",
        "3": "DREI"
      },
      "hints": {
        "1": [
          "1.\tUnsere Experten vor Ort vermuten, dass es hier offenbar um das Morse-Alphabet geht. Im ausgedruckten Dokument befindet sich eine Übersetzungstabelle!",
          "2.\tVerwenden Sie die Morse-Tabelle, um die Zeichen zu übersetzen. Das erste Zeichen ist offenbar ein 'Z'!",
          "3.\tIn jeder Zeile scheint eine Zahl buchstabiert zu werden. In der ersten Zeile: 'ZWEI'.",
          "4.\tArbeiten Sie sich langsam durch den Morse-Code. Schreiben Sie jede Übersetzung über den jeweiligen Code. Die zweite Reihe scheint 'EINS' zu bedeuten.",
          "5.\tEs gibt nicht viele Zahlen, die mit 'V' und 'N' anfangen - vielleicht lässt sich hier sogar etwas Zeit einsparen?",
          "6.\tDie dritte Reihe: 'VIER'.",
          "7.\tReihe Nummer vier: 'NEUN'.",
          "8.\tSie sollten insgesamt fünf Ziffern - '21490' decodiert haben. Geben Sie diese ein und drücken Sie OK!"
        ],
        "2": [
          "1.\tUnsere Rätsel-Experten vor Ort vermuten, dass der Code für die zweite Phase in diesem Puzzle versteckt ist. Schneiden Sie die einzelnen Teile aus!",
          "2.\tUnsere Experten weisen darauf hin, dass es hilfreich sein könnte, sich zunächst an der dicken, schwarzen Umrandung zu orientieren.",
          "3.\tDie erste Zeile des Puzzles scheint 'CODE:' zu ergeben, was unsere Vermutung bestätigt. Wir arbeiten an der zweiten Zeile!",
          "4.\tWir haben nun Informationen über den Code an sich. Die Zahl unten links scheint eine '1' zu sein.",
          "5.\tEs scheint, als wäre die einzige Zahl, die neben die '1' unten links passt, die '2'.",
          "6.\tEine weitere '1' scheint der '2' zu folgen.",
          "7.\tDie vierte Zahl ist eine '4'.",
          "8.\tDie letzte Ziffer ist eine '8'. Der vollständige Code lautet also: '12148'. Geben Sie ihn hier auf dem Handy ein, und beginnen Sie mit der nächsten Phase!"
        ],
        "3": [
          "1.\tUnsere Experten waren sich unsicher, ob es sich hier überhaupt um ein Rätsel handelt, aber '21610' scheint nicht der gesuchte Code zu sein!",
          "2.\tUns ist aufgefallen, dass sich oberhalb und unterhalb der '21610' Striche und Punkte befinden.",
          "3.\tDie Striche und Punkte scheinen Morse-Codes zu sein! Wir arbeiten an der Dechiffrierung!",
          "4.\tDer obere Morse-Code bedeutet offenbar 'UNTEN'.",
          "5.\tDer untere Morse-Code scheint 'OBEN' zu bedeuten. Was soll uns das sagen?",
          "6.\tUns ist aufgefallen, dass die Positionen von 'OBEN' und 'UNTEN' vertauscht sind.",
          "7.\tBitte versuchen Sie, das Papier zu drehen und den Code auf dem Kopf stehend zu lesen.",
          "8.\tAuf dem Kopf stehend gelesen steht dort '01912'. Das muss der Code für diese Phase sein!"
        ]
      }
    },
    "1": {
      "storageKey": "Mission_1_Bahnhof",
      "title": "Bahnhof",
      "timers": {
        "totalTime": 900,
        "critical": 60
      },
      "penalties": {
        "hint": 45,
        "wrongCode": 5
      },
      "validation": {
        "forbiddenChars": "[^0-9a-zA-Z]",
        "transform": "uppercase"
      },
      "codes": {
        "1": "52347",
        "2": "23740",
        "3": "53480",
        "4": "13654",
        "5": "32213"
      },
      "numberToWord": {
        "1": "EINS",
        "2": "ZWEI",
        "3": "DREI",
        "4": "VIER",
        "5": "FÜNF"
      },
      "hints": {
        "1": [
          "1.\tDieses Rätsel ist seltsam - es scheint keine einzige Zahl zu enthalten! Oder etwa doch?",
          "2.\tUnsere Rätselexperten vermuten, dass es hier nicht (!) darum geht, etwas zu zählen.",
          "3.\tWir haben das Rätsel einem Architekten gezeigt. Ihm fiel auf, dass die meisten Wände des Labyrinths mit den Außenwänden verbunden sind - nur wenige sind freistehend.",
          "4.\tMöglicherweise hat die Lösung etwas mit der Form der freistehenden Wände zu tun?",
          "5.\tWir sind möglicherweise auf dem richtigen Weg - die erste freistehende Wand auf dem Weg zum Ziel hat die Form einer '5'.",
          "6.\tAuf dem Weg zum Ziel ist die nächste freistehende Wand geformt wie eine '2'.",
          "7.\tDie dritte Ziffer muss eine '3' sein - das ist die Form der nächsten freistehenden Wand auf dem Weg zum Ziel!",
          "8.\tWir haben die Lösung! Vom Eingang zum Ausgang gehend haben die freistehenden Wände in diesem Labyrinth die Formen von '52347' - das muss es sein!"
        ],
        "2": [
          "1.\tDieses Rätsel sieht anders als die anderen aus. Zunächst sollten Sie es ausschneiden.",
          "2.\tUnsere Experten vermuten, dass dieses Rätsel gefaltet werden muss.",
          "3.\tEs scheint, als wäre das kleine '+' in der Mitte des Rätsels tatsächlich ein 'zentraler Punkt' der Lösung.",
          "4.\tVersuchen Sie, die vier Ecken auf das kleine '+' zu falten. Ergibt sich ein Bild?",
          "5.\tUnsere Experten konnten den ersten Teil des Rätsels lösen. ABCD sind demnach: '2374'. Aber was ist mit E?",
          "6.\tEs scheint, dass E auf der Rückseite des einmal gefalteten Rätsels zu finden ist. Vielleicht muss es erneut gefaltet werden?",
          "7.\tUnsere Experten haben die vier Ecken erneut in die Mitte gefaltet: E ist '0'! Die Lösung für diese Phase muss also '23740' sein."
        ],
        "3": [
          "1.\tDieses Rätsel scheint durch reine Logik lösbar zu sein.",
          "2.\tUnsere Experten empfehlen, Möglichkeiten mit 'bekannten' Positionen aufzuschreiben, wie etwa '0xxx5' und '5xxx0' (da '0' und '5' maximalen Abstand halten).",
          "3.\tDa die '4' rechts von der '5' steht, ist '0xxx5' keine Lösungsmöglichkeit.",
          "4.\tDie '3' muss zwischen der '4' und der '5' stehen. Das könnte bedeuten, dass der Code mit '534' beginnt.",
          "5.\tAngenommen, der Code beginnt mit '534' - dann müssen die letzten zwei Ziffern zusammengezählt '8' ergeben.",
          "6.\tUnsere Arithmetik-Experten sind sich sicher: '8' und '0' ergeben addiert '8'.",
          "7.\tDa '5' und '0' maximalen Abstand halten müssen, muss die '8' zwischen der '0' und der '4' stehen.",
          "8.\tDer Lösungscode lautet, so unsere Experten: '53480'."
        ],
        "4": [
          "1.\tDieses Rätsel dreht sich offenbar um Schach. Wir haben mit einigen Schachspielern gesprochen: Manchmal hilft es, auf die Bewegungsmuster der einzelnen Figuren zu achten.",
          "2.\tDenken Sie daran: Türme können sich nur horizontal und vertikal bewegen, Läufer lediglich diagonal. Die Dame kann beides.",
          "3.\tUnsere Experten empfehlen, dieses Rätsel zu zweit zu lösen: Eine Person liest die Spielzüge vor, eine andere zeichnet Sie auf das Spielbrett im Rätsel.",
          "4.\tUnsere Teams melden, dass das Bewegungsmuster des weißen Turms eine simple, gerade Linie nach unten ist. Es könnte also hier eine '1' gemeint sein.",
          "5.\tDer weiße Läufer scheint, so unsere Experten, mit seinen Bewegungen eine '3' zu beschreiben.",
          "6.\tEine weitere Meldung unseres Teams vor Ort: Der schwarze Läufer scheint mit seiner Bewegung eine '6' zu zeichnen.",
          "7.\tDer schwarze Turm scheint, wenn man seine Bewegung nachverfolgt, eine '5' zu beschreiben.",
          "8.\tDie weiße Dame scheint eine '4' auf das Spielbrett zu zeichnen. Das macht '13654' zur Lösung dieser Phase!"
        ],
        "5": [
          "1.\tIn diesem Rätsel scheint es um das Falten zu gehen.",
          "2.\tUnsere Astronomen vermuten, dass es bei diesem Rätsel sehr wichtig ist, die Paare von Sternen, die im Text benannt sind, präzise aufeinander zu falten.",
          "3.\tWir glauben, dass es am vielversprechendsten ist, zunächst das zuerst benannte Sternenpaar aufeinander zu falten, das Papier wieder zu entfalten und dann mit dem nächsten Paar fortzufahren.",
          "4.\tWir haben mit einem Origami-Spezialisten gesprochen. Er wies uns darauf hin, dass es möglich ist, aus fünf Falzen einen Stern entstehen zu lassen. Vielleicht sollen die fünf Falzungen, von denen im Text die Rede ist, das bewirken? Ist das die 'Supernova'?",
          "5.\tWir können bestätigen: Wird das Papier so gefaltet, wie es im Text beschrieben ist, ergibt sich aus den Falzlinien das Bild eines Sterns. Der Code für diese Phase scheint mit der Anzahl der Sterne in diesem Bild zusammen zu hängen.",
          "6.\tUnser Team vor Ort hat eine mögliche Lösung gefunden: Beginnend im Norden und im Uhrzeigersinn abgelesen: Es befinden sich 3, 2, 2, 1 und 3 Sterne in den 'Armen' des Sterns, der durch die Falzlinien sichtbar wird. Das muss die Lösung für diese Phase sein!"
        ]
      }
    },
    "2": {
      "storageKey": "Mission_2_Terminal",
      "title": "Terminal",
      "timers": {
        "totalTime": 600,
        "critical": 60
      },
      "penalties": {
        "hint": 30,
        "wrongCode": 5
      },
      "validation": {
        "forbiddenChars": "[^0-9a-zA-Z]",
        "transform": "uppercase"
      },
      "codes": {
        "1": "41821",
        "2": "84707",
        "3": "26359",
        "4": "21743",
        "5": "36250"
      },
      "numberToWord": {
        "1": "EINS",
        "2": "ZWEI",
        "3": "DREI",
        "4": "VIER",
        "5": "FÜNF"
      },
      "hints": {
        "1": [
          "1.\tEin Gedicht? Interessant. Wir haben es bereits zahllose Male gelesen ...",
          "2.\tUnsere Experten fragen sich, was der Täter hier unterstreichen wollte.",
          "3.\tEs ist möglich, dass die 'Notiz an mich selbst' des Täters etwas hiermit zu tun hat.",
          "4.\tVielleicht tragen die Wörter des Gedichts bereits die Lösung des Rätsels in sich?",
          "5.\tEinige Wörter enthalten Zahlen - aber wo ist die fünfte Zahl?",
          "6.\tVersuchen Sie es mit '41821' - also allen Zahlen, die in den Wörtern des Gedichts enthalten sind. Die erste Zahl ergibt sich aus den ersten Buchstaben jeder Zeile."
        ],
        "2": [
          "1.\tHier scheint es darum zu gehen, in diesem chaotischen Bild einen Code aufzustöbern.",
          "2.\tUnsere Teams vor Ort vermuten, dass dieses Rätsel ähnlich wie 'Malen nach Zahlen' strukturiert sein könnte.",
          "3.\tWir haben mit einem 'Malen nach Zahlen'-Spezialisten gesprochen. Es scheint notwendig zu sein, die Formen (und keine weiteren!) auszumalen, die mit 'A', 'B', 'C', 'D' und 'E' gekennzeichnet sind.",
          "4.\tUnsere Experten haben festgestellt, dass die erste Ziffer, obwohl sie nicht vollständig sichtbar ist, eine '8' zu sein scheint.",
          "5.\tSoeben haben unsere Teams eine weitere Zahl herausgefunden: Die mit 'B' beschrifteten Formen ergeben eine '4'.",
          "6.\tWir haben eine weitere Zahl! Die Felder, die mit 'C' markiert sind, ergeben eine '7'.",
          "7.\tEine weitere Zahl! Alle 'D'-Felder ergeben, wenn man sie ausmalt, die Form einer '0'.",
          "8.\tDie letzte Zahl ist eine '7' - das vermeldete soeben unser Team vor Ort! Der Code für diese Phase muss deshalb '84707' lauten."
        ],
        "3": [
          "1.\tDieses Rätsel ist anders als die anderen... die Punkte sind deutlich mit 'ABCDE' gekennzeichnet - aber wie werden daraus Zahlen?",
          "2.\tJede 'Punktwolke' hat mehr als 9 Punkte. Das bedeutet, dass es hier nicht darum gehen kann, die Punkte zu zählen.",
          "3.\tEiner unserer Experten vor Ort hat soeben seine Brille abgenommen und die Punkte betrachtet. Er ist der Meinung, dass ihm das geholfen hätte, etwas zu sehen.",
          "4.\tWir haben soeben mit einem Experten in optischer Philosophie gesprochen. Er gab uns den Hinweis, dass es bei Rätseln dieser Art ratsam sein kann, mit genügend Abstand an die Sache heran zu gehen.",
          "5.\tWir haben es selbst ausprobiert: Wenn man das Rätsel von der anderen Seite des Raumes aus betrachtet, verschmelzen die Punkte!",
          "6.\tWir haben eine Idee: Dieses Rätsel liegt möglicherweise auf der Seite.",
          "7.\tUnsere Teams haben etwas experimentiert: Wenn man das Rätsel auf die Seite dreht und von der anderen Seite des Raumes aus betrachtet wird der Code sichtbar: '26359' muss die Lösung für diese Phase sein!"
        ],
        "4": [
          "1.\tUnsere Experten sind sich sicher, dass der Erpresser uns durch den 'Hinweis' unter den Symbolen auf eine falsche Fährte führen will.",
          "2.\tUnser Team vor Ort hat sich soeben gemeldet: Diese Formen wirken - zum Teil - durchaus bekannt.",
          "3.\tWir vermuten, dass es sich bei den Formen in diesem Rätsel (da es exakt fünf Formen sind) um modifizierte Ziffern handelt.",
          "4.\tWir haben mit einem Symmetriker gesprochen - alle Formen sind symmetrisch!",
          "5.\tEiner unserer Experten vor Ort hat gerade entdeckt, dass die vierte Form wie eine '4' aussieht - nur gespiegelt!",
          "6.\tEine Erkenntnis von vor Ort: Die erste Ziffer könnte eine '2' sein - wenn man lediglich die rechte Hälfte der Form betrachtet.",
          "7.\tWir haben das gleiche Verfahren auch bei den anderen Formen angewendet und immer lediglich die Hälfte der Form betrachtet. So kann man '21743' lesen - das könnte die Lösung für diese Phase sein!"
        ],
        "5": [
          "1.\tUnsere Experten sind sich sicher, dass es bei diesem Rätsel um LCD-Displays geht. Sie schlagen vor, dass Sie das schwarze 'Display' ausschneiden und auch die inneren Segmente entfernen.",
          "2.\tEs scheint, als wäre das schwarze 'Display' exakt so hoch wie das Muster rechts breit ist. Vielleicht hilft es, das Muster auf die Seite zu drehen?",
          "3.\tDas 'Display' auf dem Muster zu platzieren erscheint ein guter Ansatz zu sein. Unsere Experten evaluieren verschiedene Wege, weiter vorzugehen.",
          "4.\tEine weitere Idee von unserem Team vor Ort: Versuchen Sie, das Display von links nach rechts über das Muster zu bewegen, in Schritten, die es in fünf gleiche Teile aufteilen.",
          "5.\tFalls das nicht funktioniert, versuchen Sie bitte, das Muster auf den Kopf zu drehen.",
          "6.\tWir haben soeben mit dem Besitzer einer LCD-Armbanduhr gesprochen. Er wies darauf hin, dass eine '0' auf so einem Display manchmal kleiner dargestellt wird, um die Lesbarkeit zu erhöhen.",
          "7.\tUnser Team hat soeben einen Teil der Lösung erarbeitet! Wenn man das Display von links nach rechts über das Muster bewegt, kann man '362' lesen - das muss der Anfang des gesuchten Codes sein!",
          "8.\tDer Code endet mit '50' - das hat unser Team soeben herausgefunden! Die '0' war lediglich kleiner dargestellt. Damit ergibt sich '36250' als Lösung für diese Phase!"
        ]
      }
    },
    "3": {
      "storageKey": "Mission_3_Fahrstuhl",
      "title": "Fahrstuhl",
      "timers": {
        "totalTime": 1800,
        "critical": 60
      },
      "penalties": {
        "hint": 60,
        "wrongCode": 5
      },
      "validation": {
        "forbiddenChars": "[^0-9a-zA-Z]",
        "transform": "uppercase"
      },
      "codes": {
        "1": "87459",
        "2": "20832",
        "3": "12271",
        "4": "72883",
        "5": "23324"
      },
      "numberToWord": {
        "1": "EINS",
        "2": "ZWEI",
        "3": "DREI",
        "4": "VIER",
        "5": "FÜNF"
      },
      "hints": {
        "1": [
          "1.\tIn einem Sudoku müssen die Zahlen von 1 bis 9 jeweils einmal in jeder Zeile, jeder Spalte und jedem 3x3-Quadrat stehen.",
          "2.\tIn der achten Zeile der neunten Spalte (neben der '4', unter der '9') muss eine '3' stehen. Die '3' fehlt in diesem 3x3-Quadrat, sie kann nicht in der untersten Zeile und auch nicht in der Spalte der 6 stehen.",
          "3.\tIm gleichen 3x3-Quadrat (unten rechts) muss die '8' in das untere linke Feld, unter die '6' und neben die '1'. Weder in der oberen Zeile noch in der rechten Spalte darf eine '8' stehen.",
          "4.\tFür die 7. Zeile ergibt sich somit, dass ihr zweites Feld die '3' enthält, das mittlere Feld die '5' und C '4' ist.",
          "5.\tIch gebe Ihnen die Zahlen für die dritte Zeile: 287 491 536.",
          "6.\tA ist '8', B ist '7', C ist '4', D ist '5' und E ist '9'. Verlieren Sie jetzt keine Zeit!"
        ],
        "2": [
          "1.\tNur zu! Greifen sie zu Schere und Klebestreifen, denn hier muss ein Würfel gebaut werden!",
          "2.\tSobald Sie Ihr kubistisches Meisterwerk vollendet haben, befolgen Sie bitte meine Anweisungen aus dem Dokument.",
          "3.\tAchtung, nicht vergessen: Es gibt einen großen Unterschied zwischen Drehen und Kippen!",
          "4.\tNiemals, niemals, niemals vergessen: Die Himmelsrichtungen vor jedem Drehen oder Kippen überprüfen.",
          "5.\tWenn Sie meine Instruktionen befolgen, sollten Sie A schon längst auf '2' beziffert haben können.",
          "6.\tWenn Sie nicht '0' für B rausbekommen haben, kann ich Ihnen auch nicht helfen.",
          "7.\tDie Lösung ist '20832' - ich bin SCHWER enttäuscht von Ihnen!"
        ],
        "3": [
          "1.\tIch bin übrigens, das hatte ich Ihnen noch gar nicht verraten, ein großer Freund von Akkordeon-Musik!",
          "2.\tEs wird plötzlich sehr warm hier drin. Könnten Sie mir bitte einen Fächer basteln?",
          "3.\tVersuchen Sie, beim Falten die schwarzen Striche an der Seite als 'Abstandhalter' zu verwenden.",
          "4.\tAlle schwarzen Striche auf der Seite sollten nach dem Falten in die gleiche Richtung 'zeigen'.",
          "5.\t... und alle weißen in die andere Richtung!",
          "6.\tHeiliges Wackelbild!",
          "7.\tJe nachdem, von wo Sie das Ganze betrachten: Sie sollten zwei Teile einer Gleichung sehen.",
          "8.\tDie Gleichung, 3883+8388, ergibt '12271'. Nächstes Mal strengen Sie sich aber mehr an."
        ],
        "4": [
          "1.\tWenn P=M, dann wird V zu S.",
          "2.\tWenn X=O, dann wird J zu A.",
          "3.\tIch hoffe wirklich, Sie versuchen nicht, diese Aufgabe alleine zu lösen. Teamwork ist gefragt, vergessen Sie das nicht!",
          "4.\tWenn Sie den Code mit Hilfe der Lineale übersetzen, sollten Sie am Ende eine sehr große Zahl erhalten.",
          "5.\tNur, falls Sie dachten, es ginge vielleicht schneller, einfach den ultimativen Hinweis abzuwarten: Ich habe Zeit. Sie nicht.",
          "6.\t'12345'. So einfach! Ich wünschte, das wäre die Lösung zu diesem Rätsel. Ist sie aber nicht, leider. Gut für Sie: Diese Kombination können Sie von Ihrer Liste streichen!",
          "7.\tWarum versuchen Sie es nicht hiermit? '72883' - und falls Sie besorgt sind, ich könnte enttäuscht von Ihnen sein: Immerhin haben Sie jede Menge Geduld bewiesen!"
        ],
        "5": [
          "1.\tAh, die gute, alte Drehscheibe! Während Sie diese kleine Bastelei für mich erledigen, übe ich meine Piratenstimme!",
          "2.\tFalls Sie keine dieser Klammern zum Auseinanderbiegen haben, die jetzt ideal wären (wer hat die schon zu Hause?!) - improvisieren Sie einfach etwas!",
          "3.\tHinter dir! Ein dreiköpfiger Affe!",
          "4.\tFolgen Sie den Anweisungen. Es ist wirklich nicht SO schwer. Die erste Anweisung führt Sie beispielsweise zu einer '2'.",
          "5.\tDie zweite führt zu einer '3'. Übrigens: Vorsicht bei Nummer fünf, die hat es in sich!",
          "6.\tDie dritte führt ebenfalls zu einer '3'.",
          "7.\tDie vierte ergibt eine '2'.",
          "8.\tDie fünfte führt zu einer '4'. Ich wusste, dass Sie das nicht schaffen."
        ]
      }
    },
    "4": {
      "storageKey": "Mission_4_Achterbahn",
      "title": "Achterbahn",
      "timers": {
        "totalTime": 1800,
        "critical": 60
      },
      "penalties": {
        "hint": 60,
        "wrongCode": 5
      },
      "validation": {
        "forbiddenChars": "[^0-9a-zA-Z]",
        "transform": "uppercase"
      },
      "codes": {
        "1": "43608",
        "2": "97589",
        "3": "31808",
        "4": "15029",
        "5": "26208"
      },
      "numberToWord": {
        "1": "EINS",
        "2": "ZWEI",
        "3": "DREI",
        "4": "VIER",
        "5": "FÜNF"
      },
      "hints": {
        "1": [
          "1.\tBei diesem Rätsel scheint es darum zu gehen, die Punkte zu verbinden - allerdings fehlen einige Zahlen. Bearbeiten Sie notfalls zunächst die anderen Rätsel!",
          "2.\tDie fehlenden Zahlen scheinen sich auf ähnlichen Bildern auf späteren Seiten im Dokument zu befinden! Einige sind sogar auf allen Bildern zu finden!",
          "3.\tWir gehen davon aus, dass zumindest die direkt aufeinander folgenden Zahlen, die im gleichen Bild zu finden sind, durch gerade Linien miteinander verbunden werden können.",
          "4.\tNummer 1 und Nummer 30 scheinen in jedem der drei Bilder vorzukommen. Vergleichen Sie ihre Positionen miteinander.",
          "5.\tUnsere Experten haben sich gerade gemeldet. Haben Sie eine Taschenlampe im Haus? Die LED ihres Handys sollte es auch tun.",
          "6.\tUnser Team vor Ort hatte gerade eine Idee: Stapeln Sie alle drei Teile - und zwar so, dass die drei Punkte, die mit '1' markiert sind, und die drei, die mit '30' markiert sind, aufeinander liegen.",
          "7.\tVersuchen Sie, Verbindungslinien von Zahl zu Zahl zu zeichnen - so, als ob sich alle Zahlen auf dem gleichen Blatt befänden. Benutzen Sie eine helle Lichtquelle!",
          "8.\tEiner unserer Experten vor Ort hat das Rätsel gelöst! Wenn man alle Punkte verbinded, ergibt sich das Bild der Ziffern '43608'!"
        ],
        "2": [
          "1.\tDieses Labyrinth scheint anders als das vorherige zu sein. Während unsere Experten es analysieren, finden Sie einen Weg hindurch!",
          "2.\tUnsere Experten sind sich sicher, dass die Lösung mit Hilfe der Buchstaben im Labyrinth ermittelt werden muss.",
          "3.\tSobald Sie einen Weg durch das Labyrinth gefunden haben, stellen Sie bitte sicher, dass er ohne Umwege verläuft!",
          "4.\tWie viele 'A's befinden sich auf dem kürzesten Weg durch das Labyrinth? Es erscheint empfehlenswert, diesen Ansatz mit mindestens zwei Teammitgliedern zu verfolgen.",
          "5.\tWir verfolgen diesen Ansatz weiter. Wir haben insgesamt 9 mal den Buchstaben 'A' gefunden.",
          "6.\tWir haben 'B' 7 mal gefunden.",
          "7.\t'C' haben wir 5 mal gefunden.",
          "8.\tWir haben 'D' 8 mal und 'E' 9 mal gefunden. Das bedeutet, dass '97589' die Lösung für diese Phase sein müsste!"
        ],
        "3": [
          "1.\tUnsere Experten analysieren das Bild nun - es scheint keine Zahlen zu enthalten!",
          "2.\tWir versuchen, einen Experten für numerische Symmetrie zu erreichen - bisher leider ohne Erfolg ...",
          "3.\tDas Wort 'Spieglein' kann in dem Bild entziffert werden - es steht dort in Spiegelschrift!",
          "4.\tSollten Sie keinen Spiegel zur Hand haben, lässt sich vielleicht ein abgeschaltetes Handy dafür benutzen?",
          "5.\tUnsere Experten vermuten, dass der Spiegel horizontal positioniert werden muss.",
          "6.\tDie Analyse hat eine weitere Erkenntnis ergeben: Der Spiegel sollte, so unsere Experten, oberhalb des Bildes platziert werden.",
          "7.\tWir haben die Lösung! Platziert man den Spiegel oberhalb des Bildes, mit der Spiegelfläche nach unten, wird das Bild so gespiegelt, dass man '31808' lesen kann."
        ],
        "4": [
          "1.\tDies scheint eine Art Test für analytisches Denken zu sein. Die erste Reihe ist offenbar ein Beispiel.",
          "2.\tAlle Reihen scheinen einem Muster zu folgen, das auch auf die letzte Zahl angewendet werden muss, um die fehlende nächste Zahl zu ermitteln.",
          "3.\tUnser Team vor Ort vermutet, dass es wahrscheinlich ist, dass die zweite Reihe dem Muster 'geteilt durch 2' folgt. Demnach wäre A '1'.",
          "4.\tIn der dritten Reihe scheinen sich zwei Rechenoperationen stets abzuwechseln: 'minus 2' und 'geteilt durch 2'. Demnach ergäbe sich für B '5'.",
          "5.\tReihe vier scheint durch Subtraktion geprägt zu sein, aber die Schritte werden von Zahl zu Zahl kleiner.",
          "6.\tReihe fünf beginnt mit hohen Zahlen, das macht es kompliziert. Versuchen Sie, bei der 4 zu beginnen, und von dort aus rückwärts zu arbeiten, um das Muster zu erkennen.",
          "7.\tIn Reihe sechs scheint es kompliziert zu werden. Schreiben Sie die Operationen zwischen die Zahlen und versuchen Sie, ein Muster zu erkennen!",
          "8.\tUnsere Mathematiker haben soeben '15029' als Lösung ermittelt. Können Sie das überprüfen?"
        ],
        "5": [
          "1.\tWir vermuten, dass dieses Rätsel ausgeschnitten werden muss.",
          "2.\tEinige Zahlenfragmente scheinen hier lesbar zu sein, sie müssen aber offenbar irgendwie ausgerichtet werden.",
          "3.\tUm die Zahlen auszurichten ist es möglicherweise von Nöten, das Papier nach dem Ausschneiden aufzurollen.",
          "4.\tUnsere Experten empfehlen, das Papier um einen Bleistift oder etwas ähnliches zu wickeln.",
          "5.\tWird das Papier korrekt gewickelt, scheint eine Reihe aus Zahlen und Zeichen sichtbar zu werden, ähnlich einer Gleichung.",
          "6.\tWir haben die Gleichung soeben ausgewertet - das Ergebnis ist '26208'! Das muss die Lösung für diese Phase sein!"
        ]
      }
    },
    "5": {
      "storageKey": "Mission_5_U-Bahn",
      "title": "U-Bahn",
      "timers": {
        "totalTime": 1800,
        "critical": 60
      },
      "penalties": {
        "hint": 60,
        "wrongCode": 5
      },
      "validation": {
        "forbiddenChars": "[^0-9a-zA-Z]",
        "transform": "uppercase"
      },
      "codes": {
        "1": "50328",
        "2": "38129",
        "3": "93638",
        "4": "84810",
        "5": "21468"
      },
      "numberToWord": {
        "1": "EINS",
        "2": "ZWEI",
        "3": "DREI",
        "4": "VIER",
        "5": "FÜNF"
      },
      "hints": {
        "1": [
          "1.\tUnsere Experten vermuten, dass jedes dieser 'zerbrochenen Quadrate' für eine Ziffer der Lösung steht.",
          "2.\tUnsere Experten haben soeben eine Nachricht geschickt: Sie glauben, dass dieses Rätsel auf einer Art Überlappung basiert.",
          "3.\tWelche Teile der Linien passen in die zerbrochenen Quadrate?",
          "4.\tWir glauben, dass es sich hierbei um ein Rätsel handelt, für das eine helle Lichtquelle benötigt wird.",
          "5.\tVersuchen Sie, die zweite Reihe Symbole auf die erste zu falten. Sie sollte hineinpassen. Hier könnte es um weiße Symbole in schwarzen Kästchen gehen ...",
          "6.\tVerwenden Sie eine helle Lichtquelle (beispielsweise die LED Ihres Smartphones) um das Bild zu betrachten, das durch die Überlagerung der beiden Symbolreihen entsteht.",
          "7.\tGute Nachichten von unseren Experten! Rotieren Sie alles auf die Seite - dann sollten Sie von oben nach unten die Lösung ablesen können: '50328'!"
        ],
        "2": [
          "1.\tDieses Rätsel, so unsere Experten, erfordert logisches Denken. Es scheint erforderlich zu sein, den korrekten 'nächsten Schritt' auszuwählen. Die erste Reihe scheint ein Beispiel zu sein.",
          "2.\tEs scheint, als würden sich in allen Sequenzen einige Elemente verändern, während andere gleich bleiben.",
          "3.\tWir haben mit einem Sequenziologen gesprochen: Sequenz A könnte eine Uhr darstellen, bei der sich nur ein Zeiger bewegt. Wir glauben, dass '3' die Lösung ist!",
          "4.\tUnseren Experten zufolge verändern sich in Sequenz B zwei Elemente, die unabhängig voneinander betrachtet werden sollten. Was wäre hier der nächste logische Schritt?",
          "5.\tSequenz C scheint etwas mit Spiegelungen zu tun zu haben. Wir arbeiten daran!",
          "6.\tWir haben etwas zu Sequenz D: Die Bewegung der Punkte sollte unabhängig von der Bewegung des Kreissegments betrachtet werden!",
          "7.\tSequenz E scheint etwas mit Rotation zu tun zu haben!",
          "8.\tUnser Team hat soeben eine mögliche Lösung geschickt: '38129'. Können Sie die überprüfen?"
        ],
        "3": [
          "1.\tDieses Rätsel ist auch für unsere Experten vor Ort bisher völlig unverständlich - es scheinen nicht einmal Zahlen enthalten zu sein! Vielleicht hat es etwas mit dem U-Bahn-Netz zu tun?",
          "2.\tUnsere Experten vermuten einen Bezug zu einem antiken Notationssystem für Ziffern. Wir arbeiten daran.",
          "3.\tWir haben mit einem U-Bahn-Spezialisten gesprochen. Er sagt, dass diese Abbildung nichts mit U-Bahnen zu tun hat, obwohl sie ihn an antike römische Aquädukte erinnert.",
          "4.\tUnser Team vor Ort vermutet, dass dieses Rätsel um 90 Grad rotiert werden muss um gelöst werden zu können.",
          "5.\tWir haben versucht, einen Archäologen zu erreichen, der auf antike Schriftsysteme für Zahlen spezialisiert ist. Bisher leider ohne Erfolg.",
          "6.\tDer Archäologe hat zurückgerufen! Er vermutet, dass es bei diesem Rätsel einen Bezug zu römischen Zahlen geben könnte! Wir verfolgen auch diese Spur weiter.",
          "7.\tAuf die Seite gedreht sieht dieses Bild fast so aus, als hätte man fünf römische Zahlen untereinander geschrieben.",
          "8.\tIX, III, VI, III, VIII - das bedeutet: '93638'!"
        ],
        "4": [
          "1.\tWir sind hier selbst noch etwas ratlos - diese Zeichen sehen zwar aus wie Fragmente von Ziffern, aber wir sehen keine Möglichkeit, sie zusammenzufügen.",
          "2.\tEine Nachricht von unserem Team am Tatort: Sie zählen hier 15 Zeichen, wir benötigen aber nur 5 Ziffern. Wie können die Zeichen zu Ziffern kombiniert werden?",
          "3.\tEinige Symbole sehen gespiegelt aus, wie etwa das letzte Symbol: Es könnte ein Teil einer '4' sein, ist aber seltsam verdreht.",
          "4.\tWir sprechen mit einem Faltologen. Dieses Rätsel könnte damit zu tun haben, das Papier richtig zu falten.",
          "5.\tAn dieser Idee arbeiten wir gerade: Das Rätsel könnte zwei Faltungen erfordern, die die vier Symbolgruppen übereinander legen, sodass eine kombinierte Gruppe entsteht.",
          "6.\tWir empfehlen, die LED ihres Smartphones zu benutzen, um den kombinierten Code nach dem Falten sichtbar zu machen.",
          "7.\tDie Reihenfolge der Faltungen ist wichtig, teilte uns der Faltologe soeben mit.",
          "8.\tNachdem die Symbole aufeinander gefaltet wurden wird ein Code sichtbar: '84810'!"
        ],
        "5": [
          "1.\tDer Code muss irgendwo in diesem Buchstabenfeld versteckt sein - wir lassen eine Bilderkennungssoftware darüberlaufen!",
          "2.\tUnsere Experten vermuten, dass die Lösung des Rätsels mit den Wörtern, die unterhalb des Rätsels notiert sind, zu tun hat.",
          "3.\tWir haben mit einem Spezialisten für enigmatische Typografie gesprochen: Die versteckten Wörter könnten horizontal, vertikal, diagonal und sogar rückwärts geschrieben sein!",
          "4.\tWir vermuten, dass die Wörter in Gruppen auftreten - und einander sogar teilweise überlappen.",
          "5.\tDas Wort 'MISSIONEN' ist senkrecht zu finden, in der zweiten Spalte von rechts!",
          "6.\tEin Fund unserer Experten vor Ort: 'PHOBISCH' ist horizontal zu finden, beginnend am linken Rand, fast in der Mitte!",
          "7.\t'SERIE' und 'ESCAPE' überlappen beim 'E'! Sie sind senkrecht zu finden, unten rechts im Buchstabenfeld!",
          "8.\tGute Neuigkeiten! Wir haben alle Wörter gefunden! Ihre Positionen haben die Form von fünf Ziffern: '21468'!"
        ]
      }
    },
    "6": {
      "storageKey": "Mission_6_Schiff",
      "title": "Schiff",
      "timers": {
        "totalTime": 2400,
        "critical": 60
      },
      "penalties": {
        "hint": 60,
        "wrongCode": 5
      },
      "validation": {
        "forbiddenChars": "[^0-9a-zA-Z]",
        "transform": "uppercase"
      },
      "codes": {
        "1": "32460",
        "2": "29357",
        "3": "73625",
        "4": "42138",
        "5": "09863"
      },
      "numberToWord": {
        "1": "EINS",
        "2": "ZWEI",
        "3": "DREI",
        "4": "VIER",
        "5": "FÜNF"
      },
      "hints": {
        "1": [
          "1.\tOh, eine ziemlich leere Seite... deutet irgendetwas auf die Lösung?",
          "2.\tUnsere Zeigologen haben diese Pfeile auf fast jeder Seite gefunden!",
          "3.\tVielleicht können Sie passende Pfeile aufeinander zeigen lassen? Seiten auf dem Boden, nebeneinander?",
          "4.\tBeginnen Sie mit den A-Pfeilen und lassen Sie B, C, D und E erst einmal weg.",
          "5.\tA1 und A1 zeigen aufeinander, A2 und A2, und so weiter.",
          "6.\tUnsere Experten sagen, dass die Seiten mit A-Pfeilen zusammen die Form einer '3' ergeben?!",
          "7.\tDas letzte ist knifflig. Können Sie die Seite so biegen, dass das funktioniert?",
          "8.\t... das ergibt einen Kreis, richtig? Eine '0'! Die Lösung wäre dann 32460?!"
        ],
        "2": [
          "1.\tWir kennen diese Art Code. Es ist ein QR-Code. Unsere Experten sind sich sicher, dass er ins Internet verweist! Sie scannen ihn nun.",
          "2.\tSchlechte Neuigkeiten: Unsere Experten waren nicht in der Lage, den Code zu scannen. Ist es Ihnen gelungen?",
          "3.\tWir haben mit einer QRologin gesprochen. Sie sagt, dass es üblicherweise drei Orientierungsmarker gibt: Zwei links, einen rechts.",
          "4.\t... dieser Code scheint auf der Seite zu liegen!",
          "5.\tIst das eine '3', die in den Code selbst geschrieben wurde?",
          "6.\tUnser Schwarzweißdenker fanden weitere Unregelmäßigkeiten: '2', '9', '3' und '5'!",
          "7.\tAh, die fünfte Zahl ist weiß auf schwarz geschrieben! Eine '7'!",
          "8.\tDer finale Code scheint 29357 zu sein - können Sie das überprüfen?"
        ],
        "3": [
          "1.\tWir haben mit einem Tempographen gesprochen. Er sagt, wir sollen hier Uhrzeiger hinzufügen!",
          "2.\tEs scheint verschiedene Zeiten zu geben, die im Dokument aufgelistet sind.",
          "3.\tKönnten Sie bitte Uhrzeiver für jede Stadt hinzufügen - entsprechend der im Dokument notierten Zeiten?",
          "4.\tKann es sein, dass die Uhren uns zusammen betrachtet irgendetwas zeigen sollen?",
          "5.\tDie Uhrzeiger bilden zusammen große Ziffern!",
          "6.\tDie, die alle Uhrzeiger zusammen darstellen, sind '73625' - können Sie das ausprobieren?"
        ],
        "4": [
          "1.\tEine Waage! Und ganz wunderbar ausbalanciert!",
          "2.\t24kg insgesamt - also 12kg pro Hälfte!",
          "3.\tDie linke Hälfte hat wiederum zwei Hälften. Jede davon muss 6kg wiegen!",
          "4.\t... dann muss jeder Kreis 2kg wiegen?",
          "5.\t... und jedes kleine Rechteck 3kg.",
          "6.\tRechts muss jeder Stern 1kg wiegen.",
          "7.\t... und das Quadrat 4kg!",
          "8.\t... dann ist 42138 die Lösung!"
        ],
        "5": [
          "1.\tOh nein. Dieses Puzzle scheint defekt zu sein. Keine Zahlen!",
          "2.\tUnsere Experten vermuten, dass dieses Rätsel aus mehreren Teilen bestehen könnte.",
          "3.\tWir haben mit einer Stapologin gesprochen. Sie denkt, dass man hier vielleicht etwas stapeln kann.",
          "4.\tBefindet sich eine helle Lichtquelle in Ihrer Umgebung?",
          "5.\tErst einmal in der korrekten Reihenfolge scheinen die Stücke Zahlen zu ergeben.",
          "6.\tAuf jeden Fall in gewohnter Leserichtung.",
          "7.\tWir haben es! Die erste Zahl lautet '0'.",
          "8.\tUnsere Expert*innen haben es gelöst. Probieren Sie mal 09863!"
        ]
      }
    },
    "7": {
      "storageKey": "Mission_7_Gefängnis",
      "title": "Gefängnis",
      "timers": {
        "totalTime": 2400,
        "critical": 60
      },
      "penalties": {
        "hint": 60,
        "wrongCode": 5
      },
      "validation": {
        "forbiddenChars": "[^0-9a-zA-Z]",
        "transform": "uppercase"
      },
      "codes": {
        "1": "05450",
        "2": "32738",
        "3": "21945",
        "4": "02372",
        "5": "35426"
      },
      "numberToWord": {
        "1": "EINS",
        "2": "ZWEI",
        "3": "DREI",
        "4": "VIER",
        "5": "FÜNF"
      },
      "hints": {
        "1": [
          "1.\tWie niedlich! Ein kleiner Roboter! Aber wie kann man ihn steuern?",
          "2.\tIch denke, hier gibt es eine Fernsteuerung. Irgendwo",
          "3.\tDie Tastatur der Fernsteuerung sollte Sie an irgendetwas erinnern.",
          "4.\tDie Fernsteuerung sieht so aus wie das Code-Eingabefeld, meinen Sie nicht?",
          "5.\tNa los. Halten Sie es nicht horizontal. Richten Sie den Empfänger aus.",
          "6.\tNun müssen Sie den Roboter zur Ladesstation lotsen. Ein Schritt pro Taste.",
          "7.\tNutzen Sie das Code-Eingabefeld als Fernsteuerung. Aber halten Sie es vertikal.",
          "8.\t... letztendlich erhalten Sie den Code 05450. So einfach!"
        ],
        "2": [
          "1.\tOh, so viele Zahlen!",
          "2.\tViel zu lang! Und diese '6441' auf der anderen Seite ist definitiv zu kurz.",
          "3.\tWie wäre es denn, wenn Sie die '6441' entlang der Linie ausschneiden?",
          "4.\tPasst Ihr neues Lineal irgendwo?",
          "5.\tOh, dies erinnert mich total an die Fahrschule.",
          "6.\tVielleicht kann das neu ausgeschnittene Lineal dazu dienen, eine Zahlenreihe zu erhalten?",
          "7.\tDie zweite Reihe von rechts sieht gut aus, oder?",
          "8.\tDas Lineal zeigt auf '32738' in dieser Zeile. Erkennen Sie es?"
        ],
        "3": [
          "1.\tArbeiten Sie sich durch die Liebeslied-Ideen. Schneiden Sie die Verbindungslinien aus.",
          "2.\tIch liebe einfach diese Römischen Zahlen!",
          "3.\tDurch Verbinden der Wörter mit den Linien sollten Sie einige römische Zahlen erhalten.",
          "4.\tSo wie 'II' für die erste Zeile, was Sie schnell auf die 2 bringen sollte.",
          "5.\tOder 'I' für die zweite. 'IX für die dritte.",
          "6.\tUnd 'IV' als viertes. Wenn auch auf der Seite liegend!",
          "7.\t... und 'V'! Da sollte '21945' herauskommen."
        ],
        "4": [
          "1.\tOh mein Gott. Ein Labyrinth!",
          "2.\tIch liebe Labyrinthe. Ich hoffe bloß, es ist auch wirklich eines.",
          "3.\tOkay, es ist kein Labyrinth. Versuchen Sie es aus etwas Entfernung anzusehen.",
          "4.\tProbieren Sie das gesamte Bild abzudecken, außer dem linken Fünftel.",
          "5.\tErkennen Sie eine '0' im linken Fünftel?",
          "6.\tVielleicht sind die diagonal in eine Richtung gestreiften und die diagonal in die andere Richtung gestreiften hier wichtig?",
          "7.\tVersuchen Sie alle Streifen, die in eine Richtung zeigen, zu colorieren,",
          "8.\t.. und nun sollten Sie es erkennen: 02372"
        ],
        "5": [
          "1.\tGroßmutter! Warum hast du so eine lange Einkaufsliste?",
          "2.\tIn den Dokumenten finden Sie zahlreiche Rezeptideen. Haben wir alles?",
          "3.\tWir haben mit einer Großmutter gesprochen. Sie sagt, dass sie es liebt, Dinge in der Einkaufsliste zu verstecken.",
          "4.\tDie Großmutter sagte, dass sie dafür gerne die Position der Dinge auf der Einkaufsliste verwendet.",
          "5.\tKönnten Sie versuchen, die Artikel auf der Einkaufsliste für jedes Rezept miteinander zu verbinden? Befolgen Sie die Reihenfolge des Rezepts!",
          "6.\tDie Zutaten von Großmutters Keksen beschreiben, wenn sie mit Linien verbunden sind, die Form einer '3'!",
          "7.\tDie Zutaten von Großmutters Kuchen auf der Einkaufsliste sind in Form einer '5' angeordnet!",
          "8.\tWir haben alle verbunden! Die Lösung muss '35426' lauten!"
        ]
      }
    },
    "8": {
      "storageKey": "Mission_8_Bus",
      "title": "Bus",
      "timers": {
        "totalTime": 2400,
        "critical": 60
      },
      "penalties": {
        "hint": 60,
        "wrongCode": 5
      },
      "validation": {
        "forbiddenChars": "[^0-9a-zA-Z]",
        "transform": "uppercase"
      },
      "codes": {
        "1": "36047",
        "2": "55371",
        "3": "96378",
        "4": "83759",
        "5": "51347"
      },
      "numberToWord": {
        "1": "EINS",
        "2": "ZWEI",
        "3": "DREI",
        "4": "VIER",
        "5": "FÜNF"
      },
      "hints": {
        "1": [
          "1.\tWas ist das? Formen?",
          "2.\tWir haben soeben Informationen von einem Formologen erhalten. Er sagt, diese Formen sind unterschiedlich!",
          "3.\tUm etwas genauer zu sein: Sie variieren in der Anzahl ihrer Ecken.",
          "4.\tZählen Sie bitte die Ecken, Wir arbeiten ebenfalls daran.",
          "5.\tDie erste Form hat 3 Ecken, wir haben dies gerade mit unseren Spezialisten abgeglichen.",
          "6.\tDie zweite Form besitzt 6 Ecken, können Sie dies bestätigen?",
          "7.\tDer Kreis hat keine Ecken. Wir sind nicht sicher, aber dies ist derzeit unsere Arbeitshypothese.",
          "8.\tDie Anzahl der Ecken von links nach rechts: 36047 - funktioniert das?"
        ],
        "2": [
          "1.\tUnsere Experten haben uns soeben gewarnt: Gehen Sie hier nicht zu schnell vor!",
          "2.\tDer Täter liebt es, Dinge zwischen den Zeilen zu verstecken. Aber wo genau?",
          "3.\tSchauen Sie genau, bevor Sie etwas ausschneiden! Was genau muss ausgeschnitten werden?",
          "4.\tWas darf NICHT ausgeschnitten werden?",
          "5.\tSchauen Sie das Puzzlestück auf der letzten Seite an. Passen Sie es wieder ein!",
          "6.\tUnsere Experten sind soeben aud einen Morsecode in den Linien um ein Puzzlestück gestoßen!",
          "7.\tWir haben damit begonnen, es zu decodieren. Es beginnt mir 'Fünfundfünfzigtausend'...",
          "8.\tDreihunderteinundsiebzig - das ergibt '55371'. Können Sie dies eingeben? Beeilung!"
        ],
        "3": [
          "1.\tOh, was ist das? Die Buchstaben aus der oeben Hälfte müssen in die untere Hälfte wandern.",
          "2.\tJeder muss in seiner Spalte bleiben? Okay, also keine horizontalen Bewegungen!",
          "3.\tWir glauben , wir sind auf einem guten Weg, das Rätsel zu lösen. 'NEUN' scheint in den ersten Slot zu passen.",
          "4.\tDie Buchstaben N, E, U, N sind nun also nicht mehr für die anderen Zeilen zu nutzen.",
          "5.\tDas nächste Wort könnte 'SECHS' heißen. Nun geht es einfacher. Es bleiben weniger Buchstaben zum Einsetzen übrig.",
          "6.\tWelche Zahlen haben vier Buchstaben? Wir sprechen mit einem Numerolinguisten und klären das!",
          "7.\tWir sind weiter! Die nächste Zahl scheint ACHT zu sein!",
          "8.\tWir haben es! 96378 ist unsere Lösung - können Sie das prüfen?"
        ],
        "4": [
          "1.\tDas ist ein weiteres Gedicht! Wir analysieren es umgehend.",
          "2.\tWir haben mit einem Dichter gesprochen. Einige der Worte sind unbeholfen.",
          "3.\tDer Dichter sagte auch, dass die Formulierungen eher unüblich sind.",
          "4.\tSind in den Sätzen Wörter versteckt?",
          "5.\tDie erste Antwort ist ACHT, sehen Sie das?",
          "6.\tDie zweite Antwort ist: DREI.",
          "7.\tIn Zeile drei gibt es sicherlich eine SIEBEN.",
          "8.\tWir haben es! Die endgültige Antwort lautet '83759'!"
        ],
        "5": [
          "1.\tWir haben mit der Professorin für Gridologie gesprochen. Sie sagte, dass Schattierungen wichtig sind.",
          "2.\tIch leite ihre Notizen weiter: Arbeiten Sie sich vor und zurück.",
          "3.\tMarkieren Sie alle Quadrate, die nicht schattiert werden sollen, mit einem Punkt.",
          "4.\tAlle Zeilen oder Spalten mit 0 haben keine schattierten Quadrate.",
          "5.\tAlle Spalten mit 5 sind komplett schattiert.",
          "6.\tDie erste Zahl ist 5.",
          "7.\tDie zweite Zahl ist 1.",
          "8.\tWir haben es geschafft! Alles schattiert! Die Antwort lautet 51347."
        ]
      }
    },
    "9": {
      "storageKey": "Mission_9_Bank",
      "title": "Bank",
      "timers": {
        "totalTime": 2400,
        "critical": 60
      },
      "penalties": {
        "hint": 60,
        "wrongCode": 5
      },
      "validation": {
        "forbiddenChars": "[^0-9a-zA-Z]",
        "transform": "uppercase"
      },
      "codes": {
        "1": "07734",
        "2": "54781",
        "3": "37269",
        "4": "46029",
        "5": "84372"
      },
      "numberToWord": {
        "1": "EINS",
        "2": "ZWEI",
        "3": "DREI",
        "4": "VIER",
        "5": "FÜNF"
      },
      "hints": {
        "1": [
          "1.\tWas ist das? Aber gut: Befolgen Sie die Anweisungen.",
          "2.\tWir glauben, dass es gut ist, die Buchstaben nach jedem Schritt einmal aufzuschreiben.",
          "3.\tSchreiben Sie 'START'. Seien Sie dann vorsichtig und folgen Sie den Anweisungen.",
          "4.\tWenn Sie am Ende nichts passendes herauskriegen, beginnen Sie von vorne.",
          "5.\tSchreiben Sie Blockbuchstaben, wenn Sie groß schreiben.",
          "6.\tDas letzte Wort ist hELLO.",
          "7.\tDrehen Sie hELLO um, um die Antwort zu sehen.",
          "8.\tWir haben es! Die Antwort lautet 07734!"
        ],
        "2": [
          "1.\tTelefon!",
          "2.\tWir haben hier einen Phonologen: Die Buchstaben unter den Ziffern sind wichtig.",
          "3.\tKönnten die Zahlen in der Telefonnummer eine 'andere' Bedeutung haben?",
          "4.\tDie Zahlen könnten mit Buchstaben korrespondieren.",
          "5.\tUnsere Experten sagen, dass es für jede Zahl 3-4 verschiedene Buchstaben gibt. Was steht da!?",
          "6.\tDie erste Antwort könnte '5' sein.",
          "7.\tDie zweite Antwort wird wahrscheinlich '4' sein.",
          "8.\t'54781' - können Sie das versuchen?"
        ],
        "3": [
          "1.\tHier scheint es darum zu gehen, die Markierungen zu zählen.",
          "2.\tWir haben mit unserem Buchhalter gesprochen - er sagt, dass die Zahlen aufsummiert werden!",
          "3.\tWir haben festgestellt, dass einige Markierungen rechtsbündig ausgerichtet sind, aber nicht alle.",
          "4.\tUnsere Experten schlagen vor, dass die Lösung sein könnte, hier nichts zu zählen.",
          "5.\tKönnten Sie versuchen, dieses Rätsel mit ein wenig Abstand zu betrachten?",
          "6.\tDie Zählmarken in der ersten Spalte scheinen die Form einer '3'? zu haben!",
          "7.\tVielleicht haben die Zählmarken in jeder Spalte die Form einer Zahl?",
          "8.\tDie Zählmarken haben insgesamt tatsächlich die Form von '37269'!."
        ],
        "4": [
          "1.\tMathe! Wir versuchen, einen Mathematiker zu finden!",
          "2.\tBeginnen Sie mit den einfachen Gleichungen.",
          "3.\tC=2 - das ist statistisch gesehen in den meisten Gleichungen der Fall!",
          "4.\tWelche andere Zahl ist leicht zu finden?",
          "5.\tNull ist nie eine Lösung.",
          "6.\tG=4. Wir kennen keine Gleichung, bei der das jemals nicht der Fall war!",
          "7.\tK=9 - wir haben gerade die Bestätigung dafür erhalten!",
          "8.\tDie endgültige Antwort lautet offenbar 46029!"
        ],
        "5": [
          "1.\tEs sieht so aus, als ob diese Teile ausgeschnitten werden können.",
          "2.\tDer äußere Rand scheint dicker zu sein!",
          "3.\tWir haben mit unserem Chef-Puzzler gesprochen. Das resultierende Bild ist hier 5 Blöcke hoch.",
          "4.\tUnsere Experten sagen, dass die schattierten Blöcke wichtig sind.",
          "5.\tVielleicht passen sie ineinander, ohne eine Lücke zu bilden?",
          "6.\tAchtung: Die erste Zahl ist 8.",
          "7.\tDie nächste Zahl muss eine 4-artige Zahl sein!",
          "8.\tAlles zusammengesetzt! Die Antwort lautet 84372. Können Sie das ausprobieren?"
        ]
      }
    }
  }
};
