import Student from "./Student.jsx";
function App() {
  return (
    <main className="flex flex-col gap-4">
      <Student name="Bartek" age={19} isStudent={true} />
      <Student name="Michael Scofield" age={38} isStudent={false} />
      <Student age={38} isStudent={false} />
    </main>
  );
}

export default App;
