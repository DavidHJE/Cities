if (Meteor.isServer) {
    Meteor.methods({
        // reset database
        reset: function () {
            var derek = {
                "_id": "u0",
                "createdAt": new Date("2016-02-04T09:28:14.187Z"),
                "services": {
                    "password": {
                        "bcrypt": "$2a$10$5J/u4IF59xW8Xi73eQajzu5rnF2bcvXaKKQaye.Njh3knctvLnuf6" // derek.ie
                    },
                    "resume": {
                        "loginTokens": []
                    }
                },
                "emails": [{
                        "address": "derek@dkit.ie",
                        "verified": false
                        }]
            };
            var gilles = {
                "_id": "u1",
                "createdAt": new Date("2016-02-04T09:29:14.662Z"),
                "services": {
                    "password": {
                        "bcrypt": "$2a$10$PtpfLpKrWd3/AbQz1CCL6ubnHpWd2D.QVvQSJLoL.WPKpQjZCGIi." //gilles.fr
                        },
                    "resume": {
                        "loginTokens": []
                    }
                },
                "emails": [{
                        "address": "gilles@iut.fr",
                        "verified": false
                        }]
            };

            var groupe = {
                "_id": "u2",
                "createdAt": new Date("2017-02-04T09:29:14.662Z"),
                "services": {
                    "password": {
                        "bcrypt": "$2a$10$PtpfLpKrWd3/AbQz1CCL6ubnHpWd2D.QVvQSJLoL.WPKpQjZCGIi." //gilles.fr
                        },
                    "resume": {
                        "loginTokens": []
                    }
                },
                "emails": [{
                        "address": "groupe@gmail.com",
                        "verified": false
                        }]
            };


            Meteor.users.remove({});
            Meteor.users.insert(derek);
            Meteor.users.insert(gilles);
            Meteor.users.insert(groupe);

            // *** activities
            var granet = {
                _id: "c0a0",
                name: "musée Granet",
                nature: "place",
                editor: {
                    _id: gilles._id,
                    email: gilles.emails[0].address
                },
                pictures: ["/images/Aix/granet1.jpg", "/images/Aix/granet2.jpg"],
                comments: [{
                    user: {
                        _id: derek._id,
                        email: derek.emails[0].address
                    },
                    date: new Date(),
                    text: "I love this place !!"
                        }],
                description: "Le musée Granet présente près de 600 oeuvres de peinture, sculpture, pièces archéologiques. Peintures hollandaises, italiennes, françaises de diverses époques",
                url: "http://museegranet-aixenprovence.fr"
            };
            var saintSauveur = {
                _id: "c0a1",
                name: "cathedral saint Sauveur",
                nature: "place",
                editor: {
                    _id: gilles._id,
                    email: gilles.emails[0].address
                },
                pictures: ["/images/Aix/sauveur1.jpg", "/images/Aix/sauveur2.jpg"],
                comments: [{
                    user: {
                        _id: derek._id,
                        email: derek.emails[0].address
                    },
                    date: new Date(),
                    text: "great"
                    }],
                description: "no description"
            };
            var festival = {
                _id: "c0a2",
                name: "festival de musique",
                nature: "event",
                editor: {
                    _id: gilles._id,
                    email: gilles.emails[0].address
                },
                pictures: ["/images/Aix/festival1.png", "/images/Aix/festival1.jpg", "/images/Aix/festival2.jpg"],
                comments: [{
                    user: {
                        _id: derek._id,
                        email: derek.emails[0].address
                    },
                    date: new Date(),
                    text: "Awful music"
                }],
                description: "Fort de son succès, le Festival d’Aix accueille un public non seulement local, mais aussi national, et un grand nombre de spectateurs et de journalistes venus du monde entier.",
                url: "http://festival-aix.com/en",
                dateStart: new Date('2016-6-15'),
                dateEnd: new Date('2016-7-10')
            };

            var payarisland = {
                _id: "c2a0",
                name: "Payar Island",
                nature: "place",
                editor: {
                    _id: groupe._id,
                    email: groupe.emails[0].address
                },
                pictures: ["/images/penang/pulauPayar1.jpg", "/images/penang/pulauPayar2.jpg"],
                comments: [],
                description: "Payar Island is one of the many islands off mainland Kedah in the Strait of Malacca. It is situated south of Langkawi, a more famous archipelago. Payar Island status as a marine park offers protection for its diverse marine life. Payar Island is also a snorkelling and diving site famous for its corals. <br /> The Payar Island Marine Park is situated in the northern part of the Straits of Melaka, 19 nautical miles (35 km) south of Langkawi and encompasses the islands of Payar, Lembu, Segantang and Kaca which are surrounded by coral reefs. The marine park teems with a diversity of marine life and vegetation."
            };

            var escapepark = {
                _id: "c2a1",
                name: "Escape Park",
                nature: "place",
                editor: {
                    _id: groupe._id,
                    email: groupe.emails[0].address
                },
                pictures: ["/images/penang/escapePark2.jpg", "/images/penang/escapePark1.jpg"],
                comments: [],
                description: "ESCAPE is the fun destination with exciting rides and games hosted in a natural .environment. ESCAPE re-introduces the play and values of yesteryear so to inject reality into a world overdependent on an isolation-inducing electronic lifestyle. Through fun activities, with an emphasis on self-directed and self-powered play, the visitor experiences Low Tech, High Fun. ESCAPE demonstrates there’s no age limit to having fun as the rides and games are designed for a wide range of age groups, abilities, and energy levels"
            };

            var penanghotair = {
                _id: "c2a2",
                name: "Penang Hot Air Balloon Fiesta",
                nature: "event",
                editor: {
                    _id: groupe._id,
                    email: groupe.emails[0].address
                },
                pictures: ["/images/penang/penang-hot-air-balloon-04.jpg", "/images/penang/penang-hot-air-balloon-06.jpg"],
                comments: [],
                description: "Penang Hot Air Balloon Fiesta 2016 is a two-day event that takes place in Georgetown’s Padang Polo, where visitors can enjoy fun-filled activities and marvel at cool hot air balloons floating in the sky. Similar to Adirondack Hot Air Balloon Festival in the US, expect to see an array of unique designs such as a gigantic ice-cream cone, an orange, and a space rocket. Held on 9th and 10th February, the event features 15 hot air balloons from the US, Belgium, Thailand, South Korea, and Netherlands. Best of all, you can also enjoy a vertigo-inducing ride in one of the three tethered balloons or explore the interior of a cold inflation balloon.",
                url: "",
                dateStart: new Date('2016-2-9'),
                dateEnd: new Date('2016-2-10')
            };

            var georgetown = {
                _id: "c2a3",
                name: "George Town Festival",
                nature: "event",
                editor: {
                    _id: groupe._id,
                    email: groupe.emails[0].address
                },
                pictures: ["/images/penang/georgetown-festival00.jpg", "/images/penang/georgetown-festival01.jpg"],
                comments: [],
                description: "George Town Festival is an exciting month-long celebration of local art, music, theatre, dance, and film in Penang. The event started back in 2009 as a series of arts and cultural events to commemorate Georgetown’s listing as a UNESCO Heritage Site before becoming one of Malaysia’s most high-anticipated cultural events of the year. For the entire month of August, the festival allows visitors to enjoy a diverse range of shows and attractions exploring Georgetown’s well-preserved heritage buildings and colourful street arts. There are also hundreds of booths selling Penang’s well-loved delicacies and snacks as well as local artwork, books, trinkets and souvenirs.",
                url: "",
                dateStart: new Date('2016-8-1'),
                dateEnd: new Date('2016-8-31')
            };

            var placebourse = {
                _id: "c3a0",
                name: "Place de la bourse",
                nature: "place",
                editor: {
                    _id: groupe._id,
                    email: groupe.emails[0].address
                },
                pictures: ["/images/bordeaux/PlaceBourse.jpg", "/images/bordeaux/PlaceBourse2.jpg"],
                comments: [],
                description: "no description"
            };

            var zooborbeaux = {
                _id: "c3a1",
                name: "Zoo de Bordeaux-Pessac",
                nature: "place",
                editor: {
                    _id: groupe._id,
                    email: groupe.emails[0].address
                },
                pictures: ["/images/bordeaux/ZooPessac.jpg"],
                comments: [],
                description: "no description"
            };

            var cathedral = {
                _id: "c3a2",
                name: "Cathédrale St-André",
                nature: "place",
                editor: {
                    _id: groupe._id,
                    email: groupe.emails[0].address
                },
                pictures: ["/images/bordeaux/Cathedrale.png"],
                comments: [],
                description: "no description"
            };

            var rockschool = {
                _id: "c3a3",
                name: "Rock School Barbey",
                nature: "place",
                editor: {
                    _id: groupe._id,
                    email: groupe.emails[0].address
                },
                pictures: ["/images/bordeaux/rockschool.jpg"],
                comments: [],
                description: "no description"
            };

            var animasia = {
                _id: "c3a4",
                name: "Animasia",
                nature: "event",
                editor: {
                    _id: groupe._id,
                    email: groupe.emails[0].address
                },
                pictures: ["/images/bordeaux/animasia.jgp"],
                comments: [],
                description: "",
                url: "",
                dateStart: new Date('2016-4-1'),
                dateEnd: new Date('2016-4-1')
            };


            Activities.remove({})
            Activities.insert(granet);
            Activities.insert(saintSauveur);
            Activities.insert(festival);
            Activities.insert(payarisland);
            Activities.insert(escapepark);
            Activities.insert(penanghotair);
            Activities.insert(georgetown);
            Activities.insert(placebourse);
            Activities.insert(zooborbeaux);
            Activities.insert(cathedral);
            Activities.insert(rockschool);

            // **** cities
            var aix = {
                _id: "c0",
                name: 'Aix en Provence',
                coordinates: {
                    long: "43.5263",
                    lat: "5.4454"
                },
                description: "Protégée par la Montagne Sainte Victoire qui culmine à 1.011 m, Aix est entourée d'une campagne richementpréservée avec d'authentiques bastides provençales entourées de jardins à la française. Son nom vient des sources thermales découvertes à la fondation de la ville en 123 avant JC par les romains. <br />Aix en Provence était la capitale de la Provence au XVème siècle : marchands prospères et notables firent de la ville la Florence provençale que l'on connaît aujourd'hui. Demeures bourgeoises, placettes fleuries, hôtels particuliers, fontaines anciennes, ruelles ombragées... toutes les images de la Provence noble des XVII° et XVIII° sont rassemblées à Aix. <br />",
                picture: '/images/Aix/aix.jpg',
                activities: [{
                    _id: granet._id,
                    name: granet.name,
                    nature: granet.nature,
                    picture: granet.pictures[0]
                    }, {
                    _id: saintSauveur._id,
                    name: saintSauveur.name,
                    nature: saintSauveur.nature,
                    picture: saintSauveur.pictures[0]
                    }, {
                    _id: festival._id,
                    name: festival.name,
                    nature: festival.nature,
                    picture: festival.pictures[0]
                    }]
            };
            var boulogne = {
                _id: "c1",
                name: 'Boulogne sur mer',
                coordinates: {
                    long: "50.7264",
                    lat: "1.6147"
                },
                description: "",
                picture: '/images/Boulogne/centre.jpg',
                activities: []
            };

            var penang = {
                _id: "c2",
                name: 'Penang',
                coordinates: {
                    long: "5.4163",
                    lat: "100.3328"
                },
                description: "Penang, also known as the pearl of the orient, is one of the most touristic locations of Malaysia. The island (285 square meters) is situated on the northwest side of the Peninsular Malaysia. There are loads of activities and sights on the island. Hanging around on the beach is also considered a fine option. About 700.000 people inhabit Penang Island, of which 59% are Chinese, 32% are Malay and 7% are Indian (2% are of other origin). The state of Penang has a population of 1,5 million (of which 43% are Malay and 41% Chinese). Penang has an eventful history; the diversity of the inhabitants clearly indicates this. Penang is especially known as the best place to enjoy wonderful local dishes; it is seen as the food capital of Malaysia. There are many hotels and resorts on the island, most are located in and around the city of Georgetown and around the towns Batu Ferringhi and Tanjung Bungah.",
                picture: '/images/penang/penang.jpg',
                activities: [{
                    _id: payarisland._id,
                    name: payarisland.name,
                    nature: payarisland.nature,
                    picture: payarisland.pictures[0]
                    }, {
                    _id: escapepark._id,
                    name: escapepark.name,
                    nature: escapepark.nature,
                    picture: escapepark.pictures[0]
                    },{
                    _id: penanghotair._id,
                    name: penanghotair.name,
                    nature: penanghotair.nature,
                    picture: penanghotair.pictures[0]
                    },{
                    _id: georgetown._id,
                    name: georgetown.name,
                    nature: georgetown.nature,
                    picture: georgetown.pictures[0]
                    },]
            };

            var bordeaux = {
                _id: "c3",
                name: 'Bordeaux',
                coordinates: {
                    long: "44.837789",
                    lat: "-0.57918"
                },
                description: "Bordeaux is a port city on the Garonne River in the Gironde department in southwestern France. <br /> The municipality of Bordeaux proper has a population of 243,626 (2012). Together with its suburbs and satellite towns, Bordeaux is the fifth largest in France, after Paris, Lyon, Marseille and Lille, and before Toulouse. It is the capital of the Nouvelle-Aquitaine region, as well as the prefecture of the Gironde department. Its inhabitants are called Bordelais (for men) or Bordelaises (women). <br /> Bordeaux is the world's major wine industry capital. It is home to the world's main wine fair, Vinexpo, and the wine economy in the metro area takes in 14.5 billion euros each year. After Paris, Bordeaux has the highest number of preserved historical buildings of any city in France.",
                picture: '/images/bordeaux/bordeaux.jpg',
                activities: [{
                    _id: placebourse._id,
                    name: placebourse.name,
                    nature: placebourse.nature,
                    picture: placebourse.pictures[0]
                    },{
                    _id: zooborbeaux._id,
                    name: zooborbeaux.name,
                    nature: zooborbeaux.nature,
                    picture: zooborbeaux.pictures[0]
                    },{
                    _id: cathedral._id,
                    name: cathedral.name,
                    nature: cathedral.nature,
                    picture: cathedral.pictures[0]
                    },{
                    _id: rockschool._id,
                    name: rockschool.name,
                    nature: rockschool.nature,
                    picture: rockschool.pictures[0]
                    }]
            };


            Cities.remove({});
            Cities.insert(aix);
            Cities.insert(boulogne);
            Cities.insert(penang);
            Cities.insert(bordeaux);
        },
    })
}
