import { createStyles, InputBase, makeStyles } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
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
    const inputElement = useRef<HTMLInputElement>(null);
    const [inputText, setInputText] = useState<string>('');
    const classes = useStyles();
    const { dynamicTextHandler } = props;
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const [enableSendBtn, setEnableSendBtn] = useState(false);

    // define input value submision handler
    const onSubmit = (data: any) => {
        dynamicTextHandler(data.firstName)
        setEnableSendBtn(data.firstName)
        setInputText('')
        reset();
    }
    // define input change handler
    const msgInputHandler = (data: any) => {
        if (data.target.value.length) {
            setInputText(data.target.value);
            setEnableSendBtn(true)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} onChange={msgInputHandler} className={classes.root}>

            <InputBase
                {...register('firstName')}
                type="textarea"
                className="message-editor"
                placeholder="Type a message..."
                value={inputText}
                inputRef={inputElement}
                onChange={() => msgInputHandler}
                multiline
                rowsMax="2"
            />

            <IconButton
                type="submit"
                className="send-btn"
                disabled={!enableSendBtn}

            >
                <SendIcon />
            </IconButton>
        </form>
    );
}
export default ChatBoardText;