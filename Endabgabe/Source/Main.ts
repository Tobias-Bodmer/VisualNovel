namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  export let erzähler: Erzähler;
  export let gameStarted: boolean = false;

  let gameMenu: ƒS.Menu;

  let inGameMenu = {
    soundUp: "+",
    soundDown: "-",
    save: "Save",
    load: "Load",
    close: "Close"
  };

  let menu: boolean = false;
  let masterSound: number = 1;

  window.addEventListener("load", start);
  function start(_event: Event): void {
    erzähler = new Erzähler();

    ƒS.Speech.hide();

    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
    gameMenu.close();

    let scenes: ƒS.Scenes = [
      { scene: introduction, name: "Introduction", id: "Introduction" },
      { scene: forest, name: "Fosrest", id: "Forest" },
      { scene: glade, name: "Glade", id: "Glade" },
      { scene: city1, name: "City1", id: "City1" },
      { scene: city2, name: "City2", id: "City2" },
      { scene: portal, name: "Portal", id: "Portal" },
      { scene: goodEnding, name: "GoodEnding", id: "GoodEnding" },
      { scene: badEnding, name: "BadEnding", id: "BadEnding" },
      { scene: credits, name: "Credits", id: "Credits" }
    ];

    ƒS.Progress.go(scenes);
  }

  document.addEventListener("keydown", hndKeyPress);
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.I:
        if (gameStarted) {
          ƒS.Inventory.open();
        }
        break;
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.ESC:
        if (menu) {
          console.log("Close");
          gameMenu.close();
          menu = false;
        }
        else {
          console.log("Open");
          gameMenu.open();
          menu = true;
        }
        break;
    }
  }

  async function buttonFunctionalities(_option: string): Promise<void> {
    switch (_option) {
      case inGameMenu.soundUp:
        masterSound += 0.2;
        if (masterSound > 1) masterSound = 1;
        ƒS.Sound.setMasterVolume(masterSound);
        break;
      case inGameMenu.soundDown:
        masterSound -= 0.2;
        if (masterSound < 0) masterSound = 0;
        ƒS.Sound.setMasterVolume(masterSound);
        break;
      case inGameMenu.save:
        await ƒS.Progress.save();
        break;
      case inGameMenu.load:
        await ƒS.Progress.load();
        break;
      case inGameMenu.close:
        gameMenu.close();
        menu = false;
        break;
    }
  }
}