function Student(props) {
  return (
    <div className="px-4 py-2.5 border border-gray-200 rounded-lg">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>{props.isStudent ? "Student" : "Not Student"}</p>
    </div>
  );
}

export default Student;
