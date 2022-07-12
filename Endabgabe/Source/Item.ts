namespace Template {
    export let items = {
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

    function cantBeUsed(): void {
        let random: number = Math.round(Math.random() * 2);
        switch (random) {
            case 0:
                ƒS.Text.print("Maybe later.");
                break;
            case 1:
                ƒS.Text.print("That's not important right now.");
                break;
            case 2:
                ƒS.Text.print("This can't be used right now.");
                break;
            default:
                break;
        }
    }
}