namespace Template {
    const timing = { duration: 300, iterations: 1, };
    const shake = [
        { transform: 'translateX(0) translateY(0px)' }, { transform: 'translateX(-20px) translateY(-10px)' }, { transform: 'translateX(20px) translateY(10px)' },
        { transform: 'translateX(10px) translateY(5px)' }, { transform: 'translateX(-10px) translateY(-5px)' }, { transform: 'translateX(0) translateY(0px)' }
    ];

    export let animations = {

    }

    export async function shakeyCamera(): Promise<void> {
        await ƒS.Sound.play(sound.shakeyCamera, 0.5, false);

        await setTimeout(() => {
            document.body.animate(shake, timing);
        }, 100);
    }
}