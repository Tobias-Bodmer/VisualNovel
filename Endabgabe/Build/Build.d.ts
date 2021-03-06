declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let erzähler: Erzähler;
    let gameStarted: boolean;
}
declare namespace Template {
    enum ANIMATION {
        CENTERFADEIN = 0,
        RIGHTFADEIN = 1,
        LEFTFADEIN = 2,
        CENTERFADEOUTLEFT = 3,
        CENTERFADEOUTRIGHT = 4,
        RIGHTFADEOUT = 5,
        LEFTFADEOUT = 6,
        FROMLEFTTORIGHT = 7,
        FROMRIGHTTOLEFT = 8,
        SCARED = 9,
        UNSCARED = 10,
        HIDE = 11,
        UNHIDE = 12
    }
    function getAnimation(_animation: ANIMATION): {
        start: {
            translation: ƒ.Vector2;
            scaling?: undefined;
        };
        end: {
            translation: ƒ.Vector2;
            scaling?: undefined;
        };
        duration: number;
        playmode: ƒ.ANIMATION_PLAYMODE;
    } | {
        start: {
            scaling: ƒ.Vector2;
            translation?: undefined;
        };
        end: {
            scaling: ƒ.Vector2;
            translation?: undefined;
        };
        duration: number;
        playmode: ƒ.ANIMATION_PLAYMODE;
    } | {
        start: {
            translation: ƒ.Vector2;
            scaling: ƒ.Vector2;
        };
        end: {
            translation: ƒ.Vector2;
            scaling: ƒ.Vector2;
        };
        duration: number;
        playmode: ƒ.ANIMATION_PLAYMODE;
    };
    function shakyCamera(): Promise<void>;
}
declare namespace Template {
    let characters: {
        AnotherOne: {
            name: string;
            text: {
                T0000: string;
            };
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Unknown: {
            name: string;
            text: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
                T0015: string;
            };
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                black: string;
            };
        };
        Blackangel: {
            name: string;
            text: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
            };
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                black: string;
                scared: string;
            };
        };
        Mass: {
            name: string;
            text: {
                T0000: string;
            };
        };
        Antagonist: {
            name: string;
            text: {
                T0000: string;
            };
        };
        Protagonist: {
            name: string;
            text: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
                T0015: string;
                T0016: string;
                T0017: string;
                T0018: string;
                T0019: string;
                T0020: string;
                T0021: string;
                T0022: string;
                T0023: string;
                T0024: string;
                T0025: string;
                T0026: string;
                T0027: string;
                T0028: string;
                T0029: string;
                T0030: string;
                T0031: string;
                T0032: string;
                T0033: string;
                T0034: string;
                T0035: string;
                T0036: string;
                T0037: string;
                T0038: string;
                T0039: string;
                T0040: string;
                T0041: string;
                T0042: string;
                T0043: string;
                T0044: string;
                T0045: string;
                T0046: string;
                T0047: string;
                T0048: string;
                T0049: string;
                T0050: string;
                T0051: string;
                T0052: string;
                T0053: string;
                T0054: string;
                T0055: string;
                T0056: string;
                T0057: string;
            };
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                scared: string;
            };
        };
        Bush: {
            name: string;
            text: {};
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
    };
}
declare namespace Template {
    export let items: {
        Sword: {
            name: string;
            description: string;
            image: string;
            handler: typeof cantBeUsed;
            static: boolean;
        };
        CrystalBall: {
            name: string;
            description: string;
            image: string;
            handler: typeof cantBeUsed;
            static: boolean;
        };
        UnknownCrystalBall: {
            name: string;
            description: string;
            image: string;
            handler: typeof cantBeUsed;
            static: boolean;
        };
        Book: {
            name: string;
            description: string;
            image: string;
            handler: typeof cantBeUsed;
            static: boolean;
        };
    };
    function cantBeUsed(): void;
    export {};
}
declare namespace Template {
    let locations: {
        bruecke: {
            name: string;
            background: string;
            foreground: string;
        };
        wald: {
            name: string;
            background: string;
            foreground: string;
        };
        waldNacht: {
            name: string;
            background: string;
            foreground: string;
        };
        portal: {
            name: string;
            background: string;
            foreground: string;
        };
        black: {
            name: string;
            background: string;
            foreground: string;
        };
    };
}
declare namespace Template {
    class Erzähler {
        private static container;
        constructor();
        erzählerSpeaks(_name: string, _text: string): Promise<boolean>;
        erzählerHide(): Promise<void>;
    }
}
declare namespace Template {
    let dataForSave: {
        Protagonist: {
            name: string;
        };
        Score: {
            score: number;
        };
        Glade: boolean;
        state: {
            a: number;
        };
    };
}
declare namespace Template {
    let sound: {
        city: string;
        forest: string;
        forestNight: string;
        portal: string;
        ending: string;
        shakyCamera: string;
        bush: string;
    };
}
declare namespace Template {
    function goodEnding(): ƒS.SceneReturn;
    function badEnding(): ƒS.SceneReturn;
    function credits(): ƒS.SceneReturn;
}
declare namespace Template {
    function city1(): ƒS.SceneReturn;
    function city2(): ƒS.SceneReturn;
}
declare namespace Template {
    function forest(): ƒS.SceneReturn;
}
declare namespace Template {
    function glade(): ƒS.SceneReturn;
}
declare namespace Template {
    function introduction(): ƒS.SceneReturn;
}
declare namespace Template {
    function portal(): ƒS.SceneReturn;
}
