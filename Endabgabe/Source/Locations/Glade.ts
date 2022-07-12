namespace Template {
    export async function glade(): ƒS.SceneReturn {

        dataForSave.Glade = true;

        await ƒS.Location.show(locations.waldNacht);

        ƒS.Sound.fade(sound.forestNight, 0.5, 4, true);

        await ƒS.update(1);

        await ƒS.Text.print("Du kommst bei der Lichtung des Buches an.");

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0026);

        await shakeyCamera();

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0027);

        let decision = {
            D1: "Abwarten.",
            D2: "Verstecken."
        };

        let answer = await ƒS.Menu.getInput(decision, "decision");
        switch (answer) {
            case decision.D1:
                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0028);

                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0029);

                break;

            case decision.D2:
                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0030);

                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0031);

                break;
        }

        await ƒS.Text.print("Einige Zeit später.");

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0032);

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0010);

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0011);

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0012);

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0013);

        await ƒS.Speech.tell("Ein anderer", "Wir müssen sie aufhalten.");

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0014);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0033);

        await ƒS.Speech.hide();

        ƒS.Sound.fade(sound.forestNight, 0, 1);

        return "City2";
    }
}