class CommentsComponentPropertyPanel extends React.Component {
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
                    Show article title:
                    <input type="checkbox" name="show_article_title" checked={this.props.property.show_article_title}  onChange={(e) => {
                        model.updateComponent({
                            show_article_title: e.target.checked
                        })
                    }} />
                </label>
                <label>
                    加载:
                    <select>
                        <option>滚动加载</option>
                        <option>分页加载</option>
                    </select>
                </label>
                <label>
                    最大条数:
                    <input type="number" name="max" defaultValue={100} />
                </label>
                <label>
                    为空文案:
                    <textarea></textarea>
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

class CommentsComponentSkeleton extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Skeleton onClick={ this.props.onClick }>
            <div>
                <div className="comments">
                    { [0, 1, 2].map(() => {
                        return (
                            <div className="comment" >
                                <div className="info">
                                    <span className="created-time">2017.08.20</span>
                                    <img width={30} height={30} src="https://avatars3.githubusercontent.com/u/1523580?v=4&s=40" />
                                    猫腻<em>Pro</em>
                                </div>
                                {
                                    this.props.show_article_title ?
                                    (<h4 className="title">
                                        <a>Comment-----TITLE</a>
                                    </h4> ): null
                                }
                                <p className="body">这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文</p>
                            </div>
                        )
                    }) }

                    <div style={{ textAlign: 'center' }}>
                        点击加载更多...
                    </div>
                </div>
            </div>
            </Skeleton>
        )
    }
}

class CommentsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData()
        this.state = {
            comments: []
        }
    }
    fetchData() {
        graphql.query(
            `
            query {
                comments(article_id: "${this.props.article_id}") {
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
                comments: resp.data.comments
            });
        })
    }
    render() {
        return (
            <div>
                <div className="comments">
                    {
                        this.state.comments.length >= 1 ?
                            this.state.comments.map((c) => {
                                return (
                                <div key={c.id} className="comment" >
                                    <div className="info">
                                        <span className="created-time">{ c.updated_at }</span>
                                        <img width={30} height={30} src={c.user.avatar} />
                                        { c.user.name }<em>{ c.user.title }</em>
                                    </div>
                                    {
                                        this.props.show_article_title ?
                                            (<h4 className="title">
                                                <a>Comment-----TITLE</a>
                                            </h4>): null
                                    }
                                    <p className="body">{ c.body }</p>
                                    <a href={'/preview/' + window.activity_id + '/comment/' + c.id}>分享链接</a>
                                </div>
                                )
                            }) : '空的'

                    }
                </div>
            </div>
        )
    }
}
