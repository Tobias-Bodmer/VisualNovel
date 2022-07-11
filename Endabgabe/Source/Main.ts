namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  export let erzähler: Erzähler;

  let gameMenu: ƒS.Menu;

  let inGameMenu = {
    save: "Save",
    load: "Load",
    close: "Close"
  };

  let menu: boolean = true;

  window.addEventListener("load", start);
  function start(_event: Event): void {
    erzähler = new Erzähler();

    ƒS.Speech.hide();

    //Menu
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
    gameMenu.close();

    let scenes: ƒS.Scenes = [
      { scene: introduction, name: "Introduction" },
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    // dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
    dataForSave.state = ƒS.Progress.setData(dataForSave.state, uiElement);
    // uiElement.setAttribute("value", "50");

    ƒS.Progress.go(scenes);
  }

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
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
      // case inGameMenu.open:
      //   gameMenu.open();
      //   menu = true;
      //   break;
    }

    // Shortcuts für's Menü
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
      switch (_event.code) {
        case ƒ.KEYBOARD_CODE.F8:
          console.log("Save");
          await ƒS.Progress.save();
          break;
        case ƒ.KEYBOARD_CODE.F9:
          console.log("Load");
          await ƒS.Progress.load();
          break;
        case ƒ.KEYBOARD_CODE.M:
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

  }
}