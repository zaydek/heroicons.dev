import * as React from "react";

function FolderAddIcon(props) {
  // return <svg viewBox="0 0 20 20" fill="currentColor" {...props}><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" /><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11h4m-2-2v4" /></svg>;
  return <svg viewBox="0 0 20 20" fill="currentColor" {...props}><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1H8a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1V9z" clipRule="evenodd" /></svg>;
}

export default FolderAddIcon;
