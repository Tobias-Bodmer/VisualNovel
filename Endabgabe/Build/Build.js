"use strict";
var Template;
(function (Template) {
    const timing = { duration: 300, iterations: 1, };
    const shake = [
        { transform: 'translateX(0) translateY(0px)' }, { transform: 'translateX(-20px) translateY(-10px)' }, { transform: 'translateX(20px) translateY(10px)' },
        { transform: 'translateX(10px) translateY(5px)' }, { transform: 'translateX(-10px) translateY(-5px)' }, { transform: 'translateX(0) translateY(0px)' }
    ];
    Template.animations = {};
    async function shakeyCamera() {
        document.body.animate(shake, timing);
    }
    Template.shakeyCamera = shakeyCamera;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.characters = {
        Unknown: {
            name: "???",
            text: {
                T0000: "Hey... Hey geht's dir gut?",
                T0001: "Es scheint so als wären wir in Genesis.",
                T0002: "Ich bin Blackangel wie heißt du?",
                T0003: "Psst... Hey ich hab mitbekommen das ihr etwas gegen unsere Situation machen wollt.",
                T0004: "Ähm... also nein bzw. nicht so ganz.",
                T0005: "Das ist sehr gut zu hören. Ich habe ebenfalls mitbekommen das andere Leute hinweise im Wald am großen Baum gefunden haben.",
                T0006: "Das weiß ich leider auch nicht so genau.",
                T0007: "Ach ja mir fällt gerade ein das einer von ihnen einen großen Baum erwähnt hat.",
                T0008: "Hey...? Bist du da...?",
                T0009: "Black... Wir sind jetzt am Portal.",
                T0010: "Sind wir vollzählig?",
                T0011: "Gut also ich hab was herausgefunden.",
                T0012: "Das Portal ist ein weg raus aus dieser Hölle.",
                T0013: "Es gibt aber eine Gruppe die versucht es zu schließen.",
                T0014: "Okay wir sind uns einig also dann nichts wie hin zum Portal.",
                T0015: "Ahhh! Was passiert mit m... mir.",
            }
        },
        Blackangel: {
            name: "Blackangel",
            text: {
                T0000: "Schön dich kennen zu lernen.",
                T0001: "Das weiß ich auch nicht. Ich wollte mich auch gerade ausloggen da wurden wir alle hier her teleportiert.",
                T0002: "Aber nicht nur das... der Abmelde-Button ist jetzt ausgegraut.",
                T0003: "...",
                T0004: "Ha... Hast du diese Benachrichtigung gerade gelesen? Was soll das? Ist das ein schlechter Witz?",
                T0005: "Hast du den Skandal vor einigen Wochen nicht mitbekommen?",
                T0006: "Vor einigen Wochen hat es eine Hackergruppe wohl geschafft... Also sie haben VR-Headsets zum explodieren gebracht...",
                T0007: "Was sollen wir denn jetzt tun?",
                T0008: "Okay ich geh los und versuch mehr herauszufinden.",
                T0009: "Ahh... Das darf nicht wahr sein...",
            }
        },
        Mass: {
            name: "Eine Masse",
            text: {
                T0000: "Ahhh...!",
            }
        },
        Antagonist: {
            name: "Antagonist",
            text: {
                T0000: "JAAA! Ich hab's geschafft!!! Das Portal ist geschlossen hier kommt niemand mehr raus! ",
            }
        },
        Protagonist: {
            name: "Du",
            text: {
                T0000: "Wo sind wir?",
                T0001: "Wir müssen herausfinden ob jemand etwas weiß.",
                T0002: "Was für hinweise?",
                T0003: "Naja gut, dann mach ich mich mal auf den Weg, danke.",
                T0004: "Ich kann nichts Auffälliges sehen.",
                T0005: "Hier ist nichts.",
                T0006: "Vielleicht sollte ich mal beim Baum nachschauen.",
                T0007: "Hm...",
                T0008: "Uh... warte mal was ist das denn?",
                T0009: "Ist das nicht ein Gildenzeichen ich hab das in der Hauptstadt schon mal gesehen?",
                T0010: "Da ist ja ein Loch im Stamm... hmm.",
                T0011: "Hmm es ist zu dunkel um erkennen zu können was sich darin verbirgt.",
                T0012: "Aber wo könnte ich sonst noch was finden? Ich hab doch schon alles abgesucht.",
                T0013: "Los jetzt stell dich nicht so an was soll schon passieren.",
                T0014: "Hm... Was ist das.",
                T0015: "Das fühlt sich an wie ein Stück Leder.",
                T0016: "Da steht ja was drin.",
                T0017: "Aber es könnte wichtig sein.",
                T0018: "Was wenn das der Hinweis ist von dem der Unbekannte geredet hat?",
                T0019: "Hmm.. Da liegt ja was.",
                T0020: "Wer ist da?",
                T0021: "Ich muss sofort in die Stadt und Blackangel finden...",
                T0022: "Hm... muss der Wind gewesen sein.",
                T0023: "Okay dann schauen wir mal was da im Buch steht.",
                T0024: "Ob da Heute Nacht gemeint ist.",
                T0025: "Na dann auf zur Lichtung.",
                T0026: "Hmm es scheint so als wäre niemand hier.",
                T0027: "Was war das... ich hab doch was gehört.",
                T0028: "Hmm hab ich mir wohl eingebildet.",
                T0029: "Ich sollte mir ein Versteck suchen...",
                T0030: "Oh man das war nur ein Tier.",
                T0031: "Ich bleibe besser in meinem Versteck vielleicht kommen sie ja gleich.",
                T0032: "Da kommt jemand.",
                T0033: "Ich sollte Blackangel suchen und mit ihm zum Portal wir können bestimmt jede Hilfe gebrauchen.",
                T0034: "Wer war das nur an dem Funkgerät...",
                T0035: "Was sollte denn am alten Portal sein",
                T0036: "Und wen könnte er mit Black gemeint haben...",
                T0037: "Blackangel kann damit nicht gemeint sein er war doch selbst so überrascht.",
                T0038: "Warum sollte er sonst so geschockt gewesen sein... Ich muss ihn finden.",
                T0039: "Aber er scheint nicht hier zu sein und auf unserer Frequenz erreich ich ihn nicht...",
                T0040: "Mir bleibt nichts anderes übrig als allein zum Portal zu gehen.",
                T0041: "Vielleicht finde ich da ja mehr heraus...",
                T0042: "Ich muss Blackangel finden.",
                T0043: "Aber er scheint hier nirgendwo zu sein.",
                T0044: "Vielleicht hat er selbst schon vom Portal erfahren...",
                T0045: "Hoffentlich ist er nicht ohne mich los.",
                T0046: "Ich muss ihm hinterher.",
                T0047: "Angriff!!!",
                T0048: "Was macht er da... und wer ist er?",
                T0049: "Oh mein Gott... Hat er ihm gerade sein Leben ausgesaugt.",
                T0050: "Was passiert hier nur.",
                T0051: "Sie sterben alle... Das Portal scheint sie aufzusaugen.",
                T0052: "Jetzt ist der wäre der perfekte Zeitpunkt für einen Angriff gewesen. ",
                T0053: "Das muss die Gruppe von der Lichtung sein.",
                T0054: "Jetzt hab ich dich.",
                T0055: "Was Blackangel... Aber warum...?",
                T0056: "Egal damit kommst du nicht durch. Das lass ich nicht zu."
            }
            // //Position
            // // origin: ƒS.ORIGIN.BOTTOMRIGHT,
            // pose: {
            //     //Standartpose
            //     normal: "Images/Characters/Protag.png",
            //     angel: "Images/Characters/Protag_Angel.png",
            //     happy: "Images/Characters/Protag_Happy.png",
            //     sad: "Images/Characters/Protag_Sad.png",
            //     angry: "Images/Characters/Protag_Angry.png"
            // }
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.items = {
        Sword: {
            name: "Dragon Slayer Sword",
            description: "One of the legendary swords which one weared by the Dragon Slayer.",
            image: "Images/Items/Sword.png",
            handler: changeform
        },
        CrystalBall: {
            name: "Crystal Ball",
            description: "A way to keep in touch with a group or your guild.",
            image: "Images/Items/CrystalBall.png",
            handler: cantBeUsedNow,
        },
        UnknownCrystalBall: {
            name: "The Second Crystal Ball",
            description: "The crystal ball you found in the bushes.",
            image: "Images/Items/CrystalBall.png",
            handler: cantBeUsedNow,
        },
        Book: {
            name: "Book",
            description: "The Book you found in the forest.",
            image: "Images/Items/Book.png",
            handler: cantBeUsedNow,
        }
    };
    function changeform() {
    }
    function cantBeUsedNow() {
        console.log("This can´t be used right now");
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.locations = {
        bruecke: {
            name: "Bruecke",
            background: "Images/Brücke.jpg",
            foreground: ""
        },
        wald: {
            name: "Wald",
            background: "Images/Wald.jpg",
            foreground: ""
        },
        waldNacht: {
            name: "WaldNacht",
            background: "Images/WaldNacht.jpg",
            foreground: ""
        },
        portal: {
            name: "Portal",
            background: "Images/Portal.jpg",
            foreground: ""
        },
        black: {
            name: "Black",
            background: "Images/Black.png",
            foreground: ""
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    let gameMenu;
    let inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close"
    };
    let menu = true;
    window.addEventListener("load", start);
    function start(_event) {
        Template.erzähler = new Template.Erzähler();
        //Menu
        gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        gameMenu.close();
        let scenes = [
            { scene: Template.introduction, name: "Introduction" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        // dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
        Template.dataForSave.state = Template.ƒS.Progress.setData(Template.dataForSave.state, uiElement);
        // uiElement.setAttribute("value", "50");
        Template.ƒS.Progress.go(scenes);
    }
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case inGameMenu.close:
                gameMenu.close();
                menu = false;
                break;
            // case inGameMenu.open:
            //   gameMenu.open();
            //   menu = true;
            //   break;
        }
        // Shortcuts für's Menü
        document.addEventListener("keydown", hndKeyPress);
        async function hndKeyPress(_event) {
            switch (_event.code) {
                case Template.ƒ.KEYBOARD_CODE.F8:
                    console.log("Save");
                    await Template.ƒS.Progress.save();
                    break;
                case Template.ƒ.KEYBOARD_CODE.F9:
                    console.log("Load");
                    await Template.ƒS.Progress.load();
                    break;
                case Template.ƒ.KEYBOARD_CODE.M:
                    if (menu) {
                        console.log("Close");
                        gameMenu.close();
                        menu = false;
                    }
                    else {
                        console.log("Open");
                        gameMenu.open();
                        menu = true;
                    }
                    break;
            }
        }
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    class Erzähler {
        static container;
        constructor() {
            Erzähler.container = document.getElementById("erzähler");
        }
        async erzählerSpeaks(_name, _text) {
            Erzähler.container.style.visibility = "visible";
            Erzähler.container.children[0].innerHTML = _name;
            Erzähler.container.children[1].innerHTML = _text;
            return true;
        }
        async erzählerHide() {
            new Promise((resolve) => {
                document.addEventListener('click', function () {
                    Erzähler.container.style.visibility = "hidden";
                    resolve(null);
                }, { once: true });
            });
        }
    }
    Template.Erzähler = Erzähler;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.dataForSave = {
        Protagonist: {
            name: ""
        },
        Score: {
            score: 0
        },
        Glade: false,
        state: {
            a: 0
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.sound = {
        //Musik
        city: "Sounds/City.mp3",
        forest: "Audio/SerenadeOfDarkness.mp3",
        space: "Audio/Space.mp3",
        mothrin: "Audio/Afford.mp3",
        satina: "Audio/Not_As_It Seems.mp3",
        shubaru: "Audio/Blue_Ska.mp3",
        scales: "Audio/Lightless_Dawn.mp3",
        intro: "Audio/Delusion.mp3",
        ending: "Audio/Daybreak.mp3",
        crimosa: "Audio/Crimosa.mp3",
        parkEnding: "Audio/cuddle_love_short1.mp3",
        //Sound
        click: "",
        creak: "Audio/Effects/creak.wav",
        walking: "Audio/Effects/walking.wav",
        clank: "Audio/Effects/clank.wav"
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function goodEnding() {
    }
    Template.goodEnding = goodEnding;
    async function badEnding() {
    }
    Template.badEnding = badEnding;
    async function credits() {
        Template.ƒS.Sound.fade(Template.sound.ending, 0.2, 2, true);
        let pages = "<strong>Credits:</strong><br></br> \
            <br></br> <strong>Lukas Brausch (me):</strong><br></br> \
            <br>- Serenade of Darkness (Dark Theme)</br>\
            <br>- All sprites</br>\
            <br>- All backgrounds</br>\
            <br>- Story</br>\
            <br></br> <strong>Classical Music :</strong><br></br> \
            <br>- La Crimosa - Mozart: https://imslp.org/wiki/Requiem_in_D_minor%2C_K.626_(Mozart%2C_Wolfgang_Amadeus)</br> \
            <br>- Air - Bach: https://imslp.org/wiki/Orchestral_Suite_No.3_in_D_major,_BWV_1068_(Bach,_Johann_Sebastian)</br>\
            <br>- Also Sprach Zarathustra - Strauss: https://imslp.org/wiki/Also_sprach_Zarathustra%2C_Op.30_(Strauss%2C_Richard)</br>\
            <br></br> <strong>Sound Effects :</strong><br></br> \
            <br>- Creaking: https://freesound.org/people/Lightnessko/sounds/390323/</br> \
            <br>- Walking on metal: https://freesound.org/people/NachtmahrTV/sounds/556715/</br> \
            <br>- Metal clank: https://freesound.org/people/vibe_crc/sounds/59317/</br> \
            <br></br> <strong>Kevin MacLeod Music :</strong><br></br> \
            <br>- Not as it seems: https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100762</br> \
            <br>- Blue Ska: https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1600011</br> \
            <br>- Lightless Dawn: https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100655</br> \
            <br></br> <strong>Souichi Sakagami Music :</strong><br></br> \
            <br>- Afford: https://www.tandess.com/en/music/free-material/material.html </br> \
            <br>- Delusion: https://www.tandess.com/en/music/free-material/material.html</br> \
            <br>- Daybreak: https://www.tandess.com/en/music/free-material/material.html</br>\
            <br>- cuddle_love_short1: https://www.tandess.com/en/music/free-material/material.html</br> \
            ";
        await Template.ƒS.Location.show(Template.locations.black);
        await Template.ƒS.update(1);
        Template.ƒS.Speech.hide();
        Template.ƒS.Text.addClass("credits");
        Template.ƒS.Text.print(pages + "The end");
    }
    Template.credits = credits;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function city1() {
        await Template.ƒS.Location.show(Template.locations.bruecke);
        Template.ƒS.Sound.fade(Template.sound.city, 0.5, 4, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0034);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0035);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0036);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0037);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0038);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0039);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0040);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0041);
        await Template.ƒS.Speech.clear();
        Template.ƒS.Sound.fade(Template.sound.city, 0, 1);
        Template.portal();
    }
    Template.city1 = city1;
    async function city2() {
        await Template.ƒS.Location.show(Template.locations.bruecke);
        Template.ƒS.Sound.fade(Template.sound.city, 0.5, 4, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0042);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0043);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0044);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0045);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0046);
        await Template.ƒS.Speech.clear();
        Template.ƒS.Sound.fade(Template.sound.city, 0, 1);
        Template.portal();
    }
    Template.city2 = city2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function forest() {
        await Template.ƒS.Location.show(Template.locations.wald);
        Template.ƒS.Sound.fade(Template.sound.forest, 0.5, 4, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Text.print("Du kommst zu einem großen Baum der mittem im Wald auf einer Lichtung steht.");
        await searchTreeOrArea(0);
        async function searchTreeOrArea(_countD1) {
            let decision = {
                D1: "Umgebung untersuchen.",
                D2: "Baum untersuchen."
            };
            let answer = await Template.ƒS.Menu.getInput(decision, "class");
            switch (answer) {
                case decision.D1:
                    let random = Math.round(Math.random());
                    if (_countD1 < 5) {
                        if (random < 1) {
                            await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0004);
                        }
                        else {
                            await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0005);
                        }
                    }
                    else {
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0006);
                    }
                    _countD1++;
                    await searchTreeOrArea(_countD1);
                    break;
                case decision.D2:
                    return;
            }
        }
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0007);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0008);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0009);
        await Template.ƒS.Text.print("Im Baum ist ein Symbol einer Gilde eingeritzt");
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0010);
        await searchHole(0);
        async function searchHole(_countD1) {
            let decision = {
                D1: "Nicht ins Loch greifen.",
                D2: "Ins Loch greifen."
            };
            let answer = await Template.ƒS.Menu.getInput(decision, "class");
            switch (answer) {
                case decision.D1:
                    let random = Math.round(Math.random());
                    if (_countD1 < 5) {
                        if (random < 1) {
                            await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0011);
                        }
                        else {
                            await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0012);
                        }
                    }
                    else {
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0013);
                    }
                    _countD1++;
                    await searchHole(_countD1);
                    break;
                case decision.D2:
                    return;
            }
        }
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0014);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0015);
        await Template.ƒS.Text.print("Du ziehst ein Buch mit Ledereinband aus dem Loch.");
        await Template.ƒS.Text.print("Das Buch trägt das selbe Symbol wie das auf dem Baum.");
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0016);
        await readBook();
        async function readBook() {
            let decision = {
                D1: "Nicht lesen.",
                D2: "Lesen."
            };
            let answer = await Template.ƒS.Menu.getInput(decision, "class");
            switch (answer) {
                case decision.D1:
                    let random = Math.round(Math.random());
                    if (random < 1) {
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0017);
                    }
                    else {
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0018);
                    }
                    await readBook();
                    break;
                case decision.D2:
                    return;
            }
        }
        Template.shakeyCamera();
        await Template.ƒS.Text.print("Ein Busch ganz in der Nähe bewegt sich.");
        let decision = {
            D1: "Nachschauen.",
            D2: "Ignorieren."
        };
        let answer = await Template.ƒS.Menu.getInput(decision, "class");
        switch (answer) {
            case decision.D1:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0019);
                //TODO: Kristallkugel
                await Template.ƒS.Text.print("Du hast ein Kristallkugel gefunden.");
                await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0008);
                await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0009);
                let decision2 = {
                    D1: "Lauschen.",
                    D2: "Antworten."
                };
                let answer = await Template.ƒS.Menu.getInput(decision, "class");
                switch (answer) {
                    case decision2.D2:
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0020);
                        return;
                }
                await Template.ƒS.Speech.tell(Template.characters.Unknown, "...");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0021);
                await Template.ƒS.Speech.clear();
                //TODO: Sound
                Template.ƒS.Sound.fade(Template.sound.city, 0, 1);
                Template.city1();
                break;
            case decision.D2:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0022);
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0023);
                await Template.erzähler.erzählerSpeaks("???", "Treffpunkt Heute Nacht bei der Lichtung beim Fluss.");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0024);
                await Template.erzähler.erzählerHide();
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0025);
                await Template.ƒS.Speech.clear();
                //TODO: Sound
                Template.ƒS.Sound.fade(Template.sound.city, 0, 1);
                Template.glade();
                return;
        }
    }
    Template.forest = forest;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function glade() {
        Template.dataForSave.Glade = true;
        await Template.ƒS.Location.show(Template.locations.waldNacht);
        //TODO: Sound
        Template.ƒS.Sound.fade(Template.sound.city, 0.2, 4, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Text.print("Du kommst bei der Lichtung des Buches an.");
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0026);
        await Template.shakeyCamera();
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0027);
        let decision = {
            D1: "Abwarten.",
            D2: "Verstecken."
        };
        let answer = await Template.ƒS.Menu.getInput(decision, "class");
        switch (answer) {
            case decision.D1:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0028);
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0029);
                break;
            case decision.D2:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0030);
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0031);
                break;
        }
        await Template.ƒS.Text.print("Einige Zeit später.");
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0032);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0010);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0011);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0012);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0013);
        await Template.ƒS.Speech.tell("Ein anderer", "Wir müssen sie aufhalten.");
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0014);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0033);
        await Template.ƒS.Speech.clear();
        //TODO: Sound
        Template.ƒS.Sound.fade(Template.sound.city, 0, 1);
        Template.city2();
    }
    Template.glade = glade;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function introduction() {
        await Template.ƒS.Location.show(Template.locations.bruecke);
        Template.ƒS.Sound.fade(Template.sound.city, 0.2, 4, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0000);
        Template.ƒS.Sound.fade(Template.sound.city, 0.5, 2, true);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0002);
        Template.dataForSave.Protagonist.name = await Template.ƒS.Speech.getInput();
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0000);
        let decision = {
            D1: "...",
            D2: "Aber ich hab mich ausgeloggt warum bin ich noch hier?"
        };
        let answer = await Template.ƒS.Menu.getInput(decision, "class");
        switch (answer) {
            case decision.D1:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, decision.D1);
                break;
            case decision.D2:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, decision.D2);
                await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0001);
                await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0002);
                break;
        }
        await Template.shakeyCamera();
        await Template.ƒS.Sound.fade(Template.sound.city, 0.05, 0.5, true);
        await Template.erzähler.erzählerSpeaks("???", "Don't quit the game or you will die!");
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0003);
        await Template.erzähler.erzählerHide();
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0004);
        decision = {
            D1: "...",
            D2: "Wie sollte das möglich sein?"
        };
        answer = await Template.ƒS.Menu.getInput(decision, "class");
        switch (answer) {
            case decision.D1:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, decision.D1);
                break;
            case decision.D2:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, decision.D2);
                await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0005);
                decision = {
                    D1: "Ja",
                    D2: "Nein?"
                };
                answer = await Template.ƒS.Menu.getInput(decision, "class");
                switch (answer) {
                    case decision.D1:
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, decision.D1);
                        break;
                    case decision.D2:
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, decision.D2);
                        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0006);
                        break;
                }
                break;
        }
        await Template.shakeyCamera();
        await Template.erzähler.erzählerSpeaks("???", "We have manipulated your VR-Headsets.");
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0003);
        await Template.erzähler.erzählerHide();
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0007);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0008);
        //TODO: give funkgerät 
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Hey, Warte, nimm das hier. So können wir in Kontakt bleiben.");
        await Template.ƒS.Speech.clear();
        await Template.ƒS.Text.print("Einige Zeit später...");
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0003);
        decision = {
            D1: "Ja da hast du richtig gehört.",
            D2: "Hast du uns etwa belauscht."
        };
        answer = await Template.ƒS.Menu.getInput(decision, "class");
        switch (answer) {
            case decision.D1:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, decision.D1);
                break;
            case decision.D2:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, decision.D2);
                await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0004);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0005);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0006);
        decision = {
            D1: "Naja gut, dann mach ich mich mal auf den Weg, danke.",
            D2: "Weist du zumindest nach was ich Ausschau halten soll?"
        };
        answer = await Template.ƒS.Menu.getInput(decision, "class");
        switch (answer) {
            case decision.D1:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, decision.D1);
                break;
            case decision.D2:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, decision.D2);
                await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0007);
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0003);
                break;
        }
        await Template.ƒS.Speech.clear();
        Template.ƒS.Sound.fade(Template.sound.city, 0, 1);
        Template.forest();
    }
    Template.introduction = introduction;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function portal() {
        await Template.ƒS.Location.show(Template.locations.portal);
        //TODO: Sound
        Template.ƒS.Sound.fade(Template.sound.city, 0.5, 4, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Text.print("Du kommst zum Portal und siehst eine Gruppe dunkler Gestalten am Portal.");
        let decision = {
            D1: "Angriff.",
            D2: "Beobachten."
        };
        let answer = await Template.ƒS.Menu.getInput(decision, "class");
        switch (answer) {
            case decision.D1:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0047);
                //TODO: Tod da zu viel gegner.                
                break;
            case decision.D2:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0048);
                decision = {
                    D1: "Angriff.",
                    D2: "Beobachten."
                };
                let answer = await Template.ƒS.Menu.getInput(decision, "class");
                switch (answer) {
                    case decision.D1:
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0047);
                        //TODO: Tod da zu viel gegner aber jetzt verwirrung anfangs.                
                        break;
                    case decision.D2:
                        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0015);
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0049);
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0050);
                        decision = {
                            D1: "Angriff.",
                            D2: "Beobachten."
                        };
                        let answer = await Template.ƒS.Menu.getInput(decision, "class");
                        switch (answer) {
                            case decision.D1:
                                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0047);
                                await Template.ƒS.Text.print("Eine Gruppe stürmt aus den Büschen.");
                                if (Template.dataForSave.Glade) {
                                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0053);
                                }
                                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0054);
                                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0055);
                                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0056);
                                decision = {
                                    D1: "Abwarten.",
                                    D2: "Schwert ziehen und zuschlagen."
                                };
                                let answer = await Template.ƒS.Menu.getInput(decision, "class");
                                switch (answer) {
                                    case decision.D1:
                                        //TODO: Spieler stirbt Böses Gewinnt für immer gefangen...
                                        break;
                                    case decision.D2:
                                        await Template.ƒS.Speech.tell(Template.characters.Mass, Template.characters.Mass.text.T0000);
                                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0051);
                                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0052);
                                        await Template.ƒS.Speech.tell(Template.characters.Antagonist, Template.characters.Antagonist.text.T0000);
                                        //TODO: Böses Gewinnt für immer gefangen...
                                        break;
                                    case decision.D2:
                                        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0009);
                                        //TODO: Spieler gewinnt....
                                        break;
                                }
                                break;
                        }
                        break;
                }
                await Template.ƒS.Speech.clear();
                //TODO: Sound
                Template.ƒS.Sound.fade(Template.sound.city, 0, 1);
        }
    }
    Template.portal = portal;
})(Template || (Template = {}));
//# sourceMappingURL=Build.js.map