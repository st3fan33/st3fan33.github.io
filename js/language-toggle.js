// Language Toggle Functionality
const translations = {
    en: {
        // Navigation
        navHome: "Home",
        navAbout: "About",
        navService: "Service",
        navMenu: "Menu",
        navPages: "Pages",
        navReservation: "Reservation",
        navTestimonial: "Testimonial",
        navContact: "Contact",
        
        // Homepage Hero
        heroWelcome: "WELCOME TO COFFEE TALES",
        heroCrafted: "Crafted With Passion",
        heroDesc1: "Every cup tells a story. From Maria's grandmother's Cuban recipe to your hands - experience 30 years of coffee excellence.",
        heroFresh: "FRESHLY ROASTED DAILY",
        heroTaste: "Taste The Difference",
        heroDesc2: "Ethically sourced from Colombia, Ethiopia & Costa Rica. Roasted in-house every morning for maximum freshness.",
        btnOurMenu: "OUR MENU",
        btnReserve: "RESERVE A TABLE",
        btnExplore: "EXPLORE MENU",
        btnStory: "OUR STORY",
        promoOff: "30% OFF",
        promoText: "Online Reservations Today",
        featureAward: "Award Winning\nCoffee",
        featureOrganic: "100% Organic\nBeans",
        featureYears: "30+ Years\nExperience",
        
        // Homepage About
        aboutTitle: "About Us",
        aboutHeading: "Serving Since 1995",
        ourStory: "Our Story",
        storySubtitle: "From a grandmother's secret recipe to your favorite neighborhood café",
        storyText: "Coffee Tales began in 1995 when Maria Santos turned her grandmother's old bookshop into a cozy coffee house. Armed with her abuela's handwritten recipe for the perfect Cuban espresso and a dream to create a gathering place for the community, she transformed the dusty shelves into warm oak tables. Today, we still brew every cup with the same passion and precision that Maria brought to that first pot of coffee nearly three decades ago.",
        ourVision: "Our Vision",
        visionText: "We believe coffee is more than a beverage—it's a catalyst for connection, creativity, and community. Every bean we source tells a story of sustainable farming and fair trade partnerships. Our vision is to be the place where students find inspiration for their next big idea, where friends catch up over lattes, and where every customer feels like family.",
        visionPoint1: "Ethically sourced, direct-trade coffee beans",
        visionPoint2: "Supporting local artists and musicians",
        visionPoint3: "Committed to environmental sustainability",
        btnLearnMore: "Learn More",
        
        // Homepage Services
        serviceTitle: "Our Services",
        serviceHeading: "Fresh & Organic Beans",
        service1Title: "Fastest Door Delivery",
        service1Desc: "Order your favorite coffee and pastries online and get them delivered fresh to your doorstep within 30 minutes. We partner with local delivery services to ensure your coffee arrives hot and delicious.",
        service2Title: "Fresh Coffee Beans",
        service2Desc: "We roast our beans in-house every morning to guarantee maximum freshness and flavor. Choose from our selection of single-origin and specialty blends, available whole bean or ground to your preference.",
        service3Title: "Best Quality Coffee",
        service3Desc: "Our beans are carefully sourced from sustainable farms in Colombia, Ethiopia, and Costa Rica. Each batch is expertly curated by our certified Q Graders to ensure you experience the finest coffee every time.",
        service4Title: "Online Table Booking",
        service4Desc: "Reserve your favorite spot in advance through our easy online booking system. Perfect for study groups, business meetings, or catching up with friends. Skip the wait and secure your table today.",
        
        // Homepage Menu
        menuTitle: "Best Sellers",
        menuHeading: "Customer Favorites",
        btnFullMenu: "View Full Menu",
        
        // Homepage Reservation
        reserveOff: "30% OFF",
        reserveOnline: "For Online Reservation",
        reserveDesc: "Reserve your table online and enjoy 30% off your total bill! Perfect for study sessions, business meetings, or hanging out with friends. Book ahead to guarantee your favorite spot during our busy hours.",
        reservePerk1: "Free WiFi and power outlets at every table",
        reservePerk2: "Complimentary pastry with reservations of 4 or more",
        reservePerk3: "Flexible cancellation up to 2 hours before",
        bookTable: "Book Your Table",
        formName: "Name",
        formEmail: "Email",
        formDate: "Date",
        formTime: "Time",
        formPerson: "Person",
        btnBookNow: "Book Now",
        
        // Menu Page
        pageTitle: "Menu",
        hotCoffee: "Hot Coffee",
        coldCoffee: "Cold Coffee",
        specialtyDrinks: "Specialty Drinks",
        seasonalSignature: "Seasonal & Signature Creations",
        foodMenu: "Food Menu",
        freshPastries: "Fresh Pastries & Light Bites",
        pastriesBaked: "Pastries & Baked Goods",
        sandwiches: "Sandwiches & Snacks",
        
        // Coffee Items
        espresso: "Classic Espresso",
        espressoDesc: "Rich, bold shot of our signature espresso blend. Made from Maria's original Cuban recipe using freshly roasted beans.",
        cappuccino: "Cappuccino",
        cappuccinoDesc: "Perfect balance of espresso, steamed milk, and velvety foam. Topped with a dusting of cocoa powder.",
        caramelMacchiato: "Caramel Macchiato",
        caramelMacchiatoDesc: "Vanilla-flavored steamed milk with espresso shots, topped with caramel drizzle. A customer favorite since 2005.",
        cafeLatte: "Café Latte",
        cafeLatteDesc: "Smooth espresso with steamed milk and a light layer of foam. Simple, elegant, and perfectly crafted.",
        mocha: "Mocha Delight",
        mochaDesc: "Rich espresso blended with premium dark chocolate and steamed milk. Topped with whipped cream and chocolate shavings.",
        mochaDelight: "Mocha Delight",
        mochaDelightDesc: "Rich espresso blended with premium dark chocolate and steamed milk. Topped with whipped cream and chocolate shavings.",
        americano: "Americano",
        americanoDesc: "Double shot of espresso diluted with hot water for a smooth, full-bodied coffee experience.",
        coldBrew: "Cold Brew",
        coldBrewDesc: "Smooth, naturally sweet coffee steeped for 16 hours. Served over ice with a splash of cream.",
        icedCaramelLatte: "Iced Caramel Latte",
        icedCaramelLatteDesc: "Creamy iced latte with vanilla and caramel syrup, topped with whipped cream and caramel drizzle.",
        vanillaIcedCoffee: "Vanilla Iced Coffee",
        vanillaIcedCoffeeDesc: "Refreshing iced coffee sweetened with house-made vanilla syrup and topped with cold foam.",
        nitroColdBrew: "Nitro Cold Brew",
        nitroColdBrewDesc: "Cold brew infused with nitrogen for a creamy, cascading effect. Smooth and naturally sweet without any additives.",
        icedMocha: "Iced Mocha",
        icedMochaDesc: "Rich chocolate and espresso over ice with milk and whipped cream. A decadent treat for chocolate lovers.",
        icedAmericano: "Iced Americano",
        icedAmericanoDesc: "Bold espresso shots poured over ice and water. Simple, strong, and refreshing.",
        cubanCoffee: "Abuela's Cuban Coffee",
        cubanCoffeeDesc: "Maria's grandmother's original recipe. Sweet, strong espresso whipped with sugar until it forms a creamy foam.",
        lavenderLatte: "Honey Lavender Latte",
        lavenderLatteDesc: "Delicate lavender syrup and local honey blended with espresso and steamed milk. Calming and aromatic.",
        mapleLatte: "Maple Cinnamon Latte",
        mapleLatteDesc: "Cozy autumn favorite with real maple syrup, cinnamon, and a hint of nutmeg. Perfect with our fresh pastries.",
        chaiLatte: "Chai Latte",
        chaiLatteDesc: "House-made chai blend with warming spices, black tea, and steamed milk. Available hot or iced.",
        
        // About Page
        pageAboutTitle: "About Us",
        storyPara1: "Coffee Tales began in 1995 when Maria Santos turned her grandmother's old bookshop into a cozy coffee house. Armed with her abuela's handwritten recipe for the perfect Cuban espresso and a dream to create a gathering place for the community, she transformed the dusty shelves into warm oak tables.",
        storyPara2: "The early days weren't easy. Maria worked 16-hour shifts, learning to balance the books while perfecting her brew. But word spread quickly about the little café where the owner knew everyone's name and coffee order. By 1998, Coffee Tales had become the heartbeat of the neighborhood—a sanctuary for writers, students, and anyone seeking a moment of warmth.",
        storyPara3: "Today, we still brew every cup with the same passion and precision that Maria brought to that first pot of coffee nearly three decades ago.",
        valuesTitle: "Our Values",
        valuesHeading: "What Drives Us",
        value1Title: "Quality First",
        value1Text: "Every bean is hand-selected from small farms across Latin America and Africa. We visit our partner farms annually to ensure quality standards and fair labor practices. Our master roaster, Carlos Rivera, has been with us since 2001 and treats each batch like a work of art. We never compromise on quality—if a batch doesn't meet our standards, it doesn't reach your cup.",
        value2Title: "Community Matters",
        value2Text: "Coffee Tales has always been more than a business. We host open mic nights every Friday, display local artwork on our walls, and provide free WiFi and study space for students. We've sponsored local sports teams, donated to neighborhood schools, and created a space where everyone—from CEOs to college freshmen—sits at the same tables and shares the same love for great coffee.",
        value3Title: "Sustainability",
        value3Text: "We're committed to leaving the planet better than we found it. Our cups are 100% compostable, we offer discounts for bringing reusable mugs, and we compost all our coffee grounds for local community gardens. Our solar panels generate 60% of our electricity, and we partner with farms that practice regenerative agriculture to restore soil health and biodiversity.",
        value4Title: "Education & Training",
        value4Text: "We believe in empowering our team. Every barista completes a comprehensive 6-week training program covering everything from espresso extraction to customer service excellence. Many of our former employees have gone on to open their own successful cafés, and we couldn't be prouder. Maria always said, \"A rising tide lifts all boats,\" and we live by that philosophy.",
        
        // Service Page
        pageServiceTitle: "Services",
        service5Title: "Free High-Speed WiFi",
        service5Desc: "Stay connected with our complimentary high-speed WiFi throughout the entire café. Every table has convenient power outlets, making Coffee Tales the perfect place for remote work or studying.",
        service6Title: "Private Event Hosting",
        service6Desc: "Host your next birthday party, corporate event, or book club meeting in our private event space. We can accommodate groups of up to 30 people with customized catering options available.",
        service7Title: "Barista Training Classes",
        service7Desc: "Learn the art of coffee-making from our experienced baristas. We offer weekend workshops covering espresso basics, latte art, and home brewing techniques. Classes are $45 per person and include all materials.",
        service8Title: "Loyalty Rewards Program",
        service8Desc: "Join our loyalty program and earn points with every purchase. Get a free drink after every 10 purchases, plus exclusive access to new menu items, special discounts, and members-only events.",
        
        // Reservation Page
        pageReservationTitle: "Reservation",
        reservePageDesc: "Reserve your table online and enjoy 30% off your total bill! Perfect for study sessions, business meetings, or hanging out with friends. Book ahead to guarantee your favorite spot during our busy hours.",
        
        // Testimonial Page
        pageTestimonialTitle: "Testimonial",
        testimonialTitle: "Testimonial",
        testimonialHeading: "Our Clients Say",
        client1Name: "Sarah Mitchell",
        client1Prof: "Software Engineer",
        client1Quote: "Coffee Tales is my second home! I've been coming here for 3 years to work remotely. The WiFi is fast, the coffee is incredible, and Maria always remembers my order. Best café in the city!",
        client2Name: "James Rodriguez",
        client2Prof: "College Student",
        client2Quote: "Perfect study spot! Great atmosphere, amazing pastries, and the staff is super friendly. I've aced so many exams thanks to the peaceful vibes here. Plus, the student discount is awesome!",
        client3Name: "Emily Chen",
        client3Prof: "Marketing Director",
        client3Quote: "I host all my client meetings here. The private event space is perfect, the coffee impresses everyone, and the service is impeccable. Coffee Tales makes me look good every time!",
        client4Name: "Michael Brown",
        client4Prof: "Local Artist",
        client4Quote: "This place supported me when I was a struggling artist. They displayed my paintings, and now I sell them worldwide! The community here is incredible. Coffee Tales changed my life.",
        
        // Contact Page
        pageContactTitle: "Contact",
        contactTitle: "Contact Us",
        contactHeading: "Feel Free To Contact",
        contactAddress: "Address",
        contactPhone: "Phone",
        contactEmail: "Email",
        contactFormName: "Your Name",
        contactFormEmail: "Your Email",
        contactFormSubject: "Subject",
        contactFormMessage: "Message",
        contactFormSend: "Send Message"
    },
    ro: {
        // Navigation
        navHome: "Acasă",
        navAbout: "Despre Noi",
        navService: "Servicii",
        navMenu: "Meniu",
        navPages: "Pagini",
        navReservation: "Rezervare",
        navTestimonial: "Testimoniale",
        navContact: "Contact",
        
        // Homepage Hero
        heroWelcome: "BINE ATI VENIT LA COFFEE TALES",
        heroCrafted: "Realizat Cu Pasiune",
        heroDesc1: "Fiecare ceașcă spune o poveste. De la rețeta cubaneză a bunicii Mariei până la mâinile tale - experimentează 30 de ani de excelență a cafelei.",
        heroFresh: "PRĂJITĂ PROASPĂT ZILNIC",
        heroTaste: "Simte Diferența",
        heroDesc2: "Provenite etic din Columbia, Etiopia și Costa Rica. Prăjite în casă în fiecare dimineață pentru prospețime maximă.",
        btnOurMenu: "MENIUL NOSTRU",
        btnReserve: "REZERVĂ O MASĂ",
        btnExplore: "EXPLOREAZĂ MENIUL",
        btnStory: "POVESTEA NOASTRĂ",
        promoOff: "30% REDUCERE",
        promoText: "Rezervări Online Astăzi",
        featureAward: "Cafea\nPremiată",
        featureOrganic: "100% Boabe\nOrganice",
        featureYears: "30+ Ani\nExperiență",
        
        // Homepage About
        aboutTitle: "Despre Noi",
        aboutHeading: "Deservim Din 1995",
        ourStory: "Povestea Noastră",
        storySubtitle: "De la rețeta secretă a unei bunici la cafeneaua ta preferată din cartier",
        storyText: "Coffee Tales a început în 1995 când Maria Santos a transformat librăria veche a bunicii sale într-o cafenea primitoare. Înarmată cu rețeta scrisă de mână a abuelei sale pentru espresso-ul cubanez perfect și cu visul de a crea un loc de întâlnire pentru comunitate, ea a transformat rafturile prăfuite în mese calde de stejar. Astăzi, încă preparăm fiecare ceașcă cu aceeași pasiune și precizie pe care Maria le-a adus la acea primă oală de cafea cu aproape trei decenii în urmă.",
        ourVision: "Viziunea Noastră",
        visionText: "Credem că cafeaua este mai mult decât o băutură—este un catalizator pentru conexiune, creativitate și comunitate. Fiecare bob pe care îl cumpărăm spune o poveste de agricultură durabilă și parteneriate de comerț echitabil. Viziunea noastră este să fim locul unde studenții găsesc inspirație pentru următoarea lor idee grozavă, unde prietenii se întâlnesc la o cafea, și unde fiecare client se simte ca în familie.",
        visionPoint1: "Boabe de cafea provenite etic, comerț direct",
        visionPoint2: "Susținerea artiștilor și muzicienilor locali",
        visionPoint3: "Angajament pentru sustenabilitate ecologică",
        btnLearnMore: "Află Mai Mult",
        
        // Homepage Services
        serviceTitle: "Serviciile Noastre",
        serviceHeading: "Boabe Proaspete & Organice",
        service1Title: "Livrare Rapidă la Ușă",
        service1Desc: "Comandă-ți cafeaua și patiseriile preferate online și primește-le proaspete la ușa ta în 30 de minute. Ne asociem cu servicii locale de livrare pentru a ne asigura că cafeaua ta ajunge caldă și delicioasă.",
        service2Title: "Boabe de Cafea Proaspete",
        service2Desc: "Prăjim boabele noastre în casă în fiecare dimineață pentru a garanta prospețime și aromă maximă. Alege din selecția noastră de amestecuri de origine unică și specialitate, disponibile boabe întregi sau măcinate după preferința ta.",
        service3Title: "Cafea de Cea Mai Bună Calitate",
        service3Desc: "Boabele noastre sunt selectate cu grijă de la ferme durabile din Columbia, Etiopia și Costa Rica. Fiecare lot este expertly curatat de către Q Graders certificați pentru a te asigura că experimentezi cea mai bună cafea de fiecare dată.",
        service4Title: "Rezervare Online a Mesei",
        service4Desc: "Rezervă-ți locul preferat în avans prin sistemul nostru simplu de rezervare online. Perfect pentru grupuri de studiu, întâlniri de afaceri sau pentru a te întâlni cu prietenii. Evită așteptarea și asigură-ți masa astăzi.",
        
        // Homepage Menu
        menuTitle: "Cele Mai Vândute",
        menuHeading: "Favoritele Clienților",
        btnFullMenu: "Vezi Meniul Complet",
        
        // Homepage Reservation
        reserveOff: "30% REDUCERE",
        reserveOnline: "Pentru Rezervare Online",
        reserveDesc: "Rezervă-ți masa online și bucură-te de 30% reducere la factura totală! Perfect pentru sesiuni de studiu, întâlniri de afaceri sau pentru a petrece timp cu prietenii. Rezervă în avans pentru a-ți garanta locul preferat în orele noastre aglomerate.",
        reservePerk1: "WiFi gratuit și prize la fiecare masă",
        reservePerk2: "Patiserie gratuită cu rezervări de 4 sau mai multe persoane",
        reservePerk3: "Anulare flexibilă cu până la 2 ore înainte",
        bookTable: "Rezervă-ți Masa",
        formName: "Nume",
        formEmail: "Email",
        formDate: "Data",
        formTime: "Ora",
        formPerson: "Persoane",
        btnBookNow: "Rezervă Acum",
        
        // Menu Page
        pageTitle: "Meniu",
        hotCoffee: "Cafea Caldă",
        coldCoffee: "Cafea Rece",
        specialtyDrinks: "Băuturi Speciale",
        seasonalSignature: "Creații de Sezon și Specialități",
        foodMenu: "Meniu Mâncare",
        freshPastries: "Patiserie Proaspătă și Gustări Ușoare",
        pastriesBaked: "Patiserie și Produse de Brutărie",
        sandwiches: "Sandvișuri și Gustări",
        
        // Coffee Items
        espresso: "Espresso Clasic",
        espressoDesc: "Shot bogat și puternic din amestecul nostru de espresso. Făcut după rețeta cubaneză originală a Mariei folosind boabe proaspăt prăjite.",
        cappuccino: "Cappuccino",
        cappuccinoDesc: "Echilibru perfect între espresso, lapte abur și spumă catifelată. Presărat cu cacao pudră.",
        caramelMacchiato: "Macchiato cu Caramel",
        caramelMacchiatoDesc: "Lapte abur cu aromă de vanilie și shoturi de espresso, presărat cu caramel. Favoritul clienților din 2005.",
        cafeLatte: "Café Latte",
        cafeLatteDesc: "Espresso fin cu lapte abur și un strat subțire de spumă. Simplu, elegant și perfect realizat.",
        mocha: "Mocha Delicios",
        mochaDesc: "Espresso bogat amestecat cu ciocolată neagră premium și lapte abur. Presărat cu frișcă și așchii de ciocolată.",
        mochaDelight: "Mocha Delicios",
        mochaDelightDesc: "Espresso bogat amestecat cu ciocolată neagră premium și lapte abur. Presărat cu frișcă și așchii de ciocolată.",
        americano: "Americano",
        americanoDesc: "Două shoturi de espresso diluat cu apă fierbinte pentru o experiență de cafea netedă și plină.",
        coldBrew: "Cold Brew",
        coldBrewDesc: "Cafea netedă și natural dulce macerată timp de 16 ore. Servită pe gheață cu o picătură de smântână.",
        icedCaramelLatte: "Latte Rece cu Caramel",
        icedCaramelLatteDesc: "Latte rece cremos cu sirop de vanilie și caramel, presărat cu frișcă și caramel.",
        vanillaIcedCoffee: "Cafea Rece cu Vanilie",
        vanillaIcedCoffeeDesc: "Cafea rece răcoritoare îndulcită cu sirop de vanilie de casă și presărată cu spumă rece.",
        nitroColdBrew: "Nitro Cold Brew",
        nitroColdBrewDesc: "Cold brew infuzat cu azot pentru un efect cremos în cascadă. Fin și natural dulce fără aditivi.",
        icedMocha: "Mocha Rece",
        icedMochaDesc: "Ciocolată bogată și espresso pe gheață cu lapte și frișcă. O răsfățare decadentă pentru iubitorii de ciocolată.",
        icedAmericano: "Americano Rece",
        icedAmericanoDesc: "Shoturi de espresso puternice turnate pe gheață și apă. Simplu, puternic și răcoritor.",
        cubanCoffee: "Cafeaua Cubaneză a Bunicii",
        cubanCoffeeDesc: "Rețeta originală a bunicii Mariei. Espresso dulce și puternic bătut cu zahăr până formează o spumă cremoasă.",
        lavenderLatte: "Latte cu Miere și Lavandă",
        lavenderLatteDesc: "Sirop delicat de lavandă și miere locală amestecate cu espresso și lapte abur. Calmant și aromat.",
        mapleLatte: "Latte cu Arțar și Scorțișoară",
        mapleLatteDesc: "Favorul toamnei cu sirop de arțar adevărat, scorțișoară și un strop de nucșoară. Perfect cu patiseriile noastre proaspete.",
        chaiLatte: "Chai Latte",
        chaiLatteDesc: "Amestec de chai de casă cu condimente aromate, ceai negru și lapte abur. Disponibil cald sau rece.",
        
        // About Page
        pageAboutTitle: "Despre Noi",
        storyPara1: "Coffee Tales a început în 1995 când Maria Santos a transformat librăria veche a bunicii sale într-o cafenea primitoare. Înarmată cu rețeta scrisă de mână a abuelei sale pentru espresso-ul cubanez perfect și cu visul de a crea un loc de întâlnire pentru comunitate, ea a transformat rafturile prăfuite în mese calde de stejar.",
        storyPara2: "Zilele de început nu au fost ușoare. Maria lucra în schimburi de 16 ore, învățând să echilibreze conturile în timp ce își perfecționa preparatul. Dar vestea s-a răspândit rapid despre mica cafenea unde proprietara știa numele și comanda de cafea a fiecăruia. Până în 1998, Coffee Tales devenise inima cartierului—un sanctuar pentru scriitori, studenți și oricine căuta un moment de căldură.",
        storyPara3: "Astăzi, încă preparăm fiecare ceașcă cu aceeași pasiune și precizie pe care Maria le-a adus la acea primă oală de cafea cu aproape trei decenii în urmă.",
        valuesTitle: "Valorile Noastre",
        valuesHeading: "Ce Ne Motivează",
        value1Title: "Calitatea Mai Întâi",
        value1Text: "Fiecare bob este selectat manual de la ferme mici din America Latină și Africa. Vizităm fermele noastre partenere anual pentru a asigura standardele de calitate și practicile de muncă echitabile. Maestrul nostru prăjitor, Carlos Rivera, este cu noi din 2001 și tratează fiecare lot ca pe o operă de artă. Nu compromitem niciodată calitatea—dacă un lot nu îndeplinește standardele noastre, nu ajunge în ceașca ta.",
        value2Title: "Comunitatea Contează",
        value2Text: "Coffee Tales a fost întotdeauna mai mult decât o afacere. Găzduim seri de microfon deschis în fiecare vineri, expunem opere de artă locală pe pereții noștri și oferim WiFi gratuit și spațiu de studiu pentru studenți. Am sponsorizat echipe sportive locale, am donat școlilor din cartier și am creat un spațiu unde toată lumea—de la directori executivi la studenți—stă la aceleași mese și împarte aceeași dragoste pentru cafeaua grozavă.",
        value3Title: "Sustenabilitate",
        value3Text: "Ne-am angajat să lăsăm planeta mai bună decât am găsit-o. Cupele noastre sunt 100% compostabile, oferim reduceri pentru aducerea de căni reutilizabile și compostăm toate măruntaiele de cafea pentru grădinile comunitare locale. Panourile noastre solare generează 60% din electricitatea noastră și ne asociem cu ferme care practică agricultura regenerativă pentru a restabili sănătatea solului și biodiversitatea.",
        value4Title: "Educație & Formare",
        value4Text: "Credem în împuternicirea echipei noastre. Fiecare barista completează un program cuprinzător de formare de 6 săptămâni care acoperă totul, de la extracția de espresso până la excelența în serviciul clienți. Mulți dintre foștii noștri angajați au continuat să deschidă propriile cafenele de succes, și nu am putea fi mai mândri. Maria spunea mereu: \"Un val în creștere ridică toate bărcile\", și trăim după această filozofie.",
        
        // Service Page
        pageServiceTitle: "Servicii",
        service5Title: "WiFi Gratuit de Mare Viteză",
        service5Desc: "Rămâi conectat cu WiFi-ul nostru gratuit de mare viteză în întreaga cafenea. Fiecare masă are prize convenabile, făcând Coffee Tales locul perfect pentru muncă de la distanță sau studiu.",
        service6Title: "Găzduirea Evenimentelor Private",
        service6Desc: "Găzduiește următoarea ta petrecere de ziua de naștere, eveniment corporativ sau întâlnire de club de carte în spațiul nostru privat pentru evenimente. Putem accommodate grupuri de până la 30 de persoane cu opțiuni de catering personalizate disponibile.",
        service7Title: "Cursuri de Formare Barista",
        service7Desc: "Învață arta preparării cafelei de la barista noștri cu experiență. Oferim ateliere de weekend care acoperă elementele de bază ale espresso-ului, arta latte și tehnici de preparare acasă. Cursurile costă 45$ pe persoană și includ toate materialele.",
        service8Title: "Program de Recompense de Loialitate",
        service8Desc: "Alătură-te programului nostru de loialitate și câștigă puncte cu fiecare achiziție. Primești o băutură gratuită după fiecare 10 achiziții, plus acces exclusiv la articole noi de meniu, reduceri speciale și evenimente doar pentru membri.",
        
        // Reservation Page
        pageReservationTitle: "Rezervare",
        reservePageDesc: "Rezervă-ți masa online și bucură-te de 30% reducere la factura totală! Perfect pentru sesiuni de studiu, întâlniri de afaceri sau pentru a petrece timp cu prietenii. Rezervă în avans pentru a-ți garanta locul preferat în orele noastre aglomerate.",
        
        // Testimonial Page
        pageTestimonialTitle: "Testimoniale",
        testimonialTitle: "Testimoniale",
        testimonialHeading: "Clienții Noștri Spun",
        client1Name: "Sarah Mitchell",
        client1Prof: "Inginer Software",
        client1Quote: "Coffee Tales este a doua mea casă! Vin aici de 3 ani să lucrez de la distanță. WiFi-ul este rapid, cafeaua este incredibilă și Maria își amintește întotdeauna comanda mea. Cea mai bună cafenea din oraș!",
        client2Name: "James Rodriguez",
        client2Prof: "Student",
        client2Quote: "Loc perfect de studiu! Atmosferă grozavă, patiserie uimitoare și personalul este super prietenos. Am promovat atâtea examene datorită ambianței pașnice de aici. Plus, reducerea pentru studenți este grozavă!",
        client3Name: "Emily Chen",
        client3Prof: "Director Marketing",
        client3Quote: "Găzduiesc toate întâlnirile cu clienții aici. Spațiul privat pentru evenimente este perfect, cafeaua impresionează pe toată lumea și serviciul este impecabil. Coffee Tales mă face să arăt bine de fiecare dată!",
        client4Name: "Michael Brown",
        client4Prof: "Artist Local",
        client4Quote: "Acest loc m-a susținut când eram un artist în dificultate. Mi-au expus picturile și acum le vând în întreaga lume! Comunitatea de aici este incredibilă. Coffee Tales mi-a schimbat viața.",
        
        // Contact Page
        pageContactTitle: "Contact",
        contactTitle: "Contactează-ne",
        contactHeading: "Nu Ezita Să Ne Contactezi",
        contactAddress: "Adresă",
        contactPhone: "Telefon",
        contactEmail: "Email",
        contactFormName: "Numele Tău",
        contactFormEmail: "Email-ul Tău",
        contactFormSubject: "Subiect",
        contactFormMessage: "Mesaj",
        contactFormSend: "Trimite Mesaj"
    }
};

let currentLang = 'en';

function initLanguageToggle() {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('coffeetaleslang');
    if (savedLang) {
        currentLang = savedLang;
        document.getElementById('langText').textContent = currentLang === 'en' ? 'RO' : 'EN';
        translatePage();
    }
    
    const langButton = document.getElementById('langToggle');
    if (langButton) {
        langButton.addEventListener('click', function() {
            currentLang = currentLang === 'en' ? 'ro' : 'en';
            document.getElementById('langText').textContent = currentLang === 'en' ? 'RO' : 'EN';
            
            // Save language preference to localStorage
            localStorage.setItem('coffeetaleslang', currentLang);
            
            translatePage();
        });
    }
}

function translatePage() {
    const t = translations[currentLang];
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            // Handle line breaks for feature badges
            if (key.startsWith('feature')) {
                element.innerHTML = t[key].replace(/\n/g, '<br>');
            } else {
                // For placeholders in input fields
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.placeholder = t[key];
                } else {
                    element.textContent = t[key];
                }
            }
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initLanguageToggle);
