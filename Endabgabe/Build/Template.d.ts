declare namespace Template {
    let characters: {
        Narrator: {
            name: string;
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
                T0016: string;
            };
        };
        Protagonist: {
            name: string;
            text: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
            };
        };
        Prof: {
            name: string;
            pose: {
                normal: string;
            };
        };
        PlanetBig: {
            name: string;
            pose: {
                normal: string;
            };
        };
        PlanetSmall: {
            name: string;
            pose: {
                normal: string;
            };
        };
        BreadSun: {
            name: string;
            pose: {
                normal: string;
            };
        };
        Mothrin: {
            name: string;
            pose: {
                normal: string;
                shadow: string;
                happy: string;
                sad: string;
                angry: string;
                special: string;
            };
        };
        Satina: {
            name: string;
            pose: {
                normal: string;
                happy: string;
                sad: string;
                angry: string;
            };
        };
        Shubaru: {
            name: string;
            pose: {
                normal: string;
                happy: string;
                sad: string;
                angry: string;
            };
        };
        Scales: {
            name: string;
            pose: {
                normal: string;
                happy: string;
                sad: string;
                angry: string;
            };
        };
        Mother: {
            name: string;
            pose: {
                normal: string;
            };
        };
    };
}
declare namespace Template {
    export let items: {
        Donut: {
            name: string;
            description: string;
            image: string;
            handler: typeof changeform;
        };
        Mothdust: {
            name: string;
            description: string;
            image: string;
            handler: typeof cantBeUsedNow;
            static: boolean;
        };
        EvilDonut: {
            name: string;
            description: string;
            image: string;
            handler: typeof useDonut;
        };
        Bread: {
            name: string;
            description: string;
            image: string;
            handler: typeof useBread;
        };
        Chilli: {
            name: string;
            description: string;
            image: string;
            handler: typeof useChilli;
        };
        Flashlight: {
            name: string;
            description: string;
            image: string;
            handler: typeof useFlashlight;
        };
    };
    function changeform(): void;
    function useDonut(): void;
    function useBread(): void;
    function useChilli(): void;
    function cantBeUsedNow(): void;
    function useFlashlight(): void;
    export {};
}
declare namespace Template {
    let locations: {
        brueckeErwachen: {
            name: string;
            background: string;
        };
        bruecke: {
            name: string;
            background: string;
        };
        wald: {
            name: string;
            background: string;
        };
        muehle: {
            name: string;
            background: string;
        };
        waldNacht: {
            name: string;
            background: string;
        };
        portal: {
            name: string;
            background: string;
        };
    };
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let erzähler: Erzähler;
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
        Transformation: {
            istransformed: boolean;
        };
        usedDonut: {
            used: boolean;
        };
        usedBread: {
            used: boolean;
        };
        usedChilli: {
            used: boolean;
        };
        timeTraveled: {
            timeTraveled: boolean;
        };
        usedFlashlight: {
            used: boolean;
        };
        MothrinAffection: {
            score: number;
        };
        SatinaAffection: {
            score: number;
        };
        ShubaruAffection: {
            score: number;
        };
        ScalesAffection: {
            score: number;
        };
        Interacted_with_Scales: {
            boolean: boolean;
        };
        state: {
            a: number;
        };
    };
}
declare namespace Template {
    let sound: {
        city: string;
        forest: string;
        space: string;
        mothrin: string;
        satina: string;
        shubaru: string;
        scales: string;
        intro: string;
        ending: string;
        crimosa: string;
        parkEnding: string;
        click: string;
        creak: string;
        walking: string;
        clank: string;
    };
}
declare namespace Template {
    function forest(): ƒS.SceneReturn;
}
declare namespace Template {
    function Introduction(): ƒS.SceneReturn;
}
