class NewCommentComponentPropertyPanel extends React.Component {
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
                <div>
                    <a className="btn btn-danger" onClick={() => {
                        model.removeComponent(this.props.id);
                    }}>移除组件</a>
                </div>
            </div>
        )
    }
}

class NewCommentComponentSkeleton extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Skeleton onClick={ this.props.onClick }>
                <div className="new-comment-form">
                    <textarea></textarea>
                    <button className="btn btn-block btn-primary">发送</button>
                </div>
            </Skeleton>
        )
    }
}

class NewCommentComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(this);
    }
    submit() {
        // console.log(this.props);
        let user_id = Math.ceil(Math.random()*3);
        let body = this.body.value;
        graphql.query(
            `
            mutation {
                createComment(input: { 
                    user_id: ${user_id}, 
                    article_id: ${this.props.article_id},
                    body: "${body}"}
                    ) {
                    comment {
                        id
                        body
                        user {
                            id
                            avatar
                            name
                            title
                        }
                    }
                }
            }
            `
        ).done((resp) => {
            console.log(resp)
            if (!resp.errors) {
                alert('发布成功')
                location.href = '/preview/' + window.activity_id + '/article/' + this.props.article_id;
            } else {
                alert('失败: ' + resp.errors[0].message)
            }

            // this.setState({
            //     comment: resp.data.comment
            // });
        })
    }
    render() {
        return (
                <div className="new-comment-form">
                    <textarea ref={(ref) => this.body = ref}></textarea>
                    <button onClick={ () => { this.submit() } } className="btn btn-block btn-primary">发送</button>
                </div>
        )
    }
}
