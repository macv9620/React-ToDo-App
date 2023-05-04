import "./TodoSearch.css";

function TodoSearch({ searchBarValue, setSearchBarValue }) {
  const onChangeSearchValue = (event) => {
    setSearchBarValue(event.target.value);
  };

  return (
    <input
      className="TodoSearchBar"
      placeholder="Search ToDo"
      value={searchBarValue}
      onChange={onChangeSearchValue}
    />
  );
}

export { TodoSearch };
