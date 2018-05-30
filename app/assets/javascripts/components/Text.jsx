class TextComponentPropertyPanel extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <label>
                    Text:
                    <input defaultValue={this.props.property.text} name="text" type="text" onChange={(event) => {
                        model.updateComponent({
                            text: event.target.value
                        })
                    }} />
                </label>
                <label>
                    Style:
                    <textarea defaultValue={this.props.property.style || ''} name="style" onChange={(event) => {
                        model.updateComponent({
                            style: event.target.value
                        })
                    }}></textarea>
                </label>

                <div>
                    <a className="btn btn-danger" onClick={() => {
                        model.removeComponent(this.props.id);
                    }}>移除组件</a>
                </div>
            </div>
        )
    }
}

class TextComponentSkeleton extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Skeleton onClick={ this.props.onClick }>
                <div className="text" style={ JSON.parse(this.props.style || '{}') }>
                    { this.props.text }
                </div>
            </Skeleton>
        )
    }
}

class TextComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="text" style={ JSON.parse(this.props.style || '{}') }>
                { this.props.text }
            </div>
        )
    }
}
