import React from 'react'

export default function todoListItem({todo, inprogress, id}) {
    return (
        <div>
            <p>{todo}</p>
        </div>
    );
}


