namespace Template {
    export async function goodEnding(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.black);

        ƒS.Sound.fade(sound.ending, 0.5, 4, true);

        ƒS.Speech.hide();

        await ƒS.update(1);

        await ƒS.Text.print("Du hast es geschafft, das Böse ist besiegt und die Spieler haben ihre Freiheit zurück.");

        await ƒS.Text.print("Du hattest keine andere Wahl, als ihn zu töten, um die Spieler zu befreien.");

        return "Credits";
    }
    export async function badEnding(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.black);

        ƒS.Sound.fade(sound.ending, 0.5, 4, true);

        ƒS.Speech.hide();

        await ƒS.update(1);

        await ƒS.Text.print("Blackangel ist es gelungen, seinen bösen Plan in die Tat umzusetzen.");

        await ƒS.Text.print("Du hast dein Bestes gegeben.");

        return "Credits";
    }
    export async function credits(): ƒS.SceneReturn {
        let pages: string =
            "<h1>The End</h1> \
            <h2>Thanks For Playing</h2> \
            <h3>A Visual Novel Made By Tobias Bodmer</h3> \
            <p>If You Wanna See Blackangels Way, Play The Visual Novel <br/><br/> Made By Nikola Gorgiev</p> \
            <h2>Copyrights</h2> \
            <p>Story: Tobias Bodmer</p> \
            <p>Backgrounds: Amazon Game Studios New World</p> \
            <p>Character Visual Design: Nikola Gorgiev</p>";
        ƒS.Text.setClass("credits");
        ƒS.Text.print(pages);
    }
}