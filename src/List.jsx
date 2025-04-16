function List() {
  const fruits = [
    { name: "pear", calories: 150 },
    { name: "banana", calories: 100 },
    { name: "blueberry", calories: 200 },
  ];

  fruits.sort((a, b) => a.name.localeCompare(b.name));

  const listItems = fruits.map((fruit) => (
    <li key={fruit.name}>
      {fruit.name}: {fruit.calories}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default List;
