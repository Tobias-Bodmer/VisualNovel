namespace Template {
    export class Erzähler {

        private static container: HTMLDivElement;

        constructor () {
            Erzähler.container = <HTMLDivElement>document.getElementById("erzähler");
        }

        public async erzählerSpeaks(_name: string, _text: string) {
            Erzähler.container.style.visibility = "visible";
            Erzähler.container.children[0].innerHTML = _name;
            Erzähler.container.children[1].innerHTML = _text;
            return true;
        }

        public async erzählerHide() {
            new Promise((resolve) => {
                document.addEventListener('click', function () {
                    Erzähler.container.style.visibility = "hidden";
                    resolve(null);
                }, { once: true });
            })
        }
    }
}