import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Time from './Time';
import './index.css';

function FileList({ files }) {

    return (
        <table className="file-list">
            <tbody>
                {
                    files.map((file) => (
                        <FileListItem key={file.id} file={file} />
                    ))
                }
            </tbody>
        </table>
    );
}
FileList.propTypes = {
    files: PropTypes.array
};

function FileListItem({file}) {
    return (
        <tr className="file-list-item">
            <td className="file-icon"><FileIcon file={file}/></td>
            <td className="file-name"><FileName file={file}/></td>
            <td className="commit-message"><CommitMessage commit={file.latestCommit} /></td>
            <td className="time"><Time time={file.updated_at} /></td>
        </tr>
    );
}
FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};

function FileName({ file }) {
    return (
        <span>{file.name}</span>
    );
}
FileName.propTypes = {
    file: PropTypes.object.isRequired
};


function FileIcon({ file }) {
    let icon = "fa-file-text-o";
    if(file.type === "folder")
        icon = "fa-folder";

    return (
            <i className={`fa ${icon}`}/>
    );
}
FileIcon.propTypes = {
    file: PropTypes.object.isRequired
};

function CommitMessage({ commit }) {
    return (
        <span>{commit.message}</span>
    );
}
CommitMessage.propTypes = {
    commit: PropTypes.object.isRequired
};




const files = [
    {
        id: 1, 
        name: "README.md",
        type: "file",
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: "Initial Commit"
        },
    },
    {
        id: 2,
        name: "src",
        type: "folder",
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: "Initial Commit"
        },
    },
]

ReactDOM.render(<FileList files={files}/>, document.getElementById('root'));