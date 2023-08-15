import { Box, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GradiantCirculeLoading from "../../../../../core/GradiantCirculeLoading";
import { notificationApi } from "../api/notificationApi";
import NotificationEmpty from "./NotificationEmpty";
import notificationLogo from "../../../../../assets/images/notification.svg";
import { convertTime } from "../constants/convertTime";
// try to customize the notification only show 10 notification if you can make it infinite scroll and take all the notifications
function NotificationList() {
  const [notification, setNotification] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const newNotifications = await notificationApi(page);
        setNotification(newNotifications.data);
        setPage(2);
        setHasMore(newNotifications.data.length > 0);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      fetchData();
    }
  }, []);

  const fetchMoreData = async () => {
    console.log(
      "fetchMoreData: page=",
      page,
      "notification.length=",
      notification.length
    );
    try {
      const newNotifications = await notificationApi(page);
      setNotification((prevNotifications) => [
        ...prevNotifications,
        ...newNotifications.data,
      ]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(newNotifications.data.length > 0);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      {loading && <GradiantCirculeLoading />}
      {notification.length === 0 && !loading && !error ? (
        <NotificationEmpty />
      ) : (
        <InfiniteScroll
          dataLength={notification.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage="">
          {notification.map((item) => (
            <Box key={item._id}>
              <Box sx={{ display: "flex", gap: "15px", mt: 2, px: 4 }}>
                <Box>
                  <img src={notificationLogo} width="20px" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "blue" }}>
                      {convertTime(item.createdAt)}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "12px", mb: 1 }}>
                    {item.body}
                  </Typography>
                </Box>
              </Box>
              <Divider />
            </Box>
          ))}
          {error && <Box>{error}</Box>}
        </InfiniteScroll>
      )}
    </>
  );
}
export default NotificationList;
