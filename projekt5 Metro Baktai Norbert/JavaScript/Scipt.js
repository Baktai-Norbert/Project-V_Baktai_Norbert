let def1 = true;
let def2 = false;
let def3 = false;

function metro33() {
   console.log("műkszik");
   //active33();
   def1 = true;
   def2 = false;
   def3 = false;
   defaultmenu();
   let cim1 = document.querySelector('h1');
   cim1.innerText = "Metro 2033";

   let tört = document.getElementById('tort');
   tört.innerHTML = "A történet 2033-ban játszódik, a moszkvai metróhálozatban. A játékban 2013-ban kitört a III. világháború, és megtörtént a nukleáris apokalipszis. Te 20 évvel később, egy Artyom nevű túlélőként játszol. Minden nap egy megpróbáltatás az embereknek a földalatt. Egyszercsak felbukkantak a Dark One nevű szörnyek, akik nagy fenyegetést jelentenek az állomásodra. Artyom példaképe Hunter pedig elküldi Artyomot a metró központjába, hogy értesítse feletteseit a szörnyekről, és kérjen segítséget.";

   let menet = document.getElementById('menet');
   menet.innerHTML = "Játék alapvetően belső nézetes lövölde, azonban a lopakodási mechanikák sokat hozzá tesznek a játékhoz. A   környezet dinamikus, ezért kihasználhatod ellenségeid ellen. A játékot lehet pacifistán is végigjátszani. Érdekesség, hogy a játékban nem pénz van, hisz az értéktelenné vált a járatokban. Helyette lőszerrel lehet kereskedni. A játékban figyelni kell, hogy fel legyen töltve a zseblámpád, ne legyen a gázmaszkod törött, és legyen bele elég szűrő.";

   let karakter = document.getElementById('karakter');
   karakter.innerHTML = "A játékban sok emberrel találkozol, viszont ők a fontosabbak:";

   let karakterul = document.getElementById('karakterul');
   karakterul.innerHTML = "<li>Hunter: ő a példaképed. Sajnálatos módon a játék elején láthatod egyedül, mikoris elküld téged Polisba, a metró központjába.</li> <li>Bourbon: vele a játék elején ismerkedsz meg. Nem a legkedvesebb személy, de segített neked utadon, mert te is segítettél neki.</li> <li> Khan: Nagyon rejtélyes alak. Hisz abban, hogy a Metrónak lelke van. Segít neked utadon, és próbál minnél jobban a jó útra terelni.</li> <li> Ulner: Egy Ranger, a Rend tagja és egy komikus. Próbálja humorral elrejteni valós fájdalmait és érzéseit.</li> <li> Miller: Ő a Rend parancsnoka, és ő igazgat Polisban. Később is segít neked a játékban.</li>";

   let bek1 = document.getElementById('bek1');
   bek1.innerHTML = "<h2>Vizuális élmény</h2> <p>A játék grafikája szerintem a mai napig szépnek számít, annak ellenére, hogy 2010-es, illetve a felújított verziója 2014-es.</p> <p>A fény effektek véleményem szerint gyönyörűek. Nemcsak gyönyörűek, hanem hasznosak is. A fényforrásokat ki lehet kapcsolni vagy lőni, hogy nehezebben lássanak meg ellenségeid.</p> <p>A textúrák, de főleg a normálok remek minőségüek. A modellek kidolgozottak, azonban néhány animáció kicsit alacsonyabb minőségű.</p> <p>Nekem a játékban a FOV (Field Of View = Látószög) kicsit alacsony, cserébe a játék jól optimalizált.</p> <p>A játék nagyon atmoszférikus, és a pályák dizájnai is kiemelkedők.</p>";
}

