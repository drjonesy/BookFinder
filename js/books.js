/* 
	Schema designed by Ryan Jones
	https://www.linkedin.com/in/drjonesyjones
	https://github.com/drjonesy

 Copyright (C)  2016  Ryan Jones.
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3
    or any later version published by the Free Software Foundation;
    with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
    A copy of the license is included in the section entitled "GNU
    Free Documentation License".

*/
var lastUpdate = "9/28/2016";

var books = [
	{
		courseID: "COM103",
		courseTitle: "Introduction to Game Programming",
		ISBN: "9781305258952",
		bookTitle: "Beginning Game Programming, 4th ed.",
		links: [
			{
				name: "Amazon.com",
				url: "https://www.amazon.com/Beginning-Programming-Fourth-Jonathan-Harbour-ebook/dp/B00LPRMRBC/ref=sr_1_fkmr0_2?ie=UTF8&qid=1475440319&sr=8-2-fkmr0&keywords=Beginning+Game+Programming%2C+4th+ed."
			},
			{
				name: "Google Play",
				url: "https://play.google.com/store/books/details?id=wogDBAAAQBAJ&source=productsearch&utm_source=HA_Desktop_US&utm_medium=SEM&utm_campaign=PLA&pcampaignid=MKTAD0930BO1&gclid=CMHB3MqRvc8CFcq8fgodd2ENlA&gclsrc=ds"
			},
			{
				name: "Barnes &amp; Noble",
				url: "http://www.barnesandnoble.com/p/beginning-game-programming-jonathan-s-harbour/1124314624/2675054451191?st=PLA&sid=BNB_DRS_Marketplace+Shopping+Textbooks_00000000&2sid=Google_&sourceId=PLGoP20421&k_clickid=3x20421"
			}
		]
	},
	{
		courseID: "COM107",
		courseTitle: "Introduction to Programming",
		ISBN: "9781111530532",
		bookTitle: "Java Programming: From Problem Analysis to Program Design, 5th ed.",
		links: [
			{
				name: "Amazon.com",
				url: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=9781111530532"
			}
		]
	},
	{
		courseID: "COM112",
		courseTitle: "Programming Logic and Design",
		ISBN: "9780132805452",
		bookTitle: "Starting Out with Programming Logic and Design, 3rd ed.",
	},
	{
		courseID: "COM122",
		courseTitle: "Web Interface Development",
		ISBN: "9781285059099",
		bookTitle: "New Perspectives on HTML, CSS, and XML, Comprehensive, 4th ed.",
	},
	{
		courseID: "COM124",
		courseTitle: "Computer Foundations",
		ISBN: "9781118639993",
		bookTitle: "Adobe Creative Cloud Design Tools Digital Classroom, 1st ed.",
	},
	{
		courseID: "COM152",
		courseTitle: "Object-Oriented Programming I",
		ISBN: "9780133594959",
		bookTitle: "Java Software Solutions, 8th ed.",
	},
	{
		courseID: "COM153",
		courseTitle: "Game Programming Concepts (C++)",
		ISBN: "9781584503637",
		bookTitle: "Programming a Multiplayer FPS in DirectX, 1st",
	},
	{
		courseID: "COM154",
		courseTitle: "Vector Graphics",
		ISBN: "9780321929495",
		bookTitle: "Adobe Illustrator CC Classroom in a Book, 1st ed.",
	},
	{
		courseID: "COM164",
		courseTitle: "Layout 1",
		ISBN: "9780321930712",
		bookTitle: "Real World Adobe InDesign CC, 1st ed.",
	},
	{
		courseID: "COM174",
		courseTitle: "Digital Imaging I",
		ISBN: "9781118639566",
		bookTitle: "Photoshop CC Digital Classroom, 1st ed.",
	},
	{
		courseID: "COM202",
		courseTitle: "Object-Oriented Programming II",
		ISBN: "9780072974164",
		bookTitle: "Object-Oriented Design Using Java, 1st ed.",
	},
	{
		courseID: "COM203",
		courseTitle: "Game Programming Logic (C++)",
		ISBN: "9780134448237",
		bookTitle: "C++ How to Program, 10th ed.",
	},
	{
		courseID: "COM204",
		courseTitle: "Digital Imaging 2",
		ISBN: "9781118643693",
		bookTitle: "Adobe Photoshop CC Bible, 1st ed.",
	},
	{
		courseID: "COM214",
		courseTitle: "Layout 2",
		ISBN: "9780415661775",
		bookTitle: "Interactive InDesign CC: Bridging the Gap between Print and Digital Publishing, 1st ed.",
	},
	{
		courseID: "COM222",
		courseTitle: "Client-Side Web Programming",
		ISBN: "9781890774707",
		bookTitle: "Murach's JavaScript and jQuery, 1st ed.",
	},
	{
		courseID: "COM230",
		courseTitle: "SQL and Database Design",
		ISBN: "9780596008642",
		bookTitle: "Learning MySQL, 1st ed.",
	},
	{
		courseID: "COM232",
		courseTitle: "Database Design for Mere Mortals: A Hands-On Guide to Relational Database Design, 3rd ed.",
		ISBN: "9780321884497",
		bookTitle: "SQL and Database Design",
	},
	{
		courseID: "COM233",
		courseTitle: "Level Design I",
		ISBN: "9781849691444",
		bookTitle: "Unity 3.x Game Development Essentials, 2nd ed.",
	},
	{
		courseID: "COM239",
		courseTitle: "Software Testing",
		ISBN: "9780672327988",
		bookTitle: "Software Testing, 2nd ed.",
	},
	{
		courseID: "COM242",
		courseTitle: "Server-Side Web Development",
		ISBN: "9781890774783",
		bookTitle: "Murach's Java Servlets and JSP, 3rd ed.",
	},
	{
		courseID: "COM244",
		courseTitle: "Content Management Systems",
		ISBN: "9781118442272",
		bookTitle: "Professional WordPress: Design and Development, 2nd ed.",
	},
	{
		courseID: "COM253",
		courseTitle: "Game Programming (C#)",
		ISBN: "9781285860237",
		bookTitle: "Microsoft Visual C# 2015: An Introduction to Object-Oriented Programming 6th ed.",
	},
	{
		courseID: "COM253",
		courseTitle: "Game Programming (C#)",
		ISBN: "9780321933164",
		bookTitle: "Introduction to Game Design, Prototyping, and Development: From Concept to Playable Game with Unity and C#, 1st ed.",
	},
	{
		courseID: "COM259",
		courseTitle: "Linux Fundamentals",
		ISBN: "9780133085044",
		bookTitle: "A Practical Guide to Linux, Commands, Editors, and Shell Programming, 3rd ed.",
	},
	{
		courseID: "COM262",
		courseTitle: "Mobile Development",
		ISBN: "9781890774936",
		bookTitle: "Murach's Android Programming, 2nd ed.",
	},
	{
		courseID: "COM270",
		courseTitle: "C# Programming I",
		ISBN: "9781423901518",
		bookTitle: "Microsoft Visual C# 2005: An Introduction to Object-Oriented Programming, 2nd ed.",
	},
	{
		courseID: "COM271",
		courseTitle: "C# Programming II",
		ISBN: "9781590597231",
		bookTitle: "Illustrated C# 2005, 1st ed.",
	},
	{
		courseID: "COM272",
		courseTitle: "ASP.NET",
		ISBN: "9780596009168",
		bookTitle: "Programming ASP.NET, 3rd Edition, 3rd ed.",
	},
	{
		courseID: "COM273",
		courseTitle: "Object-Oriented Analysis and Design",
		ISBN: "9780072224603",
		bookTitle: "UML A Beginner's Guide, 1st ed.",
	},
	{
		courseID: "COM283",
		courseTitle: "Game Programming with DirectX",
		ISBN: "9781942270065",
		bookTitle: " Introduction to 3D Game Programming with DirectX 12",
	},
	{
		courseID: "COM285",
		courseTitle: "Intermediate Java",
		ISBN: "9781423901235",
		bookTitle: "Modern Software Development Using Java",
	},
	{
		courseID: "COM287",
		courseTitle: "Internet Programming I",
		ISBN: "9781285059099",
		bookTitle: "New Perspectives on HTML, CSS, and XML, Comprehensive, 4th ed.",
	},
	{
		courseID: "COM288",
		courseTitle: "Internet Programming II",
		ISBN: "9781423901501",
		bookTitle: "JavaScript, 4th ed.",
	},
	{
		courseID: "COM289",
		courseTitle: "Internet Programming III",
		ISBN: "9781890774783",
		bookTitle: "Murach's Java Servlets and JSP, 3rd ed.",
	},
	{
		courseID: "COM290",
		courseTitle: "Systems Design and Implementation",
		ISBN: "9781305117204",
		bookTitle: "Systems Analysis and Design in a Changing World, 7th ed.",
	},
	{
		courseID: "COM293",
		courseTitle: "Game Programming Capstone",
		ISBN: "9780735713635",
		bookTitle: "Game Architecture and Design: A New Edition, 1st ed.",
	},
	{
		courseID: "COM303",
		courseTitle: "3D Printing and Modeling",
		ISBN: "9781457182938",
		bookTitle: "Make: 3D Printing: The Essential Guide to 3D Printers, 1st ed.",
	},
	{
		courseID: "COM310",
		courseTitle: "Advanced .NET",
		ISBN: "9780596527570",
		bookTitle: "C# 3.0 in a Nutshell: A Desktop Quick Reference, 3rd ed.",
	},
	{
		courseID: "COM319",
		courseTitle: "Internet Applications and Development",
		ISBN: "9780321719614",
		bookTitle: "HTML5 & CSS3 Visual QuickStart Guide, 7th ed.",
	},
	{
		courseID: "COM324",
		courseTitle: "Advanced Internet Applications and Development",
		ISBN: "9781890774554",
		bookTitle: "Murach's JavaScript and DOM Scripting, 1st ed.",
	},
	{
		courseID: "COM330",
		courseTitle: "Perl Programming",
		ISBN: "9780596101053",
		bookTitle: "Learning Perl, 4th ed.",
	},
	{
		courseID: "COM340",
		courseTitle: "E-Commerce Concepts",
		ISBN: "9781133526827",
		bookTitle: "Electronic Commerce, 10th ed.",
	},
	{
		courseID: "COM350",
		courseTitle: "Visual Basic Programming",
		ISBN: "9781890774387",
		bookTitle: "Murach's Visual Basic 2005: Training & Reference, 1st ed.",
	},
	{
		courseID: "COM373",
		courseTitle: "LUA Scripting",
		ISBN: "9781584504047",
		bookTitle: "Game Development with LUA",
	},
	{
		courseID: "COM380",
		courseTitle: "Advanced C++ .NET Programming",
		ISBN: "9780131204799",
		bookTitle: "Visual C++.NET How To Program, 1st ed.",
	},
	{
		courseID: "COM390",
		courseTitle: "C Programming",
		ISBN: "9780132404167",
		bookTitle: "C How To Program, 5th ed.",
	},
	{
		courseID: "COM403",
		courseTitle: "Advanced DirectX",
		ISBN: "9781598220537",
		bookTitle: "Introduction to 3D Game Programming with DirectX10, 1st ed.",
	},
	{
		courseID: "COM410",
		courseTitle: "Python",
		ISBN: "9780596513986",
		bookTitle: "Learning Python, 3rd ed.",
	},
	{
		courseID: "COM413",
		courseTitle: "Game AI Concepts",
		ISBN: "9781418038571",
		bookTitle: "Game Development Essentials: Game Artificial Intelligence, 1st ed.",
	},
	{
		courseID: "COM620",
		courseTitle: "Advanced Systems Analysis and Design",
		ISBN: "9781423902287",
		bookTitle: "Systems Analysis and Design in a Changing World, 5th ed.",
	},
	{
		courseID: "COM640",
		courseTitle: "Distributive Communications & New Technology",
		ISBN: "9780136153405",
		bookTitle: "Business data networks and telecommunications, 7th ed.",
	},
	{
		courseID: "COM656",
		courseTitle: "Management of Information Security",
		ISBN: "9781305501256",
		bookTitle: "Management of Information Security, 5th ed.",
	},
	{
		courseID: "COM660",
		courseTitle: "Database Systems",
		ISBN: "9781285196145",
		bookTitle: "Database Systems: Design, Implementation, & Management, 11th ed.",
	},
	{
		courseID: "COM665",
		courseTitle: "Leadership",
		ISBN: "9781483317533",
		bookTitle: "Leadership: Theory and Practice, 7th ed.",
	},
	{
		courseID: "COM671",
		courseTitle: "Business Intelligence and Decision Support Systems",
		ISBN: "9780133050905",
		bookTitle: "Business Intelligence and Analytics: Systems for Decision Support, 10th ed.",
	},
	{
		courseID: "COM685",
		courseTitle: "Management of Network Technology Readiness",
		ISBN: "9780133507164",
		bookTitle: "E-Commerce 2015, 11th ed.",
	},
	{
		courseID: "COM690",
		courseTitle: "Management of Emerging Technologies",
		ISBN: "9780538478229",
		bookTitle: "The Management of Technology and Innovation: A Strategic Approach, 2nd ed.",
	},
	{
		courseID: "DSN104",
		courseTitle: "Drawing for Graphic Design",
		ISBN: "9781585429202",
		bookTitle: "Drawing on the Right Side of the Brain: The Definitive, 4th ed.",
	},
	{
		courseID: "DSN114",
		courseTitle: "Design Principles",
		ISBN: "9780321580122",
		bookTitle: "Before & After: How to Design Cool Stuff, 1st ed.",
	},
	{
		courseID: "DSN123",
		courseTitle: "Fundamentals of Game Design",
		ISBN: "9780321929679",
		bookTitle: "Fundamentals of Game Design, 3rd ed.",
	},
	{
		courseID: "DSN130",
		courseTitle: "Typography",
		ISBN: "9780321303363",
		bookTitle: "The Non-Designer's Type Book, 2nd ed.",
	},
	{
		courseID: "DSN134",
		courseTitle: "Typography",
		ISBN: "9781285176819",
		bookTitle: "Exploring Typography 2nd ed.",
	},
	{
		courseID: "DSN140",
		courseTitle: "Digital Images I",
		ISBN: "9780321990204",
		bookTitle: "Photoshop for Games: Creating Art for Console, Mobile, and Social Games, 1st ed.",
	},
	{
		courseID: "DSN140",
		courseTitle: "Digital Images I",
		ISBN: "9781118639566",
		bookTitle: "Photoshop CC Digital Classroom, 1st ed.",
	},
	{
		courseID: "DSN144",
		courseTitle: "Digital Photography",
		ISBN: "9781305278400",
		bookTitle: "David Busch's Mastering Digital SLR Photography, 4th ed.",
	},
	{
		courseID: "DSN180",
		courseTitle: "Animation I",
		ISBN: "9780321832191",
		bookTitle: "Flash Professional CS6: Visual QuickStart Guide, 1st ed.",
	},
	{
		courseID: "DSN224",
		courseTitle: "Web Design 1",
		ISBN: "9780987247858",
		bookTitle: "The Web Designer's Roadmap, 1st ed.",
	},
	{
		courseID: "DSN234",
		courseTitle: "Multimedia",
		ISBN: "9780071832885",
		bookTitle: "Multimedia: Making It Work, 9th ed.",
	},
	{
		courseID: "DSN253",
		courseTitle: "Hard Surface modeling",
		ISBN: "9781119059769",
		bookTitle: "Autodesk 3ds Max 2016 Essentials, 1st ed.",
	},
	{
		courseID: "DSN254",
		courseTitle: "Web Design 2",
		ISBN: "9781936201785",
		bookTitle: "Adobe Dreamweaver CC 2015: The Professional Portfolio Series, 1st ed.",
	},
	{
		courseID: "DSN263",
		courseTitle: "Shader Materials",
		ISBN: "9781138920064",
		bookTitle: "3D Game Textures: Create Professional Game Art Using Photoshop, 4th ed.",
	},
	{
		courseID: "DSN264",
		courseTitle: "Print Production Essentials",
		ISBN: "9780134396422",
		bookTitle: "Learn Adobe Dreamweaver CC for Web Authoring, 1st ed.",
	},
	{
		courseID: "DSN273",
		courseTitle: "Introduction to Digital sculpting",
		ISBN: "9781118244821",
		bookTitle: "Introducing ZBrush, 3rd ed.",
	},
	{
		courseID: "DSN274",
		courseTitle: "Professional Practices",
		ISBN: "9780932102164",
		bookTitle: "Graphic Artists Guild Handbook: Pricing & Ethical Guidelines, 14th ed.",
	},
	{
		courseID: "DSN343",
		courseTitle: "Game Story and Character Design",
		ISBN: "9780321864970",
		bookTitle: "Chris Crawford on Interactive Storytelling, 2nd ed.",
	},
	{
		courseID: "DSN353",
		courseTitle: "Level Design II",
		ISBN: "9781291906103",
		bookTitle: "Master the Art of Unreal Engine 4, VOL 1",
	},
	{
		courseID: "DSN353",
		courseTitle: "Level Design II",
		ISBN: "9781500313784",
		bookTitle: "Master the Art of Unreal Engine 4, VOL 2",
	},
	{
		courseID: "DSN353",
		courseTitle: "Level Design II",
		ISBN: "9781501054297",
		bookTitle: "Master the Art of Unreal Engine 4, VOL 3",
	},
	{
		courseID: "DSN433",
		courseTitle: "MEL Scripting in Maya",
		ISBN: "9780240820798",
		bookTitle: "Rig it Right! Maya Animation Rigging Concepts, 1st ed.",
	},
	{
		courseID: "ENG110",
		courseTitle: "College Composition",
		ISBN: "9780073371665",
		bookTitle: "College Writing Skills with Readings, 8th ed.",
	},
	{
		courseID: "ENG200",
		courseTitle: "Communications",
		ISBN: "9780078036873",
		bookTitle: "Human Communication, 5th ed.",
	},
	{
		courseID: "ENG300",
		courseTitle: "Professional Presentation Skills and Techniques",
		ISBN: "9781457623943",
		bookTitle: "Speak Up!: An Illustrated Guide to Public Speaking, 3rd ed.",
	},
	{
		courseID: "ENG302",
		courseTitle: "Comparative Literature",
		ISBN: "9780393919615",
		bookTitle: "The Norton Anthology of World Literature (Vol. 2), 3rd ed.",
	},
	{
		courseID: "ENG320",
		courseTitle: "Technical Writing",
		ISBN: "9781937434038",
		bookTitle: "The Insider's Guide to Technical Writing, 1st ed",
	},
	{
		courseID: "ENG330",
		courseTitle: "Writing the Screenplay",
		ISBN: "9780385339032",
		bookTitle: "Screenplay The Foundations of Screenwriting, 2nd ed.",
	},
	{
		courseID: "ENG330",
		courseTitle: "Writing the Screenplay",
		ISBN: "9780440504900",
		bookTitle: "Four Screenplays: Studies in the American Screenplay, 2nd ed.",
	},
	{
		courseID: "ENG351",
		courseTitle: "Creative writing",
		ISBN: "9780321127617",
		bookTitle: "Crossroads: Creative Writing in Four Genres, 1st ed.",
	},
	{
		courseID: "ENG450",
		courseTitle: "Science Fiction",
		ISBN: "9780544340626",
		bookTitle: "The Giver Quartet boxed set",
	},
	{
		courseID: "ENG450",
		courseTitle: "Science Fiction",
		ISBN: "9781614275770",
		bookTitle: "Ralph 124C 41+: A Romance of the Year 2660",
	},
	{
		courseID: "ENG450",
		courseTitle: "Science Fiction",
		ISBN: "9780819569554",
		bookTitle: "The Wesleyan Anthology of Science Fiction",
	},
	{
		courseID: "ENG460",
		courseTitle: "Thriller and Horror",
		ISBN: "9780143122371",
		bookTitle: "American Supernatural Tales",
	},
	{
		courseID: "ENG460",
		courseTitle: "Thriller and Horror",
		ISBN: "9780061147982",
		bookTitle: "20th Century Ghosts",
	},
	{
		courseID: "ENG490",
		courseTitle: "Comics as Literature",
		ISBN: "9781619889088",
		bookTitle: "Afterlife with Archie: Escape from Riverdale, Vol. 1",
	},
	{
		courseID: "ENG490",
		courseTitle: "Comics as Literature",
		ISBN: "9781608866878",
		bookTitle: "Lumberjanes, Vol. 1",
	},
	{
		courseID: "ENG490",
		courseTitle: "Comics as Literature",
		ISBN: "9781401223175",
		bookTitle: "Batman: Hush",
	},
	{
		courseID: "ENG490",
		courseTitle: "Comics as Literature",
		ISBN: "9781896597706",
		bookTitle: "It's a good life, if you don't weaken: A picture novella, 4th ed.",
	},
	{
		courseID: "ENG490",
		courseTitle: "Comics as Literature",
		ISBN: "9781596436367",
		bookTitle: "Sailor Twain: Or, The mermaid in the Hudson",
	},
	{
		courseID: "ENG490",
		courseTitle: "Comics as Literature",
		ISBN: "9781607069621",
		bookTitle: "Pretty Deadly, Vol. 1",
	},
	{
		courseID: "ENG490",
		courseTitle: "Comics as Literature",
		ISBN: "9781632150196",
		bookTitle: "The wicked the divine: The Faust act, Vol. 1",
	},
	{
		courseID: "ENG490",
		courseTitle: "Comics as Literature",
		ISBN: "9781607066019",
		bookTitle: "Saga, Vol. 1",
	},
	{
		courseID: "ENG490",
		courseTitle: "Comics as Literature",
		ISBN: "9781442465961",
		bookTitle: "Through the woods",
	},
	{
		courseID: "ENG490",
		courseTitle: "Comics as Literature",
		ISBN: "9780618871711",
		bookTitle: "Fun home: A family tragicomic. Boston: Houghton Mifflin",
	},
	{
		courseID: "ENG490",
		courseTitle: "Comics as Literature",
		ISBN: "9780785142867",
		bookTitle: "Marvels, 2nd ed.",
	},
	{
		courseID: "ENG490",
		courseTitle: "Comics as Literature",
		ISBN: "9780375406508",
		bookTitle: "Here, 1st ed.",
	},
	{
		courseID: "ENG490",
		courseTitle: "Comics as Literature",
		ISBN: "9780312384487",
		bookTitle: "American born Chinese",
	},
	{
		courseID: "ENG490",
		courseTitle: "Comics as Literature",
		ISBN: "9781421529141",
		bookTitle: "Children of the Sea, Vol. 1",
	},
	{
		courseID: "ENG490",
		courseTitle: "Comics as Literature",
		ISBN: "9781421527475",
		bookTitle: "Ooku the Inner Chambers, Vol. 1",
	},
	{
		courseID: "ENG490",
		courseTitle: "Comics as Literature",
		ISBN: "9780393331264",
		bookTitle: "Comics and sequential art: Principles and practices from the legendary cartoonist",
	},
	{
		courseID: "HUM110",
		courseTitle: "Introduction to the Humanities I",
		ISBN: "9780205022472",
		bookTitle: "The Art of Being Human: The Humanities as a Technique for Living, 10th ed.",
	},
	{
		courseID: "HUM115",
		courseTitle: "Introduction to the Humanities II",
		ISBN: "9780078038426",
		bookTitle: "The Moral of the Story: An Introduction to Ethics, 7th ed.",
	},
	{
		courseID: "HUM306",
		courseTitle: "American Art",
		ISBN: "9780130300041",
		bookTitle: "American Encounters: Art, History, and Culture Identity, 1st ed.",
	},
	{
		courseID: "HUM320",
		courseTitle: "World Drama",
		ISBN: "9780822216230",
		bookTitle: "How I Learned to Drive",
	},
	{
		courseID: "HUM320",
		courseTitle: "World Drama",
		ISBN: "9780060512637",
		bookTitle: "Our Town: A Play in Three Acts, 1st ed.",
	},
	{
		courseID: "HUM320",
		courseTitle: "World Drama",
		ISBN: "9780393932829",
		bookTitle: "The Norton Anthology of Drama: The Nineteenth Century to the Present, Vol. 2, 2nd ed.",
	},
	{
		courseID: "HUM410",
		courseTitle: "The Art of the Film",
		ISBN: "9780205856169",
		bookTitle: "Understanding Movies, 13th ed.",
	},
	{
		courseID: "HUM415",
		courseTitle: "Folklore",
		ISBN: "9780618706419",
		bookTitle: "The Things They Carried",
	},
	{
		courseID: "HUM415",
		courseTitle: "Folklore",
		ISBN: "9780874211283",
		bookTitle: "Folk Groups And Folklore Genres: An Introduction, 1st ed.",
	},
	{
		courseID: "HUM415",
		courseTitle: "Folklore",
		ISBN: "9780874218442",
		bookTitle: "Living Folklore: An Introduction to the Study of People and Their Traditions, 2nd ed",
	},
	{
		courseID: "HUM420",
		courseTitle: "Comparative Religion",
		ISBN: "9780136017615",
		bookTitle: "Many Peoples, Many Faiths, 9th ed.",
	},
	{
		courseID: "HUM490",
		courseTitle: "World History through the Graphic Novel, 1900-Present",
		ISBN: "9781595825575",
		bookTitle: "De: Tales - Stories from Urban Brazil, 1st ed.",
	},
	{
		courseID: "HUM490",
		courseTitle: "World History through the Graphic Novel, 1900-Present",
		ISBN: "9781896597294",
		bookTitle: "Berlin: City of Stones, 1st ed.",
	},
	{
		courseID: "HUM490",
		courseTitle: "World History through the Graphic Novel, 1900-Present",
		ISBN: "9781606993538",
		bookTitle: "It Was the War of the Trenches, 1st ed.",
	},
	{
		courseID: "HUM490",
		courseTitle: "World History through the Graphic Novel, 1900-Present",
		ISBN: "9781596431218",
		bookTitle: "Kampung Boy",
	},
	{
		courseID: "HUM490",
		courseTitle: "World History through the Graphic Novel, 1900-Present",
		ISBN: "9780974246833",
		bookTitle: "Bluesman, (Book 1)",
	},
	{
		courseID: "HUM490",
		courseTitle: "World History through the Graphic Novel, 1900-Present",
		ISBN: "9780394747231",
		bookTitle: "Maus I: A Survivor's Tale: My Father Bleeds History (Book 1)",
	},
	{
		courseID: "HUM490",
		courseTitle: "World History through the Graphic Novel, 1900-Present",
		ISBN: "9781401213503",
		bookTitle: "The Other Side",
	},
	{
		courseID: "HUM490",
		courseTitle: "World History through the Graphic Novel, 1900-Present",
		ISBN: "9781401222178",
		bookTitle: "Cuba: My Revolution",
	},
	{
		courseID: "MAT162",
		courseTitle: "Algebra I",
		ISBN: "9780321715418",
		bookTitle: "Intermediate Algebra, 11th ed.",
	},
	{
		courseID: "MAT290",
		courseTitle: "Introduction to Discrete Mathematics",
		ISBN: "9780321305152",
		bookTitle: "Discrete Mathematics, 5th ed.",
	},
	{
		courseID: "MAT300",
		courseTitle: "Statistics",
		ISBN: "9780321693624",
		bookTitle: "Elementary Statistics, 5th ed.",
	},
	{
		courseID: "MBA615",
		courseTitle: "Project Management",
		ISBN: "9781285452340",
		bookTitle: "Information Technology Project Management, 8th ed.",
	},
	{
		courseID: "MBA620",
		courseTitle: "International Business Management",
		ISBN: "9780470194409",
		bookTitle: "The Quest for Global Dominance: Transforming Global Presence into Global Competitive Advantage, 2nd ed.",
	},
	{
		courseID: "MBA625",
		courseTitle: "Marketing",
		ISBN: "9780134149530",
		bookTitle: "Marketing: An Introduction, 13th ed.",
	},
	{
		courseID: "MBA630",
		courseTitle: "Quantitative Management",
		ISBN: "9780324598278",
		bookTitle: "Modern Business Statistics, 3rd ed.",
	},
	{
		courseID: "MBA635",
		courseTitle: "Management Support Through Information Systems",
		ISBN: "9780136078463",
		bookTitle: "Management Information Systems, 11th ed.",
	},
	{
		courseID: "MBA640",
		courseTitle: "Strategic planning",
		ISBN: "9780133126143",
		bookTitle: "Concepts in Strategic Management and Business Policy: Toward Global Sustainability, 14th ed.",
	},
	{
		courseID: "MBA650",
		courseTitle: "Organizational Design for Effectiveness",
		ISBN: "9780132729949",
		bookTitle: "Organizational Theory, Design, and Change, 7th ed.",
	},
	{
		courseID: "MBA655",
		courseTitle: "Human Resource Management",
		ISBN: "9780133848809",
		bookTitle: "Human Resource Management, 14th ed.",
	},
	{
		courseID: "MBA680",
		courseTitle: "Financial Management and Analysis",
		ISBN: "9781133188797",
		bookTitle: "Financial Reporting and Analysis: Using Financial Accounting Information, 13th ed.",
	},
	{
		courseID: "MHC675",
		courseTitle: "Survey of the U.S. Health Care System",
		ISBN: "9780763784584",
		bookTitle: "Health Care USA: Understanding Its Organization and Delivery, 7th ed.",
	},
	{
		courseID: "MHC685",
		courseTitle: "Financial Management for Health Care Organizations",
		ISBN: "9781567933154",
		bookTitle: "Fundamentals of Healthcare Finance, 1st ed.",
	},
	{
		courseID: "MHC690",
		courseTitle: "Quality Management in Health Care",
		ISBN: "9781567933239",
		bookTitle: "Introduction to Healthcare Quality Management, 1st ed.",
	},
	{
		courseID: "MHC695",
		courseTitle: "Health Information Systems",
		ISBN: "9780470387801",
		bookTitle: "Health Care Information Systems: A Practical Approach for Health Care Management, 2nd ed.",
	},
	{
		courseID: "NET110",
		courseTitle: "A+ Repairing and Maintaining PCs",
		ISBN: "9781133135081",
		bookTitle: "A+ Guide to Managing & Maintaining Your PC, 8th ed.",
	},
	{
		courseID: "NET206",
		courseTitle: "Windows Clients I",
		ISBN: "9781118882757",
		bookTitle: "70-687 Configuring Windows 8.1, 1st ed.",
	},
	{
		courseID: "NET206",
		courseTitle: "Windows Clients I",
		ISBN: "9781118882948",
		bookTitle: "70-687 Configuring Windows 8.1 Lab Manual, 1st ed.",
	},
	{
		courseID: "NET208",
		courseTitle: "Windows Clients II",
		ISBN: "9781118882757",
		bookTitle: "70-687 Configuring Windows 8.1, 1st ed.",
	},
	{
		courseID: "NET208",
		courseTitle: "Windows Clients II",
		ISBN: "9781118882948",
		bookTitle: "70-687 Configuring Windows 8.1 Lab Manual, 1st ed.",
	},
	{
		courseID: "NET209",
		courseTitle: "Windows Servers",
		ISBN: "9781118882313",
		bookTitle: "70-410 Installing and Configuring Windows Server 2012 R2, 1st ed.",
	},
	{
		courseID: "NET209",
		courseTitle: "Windows Servers",
		ISBN: "9781118882290",
		bookTitle: "70-410 Installing and Configuring Windows Server 2012 R2 Lab Manual, 1st ed.",
	},
	{
		courseID: "NET209",
		courseTitle: "Windows Servers",
		ISBN: "9781118882832",
		bookTitle: "70-411 Administering Windows Server 2012 R2, 1st ed.",
	},
	{
		courseID: "NET209",
		courseTitle: "Windows Servers",
		ISBN: "9781118882917",
		bookTitle: "70-411 Administering Windows Server 2012 R2 Lab Manual, 1st ed.",
	},
	{
		courseID: "NET210",
		courseTitle: "Wireless Technologies",
		ISBN: "9781133132172",
		bookTitle: "CWNA Guide to Wireless LANs, 3rd ed.",
	},
	{
		courseID: "NET220",
		courseTitle: "Switches and Routers",
		ISBN: "9781418837051",
		bookTitle: "CCNA Guide to Cisco Networking Fundamentals, 4th ed.",
	},
	{
		courseID: "NET225",
		courseTitle: "Introduction to CISCO Routing",
		ISBN: "9781587133169",
		bookTitle: "Introduction to Networks Companion Guide, 1st ed.",
	},
	{
		courseID: "NET230",
		courseTitle: "Switches and Routers II",
		ISBN: "9781587132117",
		bookTitle: "Introducing Routing and Switching in the Enterprise, 1st ed.",
	},
	{
		courseID: "NET232",
		courseTitle: "Routing and Switching Essentials",
		ISBN: "9781587133183",
		bookTitle: "Routing and Switching Essentials Companion Guide, 1st ed.",
	},
	{
		courseID: "NET235",
		courseTitle: "Virtualization",
		ISBN: "9781118176719",
		bookTitle: "Virtualization Essentials, 1st ed.",
	},
	{
		courseID: "NET235",
		courseTitle: "Virtualization",
		ISBN: "9780124201255",
		bookTitle: "CSA Guide to Cloud Computing: Implementing Cloud Privacy and Security, 1st ed.",
	},
	{
		courseID: "NET240",
		courseTitle: "Advanced TCP/IP",
		ISBN: "9781133019862",
		bookTitle: "Book Title: Guide to TCP/IP, 4th ed.",
	},
	{
		courseID: "NET250",
		courseTitle: "Networking Concepts",
		ISBN: "9781133608196",
		bookTitle: "Network+ Guide to Networks, 6th ed",
	},
	{
		courseID: "NET260",
		courseTitle: "Linux Network Administration",
		ISBN: "9781305107168",
		bookTitle: "CompTIA Linux+ Guide to Linux Certification, 4th ed.",
	},
	{
		courseID: "NET360",
		courseTitle: "Advanced UNIX Network Administration",
		ISBN: "9780133477436",
		bookTitle: "A Practical Guide to Fedora and Red Hat Enterprise Linux, 7th ed",
	},
	{
		courseID: "NET370",
		courseTitle: "Windows Shell Scripting",
		ISBN: "9781617291081",
		bookTitle: "Learn Windows PowerShell 3 in a Month of Lunches, 2ne ed.",
	},
	{
		courseID: "NET370",
		courseTitle: "Windows Shell Scripting",
		ISBN: "9780735663398",
		bookTitle: "Windows PowerShell 3.0 Step by Step, 1st ed.",
	},
	{
		courseID: "NET400",
		courseTitle: "Storage Technology Foundation",
		ISBN: "9781118094839",
		bookTitle: "Information Storage and Management: Storing, Managing, and Protecting Digital Information in Classic, Virtualized, and Cloud Environments, 2nd ed.",
	},
	{
		courseID: "NET415",
		courseTitle: "VMWare Infrastructure: Install and Configure",
		ISBN: "x01110110",
		bookTitle: "VMware Sphere 5.0 Install Configure Manage",
	},
	{
		courseID: "NET425",
		courseTitle: "Introduction to CISCO Routing",
		ISBN: "9781587133169",
		bookTitle: "Introduction to Networks Companion Guide, 1st ed.",
	},
	{
		courseID: "NET430",
		courseTitle: "Routing and Switching Essentials",
		ISBN: "9781587133183",
		bookTitle: "Routing and Switching Essentials Companion Guide, 1st ed.",
	},
	{
		courseID: "NET435",
		courseTitle: "Scaling Networks",
		ISBN: "9781587133282",
		bookTitle: "Scaling Networks Companion Guide, 1st ed.",
	},
	{
		courseID: "NET440",
		courseTitle: "Connecting Networks",
		ISBN: "9781587133329",
		bookTitle: "Connecting Networks Companion Guide, 1st ed.",
	},
	{
		courseID: "RES698",
		courseTitle: "Thesis I",
		ISBN: "9781452226101",
		bookTitle: "Research Design, 4th ed.",
	},
	{
		courseID: "SCI100",
		courseTitle: "General Biology",
		ISBN: "9780321885326",
		bookTitle: "Campbell Biology: Concepts & Connections, 8th ed.",
	},
	{
		courseID: "SEC200",
		courseTitle: "Introduction to Network Security",
		ISBN: "9781305093911",
		bookTitle: "CompTIA Security+ Guide to Network Security Fundamentals, 5th ed",
	},
	{
		courseID: "SEC210",
		courseTitle: "Ethics, Policies, and Procedures",
		ISBN: "9780789751676",
		bookTitle: "Security Program and Policies: Principles and Practices, 2nd ed.",
	},
	{
		courseID: "SEC210",
		courseTitle: "Ethics, Policies, and Procedures",
		ISBN: "9780133741629",
		bookTitle: "Ethics for the Information Age, 6th ed.",
	},
	{
		courseID: "SEC320",
		courseTitle: "Intermediate Network Security",
		ISBN: "9780131481046",
		bookTitle: "Counter Hack Reloaded: A Step-by-Step Guide to Computer Attacks and Effective Defenses, 2nd ed.",
	},
	{
		courseID: "SEC330",
		courseTitle: "Computer Forensics",
		ISBN: "9781285060033",
		bookTitle: "Guide to Computer Forensics and Investigations, 5th ed.",
	},
	{
		courseID: "SEC330",
		courseTitle: "Computer Forensics",
		ISBN: "9780132564717",
		bookTitle: "Network Forensics: Tracking Hackers through Cyberspace, 1st ed.",
	},
	{
		courseID: "SEC340",
		courseTitle: "Operating System hardening",
		ISBN: "9781133727941",
		bookTitle: "Guide to Network Defense and Countermeasures, 3rd ed.",
	},
	{
		courseID: "SEC345",
		courseTitle: "Hardening Linux",
		ISBN: "9781597492072",
		bookTitle: "How to Cheat at Securing Linux, 1st ed.",
	},
	{
		courseID: "SEC350",
		courseTitle: "Advanced Network Security",
		ISBN: "9780789751270",
		bookTitle: "Certified Ethical Hacker (CEH) Cert Guide, 1st ed.",
	},
	{
		courseID: "SEC360",
		courseTitle: "Advanced Network Security: Penetration Testing",
		ISBN: "9780123943972",
		bookTitle: "Computer Security and Penetration Testing, 2nd ed.",
	},
	{
		courseID: "SEC360",
		courseTitle: "Advanced Network Security: Penetration Testing",
		ISBN: "9781512214567",
		bookTitle: "The Hacker Playbook 2: Practical Guide To Penetration Testing, 1st ed.",
	},
	{
		courseID: "SEC370",
		courseTitle: "Cryptography",
		ISBN: "9781466570269",
		bookTitle: "Introduction to Modern Cryptography, 2nd ed.",
	},
	{
		courseID: "SEC380",
		courseTitle: "Management of Information Systems",
		ISBN: "9781305501256",
		bookTitle: "Management of Information Security, 5th ed.",
	},
	{
		courseID: "SOC110",
		courseTitle: "Introductory Sociology",
		ISBN: "9780205982516",
		bookTitle: "Society: The Basics, 13th ed.",
	},
	{
		courseID: "SOC115",
		courseTitle: "Psychology",
		ISBN: "9780205769063",
		bookTitle: "Understanding Psychology, 9th ed.",
	},
	{
		courseID: "SOC315",
		courseTitle: "Abnormal Psychology",
		ISBN: "9780205961719",
		bookTitle: "Abnormal Psychology in a Changing World, 9th ed.",
	},
	{
		courseID: "SOC325",
		courseTitle: "Interpersonal Communication",
		ISBN: "9780495502463",
		bookTitle: "Understanding Interpersonal Communication: Making Choices in Changing Times, 2nd ed.",
	},
	{
		courseID: "SOC325",
		courseTitle: "Interpersonal Communication",
		ISBN: "9780135019443",
		bookTitle: "Human Relations: Interpersonal Job-Oriented Skills, 10th ed.",
	},
	{
		courseID: "SOC330",
		courseTitle: "U.S. Mosaic",
		ISBN: "9781452275734",
		bookTitle: "Race, Ethnicity, Gender, and Class: The Sociology of Group Conflict and Change, 7th ed.",
	}
];