import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchImage } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchImage(searchValue);
  };
  return (
    <section>
      <h1 className="logo">PhotoQuest</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="house"
        ></input>
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
