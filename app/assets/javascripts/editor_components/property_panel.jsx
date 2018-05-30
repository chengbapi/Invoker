class PagePropertyPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate() {
        return true;
    }
    render() {
        console.log(1)
        console.log(this.props)
        return (
            <div>
                <label>
                    Name:
                    <input defaultValue={this.props.name} name="name" type="text" onChange={(e) => {
                        model.updatePage({
                            name: e.target.value
                        });
                    }} />
                </label>
                <label>
                    Path:
                    <input defaultValue={this.props.path} name="path" type="text" onChange={(e) => {
                        model.updatePage({
                            path: e.target.value
                        });
                    }} />
                </label>
                <label>
                    是否需要登录:
                    <input defaultValue={false} name="login" type="checkbox" onChange={(e) => {
                        model.updatePage({
                            login: e.target.value
                        });
                    }} />
                </label>
            </div>
        )
    }
}



class PropertyPanel extends React.Component {
    constructor() {
        super();
    }
    render() {
        var T;
        var P;
        var c = model.currentComponent;

        var type = c.type;

        if (type == 'Page') {
            T = PagePropertyPanel;
            P = {
                key: c.id,
                name: c.name,
                path: c.path,
            }
        } else {
            T = window[type+'ComponentPropertyPanel'];
            P = c;
            P.key = c.id;
        }

        return (
            <div>
                <h5>属性</h5>
                <div className="form-horizontal">
                    {
                        React.createElement(T, P)
                    }
                </div>
            </div>
        )
    }
}
