class LeftPanel extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="left-panel"
                 style={{
                     width: 250,
                     background: '#eee',
                 }}
            >
                <h4 style={{borderBottom: '1px solid #999'}}>数据</h4>
                <a href="/admins">数据中心</a>
                <h4 style={{borderBottom: '1px solid #999', marginTop: 50}}>页面</h4>
            { model.activity.pages.map((p, i) => {
                return (
                <a
                    onClick={() => {
                        model.setCurrentPage(p)
                    }}
                    className="page"
                    key={i}
                    style={{
                        color: model.currentPage == p ? '#222' : '',
                    }}
                >
                    <h5>
                        { p.name }
                        <div style={{ fontSize: 14 }}>{ p.path }</div>
                    </h5>
                </a>
            );
    }) }

    <a
        className="btn btn-block"
        style={{marginTop: 100}}
        onClick={() => {
            var name, path;
            if (name = prompt('Name')) {
                if (path = prompt('Path')) {
                    model.addPage({
                        name: name,
                        path: path,
                    })
                }
            }
        }}>New Page</a>
        </div>
    )
    }
}
