class Model {
    constructor(obj) {
        this.activity = new Activity(obj.activity);

        if (this.activity.pages.length == 0) {
            this.addPage({
                name: 'Index',
                path: '/',
            });
        }

        this.currentPage = this.activity.pages[0];
        this.currentComponent = this.activity.pages[0];
        console.log(this)
    }
    onChange(cb) {
        this.cb = cb;
    }
    change() {
        this.cb && this.cb();

        this.updateForm();
    }
    setCurrentPage(p) {
        this.currentPage = p;
        this.currentComponent = p;

        this.change();
    }
    addPage(page) {
        var p = new Page(page);
        this.activity.pages.push(p);

        this.change();
    }
    removePage(page) {
        var i = this.pages.indexOf(page);
        this.pages.splice(i, 1);

        this.change();
    }
    updatePage(property) {
        var c = this.currentPage;
        Object.assign(c, property);
        this.change();
    }

    setCurrentComponent(c) {
        this.currentComponent = c;

        this.change();
    }
    addComponent(component) {
        var c = new Component(component);

        this.currentPage.components.push(c);
        this.change();
    }
    updateComponent(property) {
        var c = this.currentComponent;
        Object.assign(c.property, property);
        this.change();
    }
    removeComponent(cid) {
        var components = this.currentPage.components;
        var index = components.findIndex((c) => { return c.id == cid; });

        components.splice(index, 1);

        this.change();
    }
    updateForm() {
        $('#activity_name').val(this.activity.name);
        $('#activity_pages').val(JSON.stringify(this.activity.pages));
        $('#activity_setting').val(JSON.stringify(this.activity.settings));
    }
}
class Activity {
    constructor(obj) {
        console.log(obj);
        this.id = obj.id || '';
        this.name = obj.name || '';
        this.pages = obj.pages || [];
    }
}

class Page {
    constructor(obj) {
        this.type = 'Page';
        this.name = obj.name || '';
        this.path = obj.path || '/';
        this.components = obj.components || [];
        this.setting = obj.setting || { login: false };
    }
}

class Component {
    constructor(obj) {
        // this.name = obj.name || '';
        this.id = obj.id || uuid();
        this.type = obj.type || '';
        this.property = Object.assign({}, obj.property || DEFAULT_PROPERTY[obj.type] || {});
    }
}

function uuid() {
    function b(a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[108]/g,b)}
    return b();
}

const DEFAULT_PROPERTY = {
    'Text': {
        text: '替换为你想要的文字'
    },
    'Link': {
        text: '替换为你想要的文字',
        href: '/'
    },
    'Comment': {
        comment_id: ''
    },
    'Article': {
        article_id: ''
    },
    'Comments': {
        article_id: '',
        show_article_title: false
    },
}
