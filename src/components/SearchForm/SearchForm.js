import React, { useState } from "react";
import s from "./SearchForm.module.css";
import { toast } from "react-toastify";

function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChangeInput = (e) => {
    const { value } = e.currentTarget;
    setQuery(value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("enter your request!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };
  const { searchForm, searchInput, searchButton } = s;

  return (
    <>
      <form className={searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={searchInput}
          name="query"
          onChange={handleChangeInput}
          value={query}
        />
        <button type="submit" className={searchButton}>
          Search
        </button>
      </form>
    </>
  );
}

export default SearchForm;