function ll() {
   console.log("műkszik2");
   act33 = false;
   actll = true;
   def2 = true;
   def1 = false;
   def3 = false;
   //activell();
   defaultmenu();
   let cim2 = document.querySelector('h1');
   cim2.innerText = "Metro Last Light";

   let tört = document.getElementById('tort');
   tört.innerHTML = "A történet 1 évvel később játszódik, 2034-ben. Az előző játék végén elfoglalt bázisért viszont háború kezd kialakulni. Khan beront a barakkodba, mondva hogy szerencsére mégegy dark one túlélte. A parancsnok, Miller lányával elküld téged levadászni a szörnyet. Mikor a szörny karnyújtásnyira van tőled elkábít, és arra ébredsz, hogy fasiszták elfognak. Egy kommunista fogoly segítségével azonban onnan kimenekültök, és azt mondja segít neked eljutni a központba. Vajon meg bízhatsz benne? Mi lesz a lénnyel?";

   let menet = document.getElementById('menet');
   menet.innerHTML = "A játékmenet egy az egybe olyan mint az előző. Behoztak néhány új fegyvert, és mechanikát, de nagyon hasonlít elődjére. Szerencsére a jó dolgok megmaradtak, de sajnos 1-2 rossz is. A lopakodásban ugyanazok az eszközök használhatók. Még mindig ki lehet lőni a lámpákat, van dobókés és szintén guggolással lehet hang nélkül közlekedni. Én úgy vettem észre viszont kevesebb a felvehető töltény, szűrő és elsősegély doboz. Tapadó gránátok helyett itt aknák vannak viszont.";

   let karakter = document.getElementById('karakter');
   karakter.innerHTML = "Ebben a játékban is sok embert ismersz meg, ők a fontosabbak:";

   let karakterul = document.getElementById('karakterul');
   karakterul.innerHTML = "<li>Miller: Továbbra is a Rend parancsnoka és Polisban és a központból írányítja a hadműveleteket. </li><li>Anna: ő a parancsnok lánya, és legjobb mesterlövésze. Komoly kapcsolatod alakul ki vele.</li>  <li> Khan: Még mindig egy rejtélyes alak. A játék elején ő fedezi fel a túlélő Dark One-t.</li> <li> A Dark One: Megtalálod a szörnyet. Kiderül a Dark One-ok nem voltak ellenségesek, csak segíteni akartak és emberiek.</li> <li>Pavel: Bajtársad lesz egy rövid ideig, ameddig a fasiszták fogságából menekültök. Alapvetően ellenséged lenne, de az ellenséged ellensége a barátod.</li>";

   let bek1 = document.getElementById('bek1');
   bek1.innerHTML = "<h2>Vizuális élmény</h2> <p>A játék grafikája szinte ugyanaz mint az előzőé. Ugyanúgy volt egy felújított verziója.</p> <p>A fény effektek itt is rettentően szépek. Szintén ki lehet lőni a fényforrásokat, lámpákat. Ez segít a lopakodásban, ugyanis sötétben nehezebb látni.</p> <p>A textúrák és normálok itt nagyon jó felbontásúak és minőségüek. A modellek szintén kidolgozottak, az animációk ugyanazok.</p> <p>Számomra ebben a játékban is túl alacsony a FOV.</p> <p>A remek pálya dizájn által ebben a játékban is nagyon erős az atmoszféra.</p>";
}
function me(){
   let cim2 = document.querySelector('h1');
   cim2.innerText = "Metro Exodus";

   let tört = document.getElementById('tort');
   tört.innerHTML = "A történet megintcsak 1 évvel később játszódik. Artyom nem bírja elfogadni, hogy az elég világ egy üres puszta lett, ezért rádión próbál kommunikálni vidékiekkel. Egyik ilyen túráján kiderül, hogy jelzavarókat építettek fel a város körül, mert azt hiszik a vezetők, hogy a III. világháború nem ért véget, és halottat játszanak inkább. Miután ezt felfedezted feleségeddel, Annával, néhány bajtársotokkal egy vonattal kimenekültök a városból. Célotok az, hogy találjatok egy helyet, ahol tudtok élni.";

   let menet = document.getElementById('menet');
   menet.innerHTML = "A játéksorozat 3. részében megváltozott a játék menete. Félig nyílt világú lett, lineáris helyett, és sokkal túlélőbb hangulata lett a játéknak. A játékban poszt-apokaliptikus Oroszországot járjátok be. A fegyverek ugyanazok, azonban mostmár jobban testre lehet szabni őket, viszont a játék sokkal inkább a felfedezés élményére alapszik, mint a lövöldözésre.";

   let karakter = document.getElementById('karakter');
   karakter.innerHTML = "Ebben a játékban is sok embert ismersz meg, ők a fontosabbak:";

   let karakterul = document.getElementById('karakterul');
   karakterul.innerHTML = "<li>Miller: Továbbra is a Rend parancsnoka és Polisban és a központból írányítja a hadműveleteket. </li><li>Anna: ő a parancsnok lánya, és legjobb mesterlövésze. Komoly kapcsolatod alakul ki vele.</li>  <li> Khan: Még mindig egy rejtélyes alak. A játék elején ő fedezi fel a túlélő Dark One-t.</li> <li> A Dark One: Megtalálod a szörnyet. Kiderül a Dark One-ok nem voltak ellenségesek, csak segíteni akartak és emberiek.</li> <li>Pavel: Bajtársad lesz egy rövid ideig, ameddig a fasiszták fogságából menekültök. Alapvetően ellenséged lenne, de az ellenséged ellensége a barátod.</li>";

   let bek1 = document.getElementById('bek1');
   bek1.innerHTML = "<h2>Vizuális élmény</h2> <p>A játék grafikája szinte ugyanaz mint az előzőé. Ugyanúgy volt egy felújított verziója.</p> <p>A fény effektek itt is rettentően szépek. Szintén ki lehet lőni a fényforrásokat, lámpákat. Ez segít a lopakodásban, ugyanis sötétben nehezebb látni.</p> <p>A textúrák és normálok itt nagyon jó felbontásúak és minőségüek. A modellek szintén kidolgozottak, az animációk ugyanazok.</p> <p>Számomra ebben a játékban is túl alacsony a FOV.</p> <p>A remek pálya dizájn által ebben a játékban is nagyon erős az atmoszféra.</p>";
   console.log("műkszik3");
   def3 = true;
   def2 = false;
   def1 = false;
   let cim3 = document.querySelector('h1');
   cim3.innerText = "Metro Exodus";
   defaultmenu();
   activeme();
}

