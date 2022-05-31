"use strict";
var Template;
(function (Template) {
    Template.animations = {};
    async function shakeyCamera() {
        const shake = [
            { transform: 'translateX(0) translateY(0px)' },
            { transform: 'translateX(-20px) translateY(-10px)' },
            { transform: 'translateX(20px) translateY(10px)' },
            { transform: 'translateX(10px) translateY(5px)' },
            { transform: 'translateX(-10px) translateY(-5px)' },
            { transform: 'translateX(0) translateY(0px)' }
        ];
        const timing = {
            duration: 300,
            iterations: 1,
        };
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
                T0007: "Ach ja mir fällt gerade ein das einer von ihnen einen großen Baum erwähnt hat."
            }
        },
        Blackangel: {
            name: "Blackangel",
            text: {
                T0001: "Schön dich kennen zu lernen.",
                T0002: "Das weiß ich auch nicht. Ich wollte mich auch gerade ausloggen da wurden wir alle hier her teleportiert.",
                T0003: "Aber nicht nur das... der Abmelde-Button ist jetzt ausgegraut.",
                T0004: "...",
                T0005: "Ha... Hast du diese Benachrichtigung gerade gelesen? Was soll das? Ist das ein schlechter Witz?",
                T0006: "Hast du den Skandal vor einigen Wochen nicht mitbekommen?",
                T0007: "Vor einigen Wochen hat es eine Hackergruppe wohl geschafft... Also sie haben VR-Headsets zum explodieren gebracht...",
                T0008: "Was sollen wir denn jetzt tun?",
                T0009: "Okay ich geh los und versuch mehr herauszufinden.",
            }
        },
        Protagonist: {
            name: "Du",
            text: {
                T0000: "Wo sind wir?",
                T0001: "Wir müssen herausfinden ob jemand etwas weiß.",
                T0002: "Was für hinweise?",
                T0003: "Naja gut, dann mach ich mich mal auf den Weg, danke."
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
        Prof: {
            name: "Professor Pine",
            // origin: ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Characters/Prof.png"
            }
        },
        PlanetBig: {
            name: "PlanetBig",
            // origin: ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Spoofs/PlanetBig.png"
            }
        },
        PlanetSmall: {
            name: "PlanetSmall",
            // origin: ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Spoofs/PlanetSmall.png"
            }
        },
        BreadSun: {
            name: "BreadSun",
            // origin: ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Spoofs/CubeFudge.png"
            }
        },
        Mothrin: {
            name: "Mothrin",
            //Position
            // origin: ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Characters/Moth_Girl.png",
                shadow: "Images/Characters/Moth_Shadow.png",
                happy: "Images/Characters/Moth_Happy.png",
                sad: "Images/Characters/Moth_Sad.png",
                angry: "Images/Characters/Moth_Angry.png",
                special: "Images/Characters/Moth_Girl_Special.png"
            }
        },
        Satina: {
            name: "Satina",
            //Position
            // origin: ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Characters/Demon.png",
                happy: "Images/Characters/Demon_Happy.png",
                sad: "Images/Characters/Demon_Sad.png",
                angry: "Images/Characters/Demon_Angry.png"
            }
        },
        Shubaru: {
            name: "Shubaru",
            //Position
            // origin: ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Characters/Shubaru.png",
                happy: "Images/Characters/Shubaru_Happy.png",
                sad: "Images/Characters/Shubaru_Sad.png",
                angry: "Images/Characters/Shubaru_Angry.png"
            }
        },
        Scales: {
            name: "Scales",
            //Position
            // origin: ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Characters/Scales.png",
                happy: "Images/Characters/Scales_Happy.png",
                sad: "Images/Characters/Scales_Sad.png",
                angry: "Images/Characters/Scales_Angry.png"
            }
        },
        Mother: {
            name: "Mother",
            //Position
            // origin: ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: ""
            }
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.items = {
        Donut: {
            name: "Hole-y Donut",
            description: "A suspicious looking donut",
            image: "Images/Items/Donut.png",
            //Add function
            handler: changeform
            //zum nicht entfernen:
            //static: true
        },
        Mothdust: {
            name: "Mothdust",
            description: "A jar filled with mothdust",
            image: "Images/Items/MothDust.png",
            //Add function
            handler: cantBeUsedNow,
            //zum nicht entfernen:
            static: true
        },
        EvilDonut: {
            name: "Unhole-y Donut",
            description: "An evil, but tasty looking donut",
            image: "Images/Items/EvilDonut.png",
            //Add function
            handler: useDonut
            //zum nicht entfernen:
            //static: true
        },
        Bread: {
            name: "Bread",
            description: "Plain bread",
            image: "Images/Items/Bread.png",
            //Add function
            handler: useBread
            //zum nicht entfernen:
            //static: true
        },
        Chilli: {
            name: "Chilli",
            description: "Delicious looking Chilli con Carne",
            image: "Images/Items/Chilli.png",
            //Add function
            handler: useChilli
            //zum nicht entfernen:
            //static: true
        },
        Flashlight: {
            name: "Flashlight",
            description: "A flashlight",
            image: "Images/Items/Flashlight.png",
            //Add function
            handler: useFlashlight
            //zum nicht entfernen: 
            //static: true
        }
    };
    function changeform() {
        Template.dataForSave.Transformation.istransformed = true;
    }
    function useDonut() {
        Template.dataForSave.usedDonut.used = true;
    }
    function useBread() {
        Template.dataForSave.usedBread.used = true;
    }
    function useChilli() {
        Template.dataForSave.usedChilli.used = true;
    }
    function cantBeUsedNow() {
        console.log("This can´t be used right now");
    }
    function useFlashlight() {
        Template.dataForSave.usedFlashlight.used = true;
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
        muehle: {
            name: "Muehle",
            background: "Images/Mühle.jpg",
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
        //define the sequenceof scenes, each scene as an object with a reference
        let scenes = [
            //Main Story
            { scene: Template.Introduction, name: "Introduction" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        // dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
        Template.dataForSave.state = Template.ƒS.Progress.setData(Template.dataForSave.state, uiElement);
        // uiElement.setAttribute("value", "50");
        //start the sequence
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
        Transformation: {
            istransformed: false
        },
        usedDonut: {
            used: false
        },
        usedBread: {
            used: false
        },
        usedChilli: {
            used: false
        },
        timeTraveled: {
            timeTraveled: false
        },
        usedFlashlight: {
            used: false
        },
        MothrinAffection: {
            score: 0
        },
        SatinaAffection: {
            score: 0
        },
        ShubaruAffection: {
            score: 0
        },
        ScalesAffection: {
            score: 0
        },
        Interacted_with_Scales: {
            boolean: false
        },
        //Skala hier
        state: {
            a: 0
        }
    };
})(Template || (Template = {}));
// namespace Template {
//   export async function Scene(): ƒS.SceneReturn {
//     console.log("FudgeStory Template Scene starting");
//   }
// }
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
    async function forest() {
        await Template.ƒS.Location.show(Template.locations.wald);
        await Template.ƒS.update(1);
        await Template.ƒS.Sound.fade(Template.sound.forest, 0.5, 4, true);
        await Template.ƒS.Text.print("Du kommst zu einem großen Baum der mittem im Wald auf einer Lichtung steht.");
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
                await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0004);
                await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0005);
                break;
        }
    }
    Template.forest = forest;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Introduction() {
        await Template.ƒS.Location.show(Template.locations.bruecke);
        Template.ƒS.Sound.fade(Template.sound.city, 0.2, 4, true);
        await Template.ƒS.update(4, "Images/wet.jpg", 1);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0000);
        Template.ƒS.Sound.fade(Template.sound.city, 0.5, 2, true);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, Template.characters.Unknown.text.T0002);
        Template.dataForSave.Protagonist.name = await Template.ƒS.Speech.getInput();
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0001);
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
                await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0002);
                await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0003);
                break;
        }
        await Template.shakeyCamera();
        Template.ƒS.Sound.fade(Template.sound.city, 0.01, 0, true);
        await Template.erzähler.erzählerSpeaks("???", "Don't quit the game or you will die!");
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0004);
        await Template.erzähler.erzählerHide();
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0005);
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
                await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0006);
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
                        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0007);
                        break;
                }
                break;
        }
        await Template.shakeyCamera();
        await Template.erzähler.erzählerSpeaks("???", "We have manipulated your VR-Headsets.");
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0004);
        await Template.erzähler.erzählerHide();
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0008);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, Template.characters.Protagonist.text.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Blackangel, Template.characters.Blackangel.text.T0009);
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
        //TODO: Transition
    }
    Template.Introduction = Introduction;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map