const Search = () => {
  return (
    <form>
      <label htmlFor="search">
        <input type="text" name="search" id="search" placeholder="Artist or album.." />
      </label>
      <button type="button">
        Search
      </button>
    </form>
  )
}

export default Search;