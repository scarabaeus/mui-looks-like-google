import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';

export function Showcase() {
  return (
    <Box sx={{ p: 4, maxWidth: 480 }}>
      <Typography variant="h5" gutterBottom>
        Create an Account
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
        <TextField
          label="First Name"
          variant="standard"
          fullWidth
          defaultValue="Steve"
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          defaultValue="Gomez"
        />
        <TextField
          label="Email"
          variant="filled"
          fullWidth
          defaultValue="steve@example.com"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="I agree to the terms and conditions"
        />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" color="primary">
            <span>Sign Up</span>
          </Button>
          <Button variant="outlined">Cancel</Button>
        </Box>
      </Box>
    </Box>
  );
}
