import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface BackButtonProps{
    goBack:()=>void;
}
export default function BackButton(props:BackButtonProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="delete" size="large" onClick={props.goBack}>
        <ArrowBackIcon/>
      </IconButton>
    </Stack>
  );
}