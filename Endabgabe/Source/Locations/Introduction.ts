namespace Template {
    export async function introduction(): ƒS.SceneReturn {

        await ƒS.Location.show(locations.bruecke);

        ƒS.Sound.fade(sound.city, 0.2, 4, true);

        await ƒS.update(4, "./Images/WackingUp.jpg", 1);

        ƒS.Sound.fade(sound.city, 0.5, 2, true);

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0000);

        await ƒS.Character.show(characters.Blackangel, characters.Blackangel.pose.normal, ƒS.positionPercent(80, 100));

        await ƒS.update(0.5);

        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(20, 100));

        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0000);

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0001);

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0002);

        dataForSave.Protagonist.name = await ƒS.Speech.getInput();

        ƒS.Inventory.add(items.Sword);
        ƒS.Inventory.add(items.CrystalBall);

        gameStarted = true;

        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0000);

        let decision = {
            D1: "...",
            D2: "Aber ich hab mich ausgeloggt warum bin ich noch hier?"
        };

        let answer = await ƒS.Menu.getInput(decision, "decision");
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

        await shakyCamera();

        await ƒS.Sound.fade(sound.city, 0.05, 0.5, true);

        await erzähler.erzählerSpeaks("???", "Don't quit the game or you will die!");

        await ƒS.Character.hide(characters.Blackangel);
        await ƒS.Character.show(characters.Blackangel, characters.Blackangel.pose.scared, ƒS.positionPercent(80, 100));
        await ƒS.update();
        await ƒS.Character.animate(characters.Blackangel, characters.Blackangel.pose.scared, getAnimation(ANIMATION.SCARED));

        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0003);

        await erzähler.erzählerHide();

        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0004);

        decision = {
            D1: "...",
            D2: "Wie sollte das möglich sein?"
        };

        answer = await ƒS.Menu.getInput(decision, "decision");

        await ƒS.Character.animate(characters.Blackangel, characters.Blackangel.pose.scared, getAnimation(ANIMATION.UNSCARED));
        await ƒS.Character.hide(characters.Blackangel);
        await ƒS.Character.show(characters.Blackangel, characters.Blackangel.pose.normal, ƒS.positionPercent(80, 100));
        await ƒS.update();

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

                answer = await ƒS.Menu.getInput(decision, "decision");
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

        await shakyCamera();

        await erzähler.erzählerSpeaks("???", "We have manipulated your VR-Headsets.");

        await ƒS.Character.hide(characters.Blackangel);
        await ƒS.Character.show(characters.Blackangel, characters.Blackangel.pose.scared, ƒS.positionPercent(80, 100));
        await ƒS.update();
        await ƒS.Character.animate(characters.Blackangel, characters.Blackangel.pose.scared, getAnimation(ANIMATION.SCARED));

        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0003);

        await erzähler.erzählerHide();

        await ƒS.Character.animate(characters.Blackangel, characters.Blackangel.pose.scared, getAnimation(ANIMATION.UNSCARED));
        await ƒS.Character.hide(characters.Blackangel);
        await ƒS.Character.show(characters.Blackangel, characters.Blackangel.pose.normal, ƒS.positionPercent(80, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0007);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0001);

        await ƒS.Speech.tell(characters.Blackangel, characters.Blackangel.text.T0008);

        await ƒS.Speech.tell(characters.Protagonist, "Hey, Warte, nimm das hier. So können wir in Kontakt bleiben.");

        await ƒS.Text.print("Du hast eine Kristallkugel abgegeben.")

        await ƒS.Speech.hide();

        await ƒS.Character.hideAll();

        await ƒS.update(1.5);

        await ƒS.Text.print("Einige Zeit später...")

        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(20, 100));

        await ƒS.update(0.5);

        await ƒS.Character.animate(characters.Unknown, characters.Unknown.pose.normal, getAnimation(ANIMATION.RIGHTFADEIN));

        await ƒS.Speech.tell(characters.Unknown, characters.Unknown.text.T0003);

        decision = {
            D1: "Ja da hast du richtig gehört.",
            D2: "Hast du uns etwa belauscht."
        };

        answer = await ƒS.Menu.getInput(decision, "decision");
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

        answer = await ƒS.Menu.getInput(decision, "decision");
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

        await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.normal, getAnimation(ANIMATION.LEFTFADEOUT));

        await ƒS.Character.hideAll();

        await ƒS.update(1);

        await ƒS.Speech.hide();

        ƒS.Sound.fade(sound.city, 0, 1);
    }
}