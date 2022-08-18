import React, { useEffect, useRef } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//Importing styles

import IconButton from "@material-ui/core/IconButton";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import { songStyles } from "./AlbumCard.style";
import { Container } from "@material-ui/core";

export interface Album {
	artistViewUrl: string;
	artworkUrl100: string;
	artistName: string;
	primaryGenreName: string;
	trackName?: string;
  trackId: number;
  previewUrl: string
}
const AlbumCard: React.FC<{
  item: Album;
  selectedSong: string; 
  setSelectedSong: (a:string) => void;
}> = ({ item, selectedSong, setSelectedSong}) => {
  const classes = songStyles();
  // const theme = useTheme();
  const audioRef = useRef<HTMLAudioElement>(null);
  const isCurrentSong = (Number(selectedSong) === item.trackId);
  const playMusicHandler = () => {
    if (isCurrentSong) {
      setSelectedSong("");
      return;
    }
    setSelectedSong(item.trackId.toString());
  };

  useEffect(() => {
    if (isCurrentSong) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isCurrentSong]);

  return (
    <Card
      className={`${classes.root} ${
        isCurrentSong && classes.selected
      }`}
      data-testid="AlbumCard"
    >
      <CardMedia
        className={classes.cover}
        image={item.artworkUrl100}
        title="Live from space album cover"
      />

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {item.trackName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {item.artistName}
          </Typography>
        </CardContent>
        <div className={classes.controls}></div>
      </div>
      <Container>
        <IconButton onClick={playMusicHandler} aria-label="play/pause">
          {isCurrentSong ? (
            <Pause className={classes.playIcon} />
          ) : (
            <PlayArrowIcon className={classes.playIcon} />
          )}
        </IconButton>
        <audio ref={audioRef}>
          <source src={item.previewUrl} />
        </audio>
      </Container>
    </Card>
  );
};
export default AlbumCard;
