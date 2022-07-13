namespace Template {
    export async function portal(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.portal);

        ƒS.Sound.fade(sound.portal, 0.5, 4, true);

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
                await ƒS.Text.print("Doch es sind zu viele. Du hast keine Chance und fällst, bevor du sie überhaupt erreichst.");

                return "BadEnding";

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
                        await ƒS.Text.print("Alle sind sichtlich verwirrt von deinem Angriffsgeschrei, doch es sind zu viele und es gelinkt ihnen, dich zu überwältigen.");

                        return "BadEnding";

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
                                        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0009);

                                        await ƒS.Text.print("Es gelingt ihm das Portal zu schließen.");

                                        return "BadEnding";

                                    case decision.D2:

                                        //TODO: Spieler gewinnt....
                                        await ƒS.Text.print("Du ziehst dein Schwert und bringst Blackangel zufall.");

                                        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0010);

                                        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0057);

                                        return "GoodEnding";

                                }

                                break;
                        }

                        break;
                }

                await ƒS.Speech.hide();

                ƒS.Sound.fade(sound.portal, 0, 1);
        }
    }
}