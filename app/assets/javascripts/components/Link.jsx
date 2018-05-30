class LinkComponentPropertyPanel extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <label>
                    Link:
                    <input defaultValue={this.props.property.text} name="text" type="text" onChange={(event) => {
                        model.updateComponent({
                            text: event.target.value
                        })
                    }} />
                </label>

                <label>
                    Href:
                    <input defaultValue={this.props.property.href} name="text" type="text" onChange={(event) => {
                        model.updateComponent({
                            href: event.target.value
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

class LinkComponentSkeleton extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Skeleton onClick={ this.props.onClick }>
                <a href={ this.props.href } className="link" style={ JSON.parse(this.props.style || '{}') }>
                    { this.props.text }
                </a>
            </Skeleton>
        )
    }
}

class LinkComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="link">
                <a href={ '/preview/' + window.activity_id + this.props.href } className="text" style={ JSON.parse(this.props.style || '{}') }>
                    { this.props.text }
                </a>
            </div>
        )
    }
}
