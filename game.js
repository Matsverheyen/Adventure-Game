//Startup stats
//TODO eindbaas / gebogen
var armor = 0;
var munten = 0;
var sneak = 0;
var strenght = 0;
var bosshealth = 350;
var item;
var item2;
var item3;
lvl1();

//Level 1
function lvl1() {
  console.log('Level 1 - Je wordt wakker.');
  window.alert('Je wordt wakker op een weiland');
  dir = window.prompt('Waar wil je heen?', 'Noorden, Oosten, Zuiden, Westen, Rusten.');
  if (dir == 'noorden' || dir == 'Noorden') {
    noorden();
  } else if (dir == 'oosten' || dir == 'Oosten') {
    oosten();
  } else if (dir == 'zuiden' || dir == 'Zuiden') {
    zuiden();
  } else if (dir == 'westen' || dir == 'Westen') {
    westen();
  } else if (dir == 'rusten' || dir == 'Rusten') {
    rust();
  } else {
    window.alert('Oeps, Dit is geen geldige keuze!');
  }
}

//Level 2
function noorden() {
  console.log('Level 2 - Je ging naar het noorden.');
  window.alert('Je wordt aangevallen door monsters maar kan jezelf niet verdedigen!');
  window.alert('Je ging dood. Game over!');
}

function oosten() {
  console.log('Level 2 - Je ging naat het oosten.');
  window.alert('Je ziet een klein houten hutje in de verte.');
  naarHutje = window.prompt('Wil je hierheen', 'Ja, Nee');
  if (naarHutje == 'ja' || naarHutje == 'Ja') {
    hutje();
  } else if (naarHutje == 'nee' || naarHutje == 'Nee') {
    bos();
  } else {
    window.alert('Oeps, Dit is geen geldige keuze!');
  }
}

function zuiden() {
  console.log('Level 2 - Je ging naar het zuiden.');
  window.alert('Je ziet 3 mensen vechten met een monster.');
  ifHelp = window.prompt('Wil je hun helpen?', 'Ja, Nee');
  if (ifHelp == 'ja' || ifHelp == 'Ja') {
    help();
  } else if (ifHelp == 'nee' || ifHelp == 'Nee') {
    noHelp();
  } else {
    window.alert('Oeps, Dit is geen geldige keuze!');
  }
}

function westen() {
  console.log('Level 2 - Je ging naar het westen.');
  window.alert('Er is een rivier.');
  river = window.prompt('Wil je eroverheen springen of wil je een omweg zoeken', 'Overheen, Omweg');
  if (river == 'overheen' || river == 'Overheen') {
    riverOverheen();
  } else if (river == 'omweg' || river == 'Omweg') {
    window.alert('Tijdens de omweg kom je een monster tegen');
    fight = window.prompt('Wil je vechten?', 'Ja, Nee');
    if (fight == 'ja' || fight == 'Ja') {
      if (strenght >= 0) {
        window.alert('Na een zwaar gevecht win je het en vindt een zak goud in het monster!');
        munten += 10;
        window.alert('Munten: ' + munten);
        riverOmweg();
      }
    } else if (fight == 'nee' || fight == 'Nee') {
      if (stealth >= 1) {
        window.alert('Je kunt rustig verder lopen!');
        riverOmweg();
      }
    } else {
      window.alert('Oeps, Dit is geen geldige keuze!');
    }
  } else {
    window.alert('Oeps, Dit is geen geldige keuze!');
  }
}

function rust() {
  console.log('Level 2 - Je rust uit.');
  sneak += 1;
  window.alert('Sneak Leveled up! Lvl ' + this.sneak);
  lvl1alt();
}

function lvl1alt() {
  console.log('Level 1 - Je wordt weer wakker.');
  window.alert('Je bent uitgerust');
  dir = window.prompt('Waar wil je heen?', 'Noorden, Oosten, Zuiden, Westen');
  if (dir == 'noorden' || dir == 'Noorden') {
    noorden();
  } else if (dir == 'oosten' || dir == 'Oosten') {
    oosten();
  } else if (dir == 'zuiden' || dir == 'Zuiden') {
    zuiden();
  } else if (dir == 'westen' || dir == 'Westen') {
    westen();
  } else {
    window.alert('Oeps, Dit is geen geldige keuze!');
  }
}

