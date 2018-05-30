
class ComponentsPanel extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div style={{ borderTop: '1px solid #999', marginTop: '50px' }}>
                <h5>组件</h5>
                {
                    [
                        'Text',
                        'Link',
                        'Image',

                        '',

                        'Comment',
                        'Comments',
                        'NewComment',

                        '',

                        'Article',
                        'Articles',
                        'NewArticle',
                    ].map((type) => {
                        if (type == '') {
                            return (<hr/>);
                        }

                        return (
                            <div className="componentBtn" key={type} onClick={() => {
                                model.addComponent({
                                    type: type,
                                    property: '',
                                })
                            }}>
                                { type }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
