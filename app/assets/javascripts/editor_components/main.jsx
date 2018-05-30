class Main extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="mid" style={{
                flex: 1,
                borderLeft: '1px solid #999',
                borderRight: '1px solid #999',
            }}>
                <div className="actions">
                    <a href={ '/preview/' + model.activity.id } target="_blank" className="btn btn-link">Preview</a>
                    <label htmlFor="submit" className="btn btn-primary">Save</label>
                    <a className="btn btn-info">Submit</a>
                </div>

                <div style={{
                    width: 375,
                    height: 667,
                    margin: '30px auto',
                    background: '#fff',
                    border: '1px solid #999',
                }}>


                    { model.currentPage.components.map((c, i) => {
                        c.property.key = i;
                        c.property.onClick = () => {
                            model.setCurrentComponent(c);
                        };
                        return React.createElement(window[c.type + 'ComponentSkeleton'], c.property);
                    }) }

                </div>
            </div>
        )
    }
}

