import React from 'react';
import PostInput from './PostInput';

function AppView(props) {
  return (
    <div>
      <Header { ...props } />
      <Main { ...props } />
      <Footer { ...props } />
    </div>
  );
}

function Header( props ) {
  return (
    <header id="header">
      <h1>Header</h1>
    </header>
  );
}

function Main( props ) {

  const handleDelete = ( e ) => {
    props.onDeletePost ( e.target.id );
  }

  let posts = null;

  if ( props.app.posts.length > 0 ) {
    posts = props.app.posts.slice(0, 12).map(( post ) => {
      return ( 
        <li key={ post.id } id={ post.id } >
        <p><strong>{ post.userId } says :</strong> { post.title }</p>
        <p>{ post.body }</p>
        <p><a href="#" id={ post.id } onClick={ handleDelete }>Delete</a></p>
        </li>
      )
    })
  }

  return (
    <section id="main">
      <PostInput { ...props  } />
      <h2>Recent Posts</h2>
      <ul id="list">
        { posts }
      </ul>

    </section>
  );
}

function Footer( props ) {
  return (
    <footer id="footer">
    <p>{"  "}</p>
    </footer>
  );
}

export default AppView;