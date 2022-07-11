namespace Template {
    export async function introduction(): ƒS.SceneReturn {

        await ƒS.Location.show(locations.bruecke);

        ƒS.Sound.fade(sound.city, 0.2, 4, true);

        await ƒS.update(1);

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0000);

        ƒS.Sound.fade(sound.city, 0.5, 2, true);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0000);

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0001);

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0002);

        dataForSave.Protagonist.name = await ƒS.Speech.getInput();

        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0000);

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

                await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0001);

                await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0002);

                break;
        }

        await shakeyCamera();

        await ƒS.Sound.fade(sound.city, 0.05, 0.5, true);

        await erzähler.erzählerSpeaks("???", "Don't quit the game or you will die!");

        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0003);

        await erzähler.erzählerHide();

        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0004);

        decision = {
            D1: "...",
            D2: "Wie sollte das möglich sein?"
        };

        answer = await ƒS.Menu.getInput(decision, "class");
        switch (answer) {
            case decision.D1:
                await ƒS.Speech.tell(characters.Protagonist, decision.D1);

                break;

            case decision.D2:
                await ƒS.Speech.tell(characters.Protagonist, decision.D2);

                await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0005);

                decision = {
                    D1: "Ja",
                    D2: "Nein?"
                };

                answer = await ƒS.Menu.getInput(decision, "class");
                switch (answer) {
                    case decision.D1:
                        await ƒS.Speech.tell(characters.Protagonist, decision.D1);

                        break;

                    case decision.D2:
                        await ƒS.Speech.tell(characters.Protagonist, decision.D2);

                        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0006);

                        break;
                }

                break;
        }

        await shakeyCamera();

        await erzähler.erzählerSpeaks("???", "We have manipulated your VR-Headsets.");

        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0003);

        await erzähler.erzählerHide();

        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0007);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0001);

        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0008);

        //TODO: give funkgerät 
        await ƒS.Speech.tell(characters.Protagonist, "Hey, Warte, nimm das hier. So können wir in Kontakt bleiben.");

        await ƒS.Speech.clear();

        await ƒS.Text.print("Einige Zeit später...")

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0003);

        decision = {
            D1: "Ja da hast du richtig gehört.",
            D2: "Hast du uns etwa belauscht."
        };

        answer = await ƒS.Menu.getInput(decision, "class");
        switch (answer) {
            case decision.D1:
                await ƒS.Speech.tell(characters.Protagonist, decision.D1);

                break;

            case decision.D2:
                await ƒS.Speech.tell(characters.Protagonist, decision.D2);

                await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0004);

                break;
        }

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0005);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0002);

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0006);

        decision = {
            D1: "Naja gut, dann mach ich mich mal auf den Weg, danke.",
            D2: "Weist du zumindest nach was ich Ausschau halten soll?"
        };

        answer = await ƒS.Menu.getInput(decision, "class");
        switch (answer) {
            case decision.D1:
                await ƒS.Speech.tell(characters.Protagonist, decision.D1);

                break;

            case decision.D2:
                await ƒS.Speech.tell(characters.Protagonist, decision.D2);

                await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0007);

                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0003);

                break;
        }

        await ƒS.Speech.clear();

        ƒS.Sound.fade(sound.city, 0, 1);

        forest();
    }
}