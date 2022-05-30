namespace Template {
    export let items = {
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

    function changeform(): void {
        dataForSave.Transformation.istransformed = true;
    }
    function useDonut(): void {
        dataForSave.usedDonut.used = true;
    }
    function useBread(): void {
        dataForSave.usedBread.used = true;
    }
    function useChilli(): void {
        dataForSave.usedChilli.used = true;
    }
    function cantBeUsedNow(): void {
        console.log("This can´t be used right now");
    }
    function useFlashlight(): void {
        dataForSave.usedFlashlight.used = true;
    }
}