namespace Template {
    export async function glade(): ƒS.SceneReturn {

        dataForSave.Glade = true;

        ƒS.Sound.fade(sound.forestNight, 0.5, 4, true);
        
        await ƒS.Location.show(locations.waldNacht);
        await ƒS.update(2, "./Images/wet.jpg", 1);

        await ƒS.Character.show(characters.Bush, characters.Bush.pose.normal, ƒS.positionPercent(80, 100));
        await ƒS.update();

        await ƒS.Text.print("Du kommst bei der Lichtung des Buches an.");

        await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.normal, getAnimation(ANIMATION.LEFTFADEIN));

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0026);

        ƒS.Sound.fade(sound.bush, 0.5, 0, false);
        await shakyCamera();

        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.scared, ƒS.positionPercent(20, 100));
        await ƒS.update();
        await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.scared, getAnimation(ANIMATION.SCARED));

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

                await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.scared, getAnimation(ANIMATION.UNSCARED));
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(20, 100));
                await ƒS.update();

                await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.normal, getAnimation(ANIMATION.HIDE));

                break;

            case decision.D2:
                await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.scared, getAnimation(ANIMATION.UNSCARED));
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(20, 100));
                await ƒS.update();

                await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.normal, getAnimation(ANIMATION.HIDE));

                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0030);

                await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0031);

                break;
        }

        await ƒS.Text.print("Einige Zeit später.");

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0032);

        await ƒS.Character.animate(characters.Unknown, characters.Unknown.pose.black, getAnimation(ANIMATION.CENTERFADEIN));

        await ƒS.Character.animate(characters.AnotherOne, characters.AnotherOne.pose.normal, getAnimation(ANIMATION.LEFTFADEIN));

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0010);

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0011);

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0012);

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0013);

        await ƒS.Speech.tell(characters.AnotherOne.name, characters.AnotherOne.text.T0000);

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0014);

        ƒS.Character.animate(characters.Unknown, characters.Unknown.pose.black, getAnimation(ANIMATION.CENTERFADEOUTLEFT));

        await ƒS.Character.animate(characters.AnotherOne, characters.AnotherOne.pose.normal, getAnimation(ANIMATION.LEFTFADEOUT));

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0033);

        await ƒS.Speech.hide();

        await ƒS.Character.hideAll();

        await ƒS.update(1);

        ƒS.Sound.fade(sound.forestNight, 0, 1);

        return "City2";
    }
}