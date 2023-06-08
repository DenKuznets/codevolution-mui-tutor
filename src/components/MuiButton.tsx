import { Stack, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing="24px" direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>

            <Stack direction={"row"} spacing={2}>
                <Button variant="text" color="primary">
                    Primary
                </Button>
                <Button variant="outlined" color="secondary">
                    secondary
                </Button>
                <Button variant="contained" color="error">
                    error
                </Button>
                <Button variant="contained" color="warning">
                    warning
                </Button>
                <Button variant="contained" color="info">
                    info
                </Button>
                <Button variant="contained" color="success">
                    success
                </Button>
            </Stack>

            <Stack display={"block"} spacing={2} direction={"row"}>
                <Button variant="contained" size="small">
                    small
                </Button>
                <Button variant="contained" size="medium">
                    medium
                </Button>
                <Button variant="contained" size="large">
                    large
                </Button>
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <Button disableRipple variant="contained" startIcon={<SendIcon />}>
                    Send
                </Button>
                <Button disableElevation variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
                <IconButton aria-label="send" color="success" size="small">
                    <SendIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default MuiButton;
