class CommentComponentPropertyPanel extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <label>
                    Comment id:
                    <input type="text" name="comment_id" defaultValue={this.props.property.comment_id} onChange={(e) => {
                        model.updateComponent({
                            comment_id: e.target.value
                        })
                    }} />
                </label>
                <label>
                    样式
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
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

class CommentComponentSkeleton extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Skeleton onClick={ this.props.onClick }>
                    <div className="comment" >
                        <div className="info">
                            <span className="created-time">2017.08.20</span>
                            <img width={30} height={30} src="https://avatars3.githubusercontent.com/u/1523580?v=4&s=40" />
                            猫腻<em>Pro</em>
                        </div>
                        <h4 className="title">
                            <a>Comment-----TITLE</a>
                        </h4>
                        <p className="body">这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文</p>
                    </div>
            </Skeleton>
        )
    }
}

class CommentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData()
        this.state = {
            comment: null
        }
    }
    fetchData() {
        graphql.query(
            `
            query {
                comment(comment_id: ${this.props.comment_id}) {
                    id
                    body
                    updated_at
                    user {
                        id
                        name
                        title
                        avatar
                    }
                }
            }
            `
        ).done((resp) => {
            this.setState({
                comment: resp.data.comment
            });
        })
    }
    render() {
        let c = this.state.comment;

        if (c) {
            return (
                <div className="comment" >
                    <div className="info">
                        <span className="created-time">{ c.updated_at }</span>
                        <img width={30} height={30} src={c.user.avatar} />
                        { c.user.name }<em>{ c.user.title }</em>
                    </div>
                    <h4 className="title">
                        <a>Comment-----TITLE</a>
                    </h4>
                    <p className="body">{ c.body }</p>
                </div>
            )
        } else {
            return null
        }
    }
}
