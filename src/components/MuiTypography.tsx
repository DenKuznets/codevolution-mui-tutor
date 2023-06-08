import { Typography } from "@mui/material";

const MuiTypography = () => {
    return (
        <div>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>

            <Typography variant="subtitle1">subtitle1</Typography>
            <Typography variant="subtitle2">subtitle2</Typography>

            <Typography variant="body1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, sequi? Provident, consectetur odio doloremque eveniet corporis quae dolorem autem, molestias laudantium qui eligendi et magnam perspiciatis magni assumenda aut ad.</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim reprehenderit aliquid fuga sunt error, ducimus sequi exercitationem eius debitis tempore recusandae cum alias. Consequuntur vel suscipit ea, optio ipsa deserunt.</Typography>
        </div>
    );
};

export default MuiTypography;
