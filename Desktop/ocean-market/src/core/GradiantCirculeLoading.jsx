import { CircularProgress } from "@mui/material";
const GradiantCirculeLoading = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
      }}>
      <div
        style={{
          position: "relative",
          left: "50%",
          top: "50%",
          width: 0,
          zIndex: 2,
        }}>
        <CircularProgress
          value={50}
          sx={{
            "& .MuiCircularProgress-circle": {
              stroke: "url(#gradient)",
            },
          }}
        />
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <defs>
            <linearGradient
              id="gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
              gradientTransform="rotate(90)">
              <stop offset="100%" stopColor="#DC136E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
export default GradiantCirculeLoading;
