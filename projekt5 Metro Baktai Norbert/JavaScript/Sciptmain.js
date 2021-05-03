let menuIndex = 1;
let secure = false;
let pleaselog = false;
let welcomePoPup;


let inputName = getCookie("username");

if (inputName != "") {
   let userInput = document.getElementById("loginname")
   userInput.innerHTML = inputName;
   userInput.classList.remove("d-none");
   userInput.classList.add("d-inline");
   console.log("no");
   let buton = document.getElementById("login");
   buton.innerHTML = "Fiók váltása";
   pleaselog = true;
}

function metro33() {
   menuIndex = 1;
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
   karakterul.innerHTML = "<li>Hunter: Ő a példaképed. Sajnálatos módon a játék elején láthatod egyedül, mikoris elküld téged Polisba, a metró központjába.</li> <li>Bourbon: Vele a játék elején ismerkedsz meg. Nem a legkedvesebb személy, de segített neked utadon, mert te is segítettél neki.</li> <li> Khan: Nagyon rejtélyes alak. Hisz abban, hogy a Metrónak lelke van. Segít neked utadon, és próbál minnél jobban a jó útra terelni.</li> <li> Ulner: Egy Ranger, a Rend tagja és egy komikus. Próbálja humorral elrejteni valós fájdalmait és érzéseit.</li> <li> Miller: Ő a Rend parancsnoka, és ő igazgat Polisban. Később is segít neked a játékban.</li>";

   let bek1 = document.getElementById('bek1');
   bek1.innerHTML = "<h2>Vizuális élmény</h2> <p>A játék grafikája szerintem a mai napig szépnek számít, annak ellenére, hogy 2010-es, illetve a felújított verziója 2014-es.</p> <p>A fény effektek véleményem szerint gyönyörűek. Nemcsak gyönyörűek, hanem hasznosak is. A fényforrásokat ki lehet kapcsolni vagy lőni, hogy nehezebben lássanak meg ellenségeid.</p> <p>A textúrák, de főleg a normálok remek minőségüek. A modellek kidolgozottak, azonban néhány animáció kicsit alacsonyabb minőségű.</p> <p>Nekem a játékban a FOV (Field Of View = Látószög) kicsit alacsony, cserébe a játék jól optimalizált.</p> <p>A játék nagyon atmoszférikus, és a pályák dizájnai is kiemelkedők.</p>";

   document.getElementById('fop').src = "img/i759555.jpg";
   document.getElementById('sop').src = "img/fpsview.jpg";
   document.getElementById('sops').src = "img/fpsview.jpg";
   document.getElementById('top').src = "img/end.jpg";
   document.getElementById('foop').src = "img/light.jpg";
   document.getElementById('foop2').src = "img/light.jpg";
}

function ll() {
   menuIndex = 2;
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

   document.getElementById('fop').src = "img/metroLL.jpg";
   document.getElementById('sop').src = "img/mll2.png";
   document.getElementById('sops').src = "img/mll2.png";
   document.getElementById('top').src = "img/mll3.png";
   document.getElementById('foop').src = "img/mll4.png";
   document.getElementById('foop2').src = "img/mll4.png";

}
function me() {

   menuIndex = 3;

   defaultmenu();

   let cim2 = document.querySelector('h1');
   cim2.innerText = "Metro Exodus";

   let tört = document.getElementById('tort');
   tört.innerHTML = "A történet megintcsak 1 évvel később játszódik. Artyom nem bírja elfogadni, hogy az elég világ egy üres puszta lett, ezért rádión próbál kommunikálni vidékiekkel. Egyik ilyen túráján kiderül, hogy jelzavarókat építettek fel a város körül, mert azt hiszik a vezetők, hogy a III. világháború nem ért véget, és halottat játszanak inkább. Miután ezt felfedezted feleségeddel, Annával, néhány bajtársotokkal egy vonattal kimenekültök a városból. Célotok az, hogy találjatok egy helyet, ahol tudtok élni.";

   let menet = document.getElementById('menet');
   menet.innerHTML = "A játéksorozat 3. részében megváltozott a játék menete. Félig nyílt világú lett, lineáris helyett, és sokkal túlélőbb hangulata lett a játéknak. A játékban poszt-apokaliptikus Oroszországot járjátok be. A fegyverek ugyanazok, azonban mostmár jobban testre lehet szabni őket, viszont a játék sokkal inkább a felfedezés élményére alapszik, mint a lövöldözésre. A fegyverekbe és felszerelésedre találhatsz kiegészítőket, javításokat. A játékba behoztak egy barkácsolás mechanikát is.";

   let karakter = document.getElementById('karakter');
   karakter.innerHTML = "Rengeteg NPC-t ismersz meg, de ők azok akik veled tartanak:";

   let karakterul = document.getElementById('karakterul');
   karakterul.innerHTML = "<li>Miller: Továbbra is a parancsnok, csak mostmár nem a metró központjában, hanem a vonaton.</li><li>Anna: Ebben a játékban már a feleségedként veled tart a vonaton.</li>  <li> Idiot: Nevét ő választotta irónikusan, mert  talán ő tudja a legtöbbet a legénységből.</li> <li>Yermak: Ő a csapatba a mérnök. Tudja, hogy a vonatot hogyan kell működtetni, karbantartani, megjavítani.</li> <li>Sam, Alyosha, Duke, Stephan: A csapat maradék tagjai, akik a vonaton veled tartanak.</li>";

   let bek1 = document.getElementById('bek1');
   bek1.innerHTML = "<h2>Vizuális élmény</h2> <p>A grafika még fejlettebb és szebb. Támogatja az RTX technológiát.</p> <p>Látszott mindent bedoptak a fényeknél. A fénysugarak gyönyörűek tudnak lenni.</p> <p>A normálok és a textúrák hozzák a megszokott minőségüket. A modellek, de főleg az animációk sokkal szebbek, részletesebbek és simábbak.</p> <p>Végre felvitték a FOV-ot 80-90 körülire.</p> <p>Én nem szeretem a nyílt világú játékokat igazán, de az Exodus ebben kivétel. Nagyon beszippant a világa és atmoszférája.</p>";

   //képek
   document.getElementById('fop').src = "img/ME12.jpg";
   document.getElementById('sop').src = "img/MELIGHT.jpg";
   document.getElementById('sops').src = "img/MELIGHT.jpg";
   document.getElementById('top').src = "img/MEDARK.jpg";
   document.getElementById('foop').src = "img/METERM.jpg";
   document.getElementById('foop2').src = "img/MERIVER.jpg";

}

