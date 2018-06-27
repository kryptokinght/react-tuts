

class Names extends React.Component {
    state = {
        show: false
    }

    render() {
        let list = <p>Nothing to show</p>;

        if(this.state.show)
            list = populateList(this.props.names);

        return(
            <div>
                <ul className="list-group">
                    {list}
                </ul>
                <button className="btn btn-lg btn-success" onClick={e => this.setState({show:!this.state.show})}>
                    Show
                </button>
            </div>
        );
    }
}

function populateList(names) {
    let list = [];
    names.forEach((name) => {
        list.push(<li className="list-group-item" key={name}>{name}</li>) 
    });
    return list;
}

export default Names;