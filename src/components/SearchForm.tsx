import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

//Importing styles
import HomeStyle from "../pages/Home/Home.style";
//redux

import { clearAlbumsData, fetchAlbums } from "../store/albums/actions";
import { connect, useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment } from "@material-ui/core";

const useStyles = makeStyles(HomeStyle as any);
export const SearchForm: React.FC<{
  fetchAlbums: Function;
  onSubmit: Function;
}> = ({ fetchAlbums, onSubmit }) => {
  const [searchText, setSearchText] = useState<string>("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSearch = async (e: any) => {
    try {
      e.preventDefault();
      dispatch(clearAlbumsData());
      fetchAlbums(searchText, 10, 0);
      onSubmit(searchText);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="search" data-testid="searchForm">
      <form action="" onSubmit={handleSearch}>
        <div className="TextField-border-radius">
          <TextField
            data-testid="searchField"
            id="outlined-basic"
            label="Search Music 🎶"
            variant="outlined"
            value={searchText}
            className={classes.search}
            onChange={(e) => setSearchText(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <button className={classes.searchbtn} data-testid="searchBtn">
                    <SearchIcon />
                  </button>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = () => ({});
const mapDispatchToProps = {
  fetchAlbums,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
