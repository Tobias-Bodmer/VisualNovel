namespace Template {
    const timing = { duration: 300, iterations: 1, };
    const shake = [
        { transform: 'translateX(0) translateY(0px)' }, { transform: 'translateX(-20px) translateY(-10px)' }, { transform: 'translateX(20px) translateY(10px)' },
        { transform: 'translateX(10px) translateY(5px)' }, { transform: 'translateX(-10px) translateY(-5px)' }, { transform: 'translateX(0) translateY(0px)' }
    ];

    export enum ANIMATION {
        CENTERFADEIN,
        RIGHTFADEIN,
        LEFTFADEIN,
        CENTERFADEOUTLEFT,
        CENTERFADEOUTRIGHT,
        RIGHTFADEOUT,
        LEFTFADEOUT,
        FROMLEFTTORIGHT,
        FROMRIGHTTOLEFT,
        SCARED,
        UNSCARED,
        HIDE,
        UNHIDE,
    }

    export function getAnimation(_animation: ANIMATION) {
        switch (_animation) {
            case ANIMATION.CENTERFADEIN:
                return {
                    start: { translation: ƒS.positionPercent(-20, 100) },
                    end: { translation: ƒS.positionPercent(50, 100) },
                    duration: 3,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.RIGHTFADEIN:
                return {
                    start: { translation: ƒS.positionPercent(120, 100) },
                    end: { translation: ƒS.positionPercent(80, 100) },
                    duration: 3,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.LEFTFADEIN:
                return {
                    start: { translation: ƒS.positionPercent(-20, 100) },
                    end: { translation: ƒS.positionPercent(20, 100) },
                    duration: 3,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.CENTERFADEOUTLEFT:
                return {
                    start: { translation: ƒS.positionPercent(50, 100) },
                    end: { translation: ƒS.positionPercent(-20, 100) },
                    duration: 3,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.CENTERFADEOUTRIGHT:
                return {
                    start: { translation: ƒS.positionPercent(50, 100) },
                    end: { translation: ƒS.positionPercent(120, 100) },
                    duration: 3,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.RIGHTFADEOUT:
                return {
                    start: { translation: ƒS.positionPercent(80, 100) },
                    end: { translation: ƒS.positionPercent(120, 100) },
                    duration: 3,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.LEFTFADEOUT:
                return {
                    start: { translation: ƒS.positionPercent(20, 100) },
                    end: { translation: ƒS.positionPercent(-20, 100) },
                    duration: 3,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.FROMLEFTTORIGHT:
                return {
                    start: { translation: ƒS.positionPercent(20, 100) },
                    end: { translation: ƒS.positionPercent(80, 100) },
                    duration: 3,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.FROMRIGHTTOLEFT:
                return {
                    start: { translation: ƒS.positionPercent(80, 100) },
                    end: { translation: ƒS.positionPercent(20, 100) },
                    duration: 3,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.SCARED:
                return {
                    start: { scaling: new ƒS.Position(1, 1) },
                    end: { scaling: new ƒS.Position(0.97, 0.97) },
                    duration: 0.5,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.UNSCARED:
                return {
                    start: { scaling: new ƒS.Position(0.97, 0.97) },
                    end: { scaling: new ƒS.Position(1, 1) },
                    duration: 0.5,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case ANIMATION.HIDE:
                return {
                    start: { translation: ƒS.positionPercent(20, 100), scaling: new ƒS.Position(1, 1) },
                    end: { translation: ƒS.positionPercent(80, 100), scaling: new ƒS.Position(0.5, 0.5) },
                    duration: 1.5,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            default:
                return null;
        }
    }


    export async function shakeyCamera(): Promise<void> {
        await ƒS.Sound.play(sound.shakeyCamera, 0.5, false);

        await setTimeout(() => {
            document.body.animate(shake, timing);
        }, 100);
    }
}