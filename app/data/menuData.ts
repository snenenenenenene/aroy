export type MenuItem = {
	name: string;
	thaiName: string;
	description: string;
	image: string | null;
	spiceLevel?: 1 | 2 | 3;
	isChoice?: boolean;
	choiceGroup?: string;
	choiceText?: string; // "OF" text for choices, if applicable
  };
  
  export type MenuSection = {
	voorgerecht: MenuItem[];
	hoofdgerecht: MenuItem[];
  };
  
  export type Menu = {
	title: string;              // e.g., "Menu 1"
	price: number;              // e.g., 50.0
	description: string;        // Brief description of the menu
	choiceNote?: string;        // e.g., "Keuze uit één voorgerecht"
	items: MenuSection;
	isCustom?: boolean;         // For custom menu option
	contactText?: string;       // Text for custom menu contact button
  };
  
  
  export const menuData: Menu[] = [
	{
		title: "Menu 1",
		price: 50.0,
		description: "Traditionele Thaise smaken",
		choiceNote: "Keuze uit één voorgerecht",
		items: {
		  voorgerecht: [
			{
			  name: "Kip Satay",
			  thaiName: "ไก่สะเต๊ะ",
			  description: "Gemarineerde kipspiesjes met huisgemaakte pindasaus",
			  image: null,
			  spiceLevel: 1,
			  isChoice: true,
			  choiceGroup: "voorgerecht-1",
			  choiceText: "OF" // Will show after this item
			},
			{
			  name: "Tom Kha Kai",
			  thaiName: "ต้มข่าไก่",
			  description: "Romige kokossoep met kip, galangal en citroengras",
			  image: "/assets/dishes/tom-kha-kai.webp",
			  spiceLevel: 2,
			  isChoice: true,
			  choiceGroup: "voorgerecht-1"
			}
		  ],
		  hoofdgerecht: [
			{
			  name: "Kai Pad Med Mamuang",
			  thaiName: "ไก่ผัดเม็ดมะม่วง",
			  description: "Roergebakken kip met cashewnoten en seizoensgroenten",
			  image: "/assets/dishes/kai-pad-med.webp",
			  spiceLevel: 1
			},
			{
			  name: "Kaeng Kari Kai",
			  thaiName: "แกงกะหรี่ไก่",
			  description: "Gele curry met malse kip, aardappelen en krokante ui",
			  image: "/assets/dishes/kaeng-kari-kai.jpg",
			  spiceLevel: 2
			},
			{
			  name: "Pad Thai Kai",
			  thaiName: "ผัดไทยไก่",
			  description: "Gebakken rijstnoedels met kip, ei en tamarinde saus",
			  image: "/assets/dishes/pad-thai.jpeg",
			  spiceLevel: 1
			}
		  ]
		}
	  },
	{
	  title: "Menu 2",
	  price: 60.0,
	  description: "Een verfijnde selectie van populaire Thaise gerechten",
	  items: {
		voorgerecht: [
		  {
			name: "Tom Yam Kung",
			thaiName: "ต้มยำกุ้ง",
			description: "Pittige en zure soep met garnalen en citroengras",
			image: "/assets/dishes/tom-yam.jpg",
			spiceLevel: 3
		  },
		  {
			name: "Poh Pia Sod",
			thaiName: "ปอเปี๊ยะสด",
			description: "Verse lenterolletjes met groenten en kruiden",
			image: null,
			spiceLevel: 1
		  }
		],
		hoofdgerecht: [
		  {
			name: "Paneng Kai Yang",
			thaiName: "พะแนงไก่ย่าง",
			description: "Gegrilde kip in romige paneng curry",
			image: null,
			spiceLevel: 2
		  },
		  {
			name: "Kai Pad Pong Kari",
			thaiName: "ไก่ผัดผงกะหรี่",
			description: "Roergebakken kip in gele currypoeder met ui",
			image: null,
			spiceLevel: 1
		  },
		  {
			name: "Pad Thai Kung",
			thaiName: "ผัดไทยกุ้ง",
			description: "Gebakken rijstnoedels met garnalen en pinda's",
			image: "/assets/dishes/pad-thai.jpeg",
			spiceLevel: 1
		  }
		]
	  }
	},
	{
	  title: "Menu 3",
	  price: 70.0,
	  description: "Een luxe selectie van authentieke Thaise specialiteiten",
	  items: {
		voorgerecht: [
		  {
			name: "Yam Kung",
			thaiName: "ยำกุ้ง",
			description: "Pittige garnalensalade met Thaise kruiden",
			image: null,
			spiceLevel: 3
		  },
		  {
			name: "Kradook Moo Tod",
			thaiName: "กระดูกหมูทอด",
			description: "Krokant gebakken spareribs met Thaise kruiden",
			image: null,
			spiceLevel: 1
		  }
		],
		hoofdgerecht: [
		  {
			name: "Ped Pad Prik",
			thaiName: "เป็ดผัดพริก",
			description: "Roergebakken eend met chilipeper en basilicum",
			image: null,
			spiceLevel: 3
		  },
		  {
			name: "Kung Pad Prik King",
			thaiName: "กุ้งผัดพริกขิง",
			description: "Garnalen in rode curry pasta met sperziebonen",
			image: "/assets/dishes/pad-prik-king.jpg",
			spiceLevel: 3
		  },
		  {
			name: "Kung Pad Pak Ruam",
			thaiName: "กุ้งผัดผักรวม",
			description: "Roergebakken garnalen met seizoensgroenten",
			image: null,
			spiceLevel: 1
		  }
		]
	  }
	},
	{
		title: "Menu 4",
		price: 90.0,
		description: "Ons premium menu met chef\'s specialiteiten",
		choiceNote: "Keuze uit Pad Thai OF Khao Pad Kai",
		items: {
		  voorgerecht: [
			{
			  name: "Poh Pia Sod",
			  thaiName: "ปอเปี๊ยะสด",
			  description: "Verse lenterolletjes met groenten en kruiden",
			  image: null,
			  spiceLevel: 1
			},
			{
			  name: "Tom Kha Kai",
			  thaiName: "ต้มข่าไก่",
			  description: "Romige kokossoep met kip en citroengras",
			  image: "/assets/dishes/tom-kha-kai.webp",
			  spiceLevel: 2
			}
		  ],
		  hoofdgerecht: [
			{
			  name: "Pad Thai",
			  thaiName: "ผัดไทย",
			  description: "De klassieke Thaise noedelschotel met ei en pinda\'s",
			  image: "/assets/dishes/pad-thai.jpeg",
			  spiceLevel: 1,
			  isChoice: true,
			  choiceGroup: "hoofdgerecht-4",
			  choiceText: "OF"
			},
			{
			  name: "Khao Pad Kai",
			  thaiName: "ข้าวผัดไก่",
			  description: "Gebakken rijst met kip en groenten",
			  image: null,
			  spiceLevel: 1,
			  isChoice: true,
			  choiceGroup: "hoofdgerecht-4"
			},
			{
			  name: "Kaeng Ped Yang",
			  thaiName: "แกงเผ็ดเป็ดย่าง",
			  description: "Geroosterde eend in rode curry met lychee",
			  image: null,
			  spiceLevel: 2
			},
			{
			  name: "Mie Hoen Singapore",
			  thaiName: "หมี่ฮ่องกง สิงคโปร์",
			  description: "Dunne rijstnoedels op Singaporese wijze",
			  image: null,
			  spiceLevel: 1
			},
			{
			  name: "Pad Kee Mao Talay",
			  thaiName: "ผัดขี้เมาทะเล",
			  description: "Pittige \'dronken\' noedels met zeevruchten",
			  image: null,
			  spiceLevel: 3
			},
			{
			  name: "Neua Pad Nam Man Hoi",
			  thaiName: "เนื้อผัดน้ำมันหอย",
			  description: "Roergebakken rundvlees in oestersaus",
			  image: null,
			  spiceLevel: 1
			}
		  ]
		}
	  },
	{
	  title: "Stel Zelf Samen",
	  price: 60.0,
	  description: "Creëer uw eigen menu met uw favoriete gerechten",
	  isCustom: true,
	  contactText: "Neem contact op voor de mogelijkheden en prijzen",
	  items: {
		voorgerecht: [],
		hoofdgerecht: []
	  }
	}
  ];
