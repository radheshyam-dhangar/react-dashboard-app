import { createStyles, makeStyles } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
// define css-in-js
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flex: 1,
            display: "inline-flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        messageEditor: {
            width: '94%',
            backgroundColor: 'transparent',
            border: 'none',
            padding: '0',
            outline: 'none',
        },

    })
);
interface Props {
    dynamicTextHandler: (msgItem: any) => void,
}
const ChatBoardText = (props: Props) => {
    const classes = useStyles();
    const { dynamicTextHandler } = props;
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const [enableSendBtn, setEnableSendBtn] = useState('')
    const onSubmit = (data: any) => {
        dynamicTextHandler(data.firstName)
        setEnableSendBtn(data.firstName)
        reset();
    }
    const msgInputHandler = (data: any) => {
        setEnableSendBtn(data.target.value)
    }
    // const handleKeyDown = (event: any) => {
    //     if (event.key === 'Enter' && !event.shiftKey) {
    //         onSubmit(event.target.value);
    //     }
    // };
    return (
        <form onSubmit={handleSubmit(onSubmit)} onChange={msgInputHandler} className={classes.root}>
            <input {...register('firstName')}
                placeholder="Type a message..."
                autoComplete="off"
                className={classes.messageEditor}
                onChange={() => msgInputHandler}
            />
            <IconButton
                type="submit"
                className="send-btn"
                disabled={enableSendBtn.length < 0}
            >
                <SendIcon />
            </IconButton>
        </form>
    );
}
export default ChatBoardText;