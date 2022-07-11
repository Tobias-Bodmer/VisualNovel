namespace Template {
    export async function portal(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.portal);

        //TODO: Sound
        ƒS.Sound.fade(sound.city, 0.5, 4, true);

        await ƒS.update(1);

        await ƒS.Text.print("Du kommst zum Portal und siehst eine Gruppe dunkler Gestalten am Portal.");

        let decision = {
            D1: "Angriff.",
            D2: "Beobachten."
        };

        let answer = await ƒS.Menu.getInput(decision, "decision");
        switch (answer) {
            case decision.D1:
                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0047);

                //TODO: Tod da zu viel gegner.                

                break;

            case decision.D2:
                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0048);

                decision = {
                    D1: "Angriff.",
                    D2: "Beobachten."
                };

                let answer = await ƒS.Menu.getInput(decision, "decision");
                switch (answer) {
                    case decision.D1:
                        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0047);

                        //TODO: Tod da zu viel gegner aber jetzt verwirrung anfangs.                

                        break;

                    case decision.D2:
                        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0015);

                        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0049);

                        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0050);

                        decision = {
                            D1: "Angriff.",
                            D2: "Beobachten."
                        };

                        let answer = await ƒS.Menu.getInput(decision, "decision");
                        switch (answer) {
                            case decision.D1:
                                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0047);

                                await ƒS.Text.print("Eine Gruppe stürmt aus den Büschen.");

                                if (dataForSave.Glade) {
                                    await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0053);
                                }

                                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0054);

                                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0055);

                                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0056);

                                decision = {
                                    D1: "Abwarten.",
                                    D2: "Schwert ziehen und zuschlagen."
                                };

                                let answer = await ƒS.Menu.getInput(decision, "decision");
                                switch (answer) {
                                    case decision.D1:

                                        //TODO: Spieler stirbt Böses Gewinnt für immer gefangen...


                                        break;

                                    case decision.D2:
                                        await ƒS.Speech.tell(characters.Mass, characters.Mass.text.T0000);

                                        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0051);

                                        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0052);

                                        await ƒS.Speech.tell(characters.Antagonist, characters.Antagonist.text.T0000);

                                        //TODO: Böses Gewinnt für immer gefangen...

                                        break;


                                    case decision.D2:
                                        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0009);

                                        //TODO: Spieler gewinnt....

                                        break;
                                }

                                break;
                        }

                        break;
                }

                await ƒS.Speech.hide();

                //TODO: Sound
                ƒS.Sound.fade(sound.city, 0, 1);
        }
    }
}