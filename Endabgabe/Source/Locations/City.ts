namespace Template {
    export async function city1(): ƒS.SceneReturn {

        await ƒS.Location.show(locations.bruecke);

        ƒS.Sound.fade(sound.city, 0.5, 4, true);

        await ƒS.update(1);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0034);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0035);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0036);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0037);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0038);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0039);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0040);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0041);

        await ƒS.Speech.hide();

        ƒS.Sound.fade(sound.city, 0, 1);

        portal();
    }

    export async function city2(): ƒS.SceneReturn {

        await ƒS.Location.show(locations.bruecke);

        ƒS.Sound.fade(sound.city, 0.5, 4, true);

        await ƒS.update(1);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0042);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0043);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0044);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0045);

        await ƒS.Speech.tell(characters.Protagonist, characters.Protagonist.text.T0046);

        await ƒS.Speech.hide();

        ƒS.Sound.fade(sound.city, 0, 1);

        portal();
    }
}