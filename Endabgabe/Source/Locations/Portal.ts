namespace Template {
    export async function portal(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.portal);

        ƒS.Sound.fade(sound.portal, 0.5, 4, true);

        await ƒS.Character.show(characters.Blackangel, characters.Blackangel.pose.black, ƒS.positionPercent(80, 100));

        await ƒS.update(1);

        await ƒS.Text.print("Du kommst zum Portal und siehst eine Gruppe dunkler Gestalten am Portal.");

        await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.normal, getAnimation(ANIMATION.LEFTFADEIN));

        let decision = {
            D1: "Angriff.",
            D2: "Beobachten."
        };

        let answer = await ƒS.Menu.getInput(decision, "decision");
        switch (answer) {
            case decision.D1:
                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0047);

                await ƒS.Text.print("Doch es sind zu viele. Du hast keine Chance und fällst, bevor du sie überhaupt erreichst.");

                await ƒS.Speech.hide();

                await ƒS.Character.hideAll();

                await ƒS.update(1);

                ƒS.Sound.fade(sound.portal, 0, 1);

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

                        await ƒS.Text.print("Alle sind sichtlich verwirrt von deinem Angriffsgeschrei, doch es sind zu viele und es gelinkt ihnen, dich zu überwältigen.");

                        await ƒS.Speech.hide();

                        await ƒS.Character.hideAll();

                        await ƒS.update(1);

                        ƒS.Sound.fade(sound.portal, 0, 1);

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

                                        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0009);

                                        await ƒS.Text.print("Es gelingt ihm das Portal zu schließen.");

                                        await ƒS.Speech.hide();

                                        await ƒS.Character.hideAll();

                                        await ƒS.update(1);

                                        ƒS.Sound.fade(sound.portal, 0, 1);

                                        return "BadEnding";

                                    case decision.D2:

                                        await ƒS.Text.print("Du ziehst dein Schwert und bringst Blackangel zufall.");

                                        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0010);

                                        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0057);

                                        await ƒS.Speech.hide();

                                        await ƒS.Character.hideAll();

                                        await ƒS.update(1);

                                        ƒS.Sound.fade(sound.portal, 0, 1);

                                        return "GoodEnding";

                                }

                                break;

                            case decision.D2:
                                await ƒS.Text.print("Du hörst die Vasallen am Portal schreien.");

                                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0051);

                                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0052);

                                await ƒS.Speech.tell(characters.Antagonist, characters.Antagonist.text.T0000);

                                await ƒS.Speech.hide();

                                await ƒS.Character.hideAll();

                                await ƒS.update(1);

                                ƒS.Sound.fade(sound.portal, 0, 1);

                                return "BadEnding";
                        }

                        break;
                }
        }
    }
}