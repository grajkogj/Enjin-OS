var keys = [];

var storage = {};



function save(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
        storage[name] = value;
};

function load(name) {
        storage[name] = JSON.parse(localStorage.getItem(name));
};

function loadDefault() {
        for(i=0;i<=keys.length;i++) {
                load(keys[i]);
        };
};

