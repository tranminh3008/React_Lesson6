import React from 'react';

const Student = (props) => {
    const { student } = props;
    return (
        <div>
            <h1>Name: {student.name}</h1>
            <p>Age: {student.age}</p>
        </div>
    );
}

export default Student;
