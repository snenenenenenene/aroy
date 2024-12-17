export interface MenuItem {
  number: number;
  name: string;
  description: string;
  price: number;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface MenuData {
  categories: MenuCategory[];
}

export const menuData: MenuData = {
  categories: [
    // VOORGERECHTEN
    {
      name: "VOORGERECHTEN",
      items: [
        {
          number: 1,
          name: "YAM KUNG",
          description: "Halfgegaarde scampi's met limoengras en koriander",
          price: 15.00
        },
        {
          number: 2,
          name: "YAM PLAMUK",
          description: "Inktvis met pikante saus, Thaise kruiden en munt",
          price: 15.00
        }
      ]
    },
    // WARME VOORGERECHTEN
    {
      name: "WARME VOORGERECHTEN",
      items: [
        {
          number: 4,
          name: "KAI SATAY",
          description: "Thaise gemarineerde kippenreepjes met pindasaus (4 stuks)",
          price: 8.00
        }
      ]
    },
    // SOEPEN
    {
      name: "SOEPEN",
      items: [
        {
          number: 7,
          name: "TOM KHAI KAI",
          description: "Kippensoep met kokosmelk",
          price: 9.00
        },
        {
          number: 8,
          name: "TOM YAM KUNG",
          description: "Scampisoep met citroengras en chilipepers",
          price: 10.00
        },
        {
          number: 9,
          name: "TOM KHA KUNG",
          description: "Scampisoep met kokosmelk",
          price: 10.00
        }
      ]
    },
    // GEVOGELTE
    {
      name: "GEVOGELTE",
      items: [
        {
          number: 10,
          name: "KAENG KIOW WAN KAI",
          description: "Kippenfilet met groene curry en kokos",
          price: 15.00
        },
        {
          number: 11,
          name: "KAI PHAD PRIOWAN",
          description: "Gebakken kippenfilet zoetzuur",
          price: 15.00
        },
        {
          number: 12,
          name: "PHAD KAPRAO KAI",
          description: "Kippenfilet met pikante basilicum",
          price: 15.00
        },
        {
          number: 13,
          name: "PANENG KAI YANG",
          description: "Gegrilde kippenreepjes in een sausje van paneng curry",
          price: 15.00
        },
        {
          number: 14,
          name: "KAENG KARI KAI",
          description: "Gegrilde kippenreepjes in Indische curry en kokosmelk",
          price: 15.00
        },
        {
          number: 15,
          name: "KAI PHAD MEDMAMUANG",
          description: "Gebakken kip met babymaïs ananas en cashewnoten",
          price: 15.00
        },
        {
          number: 16,
          name: "KAI PHAD PHONG KARI",
          description: "Gebakken kip met Indische curry",
          price: 15.00
        },
        {
          number: 17,
          name: "PED PHAD NAMMANHOY",
          description: "Fijngesneden eendenfilet met groenten, paddenstoeltjes en oestersaus",
          price: 18.00
        },
        {
          number: 18,
          name: "PED PHAD CHAA",
          description: "Fijngesneden eendenfilet met Thaise groenten, pikante saus en basilicum",
          price: 18.00
        },
        {
          number: 19,
          name: "KAENG PED YANG",
          description: "Fijngesneden eendenfilet met ananas, rambutan en aubergines in rode curry",
          price: 19.00
        },
        {
          number: 20,
          name: "PHAD THAI KAI",
          description: "Gebakken Thaise noedels met kip in de wok",
          price: 14.00
        },
        {
          number: 21,
          name: "KAW PHAD KAI",
          description: "Gebakken rijst met kip",
          price: 14.00
        }
      ]
    },
    // VIS
    {
      name: "VIS",
      items: [
        {
          number: 22,
          name: "KUNG PHAD KAPRAO",
          description: "Gebakken scampi's met Thaise basilicum",
          price: 18.00
        },
        {
          number: 23,
          name: "KUNG PHAD PRIK KAENG",
          description: "Scampi's in rode currypasta, groenten en Thaise basilicum",
          price: 18.00
        },
        {
          number: 24,
          name: "PHAD KIE MAO THALAY",
          description: "Zeevruchtenmengeling met groenten en Thaise basilicum",
          price: 18.00
        },
        {
          number: 25,
          name: "KUNG PHAD PHAK RUAM",
          description: "Scampi's met groenten, limoen en een vleugje koriander",
          price: 18.00
        },
        {
          number: 26,
          name: "PANENG KUNG",
          description: "Scampi's in rode curry",
          price: 18.00
        },
        {
          number: 27,
          name: "KUNG PHAD PHONG KARI",
          description: "Gebakken scampi's met Indische curry",
          price: 18.00
        },
        {
          number: 28,
          name: "KUNG PHAD PRIOWAN",
          description: "Gebakken scampi's met zoetzure saus",
          price: 18.00
        },
        {
          number: 29,
          name: "KUNG PHAD MEDMAMUANG",
          description: "Gebakken scampi's met babymaïs en cashewnoten",
          price: 18.00
        },
        {
          number: 30,
          name: "KAENG KIOW WAN KUNG",
          description: "Scampi's met groene currysaus",
          price: 18.00
        },
        {
          number: 32,
          name: "MIHOEN SINGAPORE",
          description: "Kruidige mihoen met scampi's en zoet varkensvlees, afgewerkt met Indische curry",
          price: 18.00
        },
        {
          number: 33,
          name: "PHAD THAI KUNG",
          description: "Gebakken Thaise noedels met scampi's in de wok",
          price: 18.00
        }
      ]
    },
    // VEGETARISCHE HOOFDGERECHTEN
    {
      name: "VEGETARISCHE HOOFDGERECHTEN",
      items: [
        {
          number: 34,
          name: "PHAD PHAK RUAMMIT",
          description: "Gebakken groenten in sojasaus",
          price: 13.00
        },
        {
          number: 35,
          name: "PHAD THAI TOFU",
          description: "Gebakken Thaise noedels met tofu",
          price: 12.00
        },
        {
          number: 36,
          name: "KAENG NOPPHA KAO",
          description: "Groenten met groene curry en kokos",
          price: 14.00
        }
      ]
    },
    // VLEES
    {
      name: "VLEES",
      items: [
        {
          number: 37,
          name: "NEUA PHAD NAMMANHOY",
          description: "Gebakken rundsvlees met groenten in oestersaus",
          price: 17.50
        },
        {
          number: 38,
          name: "NEUA PHAD KAPRAO",
          description: "Gebakken rundsvlees met Thaise basilicum",
          price: 17.50
        },
        {
          number: 39,
          name: "PANENG NEUA",
          description: "Rundsvlees met rode curry",
          price: 17.50
        },
        {
          number: 40,
          name: "KAENG KIOW WAN NEUA",
          description: "Rundsvlees in groene curry",
          price: 17.50
        },
        {
          number: 41,
          name: "NEUA PHAD PRIK KAENG",
          description: "Rundsvlees in rode currypasta groenten en Thaise basilicum",
          price: 17.50
        },
        {
          number: 42,
          name: "MOO PHAD PRIOWAN",
          description: "Gebakken varkensvlees met zoetzure saus",
          price: 16.00
        },
        {
          number: 43,
          name: "MOO PHAD KHING",
          description: "Gebakken varkensvlees met groenten en gember",
          price: 16.50
        }
      ]
    },
  ]
}; 