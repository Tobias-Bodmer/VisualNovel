"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    Template.gameStarted = false;
    let gameMenu;
    let inGameMenu = {
        soundUp: "+",
        soundDown: "-",
        save: "Save",
        load: "Load",
        close: "Close"
    };
    let menu = false;
    let masterSound = 1;
    window.addEventListener("load", start);
    function start(_event) {
        Template.erzähler = new Template.Erzähler();
        Template.ƒS.Speech.hide();
        gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        gameMenu.close();
        let scenes = [
            { scene: Template.introduction, name: "Introduction", id: "Introduction" },
            { scene: Template.forest, name: "Forest", id: "Forest" },
            { scene: Template.glade, name: "Glade", id: "Glade" },
            { scene: Template.city1, name: "City1", id: "City1" },
            { scene: Template.city2, name: "City2", id: "City2" },
            { scene: Template.portal, name: "Portal", id: "Portal" },
            { scene: Template.goodEnding, name: "GoodEnding", id: "GoodEnding" },
            { scene: Template.badEnding, name: "BadEnding", id: "BadEnding" },
            { scene: Template.credits, name: "Credits", id: "Credits" }
        ];
        Template.ƒS.Progress.go(scenes);
    }
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.I:
                if (Template.gameStarted) {
                    Template.ƒS.Inventory.open();
                }
                break;
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.ESC:
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
    async function buttonFunctionalities(_option) {
        switch (_option) {
            case inGameMenu.soundUp:
                masterSound += 0.2;
                if (masterSound > 1)
                    masterSound = 1;
                Template.ƒS.Sound.setMasterVolume(masterSound);
                break;
            case inGameMenu.soundDown:
                masterSound -= 0.2;
                if (masterSound < 0)
                    masterSound = 0;
                Template.ƒS.Sound.setMasterVolume(masterSound);
                break;
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
        }
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    const timing = { duration: 300, iterations: 1, };
    const shake = [
        { transform: 'translateX(0) translateY(0px)' }, { transform: 'translateX(-20px) translateY(-10px)' }, { transform: 'translateX(20px) translateY(10px)' },
        { transform: 'translateX(10px) translateY(5px)' }, { transform: 'translateX(-10px) translateY(-5px)' }, { transform: 'translateX(0) translateY(0px)' }
    ];
    let ANIMATION;
    (function (ANIMATION) {
        ANIMATION[ANIMATION["CENTERFADEIN"] = 0] = "CENTERFADEIN";
        ANIMATION[ANIMATION["RIGHTFADEIN"] = 1] = "RIGHTFADEIN";
        ANIMATION[ANIMATION["LEFTFADEIN"] = 2] = "LEFTFADEIN";
        ANIMATION[ANIMATION["CENTERFADEOUTLEFT"] = 3] = "CENTERFADEOUTLEFT";
        ANIMATION[ANIMATION["CENTERFADEOUTRIGHT"] = 4] = "CENTERFADEOUTRIGHT";
        ANIMATION[ANIMATION["RIGHTFADEOUT"] = 5] = "RIGHTFADEOUT";
        ANIMATION[ANIMATION["LEFTFADEOUT"] = 6] = "LEFTFADEOUT";
        ANIMATION[ANIMATION["FROMLEFTTORIGHT"] = 7] = "FROMLEFTTORIGHT";
        ANIMATION[ANIMATION["FROMRIGHTTOLEFT"] = 8] = "FROMRIGHTTOLEFT";
        ANIMATION[ANIMATION["SCARED"] = 9] = "SCARED";
        ANIMATION[ANIMATION["UNSCARED"] = 10] = "UNSCARED";
        ANIMATION[ANIMATION["HIDE"] = 11] = "HIDE";
        ANIMATION[ANIMATION["UNHIDE"] = 12] = "UNHIDE";
    })(ANIMATION = Template.ANIMATION || (Template.ANIMATION = {}));
    function getAnimation(_animation) {
        switch (_animation) {
            case ANIMATION.CENTERFADEIN:
                return {
                    start: { translation: Template.ƒS.positionPercent(-20, 100) },
                    end: { translation: Template.ƒS.positionPercent(50, 100) },
                    duration: 3,
                    playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.RIGHTFADEIN:
                return {
                    start: { translation: Template.ƒS.positionPercent(120, 100) },
                    end: { translation: Template.ƒS.positionPercent(80, 100) },
                    duration: 3,
                    playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.LEFTFADEIN:
                return {
                    start: { translation: Template.ƒS.positionPercent(-20, 100) },
                    end: { translation: Template.ƒS.positionPercent(20, 100) },
                    duration: 3,
                    playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.CENTERFADEOUTLEFT:
                return {
                    start: { translation: Template.ƒS.positionPercent(50, 100) },
                    end: { translation: Template.ƒS.positionPercent(-20, 100) },
                    duration: 3,
                    playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.CENTERFADEOUTRIGHT:
                return {
                    start: { translation: Template.ƒS.positionPercent(50, 100) },
                    end: { translation: Template.ƒS.positionPercent(120, 100) },
                    duration: 3,
                    playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.RIGHTFADEOUT:
                return {
                    start: { translation: Template.ƒS.positionPercent(80, 100) },
                    end: { translation: Template.ƒS.positionPercent(120, 100) },
                    duration: 3,
                    playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.LEFTFADEOUT:
                return {
                    start: { translation: Template.ƒS.positionPercent(20, 100) },
                    end: { translation: Template.ƒS.positionPercent(-20, 100) },
                    duration: 3,
                    playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.FROMLEFTTORIGHT:
                return {
                    start: { translation: Template.ƒS.positionPercent(20, 100) },
                    end: { translation: Template.ƒS.positionPercent(80, 100) },
                    duration: 3,
                    playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.FROMRIGHTTOLEFT:
                return {
                    start: { translation: Template.ƒS.positionPercent(80, 100) },
                    end: { translation: Template.ƒS.positionPercent(20, 100) },
                    duration: 3,
                    playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.SCARED:
                return {
                    start: { scaling: new Template.ƒS.Position(1, 1) },
                    end: { scaling: new Template.ƒS.Position(0.97, 0.97) },
                    duration: 0.5,
                    playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.UNSCARED:
                return {
                    start: { scaling: new Template.ƒS.Position(0.97, 0.97) },
                    end: { scaling: new Template.ƒS.Position(1, 1) },
                    duration: 0.5,
                    playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.HIDE:
                return {
                    start: { translation: Template.ƒS.positionPercent(20, 100), scaling: new Template.ƒS.Position(1, 1) },
                    end: { translation: Template.ƒS.positionPercent(80, 100), scaling: new Template.ƒS.Position(0.5, 0.5) },
                    duration: 1.5,
                    playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            default:
                return null;
        }
    }
    Template.getAnimation = getAnimation;
    async function shakeyCamera() {
        await Template.ƒS.Sound.play(Template.sound.shakeyCamera, 0.5, false);
        await setTimeout(() => {
            document.body.animate(shake, timing);
        }, 100);
    }
    Template.shakeyCamera = shakeyCamera;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.characters = {
        AnotherOne: {
            name: "Ein anderer",
            text: {
                T0000: "Wir müssen sie aufhalten."
            },
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Character/Demon.png",
                happy: "Images/Character/Demon.png",
                angry: "Images/Character/Demon.png"
            }
        },
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
            },
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Character/Demon.png",
                happy: "Images/Character/Demon.png",
                angry: "Images/Character/Demon.png"
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
                T0009: "Hahaha ich habs geschafft.",
                T0010: "Ahh... Das darf nicht wahr sein...",
            },
            //Position
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Character/Antagonist_Normal.png",
                black: "Images/Character/Antagonist_Black.png",
                scared: "Images/Character/Antagonist_Scared.png"
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
                T0056: "Egal damit kommst du nicht durch. Das lass ich nicht zu.",
                T0057: "Warum hast du das getan."
            },
            //Position
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Character/Demon.png",
                scared: "Images/Character/Demon.png"
            }
        },
        Bush: {
            name: "",
            text: {},
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Character/Bush.png"
            }
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
            handler: cantBeUsed,
            static: true
        },
        CrystalBall: {
            name: "Crystal Ball",
            description: "A way to keep in touch with a group or your guild.",
            image: "Images/Items/CrystalBall.png",
            handler: cantBeUsed,
            static: true
        },
        UnknownCrystalBall: {
            name: "The Second Crystal Ball",
            description: "The crystal ball you found in the bushes.",
            image: "Images/Items/CrystalBall.png",
            handler: cantBeUsed,
            static: true
        },
        Book: {
            name: "Book",
            description: "The Book you found in the forest.",
            image: "Images/Items/Book.png",
            handler: cantBeUsed,
            static: true
        }
    };
    function cantBeUsed() {
        let random = Math.round(Math.random() * 2);
        switch (random) {
            case 0:
                Template.ƒS.Text.print("Maybe later.");
                break;
            case 1:
                Template.ƒS.Text.print("That's not important right now.");
                break;
            case 2:
                Template.ƒS.Text.print("This can't be used right now.");
                break;
            default:
                break;
        }
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
        forest: "Sounds/Forest.mp3",
        forestNight: "Sounds/ForestNight.mp3",
        portal: "Sounds/Portal.mp3",
        ending: "Sounds/Ending.mp3",
        //Sound
        shakeyCamera: "Sounds/ShackyCamera.mp3",
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function goodEnding() {
        await Template.ƒS.Location.show(Template.locations.black);
        Template.ƒS.Sound.fade(Template.sound.ending, 0.5, 4, true);
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
        await Template.ƒS.Text.print("Du hast es geschafft, das Böse ist besiegt und die Spieler haben ihre Freiheit zurück.");
        await Template.ƒS.Text.print("Du hattest keine andere Wahl, als ihn zu töten, um die Spieler zu befreien.");
        return "Credits";
    }
    Template.goodEnding = goodEnding;
    async function badEnding() {
        await Template.ƒS.Location.show(Template.locations.black);
        Template.ƒS.Sound.fade(Template.sound.ending, 0.5, 4, true);
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
        await Template.ƒS.Text.print("Blackangel ist es gelungen, seinen bösen Plan in die Tat umzusetzen.");
        await Template.ƒS.Text.print("Du hast dein Bestes gegeben.");
        return "Credits";
    }
    Template.badEnding = badEnding;
    async function credits() {
        let pages = "<h1>The End</h1> \
            <h2>Thanks For Playing</h2> \
            <h3>A Visual Novel Made By Tobias Bodmer</h3> \
            <p>If You Wanna See Blackangels Way, Play The Visual Novel <br/><br/> Made By Nikola Gorgiev</p> \
            <h2>Copyrights</h2> \
            <p>Story: Tobias Bodmer</p> \
            <p>Backgrounds: Amazon Game Studios New World</p> \
            <p>Character Visual Design: Nikola Gorgiev</p>";
        Template.ƒS.Text.setClass("credits");
        Template.ƒS.Text.print(pages);
    }
    Template.credits = credits;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function city1() {
        await Template.ƒS.Location.show(Template.locations.bruecke);
        Template.ƒS.Sound.fade(Template.sound.city, 0.5, 4, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(-20, 100));
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.getAnimation(Template.ANIMATION.CENTERFADEIN));
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0034);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0035);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0036);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0037);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0038);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0039);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0040);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0041);
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.getAnimation(Template.ANIMATION.CENTERFADEOUTRIGHT));
        Template.ƒS.Sound.fade(Template.sound.city, 0, 1);
        return "Portal";
    }
    Template.city1 = city1;
    async function city2() {
        await Template.ƒS.Location.show(Template.locations.bruecke);
        Template.ƒS.Sound.fade(Template.sound.city, 0.5, 4, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(-20, 100));
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.getAnimation(Template.ANIMATION.CENTERFADEIN));
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0042);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0043);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0044);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0045);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0046);
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.getAnimation(Template.ANIMATION.CENTERFADEOUTRIGHT));
        Template.ƒS.Sound.fade(Template.sound.city, 0, 1);
        return "Portal";
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
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.getAnimation(Template.ANIMATION.LEFTFADEIN));
        await searchTreeOrArea(0);
        async function searchTreeOrArea(_countD1) {
            let decision = {
                D1: "Umgebung untersuchen.",
                D2: "Baum untersuchen."
            };
            let answer = await Template.ƒS.Menu.getInput(decision, "decision");
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
                    await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.getAnimation(Template.ANIMATION.FROMLEFTTORIGHT));
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
            let answer = await Template.ƒS.Menu.getInput(decision, "decision");
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
        Template.ƒS.Inventory.add(Template.items.Book);
        await Template.ƒS.Text.print("Das Buch trägt das selbe Symbol wie das auf dem Baum.");
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0016);
        await readBook();
        async function readBook() {
            let decision = {
                D1: "Nicht lesen.",
                D2: "Lesen."
            };
            let answer = await Template.ƒS.Menu.getInput(decision, "decision");
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
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.scared, Template.getAnimation(Template.ANIMATION.SCARED));
        await Template.ƒS.Text.print("Ein Busch ganz in der Nähe bewegt sich.");
        let decision = {
            D1: "Nachschauen.",
            D2: "Ignorieren."
        };
        let answer = await Template.ƒS.Menu.getInput(decision, "decision");
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.getAnimation(Template.ANIMATION.UNSCARED));
        switch (answer) {
            case decision.D1:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0019);
                await Template.ƒS.Text.print("Du hast ein Kristallkugel gefunden.");
                Template.ƒS.Inventory.add(Template.items.UnknownCrystalBall);
                await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0008);
                await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0009);
                decision = {
                    D1: "Lauschen.",
                    D2: "Antworten."
                };
                let answer = await Template.ƒS.Menu.getInput(decision, "decision");
                switch (answer) {
                    case decision.D2:
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0020);
                        return;
                }
                await Template.ƒS.Speech.tell(Template.characters.Unknown, "...");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0021);
                await Template.ƒS.Speech.hide();
                await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.getAnimation(Template.ANIMATION.RIGHTFADEOUT));
                Template.ƒS.Sound.fade(Template.sound.forest, 0, 1);
                return "City1";
            case decision.D2:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0022);
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0023);
                await Template.erzähler.erzählerSpeaks("???", "Treffpunkt Heute Nacht bei der Lichtung beim Fluss.");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0024);
                await Template.erzähler.erzählerHide();
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0025);
                await Template.ƒS.Speech.hide();
                await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.getAnimation(Template.ANIMATION.RIGHTFADEOUT));
                Template.ƒS.Sound.fade(Template.sound.forest, 0, 1);
                return "Glade";
        }
    }
    Template.forest = forest;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function glade() {
        Template.dataForSave.Glade = true;
        await Template.ƒS.Location.show(Template.locations.waldNacht);
        Template.ƒS.Sound.fade(Template.sound.forestNight, 0.5, 4, true);
        await Template.ƒS.Character.show(Template.characters.Bush, Template.characters.Bush.pose.normal, Template.ƒS.positionPercent(80, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Text.print("Du kommst bei der Lichtung des Buches an.");
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.getAnimation(Template.ANIMATION.LEFTFADEIN));
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0026);
        await Template.shakeyCamera();
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0027);
        let decision = {
            D1: "Abwarten.",
            D2: "Verstecken."
        };
        let answer = await Template.ƒS.Menu.getInput(decision, "decision");
        switch (answer) {
            case decision.D1:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0028);
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0029);
                break;
            case decision.D2:
                await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.getAnimation(Template.ANIMATION.HIDE));
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0030);
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0031);
                break;
        }
        await Template.ƒS.Text.print("Einige Zeit später.");
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0032);
        if (answer == decision.D1) {
            await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.getAnimation(Template.ANIMATION.HIDE));
        }
        await Template.ƒS.Character.animate(Template.characters.Unknown, Template.characters.Unknown.pose.normal, Template.getAnimation(Template.ANIMATION.CENTERFADEIN));
        await Template.ƒS.Character.animate(Template.characters.AnotherOne, Template.characters.AnotherOne.pose.normal, Template.getAnimation(Template.ANIMATION.LEFTFADEIN));
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0010);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0011);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0012);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0013);
        await Template.ƒS.Speech.tell(Template.characters.AnotherOne.name, Template.characters.AnotherOne.text.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0014);
        Template.ƒS.Character.animate(Template.characters.Unknown, Template.characters.Unknown.pose.normal, Template.getAnimation(Template.ANIMATION.CENTERFADEOUTLEFT));
        await Template.ƒS.Character.animate(Template.characters.AnotherOne, Template.characters.AnotherOne.pose.normal, Template.getAnimation(Template.ANIMATION.LEFTFADEOUT));
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0033);
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.forestNight, 0, 1);
        return "City2";
    }
    Template.glade = glade;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function introduction() {
        await Template.ƒS.Location.show(Template.locations.bruecke);
        Template.ƒS.Sound.fade(Template.sound.city, 0.2, 4, true);
        await Template.ƒS.update(4, "./Images/WackingUp.jpg", 1);
        Template.ƒS.Sound.fade(Template.sound.city, 0.5, 2, true);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0000);
        await Template.ƒS.Character.show(Template.characters.Blackangel, Template.characters.Blackangel.pose.normal, Template.ƒS.positionPercent(80, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(20, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0002);
        Template.dataForSave.Protagonist.name = await Template.ƒS.Speech.getInput();
        Template.ƒS.Inventory.add(Template.items.Sword);
        Template.ƒS.Inventory.add(Template.items.CrystalBall);
        Template.gameStarted = true;
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0000);
        let decision = {
            D1: "...",
            D2: "Aber ich hab mich ausgeloggt warum bin ich noch hier?"
        };
        let answer = await Template.ƒS.Menu.getInput(decision, "decision");
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
        await Template.ƒS.Character.hide(Template.characters.Blackangel);
        await Template.ƒS.Character.show(Template.characters.Blackangel, Template.characters.Blackangel.pose.scared, Template.ƒS.positionPercent(80, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.Blackangel, Template.characters.Blackangel.pose.scared, Template.getAnimation(Template.ANIMATION.SCARED));
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0003);
        await Template.erzähler.erzählerHide();
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0004);
        decision = {
            D1: "...",
            D2: "Wie sollte das möglich sein?"
        };
        answer = await Template.ƒS.Menu.getInput(decision, "decision");
        await Template.ƒS.Character.animate(Template.characters.Blackangel, Template.characters.Blackangel.pose.scared, Template.getAnimation(Template.ANIMATION.UNSCARED));
        await Template.ƒS.Character.hide(Template.characters.Blackangel);
        await Template.ƒS.Character.show(Template.characters.Blackangel, Template.characters.Blackangel.pose.normal, Template.ƒS.positionPercent(80, 100));
        await Template.ƒS.update();
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
                answer = await Template.ƒS.Menu.getInput(decision, "decision");
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
        await Template.ƒS.Character.hide(Template.characters.Blackangel);
        await Template.ƒS.Character.show(Template.characters.Blackangel, Template.characters.Blackangel.pose.scared, Template.ƒS.positionPercent(80, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.Blackangel, Template.characters.Blackangel.pose.scared, Template.getAnimation(Template.ANIMATION.SCARED));
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0003);
        await Template.erzähler.erzählerHide();
        await Template.ƒS.Character.animate(Template.characters.Blackangel, Template.characters.Blackangel.pose.scared, Template.getAnimation(Template.ANIMATION.UNSCARED));
        await Template.ƒS.Character.hide(Template.characters.Blackangel);
        await Template.ƒS.Character.show(Template.characters.Blackangel, Template.characters.Blackangel.pose.normal, Template.ƒS.positionPercent(80, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0007);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0008);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Hey, Warte, nimm das hier. So können wir in Kontakt bleiben.");
        await Template.ƒS.Text.print("Du hast eine Kristallkugel abgegeben.");
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update(1.5);
        await Template.ƒS.Text.print("Einige Zeit später...");
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(20, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.animate(Template.characters.Unknown, Template.characters.Unknown.pose.normal, Template.getAnimation(Template.ANIMATION.RIGHTFADEIN));
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0003);
        decision = {
            D1: "Ja da hast du richtig gehört.",
            D2: "Hast du uns etwa belauscht."
        };
        answer = await Template.ƒS.Menu.getInput(decision, "decision");
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
        answer = await Template.ƒS.Menu.getInput(decision, "decision");
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
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.getAnimation(Template.ANIMATION.LEFTFADEOUT));
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.city, 0, 1);
    }
    Template.introduction = introduction;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function portal() {
        await Template.ƒS.Location.show(Template.locations.portal);
        Template.ƒS.Sound.fade(Template.sound.portal, 0.5, 4, true);
        await Template.ƒS.Character.show(Template.characters.Blackangel, Template.characters.Blackangel.pose.black, Template.ƒS.positionPercent(80, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Text.print("Du kommst zum Portal und siehst eine Gruppe dunkler Gestalten am Portal.");
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.getAnimation(Template.ANIMATION.LEFTFADEIN));
        let decision = {
            D1: "Angriff.",
            D2: "Beobachten."
        };
        let answer = await Template.ƒS.Menu.getInput(decision, "decision");
        switch (answer) {
            case decision.D1:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0047);
                await Template.ƒS.Text.print("Doch es sind zu viele. Du hast keine Chance und fällst, bevor du sie überhaupt erreichst.");
                await Template.ƒS.Speech.hide();
                await Template.ƒS.Character.hideAll();
                await Template.ƒS.update(1);
                Template.ƒS.Sound.fade(Template.sound.portal, 0, 1);
                return "BadEnding";
            case decision.D2:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0048);
                decision = {
                    D1: "Angriff.",
                    D2: "Beobachten."
                };
                let answer = await Template.ƒS.Menu.getInput(decision, "decision");
                switch (answer) {
                    case decision.D1:
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0047);
                        await Template.ƒS.Text.print("Alle sind sichtlich verwirrt von deinem Angriffsgeschrei, doch es sind zu viele und es gelinkt ihnen, dich zu überwältigen.");
                        await Template.ƒS.Speech.hide();
                        await Template.ƒS.Character.hideAll();
                        await Template.ƒS.update(1);
                        Template.ƒS.Sound.fade(Template.sound.portal, 0, 1);
                        return "BadEnding";
                    case decision.D2:
                        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0015);
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0049);
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0050);
                        decision = {
                            D1: "Angriff.",
                            D2: "Beobachten."
                        };
                        let answer = await Template.ƒS.Menu.getInput(decision, "decision");
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
                                let answer = await Template.ƒS.Menu.getInput(decision, "decision");
                                switch (answer) {
                                    case decision.D1:
                                        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0009);
                                        await Template.ƒS.Text.print("Es gelingt ihm das Portal zu schließen.");
                                        await Template.ƒS.Speech.hide();
                                        await Template.ƒS.Character.hideAll();
                                        await Template.ƒS.update(1);
                                        Template.ƒS.Sound.fade(Template.sound.portal, 0, 1);
                                        return "BadEnding";
                                    case decision.D2:
                                        await Template.ƒS.Text.print("Du ziehst dein Schwert und bringst Blackangel zufall.");
                                        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0010);
                                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0057);
                                        await Template.ƒS.Speech.hide();
                                        await Template.ƒS.Character.hideAll();
                                        await Template.ƒS.update(1);
                                        Template.ƒS.Sound.fade(Template.sound.portal, 0, 1);
                                        return "GoodEnding";
                                }
                                break;
                            case decision.D2:
                                await Template.ƒS.Text.print("Du hörst die Vasallen am Portal schreien.");
                                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0051);
                                await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0052);
                                await Template.ƒS.Speech.tell(Template.characters.Antagonist, Template.characters.Antagonist.text.T0000);
                                await Template.ƒS.Speech.hide();
                                await Template.ƒS.Character.hideAll();
                                await Template.ƒS.update(1);
                                Template.ƒS.Sound.fade(Template.sound.portal, 0, 1);
                                return "BadEnding";
                        }
                        break;
                }
        }
    }
    Template.portal = portal;
})(Template || (Template = {}));
//# sourceMappingURL=Build.js.map