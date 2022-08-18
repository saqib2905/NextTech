import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import InfiniteScroll from "react-infinite-scroller";

//Importing components
import NoResult from "../../components/NoResult";
import SearchForm from "../../components/SearchForm";
import AlbumCard from "../../components/AlbumCard";

//redux
import { connect } from "react-redux";
import { fetchAlbums } from "../../store/albums/actions";

export const Home: React.FC<{
  albums: any[];
  loading: boolean;
  offset: number;
  fetchAlbums: Function;
  hasMore: boolean;
}> = ({ albums, loading, fetchAlbums, hasMore, offset }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedSong, setSelectedSong] = useState("");

  return (
    <React.Fragment>
      <SearchForm onSubmit={(value: string) => setSearchTerm(value)} />
      {loading && <CircularProgress />}
      {albums ? (
        <div style={{ height: "calc(100vh - 100px)", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={() => {
              if (hasMore) {
                fetchAlbums(searchTerm, 10, offset + 10);
              }
            }}
            hasMore={albums.length === 0 ? false : hasMore}
            loader={
              <div style={{ textAlign: "center", padding: 10 }}>
                <CircularProgress />
              </div>
            }
            useWindow={false}
          >
            <div className="list">
              {albums.length === 0 && <NoResult />}
              {albums.map((item, i) => (
                <AlbumCard
                  key={i}
                  item={item}
                  selectedSong={selectedSong}
                  setSelectedSong={setSelectedSong}
                />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      ) : (
        <>
          {!loading && (
            <div>
              <h1>Start Searching For Music </h1>
              <img src="/music.png" width="300" height="300" alt="" />
            </div>
          )}
        </>
      )}
    </React.Fragment>
  );
};
const mapStateToProps = (state: any) => ({
  loading: state.albums.loading,
  albums: state.albums.albums,
  offset: state.albums.offset,
  hasMore: state.albums.hasMore,
});
const mapDispatchToProps = {
  fetchAlbums,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
