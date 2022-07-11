namespace Template {
    export async function forest(): ƒS.SceneReturn {

        await ƒS.Location.show(locations.wald);

        ƒS.Sound.fade(sound.forest, 0.5, 4, true);

        await ƒS.update(1);

        await ƒS.Text.print("Du kommst zu einem großen Baum der mittem im Wald auf einer Lichtung steht.");

        await searchTreeOrArea(0);

        async function searchTreeOrArea(_countD1: number) {
            let decision = {
                D1: "Umgebung untersuchen.",
                D2: "Baum untersuchen."
            };

            let answer = await ƒS.Menu.getInput(decision, "class");
            switch (answer) {
                case decision.D1:
                    let random: number = Math.round(Math.random());
                    if (_countD1 < 5) {
                        if (random < 1) {
                            await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0004);
                        } else {
                            await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0005);
                        }
                    } else {
                        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0006);
                    }
                    _countD1++;
                    await searchTreeOrArea(_countD1);
                    break;

                case decision.D2:
                    return;
            }
        }

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0007);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0008);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0009);

        await ƒS.Text.print("Im Baum ist ein Symbol einer Gilde eingeritzt");

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0010);

        await searchHole(0);

        async function searchHole(_countD1: number) {
            let decision = {
                D1: "Nicht ins Loch greifen.",
                D2: "Ins Loch greifen."
            };

            let answer = await ƒS.Menu.getInput(decision, "class");
            switch (answer) {
                case decision.D1:
                    let random: number = Math.round(Math.random());
                    if (_countD1 < 5) {
                        if (random < 1) {
                            await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0011);
                        } else {
                            await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0012);
                        }
                    } else {
                        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0013);
                    }
                    _countD1++;
                    await searchHole(_countD1);
                    break;

                case decision.D2:
                    return;
            }
        }

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0014);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0015);

        await ƒS.Text.print("Du ziehst ein Buch mit Ledereinband aus dem Loch.");

        await ƒS.Text.print("Das Buch trägt das selbe Symbol wie das auf dem Baum.");

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0016);

        await readBook();

        async function readBook() {
            let decision = {
                D1: "Nicht lesen.",
                D2: "Lesen."
            };

            let answer = await ƒS.Menu.getInput(decision, "class");
            switch (answer) {
                case decision.D1:
                    let random: number = Math.round(Math.random());
                    if (random < 1) {
                        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0017);
                    } else {
                        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0018);
                    }
                    await readBook();
                    break;

                case decision.D2:
                    return;
            }
        }

        shakeyCamera();

        await ƒS.Text.print("Ein Busch ganz in der Nähe bewegt sich.");

        let decision = {
            D1: "Nachschauen.",
            D2: "Ignorieren."
        };

        let answer = await ƒS.Menu.getInput(decision, "class");

        switch (answer) {
            case decision.D1:
                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0019);

                //TODO: Kristallkugel
                await ƒS.Text.print("Du hast ein Kristallkugel gefunden.");

                await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0008);

                await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0009);

                let decision2 = {
                    D1: "Lauschen.",
                    D2: "Antworten."
                };

                let answer = await ƒS.Menu.getInput(decision, "class");

                switch (answer) {
                    case decision2.D2:
                        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0020);

                        return;
                }

                await ƒS.Speech.tell(characters.Unknown, "...");

                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0021);


                await ƒS.Speech.clear();

                //TODO: Sound
                ƒS.Sound.fade(sound.city, 0, 1);

                city1();
                break;

            case decision.D2:
                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0022);

                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0023);

                await erzähler.erzählerSpeaks("???", "Treffpunkt Heute Nacht bei der Lichtung beim Fluss.");

                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0024);

                await erzähler.erzählerHide();

                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0025);


                await ƒS.Speech.clear();

                //TODO: Sound
                ƒS.Sound.fade(sound.city, 0, 1);

                glade();

                return;
        }
    }
}