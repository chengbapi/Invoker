class Skeleton extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
        <div className="skeleton" onClick={this.props.onClick}>
            <div>
                { this.props.children}
            </div>
            <div className="skeleton-modal"></div>
        </div>
        )
    }
}
