namespace Template {
    export let items = {
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

    function changeform(): void {
       
    }
    
    function cantBeUsedNow(): void {
        console.log("This can´t be used right now");
    }
}