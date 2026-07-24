function SearchBar({ search, setSearch }) {
  return (
    <label className="search-bar">
      <span>Search</span>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </label>
  );
}

export default SearchBar;
