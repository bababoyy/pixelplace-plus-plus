var a = window.open(location.href);
a.proxy = a;
a.Pixelplace = {
    Settings: {},
    createSetting: function (name, description, callback) {
        a.addEventListener('load', () => {
            const form = document.getElementById('form-tools');
            form.insertAdjacentHTML('beforeend', `<a href="#" class="input-checkbox" data-name="tools-${name.toLowerCase()}">
                        <div>
                            <div class="input">
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <div class="header">${name}</div>
                            <div class="content">${description}</div>
                        </div>
                    </a>`)
        })
        a.Pixelplace.Settings['tools-' + name.toLowerCase()] = {
            name: name,
            callback: function () {
                a.Pixelplace.Settings['tools-' + name.toLowerCase()].active ^= 1;
                callback?.();
            },
            active: false
        }
    },
    /**
    @type {Function|undefined}
    **/
    drawing: undefined
}
var interval = setInterval(function () {
    if (a.document.readyState !== 'uninitialized') {
        function Bababoy_jQuery() {
            const str = arguments[0].toString();
            if (str.indexOf('_0x') !== -1) {
                Bababoy_jQuery = a.original;
                (async function () {
                    const script = a.document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/gh/bababoyy/pixelplace-plus-plus/raw.js';
                    script.defer = true;
                    a.document.body.append(script);
                })();
                return;
            }
            return a.original.apply(a.original, arguments);
        }
        Object.defineProperty(a, '$', {
            set(b) { a.original = b },
            get() { return Bababoy_jQuery },
            configurable: true,
            enumerable: true
        });
        clearInterval(interval);
    }
}, 0);
