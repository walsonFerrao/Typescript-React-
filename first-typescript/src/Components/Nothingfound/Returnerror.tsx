import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export const Returnerror = () => {
  return (
    <>
      <Stack sx={{ width: "80%", margin: "auto" }}>
        <Alert
          variant="filled"
          severity="info"
          style={{
            marginTop: "20px",
            height: "100px",
            fontSize: "20px",
            paddingTop: "25px",
          }}
        >
          There is No result by this Auther Please change the input
        </Alert>
      </Stack>
    </>
  );
};
