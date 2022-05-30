namespace Template {
    export let animations = {

    }

    export async function shakeyCamera(): Promise<void> {
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
        }

        document.body.animate(shake, timing);
    }
}