function Delete ({ students, onDelete}) {

    function handleDelete() {
        // fetch data
        fetch(`http://localhost:3000/students/${students.id}`, 
            // deletes the task
            {method: "DELETE",})
            .then((r) => {
                if (r.ok) {
                    onDelete(students.id);
                }
            });
    };

    return (
        <div>
           <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Delete;
