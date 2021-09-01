import { FC, ReactElement, useState } from "react";
import { Helmet } from "react-helmet";
import { Paper } from '@material-ui/core';
// import media from assets 
import naturelWallpaper from '../assets/nature-wallpaper.jpg';
import { CardMedia, createStyles, makeStyles } from '@material-ui/core';

// constants
import { APP_TITLE } from "../utils/constants";
import ChatBoardText from "./SubPages/ChatBoardText";
// import custom css
import './index.css';

// define css-in-js
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flex: 1,
      display: "inline-block",
      flexDirection: "row",
      justifyContent: "space-between",
      width: '100%',
      position: 'relative',
    },
    messageEditor: {
      width: '99%',
    },
    bubbleContainer: {
      width: '100%',
    },
    media: {
      height: 140,
      minWidth: 250,
      objectFit: 'cover',
    },
    formEditor: {
      height: 'auto',
      alignItems: 'center',
      border: 'none!important',
      flexGrow: 30,
      display: 'flow-root',
      marginTop: '20px',
      position: 'fixed',
      bottom: '10px',
      left: '92px',
      width: '92%',
    },
    msgEeditorContainer: {
      display: 'flex',
      maxHeight: '200px',
      height: '40px',
      alignItems: 'center',
      borderRadius: '25px!important',
      paddingLeft: '10px!important',
      backgroundColor: '#f8f8f8!important',
    },
  })
);

const ChatBoard: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  // define dummy messages bubble 
  const dummyData: any[] = ["Hi", "Hello guest", "How are you ?", "I am good you?", "I am well thanks"]

  const [sendMsg, SetSendMsg] = useState<any[]>(dummyData)

  // Get text from text editor
  const dynamicText = (item: any) => {
    SetSendMsg((sendMsg: any) => [...sendMsg, item]);
  }

  return (
    <>
      <Helmet>
        <title>
          { } | {APP_TITLE}
        </title>
      </Helmet>
      <div className={classes.root}>
        <>
          <div className={classes.root}>
            <>
              <div className={classes.bubbleContainer}>
                <div className="msg-bubble">
                  <div className="msg-item">
                    <CardMedia
                      className={classes.media}
                      image={naturelWallpaper}
                      title="naturel Wallpaper"
                    /></div>
                </div>
                {sendMsg.map((obj, index) => (
                  <div key={'msg' + index++} className="msg-bubble">
                    <div className="msg-item">{obj}</div>
                  </div>
                ))}
              </div>
            </>
          </div>
          <Paper variant="outlined" className={classes.formEditor}>
            <Paper elevation={0} className={classes.msgEeditorContainer}>
              <ChatBoardText dynamicTextHandler={dynamicText} />
            </Paper>
          </Paper>
        </>
      </div>
    </>
  );
};

export default ChatBoard;