//Level 3
function hutje() {
  console.log('Level 3 - je bevindt je in het houten hutje.');
  window.alert('het huisje ziet er griezelig uit!');
  hutChoice = window.prompt('Wat wil je doen?', 'Naar buiten, Doorzoeken');
  if (hutChoice == 'naar buiten' || hutChoice == 'Naar buiten') {
    bos();
  } else if (hutChoice == 'doorzoeken' || hutChoice == 'Doorzoeken') {
    kist();
  } else {
    window.alert('Oeps, Dit is geen geldige keuze!');
  }
}

function bos() {
  console.log('Level 3 - Je komt aan in een bos.');
  window.alert('Zodra je een voet zet in het bos wordt je overspoeld door vliegende insecten.');
  if (strenght >= 1) {
    window.alert('Je verslaat de monsters');
    woud();
  } else {
    window.alert('Je ging dood. Game over!');
  }
}

function help() {
  console.log('Level 3 - Je helpt de mensen.');
  window.alert('Het is je gelukt het monster te doden. maar...');
  window.alert('De mensen vallen jou aan en je gaat dood.');
  window.alert('Game over!');
}

function noHelp() {
  console.log('Level 3 - Je helpt de mensen niet.');
  window.alert('De mensen zien je niet en je glipt weg!');
  sneak += 1;
  window.alert('Sneak Leveled up! Lvl ' + this.sneak);
  window.alert('je gaat verder en komt aan bij een Kasteel');
  binnen = window.prompt('Wat ga je doen?', 'Naar binnen, Terug');
  if (binnen == 'Naar binnen' || binnen == 'naar binnen') {
    Gate();
  } else if (binnen == 'Terug' || binnen == 'terug') {
    bos();
  } else {
    window.alert('Oeps, Dit is geen geldige keuze!');
  }
}

function riverOverheen() {
  console.log('Level 3 = Je gaat over de rivier.');
  window.alert('Je neemt een aanloop en sprint, Je landt op de kant.');
  window.alert('Net voordat je opstaan springt er een monster uit het water en eet een been eraf');
  window.alert('Je probeert verder te lopen maar gaat dood aan je verwondingen.');
}

function riverOmweg() {
  console.log('Level 3 = Je komt aan bij de rivier');
  window.alert('Je komt aan bij een bruggetje met bewakers.');
  wegBrug = window.prompt('Wil je eroverheen of er langs', 'Erover, Erlangs');
  if (wegBrug == 'Erover' || wegBrug == 'erover') {
    window.alert('De bewakers vragen om 10 munten als je er langs wilt.');
    betalen = window.prompt('Wil je dit betalen?', 'Ja, Nee');
    if (betalen == 'ja' || betalen == 'Ja') {
      if (munten >= 10) {
        munten -= 10;
        window.alert('Je hebt betaalt!');
        window.alert(munten);
        verder();
      } else {
        window.alert('Je hebt niet genoeg munten');
        window.alert('De bewakers doden je.');
      }
    } else if (betalen == 'nee' || betalen == 'Nee') {
      window.alert('De bewakers doden je.');
    }
  } else if (wegBrug == 'Erlangs' || wegBrug == 'erlangs') {
    window.alert('Je probeert langs de brug te gaan!');
    if (sneak >= 1) {
      window.alert('Gelukt!');
      verder();
    } else {
      window.alert('Niet gelukt. De bewakers doden je!');
    }
  } else {
    window.alert('Oeps, Dit is geen geldige keuze!');
  }
}

