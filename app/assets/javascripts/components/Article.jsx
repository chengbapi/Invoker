class ArticleComponentPropertyPanel extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <label>
                    Article id:
                    <input type="text" name="article_id" defaultValue={this.props.property.article_id} onChange={(e) => {
                        model.updateComponent({
                            article_id: e.target.value
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

class ArticleComponentSkeleton extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Skeleton onClick={ this.props.onClick }>
                    <div className="article" >
                        <h4 className="title">
                            <a>Article-----TITLE</a>
                        </h4>
                        <div className="info">
                            <span className="created-time">2017.08.20</span>
                            <img width={30} height={30} src="https://avatars3.githubusercontent.com/u/1523580?v=4&s=40" />
                            猫腻<em>Pro</em>
                        </div>
                        <p className="body">这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文</p>
                    </div>
            </Skeleton>
        )
    }
}

class ArticleComponent extends React.Component {
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
                article(article_id: ${this.props.article_id}) {
                    id
                    text
                    title
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
                article: resp.data.article
            });
        })
    }
    render() {
        let c = this.state.article;

        if (c) {
            return (
                <div className="article" >
                    <h4 className="title">
                        <a>{ c.title }</a>
                    </h4>
                    <p className="text">
                        { c.text }
                    </p>
                    <div className="info">
                        <span className="created-time">{ c.updated_at }</span>
                        <img width={30} height={30} src={c.user.avatar} />
                        { c.user.name }<em>{ c.user.title }</em>
                    </div>
                    <p className="body">{ c.body }</p>
                </div>
            )
        } else {
            return null
        }
    }
}
