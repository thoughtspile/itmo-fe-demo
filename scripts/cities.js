const rawCities = [
  {
    name: "Moscow",
    region: "Moscow",
    population: "13010,112"
  },
  {
    "name": "Saint Petersburg",
    "region": "Saint Petersburg",
    "population": "5601,911"
  },
  {
    "name": "Novosibirsk",
    "region": "Novosibirsk Oblast",
    "population": "1633,595"
  },
  {
    "name": "Yekaterinburg",
    "region": "Sverdlovsk Oblast",
    "population": "1544,376"
  },
  {
    "name": "Kazan",
    "region": "Republic of Tatarstan",
    "population": "1308,660"
  },
  {
    "name": "Nizhny Novgorod",
    "region": "Nizhny Novgorod Oblast",
    "population": "1228,199"
  },
  {
    "name": "Chelyabinsk",
    "region": "Chelyabinsk Oblast",
    "population": "1189,525"
  },
  {
    "name": "Krasnoyarsk",
    "region": "Krasnoyarsk Krai",
    "population": "1187,771"
  },
  {
    "name": "Samara",
    "region": "Samara Oblast",
    "population": "1173,299"
  },
  {
    "name": "Ufa",
    "region": "Republic of Bashkortostan",
    "population": "1144,809"
  },
  {
    "name": "Rostov-on-Don",
    "region": "Rostov Oblast",
    "population": "1142,162"
  },
  {
    "name": "Omsk",
    "region": "Omsk Oblast",
    "population": "1125,695"
  },
  {
    "name": "Krasnodar",
    "region": "Krasnodar Krai",
    "population": "1099,344"
  },
  {
    "name": "Voronezh",
    "region": "Voronezh Oblast",
    "population": "1057,681"
  },
  {
    "name": "Perm",
    "region": "Perm Krai",
    "population": "1034,002"
  },
  {
    "name": "Volgograd",
    "region": "Volgograd Oblast",
    "population": "1028,036"
  },
  {
    "name": "Donetsk",
    "region": "Donetsk People's Republic",
    "population": "901645"
  },
  {
    "name": "Saratov",
    "region": "Saratov Oblast",
    "population": "901361"
  },
  {
    "name": "Tyumen",
    "region": "Tyumen Oblast",
    "population": "847488"
  },
  {
    "name": "Tolyatti",
    "region": "Samara Oblast",
    "population": "684709"
  },
  {
    "name": "Barnaul",
    "region": "Altai Krai",
    "population": "630877"
  },
  {
    "name": "Izhevsk",
    "region": "Udmurt Republic",
    "population": "623472"
  },
  {
    "name": "Makhachkala",
    "region": "Republic of Dagestan",
    "population": "623254"
  },
  {
    "name": "Khabarovsk",
    "region": "Khabarovsk Krai",
    "population": "617441"
  },
  {
    "name": "Ulyanovsk",
    "region": "Ulyanovsk Oblast",
    "population": "617352"
  },
  {
    "name": "Irkutsk",
    "region": "Irkutsk Oblast",
    "population": "617264"
  },
  {
    "name": "Vladivostok",
    "region": "Primorsky Krai",
    "population": "603519"
  },
  {
    "name": "Yaroslavl",
    "region": "Yaroslavl Oblast",
    "population": "577279"
  },
  {
    "name": "Kemerovo",
    "region": "Kemerovo Oblast",
    "population": "557119"
  },
  {
    "name": "Tomsk",
    "region": "Tomsk Oblast",
    "population": "556478"
  },
  {
    "name": "Naberezhnye Chelny",
    "region": "Republic of Tatarstan",
    "population": "548434"
  },
  {
    "name": "Sevastopol",
    "region": "Sevastopol (federal city)",
    "population": "547820"
  },
  {
    "name": "Stavropol",
    "region": "Stavropol Krai",
    "population": "547443"
  },
  {
    "name": "Orenburg",
    "region": "Orenburg Oblast",
    "population": "543654"
  },
  {
    "name": "Novokuznetsk",
    "region": "Kemerovo Oblast",
    "population": "537480"
  },
  {
    "name": "Ryazan",
    "region": "Ryazan Oblast",
    "population": "528599"
  },
  {
    "name": "Balashikha",
    "region": "Moscow Oblast",
    "population": "520962"
  },
  {
    "name": "Penza",
    "region": "Penza Oblast",
    "population": "501109"
  },
  {
    "name": "Cheboksary",
    "region": "Chuvash Republic",
    "population": "497807"
  },
  {
    "name": "Lipetsk",
    "region": "Lipetsk Oblast",
    "population": "496403"
  },
  {
    "name": "Kaliningrad",
    "region": "Kaliningrad Oblast",
    "population": "490449"
  },
  {
    "name": "Astrakhan",
    "region": "Astrakhan Oblast",
    "population": "475629"
  },
  {
    "name": "Tula",
    "region": "Tula Oblast",
    "population": "473622"
  },
  {
    "name": "Kirov",
    "region": "Kirov Oblast",
    "population": "468212"
  },
  {
    "name": "Sochi",
    "region": "Krasnodar Krai",
    "population": "466078"
  },
  {
    "name": "Kursk",
    "region": "Kursk Oblast",
    "population": "440052"
  },
  {
    "name": "Mariupol",
    "region": "Donetsk People's Republic",
    "population": "425681"
  },
  {
    "name": "Ulan-Ude",
    "region": "Republic of Buryatia",
    "population": "437565"
  },
  {
    "name": "Tver",
    "region": "Tver Oblast",
    "population": "416219"
  },
  {
    "name": "Magnitogorsk",
    "region": "Chelyabinsk Oblast",
    "population": "410594"
  },
  {
    "name": "Lugansk",
    "region": "Luhansk People's Republic",
    "population": "425681"
  },
  {
    "name": "Surgut",
    "region": "Khanty-Mansi Autonomous Okrug-Yugra",
    "population": "396443"
  },
  {
    "name": "Bryansk",
    "region": "Bryansk Oblast",
    "population": "379152"
  },
  {
    "name": "Ivanovo",
    "region": "Ivanovo Oblast",
    "population": "361644"
  },
  {
    "name": "Yakutsk",
    "region": "Sakha (Yakutia) Republic",
    "population": "355443"
  },
  {
    "name": "Vladimir",
    "region": "Vladimir Oblast",
    "population": "349951"
  },
  {
    "name": "Simferopol",
    "region": "Republic of Crimea",
    "population": "340540"
  },
  {
    "name": "Belgorod",
    "region": "Belgorod Oblast",
    "population": "339978"
  },
  {
    "name": "Makeyevka",
    "region": "Donetsk People's Republic",
    "population": "338968"
  },
  {
    "name": "Nizhny Tagil",
    "region": "Sverdlovsk Oblast",
    "population": "338966"
  },
  {
    "name": "Kaluga",
    "region": "Kaluga Oblast",
    "population": "337058"
  },
  {
    "name": "Chita",
    "region": "Zabaykalsky Krai",
    "population": "334427"
  },
  {
    "name": "Grozny",
    "region": "Chechen Republic",
    "population": "328533"
  },
  {
    "name": "Volzhsky",
    "region": "Volgograd Oblast",
    "population": "321479"
  },
  {
    "name": "Smolensk",
    "region": "Smolensk Oblast",
    "population": "316570"
  },
  {
    "name": "Podolsk",
    "region": "Moscow Oblast",
    "population": "314934"
  },
  {
    "name": "Saransk",
    "region": "Republic of Mordovia",
    "population": "314871"
  },
  {
    "name": "Vologda",
    "region": "Vologda Oblast",
    "population": "313944"
  },
  {
    "name": "Kurgan",
    "region": "Kurgan Oblast",
    "population": "310911"
  },
  {
    "name": "Cherepovets",
    "region": "Vologda Oblast",
    "population": "305185"
  },
  {
    "name": "Oryol",
    "region": "Oryol Oblast",
    "population": "303169"
  },
  {
    "name": "Arkhangelsk",
    "region": "Arkhangelsk Oblast",
    "population": "301199"
  },
  {
    "name": "Vladikavkaz",
    "region": "Republic of North Ossetia-Alania",
    "population": "295830"
  },
  {
    "name": "Nizhnevartovsk",
    "region": "Khanty-Mansi Autonomous Okrug-Yugra",
    "population": "283256"
  },
  {
    "name": "Yoshkar-Ola",
    "region": "Mari El Republic",
    "population": "281248"
  },
  {
    "name": "Sterlitamak",
    "region": "Republic of Bashkortostan",
    "population": "277410"
  },
  {
    "name": "Murmansk",
    "region": "Murmansk Oblast",
    "population": "270384"
  },
  {
    "name": "Kostroma",
    "region": "Kostroma Oblast",
    "population": "267481"
  },
  {
    "name": "Novorossiysk",
    "region": "Krasnodar Krai",
    "population": "262293"
  },
  {
    "name": "Tambov",
    "region": "Tambov Oblast",
    "population": "261803"
  },
  {
    "name": "Khimki",
    "region": "Moscow Oblast",
    "population": "257128"
  },
  {
    "name": "Mytishchi",
    "region": "Moscow Oblast",
    "population": "255429"
  },
  {
    "name": "Nalchik",
    "region": "Kabardino-Balkar Republic",
    "population": "247054"
  },
  {
    "name": "Taganrog",
    "region": "Rostov Oblast",
    "population": "245120"
  },
  {
    "name": "Nizhnekamsk",
    "region": "Republic of Tatarstan",
    "population": "241479"
  },
  {
    "name": "Blagoveshchensk",
    "region": "Amur Oblast",
    "population": "241437"
  },
  {
    "name": "Gorlovka",
    "region": "Donetsk People's Republic",
    "population": "239828"
  },
  {
    "name": "Komsomolsk-on-Amur",
    "region": "Khabarovsk Krai",
    "population": "238505"
  },
  {
    "name": "Petrozavodsk",
    "region": "Republic of Karelia",
    "population": "234897"
  },
  {
    "name": "Korolyov",
    "region": "Moscow Oblast",
    "population": "228095"
  },
  {
    "name": "Shakhty",
    "region": "Rostov Oblast",
    "population": "226452"
  },
  {
    "name": "Engels",
    "region": "Saratov Oblast",
    "population": "225428"
  },
  {
    "name": "Veliky Novgorod",
    "region": "Novgorod Oblast",
    "population": "224286"
  },
  {
    "name": "Lyubertsy",
    "region": "Moscow Oblast",
    "population": "224195"
  },
  {
    "name": "Bratsk",
    "region": "Irkutsk Oblast",
    "population": "224071"
  },
  {
    "name": "Stary Oskol",
    "region": "Belgorod Oblast",
    "population": "221676"
  },
  {
    "name": "Angarsk",
    "region": "Irkutsk Oblast",
    "population": "221296"
  },
  {
    "name": "Syktyvkar",
    "region": "Komi Republic",
    "population": "220580"
  },
  {
    "name": "Dzerzhinsk",
    "region": "Nizhny Novgorod Oblast",
    "population": "218630"
  },
  {
    "name": "Pskov",
    "region": "Pskov Oblast",
    "population": "193082"
  },
  {
    "name": "Orsk",
    "region": "Orenburg Oblast",
    "population": "189195"
  },
  {
    "name": "Krasnogorsk",
    "region": "Moscow Oblast",
    "population": "187634"
  },
  {
    "name": "Armavir",
    "region": "Krasnodar Krai",
    "population": "187177"
  },
  {
    "name": "Abakan",
    "region": "Republic of Khakassia",
    "population": "184769"
  },
  {
    "name": "Balakovo",
    "region": "Saratov Oblast",
    "population": "184466"
  },
  {
    "name": "Biysk",
    "region": "Altai Krai",
    "population": "183852"
  },
  {
    "name": "Yuzhno-Sakhalinsk",
    "region": "Sakhalin Oblast",
    "population": "181587"
  },
  {
    "name": "Odintsovo",
    "region": "Moscow Oblast",
    "population": "180530"
  },
  {
    "name": "Ussuriysk",
    "region": "Primorsky Krai",
    "population": "180393"
  },
  {
    "name": "Prokopyevsk",
    "region": "Kemerovo Oblast",
    "population": "177819"
  },
  {
    "name": "Rybinsk",
    "region": "Yaroslavl Oblast",
    "population": "177295"
  },
  {
    "name": "Norilsk",
    "region": "Krasnoyarsk Krai",
    "population": "174453"
  },
  {
    "name": "Volgodonsk",
    "region": "Rostov Oblast",
    "population": "168048"
  },
  {
    "name": "Syzran",
    "region": "Samara Oblast",
    "population": "165725"
  },
  {
    "name": "Petropavlovsk-Kamchatsky",
    "region": "Kamchatka Krai",
    "population": "164900"
  },
  {
    "name": "Kamensk-Uralsky",
    "region": "Sverdlovsk Oblast",
    "population": "164192"
  },
  {
    "name": "Novocherkassk",
    "region": "Rostov Oblast",
    "population": "163674"
  },
  {
    "name": "Almetyevsk",
    "region": "Republic of Tatarstan",
    "population": "163512"
  },
  {
    "name": "Zlatoust",
    "region": "Chelyabinsk Oblast",
    "population": "161774"
  },
  {
    "name": "Severodvinsk",
    "region": "Arkhangelsk Oblast",
    "population": "157213"
  },
  {
    "name": "Khasavyurt",
    "region": "Republic of Dagestan",
    "population": "155144"
  },
  {
    "name": "Kerch",
    "region": "Republic of Crimea",
    "population": "154621"
  },
  {
    "name": "Domodedovo",
    "region": "Moscow Oblast",
    "population": "152404"
  },
  {
    "name": "Melitopol",
    "region": "Zaporozhye Oblast",
    "population": "148851"
  },
  {
    "name": "Salavat",
    "region": "Republic of Bashkortostan",
    "population": "148575"
  },
  {
    "name": "Miass",
    "region": "Chelyabinsk Oblast",
    "population": "147995"
  },
  {
    "name": "Kopeysk",
    "region": "Chelyabinsk Oblast",
    "population": "147806"
  },
  {
    "name": "Pyatigorsk",
    "region": "Stavropol Krai",
    "population": "146473"
  },
  {
    "name": "Elektrostal",
    "region": "Moscow Oblast",
    "population": "146403"
  },
  {
    "name": "Maykop",
    "region": "Republic of Adygea",
    "population": "143385"
  },
  {
    "name": "Nakhodka",
    "region": "Primorsky Krai",
    "population": "139931"
  },
  {
    "name": "Berezniki",
    "region": "Perm Krai",
    "population": "138069"
  },
  {
    "name": "Kolomna",
    "region": "Moscow Oblast",
    "population": "134850"
  },
  {
    "name": "Shchyolkovo",
    "region": "Moscow Oblast",
    "population": "134211"
  },
  {
    "name": "Serpukhov",
    "region": "Moscow Oblast",
    "population": "133793"
  },
  {
    "name": "Kovrov",
    "region": "Vladimir Oblast",
    "population": "132417"
  },
  {
    "name": "Neftekamsk",
    "region": "Republic of Bashkortostan",
    "population": "131942"
  },
  {
    "name": "Kislovodsk",
    "region": "Stavropol Krai",
    "population": "127521"
  },
  {
    "name": "Bataysk",
    "region": "Rostov Oblast",
    "population": "126988"
  },
  {
    "name": "Rubtsovsk",
    "region": "Altai Krai",
    "population": "126834"
  },
  {
    "name": "Obninsk",
    "region": "Kaluga Oblast",
    "population": "125376"
  },
  {
    "name": "Kyzyl",
    "region": "Tuva Republic",
    "population": "125241"
  },
  {
    "name": "Derbent",
    "region": "Republic of Dagestan",
    "population": "124953"
  },
  {
    "name": "Nefteyugansk",
    "region": "Khanty-Mansi Autonomous Okrug-Yugra",
    "population": "124732"
  },
  {
    "name": "Nazran",
    "region": "Republic of Ingushetia",
    "population": "122350"
  },
  {
    "name": "Kaspiysk",
    "region": "Republic of Dagestan",
    "population": "121140"
  },
  {
    "name": "Dolgoprudny",
    "region": "Moscow Oblast",
    "population": "120907"
  },
  {
    "name": "Novocheboksarsk",
    "region": "Chuvash Republic",
    "population": "120375"
  },
  {
    "name": "Novomoskovsk",
    "region": "Tula Oblast",
    "population": "119697"
  },
  {
    "name": "Yessentuki",
    "region": "Stavropol Krai",
    "population": "119658"
  },
  {
    "name": "Nevinnomyssk",
    "region": "Stavropol Krai",
    "population": "117562"
  },
  {
    "name": "Oktyabrsky",
    "region": "Republic of Bashkortostan",
    "population": "115557"
  },
  {
    "name": "Ramenskoye",
    "region": "Moscow Oblast",
    "population": "114537"
  },
  {
    "name": "Pervouralsk",
    "region": "Sverdlovsk Oblast",
    "population": "114450"
  },
  {
    "name": "Mikhaylovsk",
    "region": "Stavropol Krai",
    "population": "114133"
  },
  {
    "name": "Reutov",
    "region": "Moscow Oblast",
    "population": "113871"
  },
  {
    "name": "Cherkessk",
    "region": "Karachay-Cherkess Republic",
    "population": "113226"
  },
  {
    "name": "Zhukovsky",
    "region": "Moscow Oblast",
    "population": "111222"
  },
  {
    "name": "Dimitrovgrad",
    "region": "Ulyanovsk Oblast",
    "population": "110968"
  },
  {
    "name": "Pushkino",
    "region": "Moscow Oblast",
    "population": "110868"
  },
  {
    "name": "Artyom",
    "region": "Primorsky Krai",
    "population": "109556"
  },
  {
    "name": "Kamyshin",
    "region": "Volgograd Oblast",
    "population": "107927"
  },
  {
    "name": "Yevpatoriya",
    "region": "Republic of Crimea",
    "population": "107877"
  },
  {
    "name": "Murom",
    "region": "Vladimir Oblast",
    "population": "107497"
  },
  {
    "name": "Khanty-Mansiysk",
    "region": "Khanty-Mansi Autonomous Okrug-Yugra",
    "population": "107473"
  },
  {
    "name": "Novy Urengoy",
    "region": "Yamalo-Nenets Autonomous Okrug",
    "population": "107251"
  },
  {
    "name": "Seversk",
    "region": "Tomsk Oblast",
    "population": "106648"
  },
  {
    "name": "Berdyansk",
    "region": "Zaporozhye Oblast",
    "population": "106311"
  },
  {
    "name": "Alchevsk",
    "region": "Luhansk People's Republic",
    "population": "106062"
  },
  {
    "name": "Orekhovo-Zuyevo",
    "region": "Moscow Oblast",
    "population": "105745"
  },
  {
    "name": "Arzamas",
    "region": "Nizhny Novgorod Oblast",
    "population": "104908"
  },
  {
    "name": "Noginsk",
    "region": "Moscow Oblast",
    "population": "103891"
  },
  {
    "name": "Novoshakhtinsk",
    "region": "Rostov Oblast",
    "population": "103480"
  },
  {
    "name": "Berdsk",
    "region": "Novosibirsk Oblast",
    "population": "102850"
  },
  {
    "name": "Elista",
    "region": "Republic of Kalmykia",
    "population": "102583"
  },
  {
    "name": "Sergiyev Posad",
    "region": "Moscow Oblast",
    "population": "101756"
  },
  {
    "name": "Vidnoye",
    "region": "Moscow Oblast",
    "population": "101490"
  },
  {
    "name": "Achinsk",
    "region": "Krasnoyarsk Krai",
    "population": "100621"
  },
  {
    "name": "Tobolsk",
    "region": "Tyumen Oblast",
    "population": "100352"
  },
  {
    "name": "Noyabrsk",
    "region": "Yamalo-Nenets Autonomous Okrug",
    "population": "100188"
  },
  {
    "name": "Yelets",
    "region": "Lipetsk Oblast",
    "population": "99875"
  },
  {
    "name": "Zelenodolsk",
    "region": "Republic of Tatarstan",
    "population": "99137"
  },
  {
    "name": "Severodonetsk",
    "region": "Luhansk People's Republic",
    "population": "99036"
  },
  {
    "name": "Novokuybyshevsk",
    "region": "Samara Oblast",
    "population": "98306"
  },
  {
    "name": "Votkinsk",
    "region": "Udmurt Republic",
    "population": "97471"
  },
  {
    "name": "Zheleznogorsk",
    "region": "Kursk Oblast",
    "population": "97038"
  },
  {
    "name": "Mezhdurechensk",
    "region": "Kemerovo Oblast",
    "population": "96174"
  },
  {
    "name": "Voskresensk",
    "region": "Moscow Oblast",
    "population": "95495"
  },
  {
    "name": "Gatchina",
    "region": "Leningrad Oblast",
    "population": "94377"
  },
  {
    "name": "Serov",
    "region": "Sverdlovsk Oblast",
    "population": "94211"
  },
  {
    "name": "Sarov",
    "region": "Nizhny Novgorod Oblast",
    "population": "93357"
  },
  {
    "name": "Lisichansk",
    "region": "Luhansk People's Republic",
    "population": "93340"
  },
  {
    "name": "Leninsk-Kuznetsky",
    "region": "Kemerovo Oblast",
    "population": "92244"
  },
  {
    "name": "Sarapul",
    "region": "Udmurt Republic",
    "population": "91115"
  },
  {
    "name": "Magadan",
    "region": "Magadan Oblast",
    "population": "90757"
  },
  {
    "name": "Michurinsk",
    "region": "Tambov Oblast",
    "population": "90451"
  },
  {
    "name": "Solikamsk",
    "region": "Perm Krai",
    "population": "89473"
  },
  {
    "name": "Murino",
    "region": "Leningrad Oblast",
    "population": "89083"
  },
  {
    "name": "Chekhov",
    "region": "Moscow Oblast",
    "population": "89025"
  },
  {
    "name": "Klin",
    "region": "Moscow Oblast",
    "population": "88511"
  },
  {
    "name": "Buzuluk",
    "region": "Orenburg Oblast",
    "population": "88341"
  },
  {
    "name": "Glazov",
    "region": "Udmurt Republic",
    "population": "87762"
  },
  {
    "name": "Kansk",
    "region": "Krasnoyarsk Krai",
    "population": "86816"
  },
  {
    "name": "Velikiye Luki",
    "region": "Pskov Oblast",
    "population": "86711"
  },
  {
    "name": "Kamensk-Shakhtinsky",
    "region": "Rostov Oblast",
    "population": "86365"
  },
  {
    "name": "Gubkin",
    "region": "Belgorod Oblast",
    "population": "85225"
  },
  {
    "name": "Kiselyovsk",
    "region": "Kemerovo Oblast",
    "population": "83431"
  },
  {
    "name": "Yeysk",
    "region": "Krasnodar Krai",
    "population": "82943"
  },
  {
    "name": "Ivanteyevka",
    "region": "Moscow Oblast",
    "population": "82827"
  },
  {
    "name": "Lobnya",
    "region": "Moscow Oblast",
    "population": "82764"
  },
  {
    "name": "Zheleznogorsk",
    "region": "Krasnoyarsk Krai",
    "population": "82723"
  },
  {
    "name": "Azov",
    "region": "Rostov Oblast",
    "population": "81924"
  },
  {
    "name": "Anapa",
    "region": "Krasnodar Krai",
    "population": "81863"
  },
  {
    "name": "Bugulma",
    "region": "Republic of Tatarstan",
    "population": "81677"
  },
  {
    "name": "Gelendzhik",
    "region": "Krasnodar Krai",
    "population": "80204"
  },
  {
    "name": "Ukhta",
    "region": "Komi Republic",
    "population": "79899"
  },
  {
    "name": "Yurga",
    "region": "Kemerovo Oblast",
    "population": "79693"
  },
  {
    "name": "Ust-Ilimsk",
    "region": "Irkutsk Oblast",
    "population": "79570"
  },
  {
    "name": "Krasny Luch",
    "region": "Luhansk People's Republic",
    "population": "79533"
  },
  {
    "name": "Vsevolozhsk",
    "region": "Leningrad Oblast",
    "population": "79038"
  },
  {
    "name": "Novouralsk",
    "region": "Sverdlovsk Oblast",
    "population": "78479"
  },
  {
    "name": "Kuznetsk",
    "region": "Penza Oblast",
    "population": "78390"
  },
  {
    "name": "Bor",
    "region": "Nizhny Novgorod Oblast",
    "population": "78372"
  },
  {
    "name": "Kineshma",
    "region": "Ivanovo Oblast",
    "population": "77694"
  },
  {
    "name": "Ozyorsk",
    "region": "Chelyabinsk Oblast",
    "population": "76896"
  },
  {
    "name": "Yenakiyevo",
    "region": "Donetsk People's Republic",
    "population": "76673"
  },
  {
    "name": "Novotroitsk",
    "region": "Orenburg Oblast",
    "population": "75960"
  },
  {
    "name": "Kropotkin",
    "region": "Krasnodar Krai",
    "population": "75858"
  },
  {
    "name": "Chaykovsky",
    "region": "Perm Krai",
    "population": "75837"
  },
  {
    "name": "Chernogorsk",
    "region": "Republic of Khakassia",
    "population": "75745"
  },
  {
    "name": "Usolye-Sibirskoye",
    "region": "Irkutsk Oblast",
    "population": "74762"
  },
  {
    "name": "Yalta",
    "region": "Republic of Crimea",
    "population": "74652"
  },
  {
    "name": "Dubna",
    "region": "Moscow Oblast",
    "population": "74183"
  },
  {
    "name": "Balashov",
    "region": "Saratov Oblast",
    "population": "74057"
  },
  {
    "name": "Yelabuga",
    "region": "Republic of Tatarstan",
    "population": "73630"
  },
  {
    "name": "Stakhanov",
    "region": "Luhansk People's Republic",
    "population": "73248"
  },
  {
    "name": "Novoaltaysk",
    "region": "Altai Krai",
    "population": "73049"
  },
  {
    "name": "Vyborg",
    "region": "Leningrad Oblast",
    "population": "72530"
  },
  {
    "name": "Yegoryevsk",
    "region": "Moscow Oblast",
    "population": "71686"
  },
  {
    "name": "Verkhnyaya Pyshma",
    "region": "Sverdlovsk Oblast",
    "population": "71335"
  },
  {
    "name": "Naro-Fominsk",
    "region": "Moscow Oblast",
    "population": "71121"
  },
  {
    "name": "Bakhmut",
    "region": "Donetsk People's Republic",
    "population": "71094"
  },
  {
    "name": "Mineralnye Vody",
    "region": "Stavropol Krai",
    "population": "70485"
  },
  {
    "name": "Troitsk",
    "region": "Chelyabinsk Oblast",
    "population": "70301"
  },
  {
    "name": "Chapayevsk",
    "region": "Samara Oblast",
    "population": "70228"
  },
  {
    "name": "Minusinsk",
    "region": "Krasnoyarsk Krai",
    "population": "70089"
  },
  {
    "name": "Birobidzhan",
    "region": "Jewish Autonomous Oblast",
    "population": "70064"
  },
  {
    "name": "Shadrinsk",
    "region": "Kurgan Oblast",
    "population": "68609"
  },
  {
    "name": "Belovo",
    "region": "Kemerovo Oblast",
    "population": "68542"
  },
  {
    "name": "Tuymazy",
    "region": "Republic of Bashkortostan",
    "population": "68349"
  },
  {
    "name": "Sertolovo",
    "region": "Leningrad Oblast",
    "population": "68241"
  },
  {
    "name": "Buynaksk",
    "region": "Republic of Dagestan",
    "population": "68121"
  },
  {
    "name": "Ishim",
    "region": "Tyumen Oblast",
    "population": "67614"
  },
  {
    "name": "Kirovo-Chepetsk",
    "region": "Kirov Oblast",
    "population": "66651"
  },
  {
    "name": "Anzhero-Sudzhensk",
    "region": "Kemerovo Oblast",
    "population": "66583"
  },
  {
    "name": "Feodosiya",
    "region": "Republic of Crimea",
    "population": "66293"
  },
  {
    "name": "Dmitrov",
    "region": "Moscow Oblast",
    "population": "65574"
  },
  {
    "name": "Sosnovy Bor",
    "region": "Leningrad Oblast",
    "population": "65367"
  },
  {
    "name": "Gorno-Altaysk",
    "region": "Altai Republic",
    "population": "65342"
  },
  {
    "name": "Lytkarino",
    "region": "Moscow Oblast",
    "population": "65212"
  },
  {
    "name": "Pavlovsky Posad",
    "region": "Moscow Oblast",
    "population": "65098"
  },
  {
    "name": "Beloretsk",
    "region": "Republic of Bashkortostan",
    "population": "64525"
  },
  {
    "name": "Stupino",
    "region": "Moscow Oblast",
    "population": "64412"
  },
  {
    "name": "Gudermes",
    "region": "Chechen Republic",
    "population": "64376"
  },
  {
    "name": "Ishimbay",
    "region": "Republic of Bashkortostan",
    "population": "64041"
  },
  {
    "name": "Donskoy",
    "region": "Tula Oblast",
    "population": "63837"
  },
  {
    "name": "Kotelniki",
    "region": "Moscow Oblast",
    "population": "63728"
  },
  {
    "name": "Kstovo",
    "region": "Nizhny Novgorod Oblast",
    "population": "63646"
  },
  {
    "name": "Urus-Martan",
    "region": "Chechen Republic",
    "population": "63449"
  },
  {
    "name": "Georgiyevsk",
    "region": "Stavropol Krai",
    "population": "63221"
  },
  {
    "name": "Klintsy",
    "region": "Bryansk Oblast",
    "population": "63059"
  },
  {
    "name": "Nyagan",
    "region": "Khanty-Mansi Autonomous Okrug-Yugra",
    "population": "63034"
  },
  {
    "name": "Slavyansk-na-Kubani",
    "region": "Krasnodar Krai",
    "population": "62985"
  },
  {
    "name": "Kungur",
    "region": "Perm Krai",
    "population": "62673"
  },
  {
    "name": "Sunzha",
    "region": "Republic of Ingushetia",
    "population": "62078"
  },
  {
    "name": "Tuapse",
    "region": "Krasnodar Krai",
    "population": "61571"
  },
  {
    "name": "Kogalym",
    "region": "Khanty-Mansi Autonomous Okrug-Yugra",
    "population": "61441"
  },
  {
    "name": "Belogorsk",
    "region": "Amur Oblast",
    "population": "61440"
  },
  {
    "name": "Leninogorsk",
    "region": "Republic of Tatarstan",
    "population": "60993"
  },
  {
    "name": "Rossosh",
    "region": "Voronezh Oblast",
    "population": "60879"
  },
  {
    "name": "Aleksin",
    "region": "Tula Oblast",
    "population": "60842"
  },
  {
    "name": "Borisoglebsk",
    "region": "Voronezh Oblast",
    "population": "60687"
  },
  {
    "name": "Fryazino",
    "region": "Moscow Oblast",
    "population": "60580"
  },
  {
    "name": "Gukovo",
    "region": "Rostov Oblast",
    "population": "60361"
  },
  {
    "name": "Revda",
    "region": "Sverdlovsk Oblast",
    "population": "60200"
  },
  {
    "name": "Prokhladny",
    "region": "Kabardino-Balkar Republic",
    "population": "59938"
  },
  {
    "name": "Beryozovsky",
    "region": "Sverdlovsk Oblast",
    "population": "59698"
  },
  {
    "name": "Belebey",
    "region": "Republic of Bashkortostan",
    "population": "59195"
  },
  {
    "name": "Chistopol",
    "region": "Republic of Tatarstan",
    "population": "58815"
  },
  {
    "name": "Zarechny",
    "region": "Penza Oblast",
    "population": "58510"
  },
  {
    "name": "Budyonnovsk",
    "region": "Stavropol Krai",
    "population": "58103"
  },
  {
    "name": "Kumertau",
    "region": "Republic of Bashkortostan",
    "population": "57949"
  },
  {
    "name": "Salsk",
    "region": "Rostov Oblast",
    "population": "57937"
  },
  {
    "name": "Dzerzhinsky",
    "region": "Moscow Oblast",
    "population": "57918"
  },
  {
    "name": "Labinsk",
    "region": "Krasnodar Krai",
    "population": "57428"
  },
  {
    "name": "Asbest",
    "region": "Sverdlovsk Oblast",
    "population": "57317"
  },
  {
    "name": "Iskitim",
    "region": "Novosibirsk Oblast",
    "population": "57147"
  },
  {
    "name": "Pavlovo",
    "region": "Nizhny Novgorod Oblast",
    "population": "57116"
  },
  {
    "name": "Alexandrov",
    "region": "Vladimir Oblast",
    "population": "57053"
  },
  {
    "name": "Vorkuta",
    "region": "Komi Republic",
    "population": "56985"
  },
  {
    "name": "Sibay",
    "region": "Republic of Bashkortostan",
    "population": "56514"
  },
  {
    "name": "Meleuz",
    "region": "Republic of Bashkortostan",
    "population": "56505"
  },
  {
    "name": "Kotlas",
    "region": "Arkhangelsk Oblast",
    "population": "56093"
  },
  {
    "name": "Mikhaylovka",
    "region": "Volgograd Oblast",
    "population": "56031"
  },
  {
    "name": "Izberbash",
    "region": "Republic of Dagestan",
    "population": "55996"
  },
  {
    "name": "Krasnoturyinsk",
    "region": "Sverdlovsk Oblast",
    "population": "55875"
  },
  {
    "name": "Belorechensk",
    "region": "Krasnodar Krai",
    "population": "55870"
  },
  {
    "name": "Rzhev",
    "region": "Tver Oblast",
    "population": "55757"
  },
  {
    "name": "Lesosibirsk",
    "region": "Krasnoyarsk Krai",
    "population": "55730"
  },
  {
    "name": "Tikhoretsk",
    "region": "Krasnodar Krai",
    "population": "55686"
  },
  {
    "name": "Tikhvin",
    "region": "Leningrad Oblast",
    "population": "55415"
  },
  {
    "name": "Rubezhnoye",
    "region": "Luhansk People's Republic",
    "population": "55247"
  },
  {
    "name": "Shuya",
    "region": "Ivanovo Oblast",
    "population": "55225"
  },
  {
    "name": "Polevskoy",
    "region": "Sverdlovsk Oblast",
    "population": "55182"
  },
  {
    "name": "Shchyokino",
    "region": "Tula Oblast",
    "population": "55109"
  },
  {
    "name": "Shali",
    "region": "Chechen Republic",
    "population": "55054"
  },
  {
    "name": "Volsk",
    "region": "Saratov Oblast",
    "population": "55035"
  },
  {
    "name": "Krymsk",
    "region": "Krasnodar Krai",
    "population": "54597"
  },
  {
    "name": "Zelenogorsk",
    "region": "Krasnoyarsk Krai",
    "population": "54279"
  },
  {
    "name": "Liski",
    "region": "Voronezh Oblast",
    "population": "54147"
  },
  {
    "name": "Lysva",
    "region": "Perm Krai",
    "population": "53855"
  },
  {
    "name": "Neryungri",
    "region": "Sakha (Yakutia) Republic",
    "population": "53409"
  },
  {
    "name": "Volzhsk",
    "region": "Mari El Republic",
    "population": "53013"
  },
  {
    "name": "Energodar",
    "region": "Zaporozhye Oblast",
    "population": "52237"
  },
  {
    "name": "Vyazma",
    "region": "Smolensk Oblast",
    "population": "51950"
  },
  {
    "name": "Timashyovsk",
    "region": "Krasnodar Krai",
    "population": "51858"
  },
  {
    "name": "Gus-Khrustalny",
    "region": "Vladimir Oblast",
    "population": "51552"
  },
  {
    "name": "Krasnokamensk",
    "region": "Zabaykalsky Krai",
    "population": "51137"
  },
  {
    "name": "Kirishi",
    "region": "Leningrad Oblast",
    "population": "51028"
  },
  {
    "name": "Snezhinsk",
    "region": "Chelyabinsk Oblast",
    "population": "50619"
  },
  {
    "name": "Zhigulyovsk",
    "region": "Samara Oblast",
    "population": "50466"
  }
];

export const cities = rawCities.map((city) => ({
    ...city,
    population: Number(city.population.replace(/,/g, ''))
}));
