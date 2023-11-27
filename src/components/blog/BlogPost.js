import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function BlogPost({ authed }) {
    const [blog, setBlog] = useState();
    const [comments, setComments] = useState();
    const [commentText, setCommentText] = useState();
    const [commentAuthor, setCommentAuthor] = useState();
    const [errors, setErrors] = useState([]);
    const idParams = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const abortCont = new AbortController();

        (async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/blog/${idParams.id}`, {
                    mode: 'cors',
                    signal: abortCont.signal
                });
                const parsed = await response.json();
                setBlog(parsed.blog);
                setComments(parsed.comments);
            } catch (err) {
                if (!err.name === 'AbortError') {
                    console.log(err);
                }
            }
        })();

        return () => abortCont.abort();
    }, []);

    async function handleCommentSubmit() {
        try {
            const response = await fetch(`http://localhost:3000/api/blog/${idParams.id}/comment`, {
                mode: 'cors',
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: commentAuthor ? commentAuthor : 'Anonymous',
                    comment: commentText,
                    blog: idParams.id,
                    date: new Date()
                })
            });
            if (response.status === 200 || response.status === 403) {
                navigate(0);
            } else {
                const parsed = await response.json();
                if (parsed.errors?.length > 0) {
                    setErrors(parsed.errors);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    if (blog) {
        return <main className='blog-post-container'>
            { authed ? <div className='blog-link-container'>
                <Link to='./edit' state={ blog }>Edit post?</Link>
            </div> : null }
            <h1>{blog.title}</h1>
            <p>{blog.blogBody}</p>
            <div className='comment-container'>
                <strong>Comments:</strong>
                {comments.map(comment => {
                    return <div key={comment._id} className='comment-box'>
                        <div className='comment-header'>
                            <p>{comment.username}</p>
                            <p>{new Date(comment.date).toLocaleDateString()}</p>
                        </div>
                        <div>{comment.comment}</div>
                    </div>;
                })}
                <form className='post-comment-form'>
                    <label htmlFor='author'>Author:</label>
                    <input type='text' onChange={e => setCommentAuthor(e.target.value)} placeholder='Optional, max characters: 15' />
                    <label htmlFor='comment'>Comment:</label>
                    <input type='text' onChange={e => setCommentText(e.target.value)} placeholder='Required, max characters: 1000' />
                    <button type='button' onClick={handleCommentSubmit}>Submit comment</button>
                </form>
                <ul>
                    {errors.map(error => {
                        return <li className='error-text' key={error.msg}>{error.msg}</li>;
                    })}
                </ul>
            </div>
        </main>;
    }
}