function defaultmenu() {
   let menuid;
   let defmenuid;
   let def2menuid;

   switch (menuIndex) {
      case 1:
         menuid = "met33";
         defmenuid = "metll";
         def2menuid = "metme";
         break;
      case 2:
         menuid = "metll";
         defmenuid = "met33";
         def2menuid = "metme";
         secure = true;
         break;
      case 3:
         menuid = "metme";
         defmenuid = "met33";
         def2menuid = "metll";
         secure = true;
         break;
   }

   let chngmenu = document.getElementById(menuid);
   chngmenu.style = "background-color: rgba(100, 0, 0, 0.3)";

   let defmenu = document.getElementById(defmenuid);
   defmenu.style = "background-color: rgba(0, 0, 0, 0)";

   let def2menu = document.getElementById(def2menuid);
   def2menu.style = "background-color: rgba(0, 0, 0, 0)";
}

function watchout() {
   if (secure == false && pleaselog == false) {
      alert("A főcím felett a panelek kattinthatók, és kérem lépjen be!");
   } else {
      if (secure == false) {
         alert("A főcím felett a panelek kattinthatók");
      }
      if (pleaselog == false) {
         alert("Kérem jelentkezzen be!");
      }
   }
}
function login() {

   logev = document.getElementById("loginevent");
   logev.style = "background-color: rgba(0, 0, 0, 0.6)";

   welcomePoPup = document.getElementById("welcome");
   welcomePoPup.classList.remove("d-none");

   let space = document.getElementById("after");
   space.classList.remove("d-none")

   let welcommen = document.getElementById("welcommen");
   welcommen.classList.add("d-none");

}
function closing() {
   let closePoPup = document.getElementById("welcome");
   closePoPup.classList.add("d-none");

   let logEv = document.getElementById("loginevent");
   logEv.style = "background-color: rgba(0, 0, 0, 0.0)";


}

function setCookie(cname, cvalue) {
   document.cookie = cname + "=" + cvalue;
}
function getCookie(cname) {
   let name = cname + "=";
   let decoded = decodeURIComponent(document.cookie);
   let ca = decoded.split(';');
   for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
         c = c.substring(name.length, c.length);
      }
      if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
      }
   }
   return "";
}

function username() {



   inputName = document.getElementById("uname").value;
   console.log(inputName);
   if (inputName != "" && inputName != null) {
      setCookie("username", inputName);
      console.log(inputName);
   }


   if (inputName != "" && inputName != null) {
      let user = document.getElementById("login");
      user.innerHTML = "Fiók váltása";

      let userInput = document.getElementById("loginname")
      userInput.innerHTML = inputName;
      userInput.classList.remove("d-none");
      userInput.classList.add("d-inline");

      welcomePoPup = document.getElementById("welcome");
      welcomePoPup.classList.remove("d-none");

      let welcommen = document.getElementById("welcommen");
      welcommen.classList.remove("d-none");
      welcommen.innerHTML = "<h2>Üdv " + inputName + "!</h2><br><p>Köszönöm, hogy bejelentkeztél!</p>";

      let space = document.getElementById("after");
      space.classList.add("d-none");

      pleaselog = true;
   }
}