function kist() {
  console.log('Level 4 - Je vindt een kist.');
  window.alert('Je vindt een kist in de kamer en maakt hem open.');
  var rand = Math.floor(Math.random() * 4) + 1;
  console.log(rand);
  switch (rand) {
    case 1:
      item = 'Wooden Sword';
      item2 = '30 Munten';
      item3 = 'Chainmail';
      window.alert('You\'ve found some items!');
      window.alert(item);
      window.alert(item2);
      window.alert(item3);
      window.alert('Strenght + 1 | armor + 2 | Munten + 30');
      strenght += 1;
      armor += 2;
      munten += 30;
      window.alert('Strenght: ' + strenght + ' Armor: ' + armor + ' Munten: ' + munten);
      window.alert('Je gaat het huis uit en het bos in.');
      bos();
      break;
    case 2:
      item = 'Stone Spear';
      item2 = '10 Munten';
      item3 = 'Iron armor';
      window.alert('You\'ve found some items!');
      window.alert(item);
      window.alert(item2);
      window.alert(item3);
      window.alert('Strenght + 2 | armor + 4 | Munten + 10');
      strenght += 2;
      armor += 4;
      munten += 10;
      window.alert('Strenght: ' + strenght + ' Armor: ' + armor + ' Munten: ' + munten);
      window.alert('Je gaat het huis uit en het bos in.');
      bos();
      break;
    case 3:
      item = 'Iron Dagger';
      item2 = '20 Munten';
      item3 = 'wooden helmet';
      window.alert('You\'ve found some items!');
      window.alert(item);
      window.alert(item2);
      window.alert(item3);
      window.alert('Strenght + 3 | armor + 1 | Munten + 20');
      strenght += 3;
      armor += 1;
      munten += 20;
      window.alert('Strenght: ' + strenght + ' Armor: ' + armor + ' Munten: ' + munten);
      window.alert('Je gaat het huis uit en het bos in.');
      bos();
      break;
    case 4:
      item2 = '50 Munten';
      item3 = 'Leather tunic';
      window.alert('You\'ve found some items!');
      window.alert(item2);
      window.alert(item3);
      window.alert('armor + 1 | Munten + 50');
      armor += 1;
      munten += 50;
      window.alert('Strenght: ' + strenght + ' Armor: ' + armor + ' Munten: ' + munten);
      window.alert('Je gaat het huis uit en het bos in.');
      bos();
      break;
    default:
      console.log('Error');
  }
}

function Gate() {
  console.log('Level 4 - Poort');
  window.alert('Je komt aan bij een poort waar een wachter staat.');
  window.alert('Je wordt binnen gelaten.');
  enter();
}

function verder() {
  console.log('Level 4 - Bos');
  window.alert('Je komt in een bos terecht, Je vindt hier een kist.');
  var rand2 = Math.floor(Math.random() * 4) + 1;
  console.log(rand2);
  switch (rand2) {
    case 1:
      item = 'Iron pike';
      item2 = '20 Munten';
      item3 = 'Chainmail';
      window.alert('You\'ve found some items!');
      window.alert(item);
      window.alert(item2);
      window.alert(item3);
      window.alert('Strenght + 4 | armor + 2 | Munten + 20');
      strenght += 4;
      armor += 2;
      munten += 20;
      window.alert('Strenght: ' + strenght + ' Armor: ' + armor + ' Munten: ' + munten);
      break;
    case 2:
      item = 'Golden dagger';
      item2 = '5 Munten';
      item3 = 'Dark robes';
      window.alert('You\'ve found some items!');
      window.alert(item);
      window.alert(item2);
      window.alert(item3);
      window.alert('Strenght + 2 | sneak + 5 | Munten + 5');
      strenght += 2;
      sneak += 5;
      munten += 5;
      window.alert('Strenght: ' + strenght + ' Armor: ' + armor + ' Munten: ' + munten);
      break;
    case 3:
      item = 'Steel hammer';
      item2 = '30 Munten';
      item3 = 'Boots';
      window.alert('You\'ve found some items!');
      window.alert(item);
      window.alert(item2);
      window.alert(item3);
      window.alert('Strenght + 3 | armor + 1 | Munten + 30');
      strenght += 3;
      armor += 1;
      munten += 30;
      window.alert('Strenght: ' + strenght + ' Armor: ' + armor + ' Munten: ' + munten);
      break;
    case 4:
      item = 'Stone stick';
      item2 = '60 Munten';
      window.alert('You\'ve found some items!');
      window.alert(item2);
      window.alert(item3);
      window.alert('Strenght + 1 | Munten + 60');
      armor += 1;
      munten += 60;
      window.alert('Strenght: ' + strenght + ' Munten: ' + munten);
      break;
    default:
      console.log('Error');
  }
  Gate();
}

