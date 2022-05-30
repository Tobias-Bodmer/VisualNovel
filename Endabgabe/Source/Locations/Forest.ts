namespace Template { 
    export async function forest(): ƒS.SceneReturn { 

        await ƒS.Location.show(locations.wald);

        await ƒS.update(1);

        await ƒS.Sound.fade(sound.forest, 0.5, 4, true);

        await ƒS.Text.print("Du kommst zu einem großen Baum der mittem im Wald auf einer Lichtung steht.");

        let decision = {
            D1: "...",
            D2: "Aber ich hab mich ausgeloggt warum bin ich noch hier?"
        };

        let answer = await ƒS.Menu.getInput(decision, "class");
        switch (answer) {
            case decision.D1:
                await ƒS.Speech.tell(characters.Protagonist, decision.D1);

                break;

            case decision.D2:
                await ƒS.Speech.tell(characters.Protagonist, decision.D2);

                await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0004);

                await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0005);

                break;
        }

    }
}