import React from 'react';

function PostInput ( props ) {

    const updateData = ( e ) => {
        props.onUpdateData( { Path: e.target.id, Value: e.target.value });
    }

    const handleSubmit = () => {
        let postObj = Object.assign({}, {
            title: props.draft.postTitle,
            body: props.draft.postBody,
            userId: '1'
        });

        props.onCreatePost( postObj );
    }

    return (
        <div id="post-input" >
            <hr />
            <p><strong>Add a post</strong></p>
            <input type="text" id="postTitle" onChange={ updateData } value={ props.draft.postTitle } placeholder="Title" />
            <input type="text" id="postBody" onChange={ updateData } value={ props.draft.postBody } placeholder="Body" />
            <button type="button" onClick={ handleSubmit } >Add</button>
            <hr />

        </div>

    )
}


export default PostInput;