function enter() {
  console.log('Level 5 - Kasteel');
  window.alert('Je gaat het kasteel in.');
  doen = window.prompt('Wat wil je heen', 'Well, Blacksmith, King,');
  switch (doen) {
    case Well || well:
      well();
      break;
    case Blacksmith || blacksmith:
      bs();
      break;
    case King || king:
      king();
      break;
    case Church || church:
      kerk();
      break;
    default:
      console.log('Error');
  }
}

function woud() {
  console.log('Level 5 - Je verslaat de monsters');
  window.alert('strenght Leveled up! +1');
  strenght += 1;
  window.alert('Strenght:' + strenght);
  window.alert('Je loopt verder.');
  verder();
}

function king() {
  console.log('Level 6 - Koning');
  window.alert('De koning zit op zijn troon en kijkt je aan.');
  action = window.prompt('Wat doe je?', 'Niks, Buigen');
  if (action == 'Niks' || action == 'niks') {
    window.alert('De koning kijkt verbaast dat je niet buigt en hakt je hoofd eraf');
    window.alert('Game over!');
  } else if (action == 'Buigen' || action == 'buigen') {
    window.alert('De koning heeft respect en geeft je zijn zwaard');
    window.alert('Strenght + 10');
    strenght += 10;
    window.alert('Strenght: ' + strenght);
  } else {
    window.alert('Oeps, Dit is geen geldige keuze!');
  }
}

function bs() {
  console.log('Level 7 - BlackSmith');
  window.alert('De Blacksmith zegt hallo een geeft je een Magisch zwaard!');
  window.alert('Strenght Leveled up + 10');
  strenght += 10;
  window.alert('Strenght: ' + strenght);
  enter2();
}

function Well() {
  console.log('Level 7 - Well');
  window.alert('Je komt aan bij de put.');
  wellAction = window.prompt('Wat wil je doen?', 'Springen, Wensen');
  if (wellAction == 'Springen' || wellAction == 'springen') {
    window.alert('Je, Sprint de put in en verdrinkt in de put');
    window.alert('Game over!');
  } else if (wellAction == 'wensen' || wellAction == 'Wensen') {
    if (munten >= 10) {
      munten -= 10;
      window.alert('Je gooi 10 munten in de put.');
      wens = window.prompt('Waar wens je voor?', 'Sterkte, Stealth, Magie');
      switch (wens) {
        case Sterkte || sterkte:
          window.alert('je voelt je sterker. + 3 Strenght');
          strenght += 3;
          window.alert('Strenght: ' + strenght);
          enter3();
          break;
        case Stealth || stealth:
          window.alert('je voelt je stealthier. + 3 Stealth');
          stealth += 3;
          window.alert('Stealth: ' + stealth);
          enter3();
          break;
        case Magie || magie:
          window.alert('je voelt niks.');
          enter3();
          break;
        default:
          console.log('Error');
      }
    } else {
      window.alert('Je hebt niet genoeg munten dus je kunt geen wens doen.');
      enter3();
    }
  } else {
    window.alert('Oeps, Dit is geen geldige keuze!');
  }
}

function enter2() {
  console.log('Level 5 - Kasteel');
  window.alert('Je gaat terug het plein op.');
  doen = window.prompt('Wat wil je heen', 'Well, King');
  switch (doen) {
    case Well || well:
      well();
      break;
    case King || king:
      king();
      break;
    default:
      console.log('Error');
  }
}
