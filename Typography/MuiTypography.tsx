import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1">
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">SubTitle1</Typography>
      <Typography variant="subtitle2">SubTitle2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nemo
        aut! Rem modi earum nostrum inventore quasi laudantium vero incidunt eum
        cumque, porro provident ad eligendi, mollitia, reiciendis est tenetur!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
        praesentium suscipit voluptatibus modi voluptatem ullam eos harum iste.
        Corrupti natus odit provident reiciendis alias assumenda aliquid sit
        omnis nisi autem!
      </Typography>
    </div>
  );
};
