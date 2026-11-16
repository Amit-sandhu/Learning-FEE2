import React, { useEffect, useState, useRef, useCallback } from 'react';

const InfiniteScrolling = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(null);
    const observerTarget = useRef(null);
    const limit = 10;

    const fetchUsers = useCallback(async () => {
        if (loading || !hasMore) return;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${(page - 1) * limit}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.users.length === 0) {
                setHasMore(false);
                return;
            }

            setUsers(prev => [...prev, ...data.users]);

            if (data.users.length < limit) {
                setHasMore(false);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [page, limit, loading, hasMore]);

    // Fetch users when page changes
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    // Intersection Observer for infinite scrolling
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    setPage(prev => prev + 1);
                }
            },
            { threshold: 0.1 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [hasMore, loading]);

    return (
        <div className="infinite-scroll-container">
            <h1>Infinite Scrolling</h1>

            {error && <p className="error">Error: {error}</p>}

            <ol className="users-list">
                {users.map((u) => (
                    <li key={u.id} className="user-item">
                        {u.firstName} {u.lastName}
                    </li>
                ))}
            </ol>

            {hasMore && (
                <div ref={observerTarget} className="load-more-trigger">
                    {loading ? <p className="loading">Loading more users...</p> : null}
                </div>
            )}

            {!hasMore && users.length > 0 && (
                <p className="end-message">No more users to load</p>
            )}
        </div>
    );
};

export default InfiniteScrolling;