//function active33() {
   //let active = document.getElementById('met33');
   //active.style="background-color: rgba(100, 0, 0, 0.4)";
  // console.log("gud");
   //  def1 = true;
//}
//function activell() {
   //   let active = document.getElementById('metll');
   // active.style="background-color: rgba(100, 0, 0, 0.4)";
  // console.log("gud2");
   // def2 = true;
//}
//function activeme() {
   //let active = document.getElementById('metme');
   //active.style="background-color: rgba(100, 0, 0, 0.4)";
  // console.log("gud3");
   // def3 = true;
//}
function defaultmenu() {
   let menuid;
   let defmenuid;
   let def2menuid;
   if (def1 == true) {
      menuid = "met33";
      defmenuid = "metll";
      def2menuid = "metme";
   } else {
      if (def2 == true) {
         menuid = "metll";
         defmenuid = "met33";
         def2menuid = "metme";
      } else { if(def3 == true){
         menuid = "metme";
         defmenuid = "met33";
         def2menuid = "metll";
      }
      }
   }
   console.log(menuid);
   let chngmenu = document.getElementById(menuid);
   chngmenu.style = "background-color: rgba(100, 0, 0, 0.3)";
   let defmenu = document.getElementById(defmenuid);
   defmenu.style = "background-color: rgba(0, 0, 0, 0)";
   let def2menu = document.getElementById(def2menuid);
   def2menu.style = "background-color: rgba(0, 0, 0, 0)";
   //valószínűsítem ezt 10szer egyszerűbben meglehetne oldani c:
}